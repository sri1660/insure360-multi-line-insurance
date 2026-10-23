// ============================================================
// INSURE360 – DEMO DATA
// All data is in-memory; changes persist for the browser session.
// ============================================================

// ---------------------------------------------------------------
// CUSTOMERS
// ---------------------------------------------------------------
const CUSTOMERS = [
  {
    id: 'CUST-001', name: 'Aravind Sharma', email: 'aravind.sharma@email.com',
    phone: '9876543210', dob: '1985-03-15', address: '12, Anna Nagar', city: 'Chennai',
    state: 'Tamil Nadu', type: 'Individual', totalPolicies: 2, totalClaims: 1,
    createdDate: '2023-01-10'
  },
  {
    id: 'CUST-002', name: 'Priya Krishnamurthy', email: 'priya.k@email.com',
    phone: '9845678901', dob: '1990-07-22', address: '45, T. Nagar', city: 'Chennai',
    state: 'Tamil Nadu', type: 'Individual', totalPolicies: 1, totalClaims: 2,
    createdDate: '2023-02-14'
  },
  {
    id: 'CUST-003', name: 'Rajesh Sundaram', email: 'rajesh.s@email.com',
    phone: '9712345678', dob: '1978-11-05', address: '78, Coimbatore Road', city: 'Coimbatore',
    state: 'Tamil Nadu', type: 'Individual', totalPolicies: 3, totalClaims: 0,
    createdDate: '2023-03-05'
  },
  {
    id: 'CUST-004', name: 'Meenakshi Textile Pvt Ltd', email: 'admin@meenakshitextile.com',
    phone: '4422334455', dob: '2001-06-01', address: '100, Industrial Estate', city: 'Tirupur',
    state: 'Tamil Nadu', type: 'Corporate', totalPolicies: 2, totalClaims: 1,
    createdDate: '2023-04-12'
  },
  {
    id: 'CUST-005', name: 'Deepa Nair', email: 'deepa.nair@email.com',
    phone: '9988776655', dob: '1992-05-30', address: '23, MG Road', city: 'Bengaluru',
    state: 'Karnataka', type: 'Individual', totalPolicies: 1, totalClaims: 1,
    createdDate: '2023-05-18'
  },
  {
    id: 'CUST-006', name: 'Karthikeyan Pillai', email: 'karthik.p@email.com',
    phone: '9566778899', dob: '1975-12-20', address: '15, Velachery Main Road', city: 'Chennai',
    state: 'Tamil Nadu', type: 'Individual', totalPolicies: 2, totalClaims: 3,
    createdDate: '2023-06-01'
  },
  {
    id: 'CUST-007', name: 'Sundar Constructions Ltd', email: 'contact@sundarconstruct.com',
    phone: '4444555566', dob: '1998-01-15', address: '50, Builder Street', city: 'Madurai',
    state: 'Tamil Nadu', type: 'Corporate', totalPolicies: 2, totalClaims: 2,
    createdDate: '2023-07-09'
  },
  {
    id: 'CUST-008', name: 'Lavanya Venkataraman', email: 'lavanya.v@email.com',
    phone: '9123456789', dob: '1988-09-14', address: '67, Adyar', city: 'Chennai',
    state: 'Tamil Nadu', type: 'Individual', totalPolicies: 1, totalClaims: 0,
    createdDate: '2023-08-22'
  },
  {
    id: 'CUST-009', name: 'Murugan Automatics', email: 'info@muruganauto.com',
    phone: '4411223344', dob: '2005-03-10', address: '22, Auto Nagar', city: 'Trichy',
    state: 'Tamil Nadu', type: 'Corporate', totalPolicies: 1, totalClaims: 1,
    createdDate: '2023-09-11'
  },
  {
    id: 'CUST-010', name: 'Suresh Babu', email: 'suresh.babu@email.com',
    phone: '9654321087', dob: '1983-04-18', address: '33, Nungambakkam', city: 'Chennai',
    state: 'Tamil Nadu', type: 'Individual', totalPolicies: 1, totalClaims: 1,
    createdDate: '2023-10-03'
  }
];

