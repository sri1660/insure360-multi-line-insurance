// ============================================================
// INSURE360 – APP ROUTER & STATE MANAGER
// Hash-based client-side router with auth guard
// ============================================================

// --- AUTH STATE ---
let isLoggedIn = false;

// --- HELPER: Toggle password visibility ---
function togglePassword() {
  const input = document.getElementById('login-password');
  const icon = document.getElementById('eye-icon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.setAttribute('data-lucide', 'eye-off');
  } else {
    input.type = 'password';
    icon.setAttribute('data-lucide', 'eye');
  }
  lucide.createIcons();
}

// --- AUTH: Handle Login ---
function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorEl = document.getElementById('login-error');

  // Validate
  if (!email || !password) {
    errorEl.textContent = 'Please enter email and password.';
    errorEl.classList.remove('hidden');
    return;
  }

  // Demo credentials check
  if (email === 'admin@insure360.com' && password === 'admin123') {
    errorEl.classList.add('hidden');
    const btn = document.getElementById('login-btn');
    btn.disabled = true;
    document.getElementById('login-btn-text').textContent = 'Signing in...';
    setTimeout(() => {
      isLoggedIn = true;
      document.getElementById('login-page').classList.add('hidden');
      document.getElementById('app-shell').classList.remove('hidden');
      navigate('dashboard');
      lucide.createIcons();
    }, 800);
  } else {
    errorEl.textContent = 'Invalid email or password. Use admin@insure360.com / admin123';
    errorEl.classList.remove('hidden');
  }
}

// --- AUTH: Demo Login (auto-fill & submit) ---
function demoLogin() {
  document.getElementById('login-email').value = 'admin@insure360.com';
  document.getElementById('login-password').value = 'admin123';
  handleLogin();
}

// --- AUTH: Logout ---
function handleLogout() {
  isLoggedIn = false;
  document.getElementById('app-shell').classList.add('hidden');
  document.getElementById('login-page').classList.remove('hidden');
  document.getElementById('login-btn').disabled = false;
  document.getElementById('login-btn-text').textContent = 'Sign In';
  lucide.createIcons();
}

// --- NAVIGATION ---
const PAGE_NAMES = {
  dashboard: 'Dashboard', customers: 'Customers', policies: 'Policies',
  quotes: 'Quotations', claims: 'Claims', reports: 'Reports & Analytics', settings: 'Settings'
};

let currentPage = '';
let currentClaimId = null; // for claim detail view

function navigate(page, params = {}) {
  if (!isLoggedIn) return;

  // Mark active nav item
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const activeNav = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (activeNav) activeNav.classList.add('active');

  // Update breadcrumb
  document.getElementById('breadcrumb-current').textContent = PAGE_NAMES[page] || page;

  // Update pending badge
  const pending = CLAIMS.filter(c => ['Submitted', 'Under Review', 'Escalated'].includes(c.status)).length;
  const badge = document.getElementById('pending-badge');
  badge.textContent = pending;
  badge.style.display = pending > 0 ? 'flex' : 'none';

  currentPage = page;
  const content = document.getElementById('app-content');

  // Route to module
  if (page === 'dashboard') content.innerHTML = renderDashboard();
  else if (page === 'customers') {
    if (params.customerId) content.innerHTML = renderCustomer360(params.customerId);
    else content.innerHTML = renderCustomers();
  }
  else if (page === 'policies') content.innerHTML = renderPolicies(params);
  else if (page === 'quotes') content.innerHTML = renderQuotes();
  else if (page === 'claims') {
    if (params.claimId) {
      currentClaimId = params.claimId;
      content.innerHTML = renderClaimDetail(params.claimId);
    } else {
      content.innerHTML = renderClaims();
    }
  }
  else if (page === 'reports') content.innerHTML = renderReports();
  else if (page === 'settings') content.innerHTML = renderSettings();

  // Re-init charts and icons after rendering
  lucide.createIcons();
  setTimeout(() => {
    if (page === 'dashboard') initDashboardCharts();
    else if (page === 'reports') initReportCharts();
    lucide.createIcons();
  }, 50);
}

// --- SIDEBAR TOGGLE ---
let sidebarCollapsed = false;
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const icon = document.getElementById('sidebar-toggle-icon');
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebarCollapsed = !sidebarCollapsed;
    sidebar.classList.toggle('collapsed', sidebarCollapsed);
    icon.setAttribute('data-lucide', sidebarCollapsed ? 'panel-left-open' : 'panel-left-close');
    lucide.createIcons();
  }
}

// --- GLOBAL SEARCH ---
function globalSearch(query) {
  if (!query.trim()) return;
  const q = query.toLowerCase();
  const results = [];
  CUSTOMERS.forEach(c => { if (c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)) results.push({ type: 'Customer', label: c.name, id: c.id }); });
  POLICIES.forEach(p => { if (p.policyNumber.toLowerCase().includes(q) || p.customerName.toLowerCase().includes(q)) results.push({ type: 'Policy', label: p.policyNumber, id: p.id }); });
  CLAIMS.forEach(c => { if (c.claimNumber.toLowerCase().includes(q) || c.customerName.toLowerCase().includes(q)) results.push({ type: 'Claim', label: c.claimNumber, id: c.id }); });
  // For simplicity, navigate to first result
  if (results.length > 0) {
    const r = results[0];
    if (r.type === 'Customer') navigate('customers', { customerId: r.id });
    else if (r.type === 'Policy') navigate('policies', { highlight: r.id });
    else if (r.type === 'Claim') navigate('claims', { claimId: r.id });
    document.getElementById('global-search').value = '';
  }
}

