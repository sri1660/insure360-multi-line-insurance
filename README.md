# Insure360 – Multi-Line Insurance Policy & Claims Management System

## Project Overview

**Insure360** is a professional, full-stack insurance management platform built as part of the **Naan Mudhalvan** academic project programme, inspired by Salesforce's industry-standard insurance solutions. The system provides end-to-end management of three insurance lines: **Vehicle**, **Property**, and **Life** insurance.

---

## Problem Statement

Traditional insurance companies rely on fragmented, siloed systems to manage policies, claims, and customer records across different insurance lines. This results in:

- Poor customer experience due to lack of a unified view
- Manual and error-prone claim routing processes
- Slow claim processing and settlement
- Inability to generate real-time analytics and reports
- Difficulty in managing multi-line insurance products

---

## Objectives

1. Provide a unified platform to manage Vehicle, Property, and Life insurance
2. Automate claim routing based on severity and amount
3. Enable a 360° customer view across all insurance lines
4. Implement a guided multi-step quotation wizard with automated premium calculation
5. Generate real-time analytics and reports on portfolio performance
6. Simulate external verification services for claims validation

---

## Features

### Core Modules
| Module | Description |
|--------|-------------|
| **Login** | Secure login with demo credentials |
| **Executive Dashboard** | KPI cards + Chart.js visualizations |
| **Customer Management** | List, search, filter, Customer 360° view |
| **Policy Management** | Vehicle / Property / Life policies |
| **Quotation Wizard** | 6-step guided quote with premium calc |
| **Claims Management** | File, route, review, approve/reject/escalate |
| **Claim Detail** | Risk indicators, verification, adjuster actions |
| **Reports** | 6 Chart.js analytics charts + settlement report |
| **Settings** | User preferences and system info |

### Business Logic
- **Claim Auto-Routing**: Routes claims to Junior/Senior/Manager/Executive based on severity + amount
- **Premium Calculation**: Realistic risk-factor based engine for Vehicle, Property, and Life
- **Mock Verification**: Simulated VIN check, property verification, and life underwriting
- **Customer 360°**: Unified view showing all policies and claims for a customer

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (custom design system) |
| Application Logic | Vanilla JavaScript ES6+ |
| Charts | Chart.js 4.4 (CDN) |
| Icons | Lucide Icons (CDN) |
| Fonts | Google Fonts – Inter |
| Architecture | Single Page Application (SPA) – hash-based routing |

> ✅ No build step required. No backend or database needed. Open `index.html` directly in any modern browser.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    index.html (SPA Shell)                │
│          Login Page + Sidebar + Topbar + Modal           │
└────────────────────┬────────────────────────────────────┘
                     │
           ┌─────────▼─────────┐
           │     app.js        │
           │  Router + Auth    │
           │  Modal + Toast    │
           └─────────┬─────────┘
                     │
          ┌──────────▼─────────┐
          │      data.js       │
          │  Customers (10)    │
          │  Policies (15)     │
          │  Claims (12)       │
          │  Premium Engine    │
          │  Routing Logic     │
          └──────────┬─────────┘
                     │
     ┌───────────────┼───────────────────────┐
     ▼               ▼               ▼       ▼