// ---------------------------------------------------------------
// POLICIES
// ---------------------------------------------------------------
const POLICIES = [
  // --- VEHICLE ---
  {
    id: 'POL-V001', policyNumber: 'POL-V001', customerId: 'CUST-001', customerName: 'Aravind Sharma',
    type: 'Vehicle', startDate: '2024-01-01', endDate: '2025-01-01',
    premium: 18500, coverageAmount: 850000, status: 'Active',
    // Vehicle-specific
    vin: '1HGCM82633A004352', make: 'Toyota', model: 'Innova Crysta',
    year: 2021, regNumber: 'TN09AB1234', vehicleValue: 850000, coverageType: 'Comprehensive',
    createdDate: '2023-12-20'
  },
  {
    id: 'POL-V002', policyNumber: 'POL-V002', customerId: 'CUST-002', customerName: 'Priya Krishnamurthy',
    type: 'Vehicle', startDate: '2024-02-15', endDate: '2025-02-15',
    premium: 9200, coverageAmount: 450000, status: 'Active',
    vin: '2T1BURHE0JC062620', make: 'Maruti', model: 'Swift Dzire',
    year: 2019, regNumber: 'TN01CD5678', vehicleValue: 450000, coverageType: 'Third Party',
    createdDate: '2024-02-10'
  },
  {
    id: 'POL-V003', policyNumber: 'POL-V003', customerId: 'CUST-006', customerName: 'Karthikeyan Pillai',
    type: 'Vehicle', startDate: '2023-05-01', endDate: '2024-05-01',
    premium: 32000, coverageAmount: 1500000, status: 'Expired',
    vin: '3VWFE21C04M000001', make: 'Honda', model: 'City',
    year: 2020, regNumber: 'TN22EF9012', vehicleValue: 1500000, coverageType: 'Comprehensive',
    createdDate: '2023-04-20'
  },
  {
    id: 'POL-V004', policyNumber: 'POL-V004', customerId: 'CUST-009', customerName: 'Murugan Automatics',
    type: 'Vehicle', startDate: '2024-03-01', endDate: '2025-03-01',
    premium: 55000, coverageAmount: 2500000, status: 'Active',
    vin: '4S3BMHB68B3286050', make: 'Mahindra', model: 'Bolero Fleet',
    year: 2022, regNumber: 'TN45GH3456', vehicleValue: 2500000, coverageType: 'Comprehensive',
    createdDate: '2024-02-25'
  },
  {
    id: 'POL-V005', policyNumber: 'POL-V005', customerId: 'CUST-010', customerName: 'Suresh Babu',
    type: 'Vehicle', startDate: '2024-06-01', endDate: '2025-06-01',
    premium: 12000, coverageAmount: 600000, status: 'Active',
    vin: '5GAKRDED0CJ396330', make: 'Hyundai', model: 'i20',
    year: 2022, regNumber: 'TN02IJ7890', vehicleValue: 600000, coverageType: 'Comprehensive',
    createdDate: '2024-05-28'
  },
  // --- PROPERTY ---
  {
    id: 'POL-P001', policyNumber: 'POL-P001', customerId: 'CUST-001', customerName: 'Aravind Sharma',
    type: 'Property', startDate: '2024-01-01', endDate: '2027-01-01',
    premium: 24000, coverageAmount: 5000000, status: 'Active',
    propertyAddress: '12, Anna Nagar, Chennai', propertyType: 'Residential', squareFootage: 1800,
    propertyValue: 5000000, constructionType: 'RCC', yearBuilt: 2015, coverageType: 'All Risk',
    createdDate: '2023-12-18'
  },
  {
    id: 'POL-P002', policyNumber: 'POL-P002', customerId: 'CUST-004', customerName: 'Meenakshi Textile Pvt Ltd',
    type: 'Property', startDate: '2024-04-01', endDate: '2025-04-01',
    premium: 85000, coverageAmount: 20000000, status: 'Active',
    propertyAddress: '100, Industrial Estate, Tirupur', propertyType: 'Commercial', squareFootage: 8500,
    propertyValue: 20000000, constructionType: 'Steel Frame', yearBuilt: 2010, coverageType: 'Fire & Allied Perils',
    createdDate: '2024-03-22'
  },
  {
    id: 'POL-P003', policyNumber: 'POL-P003', customerId: 'CUST-007', customerName: 'Sundar Constructions Ltd',
    type: 'Property', startDate: '2024-02-01', endDate: '2025-02-01',
    premium: 120000, coverageAmount: 35000000, status: 'Active',
    propertyAddress: '50, Builder Street, Madurai', propertyType: 'Industrial', squareFootage: 25000,
    propertyValue: 35000000, constructionType: 'RCC', yearBuilt: 2018, coverageType: 'All Risk',
    createdDate: '2024-01-28'
  },
  {
    id: 'POL-P004', policyNumber: 'POL-P004', customerId: 'CUST-005', customerName: 'Deepa Nair',
    type: 'Property', startDate: '2023-07-01', endDate: '2024-07-01',
    premium: 18000, coverageAmount: 3500000, status: 'Expired',
    propertyAddress: '23, MG Road, Bengaluru', propertyType: 'Residential', squareFootage: 1200,
    propertyValue: 3500000, constructionType: 'RCC', yearBuilt: 2012, coverageType: 'Fire & Allied Perils',
    createdDate: '2023-06-25'
  },
  {
    id: 'POL-P005', policyNumber: 'POL-P005', customerId: 'CUST-003', customerName: 'Rajesh Sundaram',
    type: 'Property', startDate: '2024-05-01', endDate: '2025-05-01',
    premium: 30000, coverageAmount: 7500000, status: 'Active',
    propertyAddress: '78, Coimbatore Road, Coimbatore', propertyType: 'Residential', squareFootage: 2400,
    propertyValue: 7500000, constructionType: 'RCC', yearBuilt: 2019, coverageType: 'All Risk',
    createdDate: '2024-04-28'
  },
  // --- LIFE ---
  {
    id: 'POL-L001', policyNumber: 'POL-L001', customerId: 'CUST-003', customerName: 'Rajesh Sundaram',
    type: 'Life', startDate: '2022-01-01', endDate: '2042-01-01',
    premium: 36000, coverageAmount: 5000000, status: 'Active',
    insuredPerson: 'Rajesh Sundaram', insuredDob: '1978-11-05', occupation: 'Business Owner',
    annualIncome: 1200000, sumAssured: 5000000, beneficiary: 'Meena Sundaram',
    policyTerm: 20, healthRisk: 'Low',
    createdDate: '2021-12-15'
  },
  {
    id: 'POL-L002', policyNumber: 'POL-L002', customerId: 'CUST-006', customerName: 'Karthikeyan Pillai',
    type: 'Life', startDate: '2021-06-01', endDate: '2036-06-01',
    premium: 48000, coverageAmount: 10000000, status: 'Active',
    insuredPerson: 'Karthikeyan Pillai', insuredDob: '1975-12-20', occupation: 'Engineer',
    annualIncome: 1800000, sumAssured: 10000000, beneficiary: 'Kamala Pillai',
    policyTerm: 15, healthRisk: 'Medium',
    createdDate: '2021-05-22'
  },
  {
    id: 'POL-L003', policyNumber: 'POL-L003', customerId: 'CUST-008', customerName: 'Lavanya Venkataraman',
    type: 'Life', startDate: '2024-03-01', endDate: '2044-03-01',
    premium: 28000, coverageAmount: 3000000, status: 'Active',
    insuredPerson: 'Lavanya Venkataraman', insuredDob: '1988-09-14', occupation: 'Doctor',
    annualIncome: 2400000, sumAssured: 3000000, beneficiary: 'Ravi Venkataraman',
    policyTerm: 20, healthRisk: 'Low',
    createdDate: '2024-02-20'
  },
  {
    id: 'POL-L004', policyNumber: 'POL-L004', customerId: 'CUST-007', customerName: 'Sundar Constructions Ltd',
    type: 'Life', startDate: '2023-01-01', endDate: '2033-01-01',
    premium: 72000, coverageAmount: 25000000, status: 'Active',
    insuredPerson: 'Sundar Rajan', insuredDob: '1972-04-10', occupation: 'Director',
    annualIncome: 5000000, sumAssured: 25000000, beneficiary: 'Sundar Constructions Trust',
    policyTerm: 10, healthRisk: 'High',
    createdDate: '2022-12-10'
  },
  {
    id: 'POL-L005', policyNumber: 'POL-L005', customerId: 'CUST-003', customerName: 'Rajesh Sundaram',
    type: 'Life', startDate: '2020-01-01', endDate: '2040-01-01',
    premium: 22000, coverageAmount: 2000000, status: 'Active',
    insuredPerson: 'Rajesh Sundaram', insuredDob: '1978-11-05', occupation: 'Business Owner',
    annualIncome: 1200000, sumAssured: 2000000, beneficiary: 'Rajesh Family Trust',
    policyTerm: 20, healthRisk: 'Low',
    createdDate: '2019-12-20'
  }
];