// --- NOTIFICATIONS ---
function showNotifications() {
  showModal('Notifications', `
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div class="timeline-item">
        <div class="timeline-dot" style="background:#fef6e6;color:#a96104;"><i data-lucide="alert-triangle" style="width:14px;height:14px;"></i></div>
        <div class="timeline-content"><div class="timeline-title">Claim CLM-003 escalated</div><div class="timeline-sub">Fire damage claim from Meenakshi Textile – awaiting manager review</div></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:#e8f4fd;color:#0176d3;"><i data-lucide="file-plus" style="width:14px;height:14px;"></i></div>
        <div class="timeline-content"><div class="timeline-title">New claim submitted: CLM-012</div><div class="timeline-sub">Rajesh Sundaram – Hospitalization claim ₹68,000</div></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:#eaf5ea;color:#2e844a;"><i data-lucide="check-circle" style="width:14px;height:14px;"></i></div>
        <div class="timeline-content"><div class="timeline-title">Policy POL-V005 issued</div><div class="timeline-sub">Suresh Babu – Hyundai i20 Vehicle Insurance</div></div>
      </div>
    </div>
  `, [], 'modal-sm');
  lucide.createIcons();
}

// --- MODAL SYSTEM ---
function showModal(title, bodyHTML, footerBtns = [], extraClass = '') {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  const footer = document.getElementById('modal-footer');
  const box = document.getElementById('modal-box');
  box.className = 'modal-box ' + extraClass;
  if (footerBtns.length) {
    footer.innerHTML = footerBtns.map(b =>
      `<button class="btn ${b.cls || 'btn-outline'}" onclick="${b.action}">${b.label}</button>`
    ).join('');
    footer.style.display = 'flex';
  } else {
    footer.innerHTML = '';
    footer.style.display = 'none';
  }
  document.getElementById('global-modal').classList.remove('hidden');
  lucide.createIcons();
}

function closeModal(event, force = false) {
  if (force || event?.target === document.getElementById('global-modal')) {
    document.getElementById('global-modal').classList.add('hidden');
  }
}

// --- TOAST SYSTEM ---
function showToast(message, type = 'success', duration = 3500) {
  const icons = {
    success: 'check-circle',
    error: 'x-circle',
    warning: 'alert-triangle',
    info: 'info'
  };
  const id = 'toast-' + Date.now();
  const html = `
    <div class="toast ${type}" id="${id}">
      <span class="toast-icon"><i data-lucide="${icons[type] || 'info'}" style="width:18px;height:18px;"></i></span>
      <span>${message}</span>
    </div>`;
  document.getElementById('toast-container').insertAdjacentHTML('beforeend', html);
  lucide.createIcons();
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.style.animation = 'none', el.style.opacity = '0', el.style.transition = 'opacity 0.3s', setTimeout(() => el.remove(), 300);
  }, duration);
}

// --- SETTINGS PAGE ---
function renderSettings() {
  return `
    <div class="page-header">
      <div><div class="page-title">Settings</div><div class="page-subtitle">System configuration and preferences</div></div>
    </div>
    <div class="settings-section">
      <div class="settings-card">
        <div class="settings-card-header">Account Settings</div>
        <div class="settings-item">
          <div><div class="settings-item-label">Administrator</div><div class="settings-item-desc">admin@insure360.com</div></div>
          <button class="btn btn-outline btn-sm">Edit Profile</button>
        </div>
        <div class="settings-item">
          <div><div class="settings-item-label">Password</div><div class="settings-item-desc">Last changed: Oct 2026</div></div>
          <button class="btn btn-outline btn-sm">Change Password</button>
        </div>
      </div>
      <div class="settings-card">
        <div class="settings-card-header">Notification Preferences</div>
        <div class="settings-item">
          <div><div class="settings-item-label">Email on New Claim</div><div class="settings-item-desc">Receive email when a new claim is submitted</div></div>
          <label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label>
        </div>
        <div class="settings-item">
          <div><div class="settings-item-label">Email on Escalation</div><div class="settings-item-desc">Get notified when a claim is escalated</div></div>
          <label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label>
        </div>
        <div class="settings-item">
          <div><div class="settings-item-label">Monthly Report</div><div class="settings-item-desc">Auto-send monthly summary report</div></div>
          <label class="toggle"><input type="checkbox"><span class="toggle-slider"></span></label>
        </div>
      </div>
      <div class="settings-card">
        <div class="settings-card-header">System Information</div>
        <div class="settings-item"><div class="settings-item-label">Version</div><span class="badge badge-info">Insure360 v1.0.0</span></div>
        <div class="settings-item"><div class="settings-item-label">Insurance Lines</div><span>Vehicle, Property, Life</span></div>
        <div class="settings-item"><div class="settings-item-label">Project Type</div><span>Naan Mudhalvan Academic Project</span></div>
        <div class="settings-item"><div class="settings-item-label">Database</div><span>In-memory demo data</span></div>
      </div>
    </div>`;
}

// --- INIT ---
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  // Check hash for deep-link
  const hash = window.location.hash.replace('#', '');
  if (!hash) window.location.hash = '#dashboard';
});
window.addEventListener('hashchange', () => {
  if (!isLoggedIn) return;
  const hash = window.location.hash.replace('#', '');
  if (hash && hash !== currentPage) navigate(hash);
});