dashboard.js  customers.js  policies.js  quotes.js
claims.js  claim-detail.js  verification.js  reports.js
```

---

## Demo Data

Pre-loaded with:
- **10 Customers** (7 Individual, 3 Corporate) – Tamil Nadu & Karnataka
- **15 Policies**: 5 Vehicle + 5 Property + 5 Life
- **12 Claims** with various severities (Low/Medium/High/Critical) and statuses

---

## Modules

### 1. Login
- Email/password authentication (demo credentials shown on page)
- Remember me checkbox
- Demo Login button for auto-fill and sign-in

### 2. Dashboard
- 6 KPI cards: Total Customers, Active Policies, Pending Claims, Approved Claims, Total Claim Amount, Annual Premium
- Doughnut chart: Policies by Insurance Type
- Bar chart: Claims by Severity
- Line chart: Monthly Policy & Claim Trends
- Recent Claims and Recent Policies tables

### 3. Customer Management
- Customer list with search and filter by type (Individual/Corporate)
- **Customer 360° View** with 3 tabs:
  - Customer Information (contact, address, DOB)
  - Policies History
  - Claims History + Timeline

### 4. Policy Management
- Filterable policy list by type and status
- Policy detail modal showing type-specific fields:
  - **Vehicle**: VIN, Make, Model, Year, Registration, Coverage Type
  - **Property**: Address, Type, Sqft, Construction, Year Built, Coverage Type
  - **Life**: Insured Person, DOB, Occupation, Income, Sum Assured, Beneficiary, Term, Risk Category

### 5. Quotation Wizard
- **Step 1**: Select Customer
- **Step 2**: Choose Insurance Type (Vehicle/Property/Life)
- **Step 3**: Enter type-specific fields (with validation)
- **Step 4**: View calculated premium with breakdown
- **Step 5**: Quotation summary
- **Step 6**: Save Quote / Issue Policy / Cancel

#### Premium Calculation Rules
**Vehicle**: `Vehicle Value × Coverage Rate × Age Factor × Risk Factor`
**Property**: `Property Value × Type Rate × Construction Factor × Coverage Factor`
**Life**: `Sum Assured × Age Rate × Term Factor × Health Risk Factor`

### 6. Claims Management
- Claims list with search + filter by severity and status
- KPI dashboard: Pending, High Priority, Escalated, Approved counts
- New Claim form with **live routing decision preview**
- Quick actions: Approve / Reject / Escalate from table

#### Claim Routing Logic
| Condition | Routing |
|-----------|---------|
| Low severity + Amount ≤ ₹1L | Junior Adjuster |
| Medium severity | Senior Adjuster |
| High severity | Senior Adjuster + Manager Review |
| Critical severity OR Amount > ₹5L | Manager + Escalation |
| Amount > ₹10L | Executive Approval |

### 7. Claim Detail / Review
- Customer, Policy, Claim information panels
- Policy claim history timeline
- **Risk Indicators** (4 visual progress bars + overall score)
- **Auto-Routing Decision** display
- **External Verification** card (Vehicle/Property/Life)
- Adjuster action buttons: Approve / Reject / Escalate / Under Review

### 8. Mock Verification Service
| Insurance Type | Verification Type | Data Points |
|---------------|-------------------|-------------|
| Vehicle | VIN Verification | Ownership, Accident History, Risk Classification |
| Property | Address Verification | Title Status, Flood Zone, Age Assessment |
| Life | Underwriting | Medical Records, Financial Underwriting, Income Ratio |

### 9. Reports
- Policies by Insurance Type (Doughnut)
- Claims by Type (Horizontal Bar)
- Claims by Severity (Bar)
- Claim Status Distribution (Pie)
- Monthly Policy Growth - cumulative (Line)
- Customer Distribution by State (Bar)
- Full Claim Settlement Report Table

---

## Installation

No installation required. This is a pure frontend SPA.

### Requirements
- Modern web browser (Chrome 90+, Firefox 88+, Edge 90+)
- Internet connection (for CDN: Chart.js, Lucide Icons, Google Fonts)

---

## Running the Project

1. Navigate to the project folder: `e:\naan\`
2. Open `index.html` in any modern web browser
3. Login with the demo credentials below

```
Double-click: e:\naan\index.html
```

---

## Demo Credentials

| Field | Value |
|-------|-------|
| Email | `admin@insure360.com` |
| Password | `admin123` |
| Role | System Administrator |

---

## Project Structure

```
e:\naan\
├── index.html              # SPA shell (Login + App layout)
├── styles.css              # Global design system
├── data.js                 # Demo data + business logic
├── app.js                  # Router, auth, modal, toast
├── modules\
│   ├── dashboard.js        # Executive dashboard + charts
│   ├── customers.js        # Customer management + 360 view
│   ├── policies.js         # Policy management
│   ├── quotes.js           # Quotation wizard
│   ├── claims.js           # Claims management
│   ├── claim-detail.js     # Claim review page
│   ├── verification.js     # Mock verification service
│   └── reports.js          # Reports + analytics
└── README.md               # This file
```

---

## Future Enhancements

1. **Backend Integration**: Node.js/Express REST API + PostgreSQL database
2. **Salesforce Integration**: Native Salesforce Lightning Web Components (LWC) deployment
3. **Document Management**: PDF generation for policies and claim reports
4. **Multi-User Roles**: Separate portals for Customer, Adjuster, Manager, Executive
5. **Real-Time Notifications**: WebSocket-based alerts for claim status changes
6. **Mobile App**: React Native app for field adjusters
7. **AI/ML**: Fraud detection, premium prediction, claim severity classification
8. **Reinsurance Module**: Manage reinsurance treaties and cession tracking
9. **Payment Gateway**: Premium payment integration (Razorpay/PayTM)
10. **Regulatory Compliance**: IRDAI compliance reporting and audit trail

---

## Academic Context

- **Programme**: Naan Mudhalvan – Emerging Technologies
- **Domain**: Insurance Technology (InsurTech)
- **Inspiration**: Salesforce Financial Services Cloud – Insurance Management
- **Academic Year**: 2026

---

*Insure360 – Built for learning, designed for enterprise.*