// ---------------------------------------------------------------
// CLAIMS
// ---------------------------------------------------------------
const CLAIMS = [
  {
    id: 'CLM-001', claimNumber: 'CLM-001', policyId: 'POL-V001', policyNumber: 'POL-V001',
    customerId: 'CUST-001', customerName: 'Aravind Sharma', claimType: 'Vehicle Damage',
    claimDate: '2024-06-15', claimAmount: 85000, severity: 'Medium',
    description: 'Rear-end collision with another vehicle at Kathipara Junction. Bumper, tailgate and rear lights damaged.',
    assignedAdjuster: 'Ramesh Kumar (Senior)', status: 'Approved',
    approvalLevel: 'Senior Adjuster', documents: ['FIR Report', 'Photos', 'Repair Estimate'],
    routingReason: 'Medium severity → Senior Adjuster',
    createdDate: '2024-06-15', resolvedDate: '2024-06-28'
  },
  {
    id: 'CLM-002', claimNumber: 'CLM-002', policyId: 'POL-V002', policyNumber: 'POL-V002',
    customerId: 'CUST-002', customerName: 'Priya Krishnamurthy', claimType: 'Theft',
    claimDate: '2024-07-01', claimAmount: 420000, severity: 'High',
    description: 'Vehicle stolen from parking area near Pondy Bazaar. Filed FIR with Teynampet Police Station.',
    assignedAdjuster: 'Ramesh Kumar (Senior)', status: 'Under Review',
    approvalLevel: 'Senior Adjuster + Manager Review', documents: ['FIR Report', 'RTO Certificate'],
    routingReason: 'High severity → Senior Adjuster + Manager Review',
    createdDate: '2024-07-01', resolvedDate: null
  },
  {
    id: 'CLM-003', claimNumber: 'CLM-003', policyId: 'POL-P002', policyNumber: 'POL-P002',
    customerId: 'CUST-004', customerName: 'Meenakshi Textile Pvt Ltd', claimType: 'Fire Damage',
    claimDate: '2024-05-20', claimAmount: 750000, severity: 'Critical',
    description: 'Fire broke out in the dyeing section of the factory. Significant machinery and stock loss.',
    assignedAdjuster: 'Director Level Approval', status: 'Escalated',
    approvalLevel: 'Manager + Escalation', documents: ['Fire Brigade Report', 'Photos', 'Stock List', 'Valuation Report'],
    routingReason: 'Critical severity → Manager + Escalation',
    createdDate: '2024-05-20', resolvedDate: null
  },
  {
    id: 'CLM-004', claimNumber: 'CLM-004', policyId: 'POL-P001', policyNumber: 'POL-P001',
    customerId: 'CUST-001', customerName: 'Aravind Sharma', claimType: 'Water Damage',
    claimDate: '2024-08-10', claimAmount: 42000, severity: 'Low',
    description: 'Water seepage damage to ground floor due to heavy rainfall. Flooring and electrical fittings damaged.',
    assignedAdjuster: 'Priya Lakshmi (Junior)', status: 'Submitted',
    approvalLevel: 'Junior Adjuster', documents: ['Photos', 'Repair Estimate'],
    routingReason: 'Low severity + low amount → Junior Adjuster',
    createdDate: '2024-08-10', resolvedDate: null
  },
  {
    id: 'CLM-005', claimNumber: 'CLM-005', policyId: 'POL-V004', policyNumber: 'POL-V004',
    customerId: 'CUST-009', customerName: 'Murugan Automatics', claimType: 'Accident',
    claimDate: '2024-07-25', claimAmount: 185000, severity: 'High',
    description: 'Fleet vehicle involved in road accident on NH44. Front end heavily damaged.',
    assignedAdjuster: 'Ramesh Kumar (Senior)', status: 'Under Review',
    approvalLevel: 'Senior Adjuster + Manager Review', documents: ['FIR', 'Photos', 'Repair Estimate'],
    routingReason: 'High severity → Senior Adjuster + Manager Review',
    createdDate: '2024-07-25', resolvedDate: null
  },
  {
    id: 'CLM-006', claimNumber: 'CLM-006', policyId: 'POL-L002', policyNumber: 'POL-L002',
    customerId: 'CUST-006', customerName: 'Karthikeyan Pillai', claimType: 'Critical Illness',
    claimDate: '2024-04-15', claimAmount: 500000, severity: 'High',
    description: 'Diagnosed with cardiac condition requiring bypass surgery. Claim for critical illness benefit.',
    assignedAdjuster: 'Ramesh Kumar (Senior)', status: 'Approved',
    approvalLevel: 'Senior Adjuster + Manager Review', documents: ['Medical Report', 'Hospital Bills', 'Doctor Certificate'],
    routingReason: 'High severity → Senior Adjuster + Manager Review',
    createdDate: '2024-04-15', resolvedDate: '2024-05-10'
  },
  {
    id: 'CLM-007', claimNumber: 'CLM-007', policyId: 'POL-P003', policyNumber: 'POL-P003',
    customerId: 'CUST-007', customerName: 'Sundar Constructions Ltd', claimType: 'Structural Damage',
    claimDate: '2024-06-01', claimAmount: 1200000, severity: 'Critical',
    description: 'Cyclone damage to construction site. Scaffolding collapsed and building partially damaged.',
    assignedAdjuster: 'Executive Committee', status: 'Escalated',
    approvalLevel: 'Executive Approval', documents: ['Meteorological Report', 'Structural Survey', 'Contractor Estimate'],
    routingReason: 'Amount > ₹10 Lakhs → Executive Approval',
    createdDate: '2024-06-01', resolvedDate: null
  },
  {
    id: 'CLM-008', claimNumber: 'CLM-008', policyId: 'POL-V005', policyNumber: 'POL-V005',
    customerId: 'CUST-010', customerName: 'Suresh Babu', claimType: 'Natural Disaster',
    claimDate: '2024-09-01', claimAmount: 35000, severity: 'Low',
    description: 'Hailstorm caused dent and paint damage to vehicle roof and hood.',
    assignedAdjuster: 'Priya Lakshmi (Junior)', status: 'Approved',
    approvalLevel: 'Junior Adjuster', documents: ['Photos', 'Service Center Estimate'],
    routingReason: 'Low severity + low amount → Junior Adjuster',
    createdDate: '2024-09-01', resolvedDate: '2024-09-08'
  },
  {
    id: 'CLM-009', claimNumber: 'CLM-009', policyId: 'POL-P004', policyNumber: 'POL-P004',
    customerId: 'CUST-005', customerName: 'Deepa Nair', claimType: 'Burglary',
    claimDate: '2024-03-10', claimAmount: 95000, severity: 'Medium',
    description: 'Burglary at residence. Jewelry and electronic items stolen. FIR filed.',
    assignedAdjuster: 'Ramesh Kumar (Senior)', status: 'Rejected',
    approvalLevel: 'Senior Adjuster', documents: ['FIR Report', 'Item List'],
    routingReason: 'Medium severity → Senior Adjuster',
    createdDate: '2024-03-10', resolvedDate: '2024-03-30'
  },
  {
    id: 'CLM-010', claimNumber: 'CLM-010', policyId: 'POL-L004', policyNumber: 'POL-L004',
    customerId: 'CUST-007', customerName: 'Sundar Constructions Ltd', claimType: 'Accidental Death',
    claimDate: '2024-09-15', claimAmount: 2500000, severity: 'Critical',
    description: 'Insured director passed away in a road accident. Death benefit claim by beneficiary.',
    assignedAdjuster: 'Executive Committee', status: 'Under Review',
    approvalLevel: 'Executive Approval', documents: ['Death Certificate', 'Police Report', 'Post Mortem Report'],
    routingReason: 'Critical severity + Amount > ₹5 Lakhs → Executive Approval',
    createdDate: '2024-09-15', resolvedDate: null
  },
  {
    id: 'CLM-011', claimNumber: 'CLM-011', policyId: 'POL-V003', policyNumber: 'POL-V003',
    customerId: 'CUST-006', customerName: 'Karthikeyan Pillai', claimType: 'Vehicle Damage',
    claimDate: '2024-01-20', claimAmount: 280000, severity: 'High',
    description: 'Major accident on OMR. Airbags deployed, front chassis damage.',
    assignedAdjuster: 'Ramesh Kumar (Senior)', status: 'Settled',
    approvalLevel: 'Senior Adjuster + Manager Review', documents: ['FIR', 'Photos', 'Workshop Report'],
    routingReason: 'High severity → Senior Adjuster + Manager Review',
    createdDate: '2024-01-20', resolvedDate: '2024-02-15'
  },
  {
    id: 'CLM-012', claimNumber: 'CLM-012', policyId: 'POL-L001', policyNumber: 'POL-L001',
    customerId: 'CUST-003', customerName: 'Rajesh Sundaram', claimType: 'Hospitalization',
    claimDate: '2024-08-22', claimAmount: 68000, severity: 'Medium',
    description: 'Hospitalized for 10 days due to dengue fever with complications. ICU stay included.',
    assignedAdjuster: 'Ramesh Kumar (Senior)', status: 'Submitted',
    approvalLevel: 'Senior Adjuster', documents: ['Hospital Discharge Summary', 'Bills'],
    routingReason: 'Medium severity → Senior Adjuster',
    createdDate: '2024-08-22', resolvedDate: null
  }
];

// ---------------------------------------------------------------
// ADJUSTERS
// ---------------------------------------------------------------
const ADJUSTERS = [
  { id: 'ADJ-1', name: 'Priya Lakshmi', level: 'Junior', maxAmount: 100000 },
  { id: 'ADJ-2', name: 'Ramesh Kumar', level: 'Senior', maxAmount: 600000 },
  { id: 'ADJ-3', name: 'Suresh Annamalai', level: 'Manager', maxAmount: 1000000 },
  { id: 'ADJ-4', name: 'Executive Committee', level: 'Executive', maxAmount: Infinity }
];

// ---------------------------------------------------------------
// QUOTES (initially empty, filled by quotation wizard)
// ---------------------------------------------------------------
let QUOTES = [];
let nextQuoteId = 1;

// ---------------------------------------------------------------
// CLAIM ROUTING LOGIC
// Returns routing decision object
// ---------------------------------------------------------------
function routeClaim(severity, amount) {
  if (amount > 1000000) {
    return {
      adjuster: 'Executive Committee',
      level: 'Executive Approval',
      reason: 'Claim amount > ₹10 Lakhs → Executive Approval required',
      badge: 'critical'
    };
  }
  if (severity === 'Critical' || amount > 500000) {
    return {
      adjuster: 'Suresh Annamalai (Manager) + Executive',
      level: 'Manager + Escalation',
      reason: `Critical severity or amount > ₹5 Lakhs → Manager + Escalation`,
      badge: 'high'
    };
  }
  if (severity === 'High') {
    return {
      adjuster: 'Ramesh Kumar (Senior Adjuster)',
      level: 'Senior Adjuster + Manager Review',
      reason: 'High severity → Senior Adjuster assigned with Manager Review',
      badge: 'medium'
    };
  }
  if (severity === 'Medium') {
    return {
      adjuster: 'Ramesh Kumar (Senior Adjuster)',
      level: 'Senior Adjuster',
      reason: 'Medium severity → Senior Adjuster',
      badge: 'medium'
    };
  }
  // Low severity + low amount
  return {
    adjuster: 'Priya Lakshmi (Junior Adjuster)',
    level: 'Junior Adjuster',
    reason: 'Low severity + low claim amount → Junior Adjuster',
    badge: 'low'
  };
}

// ---------------------------------------------------------------
// PREMIUM CALCULATION ENGINE
// ---------------------------------------------------------------
function calculatePremium(type, data) {
  let premium = 0;
  let breakdown = [];

  if (type === 'Vehicle') {
    const currentYear = 2026;
    const age = currentYear - parseInt(data.year || currentYear);
    const baseRate = data.coverageType === 'Comprehensive' ? 0.02 : 0.008;
    const basePremium = (data.vehicleValue || 0) * baseRate;
    const ageFactor = age > 5 ? 1.25 : age > 3 ? 1.1 : 1.0;
    const riskFactor = data.coverageType === 'Comprehensive' ? 1.15 : 1.0;
    premium = Math.round(basePremium * ageFactor * riskFactor);
    breakdown = [
      { label: 'Base Premium (Vehicle Value × Rate)', value: Math.round(basePremium) },
      { label: `Age Factor (${age} years old)`, value: `×${ageFactor}` },
      { label: `Coverage Risk Factor (${data.coverageType})`, value: `×${riskFactor}` },
      { label: 'Estimated Annual Premium', value: premium, highlight: true }
    ];
  } else if (type === 'Property') {
    const typeRate = { 'Residential': 0.004, 'Commercial': 0.006, 'Industrial': 0.008 };
    const constructionFactor = { 'RCC': 1.0, 'Steel Frame': 1.1, 'Brick': 0.95, 'Wood': 1.3 };
    const coverageFactor = { 'All Risk': 1.2, 'Fire & Allied Perils': 1.0, 'Basic': 0.8 };
    const baseRate = typeRate[data.propertyType] || 0.005;
    const basePremium = (data.propertyValue || 0) * baseRate;
    const cFactor = constructionFactor[data.constructionType] || 1.0;
    const covFactor = coverageFactor[data.coverageType] || 1.0;
    premium = Math.round(basePremium * cFactor * covFactor);
    breakdown = [
      { label: `Base Premium (${data.propertyType} rate)`, value: Math.round(basePremium) },
      { label: `Construction Factor (${data.constructionType})`, value: `×${cFactor}` },
      { label: `Coverage Factor (${data.coverageType})`, value: `×${covFactor}` },
      { label: 'Estimated Annual Premium', value: premium, highlight: true }
    ];
  } else if (type === 'Life') {
    const dob = new Date(data.insuredDob);
    const today = new Date('2026-10-23');
    const age = Math.floor((today - dob) / (365.25 * 24 * 3600 * 1000));
    const ageRate = age < 30 ? 0.003 : age < 40 ? 0.005 : age < 50 ? 0.009 : 0.015;
    const riskMultiplier = { 'Low': 1.0, 'Medium': 1.25, 'High': 1.6 };
    const basePremium = (data.sumAssured || 0) * ageRate;
    const termFactor = Math.min(1.5, 1.0 + (data.policyTerm || 10) * 0.02);
    const riskF = riskMultiplier[data.healthRisk] || 1.0;
    premium = Math.round(basePremium * termFactor * riskF);
    breakdown = [
      { label: `Base Premium (Sum Assured × Age Rate, age ${age})`, value: Math.round(basePremium) },
      { label: `Term Factor (${data.policyTerm} years)`, value: `×${termFactor.toFixed(2)}` },
      { label: `Health Risk Factor (${data.healthRisk})`, value: `×${riskF}` },
      { label: 'Estimated Annual Premium', value: premium, highlight: true }
    ];
  }

  return { premium, breakdown };
}

// ---------------------------------------------------------------
// UTILITY HELPERS
// ---------------------------------------------------------------
function formatCurrency(amount) {
  if (!amount && amount !== 0) return '₹0';
  return '₹' + Number(amount).toLocaleString('en-IN');
}

function formatDate(dateStr) {
  if (!dateStr) return '–';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function getStatusClass(status) {
  const map = {
    'Active': 'badge-success', 'Approved': 'badge-success', 'Settled': 'badge-success',
    'Pending': 'badge-warning', 'Under Review': 'badge-warning', 'Submitted': 'badge-warning',
    'Expired': 'badge-secondary', 'Cancelled': 'badge-secondary',
    'Rejected': 'badge-danger', 'Escalated': 'badge-purple',
    'Low': 'badge-success', 'Medium': 'badge-warning',
    'High': 'badge-danger', 'Critical': 'badge-critical'
  };
  return map[status] || 'badge-secondary';
}

function getSeverityClass(severity) {
  const map = { 'Low': 'badge-success', 'Medium': 'badge-warning', 'High': 'badge-danger', 'Critical': 'badge-critical' };
  return map[severity] || 'badge-secondary';
}

function getTypeIcon(type) {
  const map = { 'Vehicle': 'car', 'Property': 'home', 'Life': 'heart' };
  return map[type] || 'file-text';
}

function getTypeColor(type) {
  const map = { 'Vehicle': '#0176d3', 'Property': '#2e844a', 'Life': '#e45c00' };
  return map[type] || '#706e6b';
}
