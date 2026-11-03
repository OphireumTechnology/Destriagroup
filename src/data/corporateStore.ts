/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  EnterpriseUser,
  CorporateEntity,
  BoardResolution,
  FinancialMetric,
  IntercompanyTransaction,
  ComplianceFiling,
  VaultDocument,
  MakerCheckerAction,
  AuditLogEntry,
  CorporateClaim
} from '../types';

export const ENTERPRISE_USERS: EnterpriseUser[] = [
  {
    id: 'usr-001',
    name: 'Alexander Sterling',
    title: 'Chief Executive Officer & Chairman',
    email: 'a.sterling@destriagroup.com',
    role: 'CHIEF_EXECUTIVE_OFFICER',
    avatarInitials: 'AS',
    mfaEnabled: true,
    department: 'Office of the Chairman',
    lastActive: '2 mins ago'
  },
  {
    id: 'usr-002',
    name: 'Eleanor Vance, Esq.',
    title: 'General Counsel & Corporate Secretary',
    email: 'e.vance@destriagroup.com',
    role: 'GENERAL_COUNSEL',
    avatarInitials: 'EV',
    mfaEnabled: true,
    department: 'Legal & Regulatory Affairs',
    lastActive: '14 mins ago'
  },
  {
    id: 'usr-003',
    name: 'Marcus Thorne, CFA',
    title: 'VP of Finance & Treasury Controller',
    email: 'm.thorne@destriagroup.com',
    role: 'VP_FINANCE',
    avatarInitials: 'MT',
    mfaEnabled: true,
    department: 'Corporate Treasury & Allocation',
    lastActive: '32 mins ago'
  },
  {
    id: 'usr-004',
    name: 'Dr. Evelyn Morales, CPA',
    title: 'Senior Enterprise Auditor & Risk Officer',
    email: 'e.morales@destriagroup.com',
    role: 'COMPLIANCE_AUDITOR',
    avatarInitials: 'EM',
    mfaEnabled: true,
    department: 'Institutional Governance & Audit',
    lastActive: '1 hour ago'
  },
  {
    id: 'usr-005',
    name: 'Jonathan Reynolds',
    title: 'Managing Director — Industrial Technologies',
    email: 'j.reynolds@destriagroup.com',
    role: 'SUBSIDIARY_DIRECTOR',
    avatarInitials: 'JR',
    mfaEnabled: true,
    department: 'Destria Industrial Dynamics',
    lastActive: '3 hours ago',
    entityScope: 'ent-002'
  }
];

export const INITIAL_ENTITIES: CorporateEntity[] = [
  {
    id: 'ent-001',
    legalName: 'DESTRIA GROUP INC.',
    tradeName: 'Destria Group',
    entityType: 'Holding Parent',
    jurisdiction: 'Wyoming, United States',
    registrationNumber: 'WY-2024-001482910',
    naicsCode: '551114 — Corporate, Subsidiary, and Regional Managing Offices',
    ownershipPercentage: 100,
    managingDirector: 'Alexander Sterling',
    incorporationDate: 'January 14, 2024',
    status: 'Active / Good Standing',
    annualFilingDue: 'January 31, 2027',
    headquarters: '30 N Gould Street Ste N, Sheridan, WY 82801, USA',
    assetValuation: '$840.5M',
    consolidatedRevenue: '$148.2M',
    employeeCount: 42,
    industry: 'Enterprise Management & Diversified Holdings',
    summary: 'Central corporate entity exercising strategic oversight, institutional capital allocation, governance, and management services across all subsidiary operating units.',
    keyAssets: [
      'Controlling equity interests across 5 operating subsidiaries',
      'Central Treasury & Capital Allocation Facility ($125M liquidity)',
      'Registered Trademarks & Intellectual Property Assets'
    ]
  },
  {
    id: 'ent-002',
    legalName: 'Destria Industrial Dynamics Corp.',
    tradeName: 'Destria Industrial',
    entityType: 'Corporation',
    jurisdiction: 'Delaware, United States',
    registrationNumber: 'DE-SR-7849102',
    naicsCode: '333249 — Other Industrial Machinery Manufacturing',
    ownershipPercentage: 85,
    managingDirector: 'Jonathan Reynolds',
    incorporationDate: 'March 18, 2024',
    status: 'Active / Good Standing',
    annualFilingDue: 'March 1, 2027',
    headquarters: 'Cleveland, OH (Operations) / Sheridan, WY (Managing Office)',
    assetValuation: '$265.0M',
    consolidatedRevenue: '$64.8M',
    employeeCount: 310,
    industry: 'Advanced Precision Manufacturing & Robotics',
    summary: 'Manufacturer of high-tolerance automated robotics, precision metallurgical components, and clean industrial fabrication tooling for aerospace and heavy transit sectors.',
    keyAssets: [
      'Two ISO-9001:2015 certified production plants (OH & IN)',
      '14 proprietary robotic patents in multi-axis automation',
      'Long-term defense & Tier-1 commercial supplier contracts'
    ]
  },
  {
    id: 'ent-003',
    legalName: 'Destria CleanTech & Grid Infrastructure LLC',
    tradeName: 'Destria CleanTech',
    entityType: 'LLC',
    jurisdiction: 'Wyoming, United States',
    registrationNumber: 'WY-LLC-2024-883921',
    naicsCode: '221114 — Solar Electric Power Generation',
    ownershipPercentage: 92,
    managingDirector: 'Sarah Lindqvist',
    incorporationDate: 'June 22, 2024',
    status: 'Active / Good Standing',
    annualFilingDue: 'June 30, 2027',
    headquarters: 'Sheridan, WY / Denver, CO Hub',
    assetValuation: '$310.2M',
    consolidatedRevenue: '$48.5M',
    employeeCount: 95,
    industry: 'Renewable Power Generation & Utility Battery Storage',
    summary: 'Develops, owns, and operates utility-scale solar arrays and lithium iron phosphate (LFP) grid stabilization battery storage hubs across North America.',
    keyAssets: [
      '420 MW operating generation and storage capacity under power purchase agreements',
      'Interconnection rights across MISO and ERCOT territories',
      'Proprietary grid frequency optimization firmware'
    ]
  },
  {
    id: 'ent-004',
    legalName: 'Destria Global Mobility & Logistics Inc.',
    tradeName: 'Destria Logistics',
    entityType: 'Corporation',
    jurisdiction: 'Wyoming, United States',
    registrationNumber: 'WY-2024-00912765',
    naicsCode: '488510 — Freight Transportation Arrangement',
    ownershipPercentage: 100,
    managingDirector: 'Mateo De la Rosa',
    incorporationDate: 'September 05, 2024',
    status: 'Active / Good Standing',
    annualFilingDue: 'September 30, 2027',
    headquarters: '30 N Gould Street Ste N, Sheridan, WY 82801, USA',
    assetValuation: '$142.0M',
    consolidatedRevenue: '$28.3M',
    employeeCount: 140,
    industry: 'Intermodal Freight & Intelligent Supply Chain',
    summary: 'Integrated intermodal freight consolidation, customs brokerage, and refrigerated cold-chain distribution networks connecting North American rail corridors to international ports.',
    keyAssets: [
      '550,000 sq ft bonded distribution centers in Houston & Chicago',
      'Fleet of 85 telematics-monitored refrigerated transport units',
      'Automated customs clearance pipeline with US CBP integration'
    ]
  },
  {
    id: 'ent-005',
    legalName: 'Destria Strategic Capital Partners LP',
    tradeName: 'Destria Capital',
    entityType: 'Limited Partnership',
    jurisdiction: 'Delaware, United States',
    registrationNumber: 'DE-LP-9018442',
    naicsCode: '523910 — Miscellaneous Intermediation & Private Credit',
    ownershipPercentage: 80,
    managingDirector: 'Victoria Thorne-Bauer',
    incorporationDate: 'November 12, 2024',
    status: 'Active / Good Standing',
    annualFilingDue: 'June 1, 2027',
    headquarters: 'Sheridan, WY / New York Regional Office',
    assetValuation: '$123.3M',
    consolidatedRevenue: '$16.6M',
    employeeCount: 22,
    industry: 'Private Credit, Asset-Backed Facilities & Growth Capital',
    summary: 'Specialized mezzanine debt, asset-backed equipment credit, and structured growth financing provided to mid-market industrial firms.',
    keyAssets: [
      '$95M senior secured loan portfolio with average 1.6x collateral coverage',
      'Institutional syndication network with major regional banks',
      'Zero default rate across all historical underwriting facilities'
    ]
  }
];

export const INITIAL_RESOLUTIONS: BoardResolution[] = [
  {
    id: 'res-2026-08',
    resolutionNumber: 'RES-WY-2026-08',
    title: 'Ratification of FY2026 Consolidated Capital Budget & Intercompany Liquidity Facility',
    category: 'Capital Allocation',
    dateProposed: 'October 15, 2026',
    effectiveDate: 'November 01, 2026',
    sponsor: 'Marcus Thorne, CFA (VP of Finance)',
    status: 'Adopted',
    quorumRequired: '80% Majority of Board Members',
    votesInFavor: 5,
    votesAgainst: 0,
    votesAbstain: 0,
    text: 'BE IT RESOLVED, that the Board of Directors of DESTRIA GROUP INC. hereby authorizes an increase in the centralized intercompany liquidity pool from $90,000,000 to $125,000,000, maintaining strict maker-checker approval thresholds for all individual intercompany drawdowns exceeding $500,000.',
    signatories: [
      { name: 'Alexander Sterling', title: 'Chairman & CEO', signedAt: '2026-10-18T14:30:00Z', signatureHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' },
      { name: 'Eleanor Vance, Esq.', title: 'Corporate Secretary', signedAt: '2026-10-18T15:10:00Z', signatureHash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069' }
    ]
  },
  {
    id: 'res-2026-09',
    resolutionNumber: 'RES-WY-2026-09',
    title: 'Adoption of Enhanced Anti-Money Laundering (AML) & Beneficial Ownership Reporting Protocols',
    category: 'Statutory Filing',
    dateProposed: 'October 28, 2026',
    effectiveDate: 'November 15, 2026',
    sponsor: 'Eleanor Vance, Esq. (General Counsel)',
    status: 'Pending Dual Approval',
    quorumRequired: 'Unanimous Consent',
    votesInFavor: 4,
    votesAgainst: 0,
    votesAbstain: 1,
    text: 'BE IT RESOLVED, that DESTRIA GROUP INC. and all controlled operating subsidiaries enforce mandatory digital verification and tamper-evident cryptographic logging for all FinCEN beneficial ownership updates and Wyoming Secretary of State corporate maintenance records.',
    signatories: [
      { name: 'Eleanor Vance, Esq.', title: 'Corporate Secretary', signedAt: '2026-10-29T10:00:00Z', signatureHash: '9a23c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852ba71' }
    ]
  },
  {
    id: 'res-2026-10',
    resolutionNumber: 'RES-WY-2026-10',
    title: 'Authorization of 40MW Solar Array Expansion by Destria CleanTech LLC',
    category: 'Asset Acquisition',
    dateProposed: 'November 02, 2026',
    effectiveDate: 'December 01, 2026',
    sponsor: 'Alexander Sterling (CEO)',
    status: 'Under Review',
    quorumRequired: 'Simple Majority',
    votesInFavor: 3,
    votesAgainst: 0,
    votesAbstain: 2,
    text: 'BE IT RESOLVED, that the Board evaluates the co-investment proposal for Phase IV expansion of the Laramie Basin clean energy storage installation in Wyoming, committing up to $18,500,000 in equity contribution backed by signed 15-year utility off-take guarantees.',
    signatories: []
  }
];

export const INITIAL_TRANSACTIONS: IntercompanyTransaction[] = [
  {
    id: 'tx-8041',
    originatingEntity: 'DESTRIA GROUP INC.',
    receivingEntity: 'Destria CleanTech & Grid Infrastructure LLC',
    amount: 14500000,
    currency: 'USD',
    facilityType: 'Subordinated Revolver',
    date: '2026-10-24',
    status: 'Executed',
    maker: 'Marcus Thorne, CFA',
    checker: 'Alexander Sterling',
    referenceDoc: 'DOC-TR-2026-8041-CLEAN'
  },
  {
    id: 'tx-8042',
    originatingEntity: 'Destria Industrial Dynamics Corp.',
    receivingEntity: 'DESTRIA GROUP INC.',
    amount: 3200000,
    currency: 'USD',
    facilityType: 'Management Services Fee',
    date: '2026-10-28',
    status: 'Executed',
    maker: 'Jonathan Reynolds',
    checker: 'Marcus Thorne, CFA',
    referenceDoc: 'DOC-MSF-2026-Q3'
  },
  {
    id: 'tx-8043',
    originatingEntity: 'DESTRIA GROUP INC.',
    receivingEntity: 'Destria Global Mobility & Logistics Inc.',
    amount: 4800000,
    currency: 'USD',
    facilityType: 'Equity Contribution',
    date: '2026-11-02',
    status: 'Pending Maker-Checker',
    maker: 'Marcus Thorne, CFA',
    referenceDoc: 'DOC-CAP-2026-LOG-EXP'
  }
];

export const INITIAL_MAKER_CHECKER: MakerCheckerAction[] = [
  {
    id: 'mc-1092',
    actionType: 'TREASURY_TRANSFER',
    description: 'Capital Call Drawdown #14 for Destria Global Mobility & Logistics Chicago facility expansion',
    amount: 4800000,
    entity: 'Destria Global Mobility & Logistics Inc.',
    makerId: 'usr-003',
    makerName: 'Marcus Thorne, CFA',
    makerRole: 'VP of Finance',
    createdAt: '2026-11-02T16:45:00Z',
    status: 'PENDING_SECOND_APPROVAL'
  },
  {
    id: 'mc-1091',
    actionType: 'RESOLUTION_RATIFICATION',
    description: 'Statutory Ratification of Anti-Money Laundering Policy RES-WY-2026-09',
    entity: 'DESTRIA GROUP INC.',
    makerId: 'usr-002',
    makerName: 'Eleanor Vance, Esq.',
    makerRole: 'General Counsel',
    createdAt: '2026-10-29T10:05:00Z',
    status: 'PENDING_SECOND_APPROVAL'
  },
  {
    id: 'mc-1090',
    actionType: 'ENTITY_AMENDMENT',
    description: 'Wyoming Annual Articles of Amendment for Destria CleanTech equity capitalization tier adjustment',
    entity: 'Destria CleanTech & Grid Infrastructure LLC',
    makerId: 'usr-002',
    makerName: 'Eleanor Vance, Esq.',
    makerRole: 'General Counsel',
    createdAt: '2026-10-20T11:20:00Z',
    status: 'APPROVED_AND_EXECUTED',
    checkerId: 'usr-001',
    checkerName: 'Alexander Sterling',
    reviewedAt: '2026-10-21T09:15:00Z',
    cryptographicSignature: '0x8f2a991b5c478df9108b341f238b93ea7741'
  }
];

export const INITIAL_DOCUMENTS: VaultDocument[] = [
  {
    id: 'doc-001',
    title: 'Wyoming Articles of Incorporation & Certificate of Good Standing',
    documentNumber: 'WY-CERT-2026-8941',
    category: 'Regulatory Certificates',
    classification: 'Restricted Corporate',
    entityRelated: 'DESTRIA GROUP INC.',
    dateUploaded: '2026-01-20',
    fileSize: '3.4 MB',
    sha256Checksum: 'e48a129ef66a3d9021873fb2a912c98d415b3e941199a0cb901f44e138a099bc',
    uploader: 'Eleanor Vance, Esq.',
    summary: 'Official state seal issuance by the Wyoming Secretary of State validating active corporate charter under NAICS 551114.',
    contentSnippet: 'STATE OF WYOMING — OFFICE OF THE SECRETARY OF STATE. I, the undersigned Secretary of State, do hereby certify that DESTRIA GROUP INC., a domestic corporation organized under the laws of the State of Wyoming, has paid all required statutory filing fees and remains in active and lawful Good Standing.'
  },
  {
    id: 'doc-002',
    title: 'Consolidated Audited Financial Statements (FY2025/2026)',
    documentNumber: 'FIN-AUD-2026-Q3',
    category: 'Financial Audits',
    classification: 'Board Confidential',
    entityRelated: 'DESTRIA GROUP INC. & Consolidated Subsidiaries',
    dateUploaded: '2026-09-30',
    fileSize: '8.8 MB',
    sha256Checksum: '91d5cb0819fa2e3c09b78a9c45e1f00821948ba972e4c0175b331f87aa918e24',
    uploader: 'Dr. Evelyn Morales, CPA',
    summary: 'Unqualified clean audit opinion on consolidated financial posture, intercompany transfer pricing, and debt covenant compliance.',
    contentSnippet: 'INDEPENDENT AUDITOR’S REPORT: In our opinion, the consolidated financial statements present fairly, in all material respects, the financial position of DESTRIA GROUP INC. and its operating subsidiaries as of September 30, 2026, in conformity with U.S. GAAP.'
  },
  {
    id: 'doc-003',
    title: 'Corporate Governance Charter & Standing Committee Mandate',
    documentNumber: 'GOV-CH-2026-01',
    category: 'Articles & Bylaws',
    classification: 'Privileged & Secret',
    entityRelated: 'DESTRIA GROUP INC.',
    dateUploaded: '2026-02-14',
    fileSize: '2.1 MB',
    sha256Checksum: '31cb87fa92019b88234ea719f9024c08e561a3d9871167b0aa9021e843c091ad',
    uploader: 'Alexander Sterling',
    summary: 'Bylaws and corporate committee mandates establishing maker-checker approval thresholds, conflict of interest disclosures, and quorum rules.',
    contentSnippet: 'ARTICLE IV: DUAL AUTHORIZATION THRESHOLDS. No corporate officer, director, or managing agent shall execute any unilateral transfer of cash or capital asset exceeding $500,000 without contemporaneous digital countersignature by the Chairman or General Counsel.'
  },
  {
    id: 'doc-004',
    title: 'Industrial Dynamics Master Supply Agreement with Tier-1 Aerospace',
    documentNumber: 'CONT-IND-2026-44',
    category: 'Legal Contracts',
    classification: 'Privileged & Secret',
    entityRelated: 'Destria Industrial Dynamics Corp.',
    dateUploaded: '2026-08-11',
    fileSize: '5.2 MB',
    sha256Checksum: '77a1c098df2410a8b4198ce21fa093ba671249b01239aa8e4587c198b109e2fa',
    uploader: 'Jonathan Reynolds',
    summary: 'Five-year rolling procurement agreement for multi-axis titanium robotics assemblies valued at $45,000,000.',
    contentSnippet: 'MASTER SERVICES AGREEMENT: Supplier guarantees 99.98% metallurgical tolerance conformance under AS9100D aerospace quality management systems, subject to quarterly institutional inspection.'
  }
];

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'aud-9801',
    timestamp: '2026-11-03T12:45:12Z',
    actor: 'Marcus Thorne, CFA',
    actorRole: 'VP of Finance',
    action: 'INITIATE_MAKER_CHECKER_TRANSFER',
    targetResource: 'TREASURY: $4,800,000 to Destria Logistics',
    ipAddress: '198.51.100.44 (Sheridan HQ Secure Terminal)',
    blockHash: '7a29bc01824ef90123498a123bc0912489ae124890cbe098124987ab01234a99',
    previousHash: '8b31ea90812409823489102938a1230981230981230981230981230981230981',
    status: 'VERIFIED_TAMPER_FREE'
  },
  {
    id: 'aud-9800',
    timestamp: '2026-11-03T11:14:05Z',
    actor: 'Alexander Sterling',
    actorRole: 'CEO & Chairman',
    action: 'SESSION_AUTHENTICATION_SUCCESS_MFA',
    targetResource: 'COMMAND_CENTER: Executive Access',
    ipAddress: '198.51.100.12 (Executive Gateway)',
    blockHash: '8b31ea90812409823489102938a1230981230981230981230981230981230981',
    previousHash: '439810a982340981230981230981230981230981230981230981230981230981',
    status: 'VERIFIED_TAMPER_FREE'
  },
  {
    id: 'aud-9799',
    timestamp: '2026-11-02T17:30:21Z',
    actor: 'Eleanor Vance, Esq.',
    actorRole: 'General Counsel',
    action: 'DOCUMENT_VAULT_ENCRYPTED_UPLOAD',
    targetResource: 'DOC: RES-WY-2026-09 Statutory Filing Packet',
    ipAddress: '198.51.100.89 (Legal Console)',
    blockHash: '439810a982340981230981230981230981230981230981230981230981230981',
    previousHash: '0098124a98213409812309812309812309812309812309812309812309812309',
    status: 'VERIFIED_TAMPER_FREE'
  },
  {
    id: 'aud-9798',
    timestamp: '2026-11-02T14:10:00Z',
    actor: 'Dr. Evelyn Morales, CPA',
    actorRole: 'Enterprise Auditor',
    action: 'AUDIT_INTEGRITY_SCAN_PERFORMED',
    targetResource: 'SYSTEM: All 4,120 Cryptographic Blocks Verified',
    ipAddress: '198.51.100.95 (Risk & Compliance Node)',
    blockHash: '0098124a98213409812309812309812309812309812309812309812309812309',
    previousHash: '5612340981230981230981230981230981230981230981230981230981230981',
    status: 'VERIFIED_TAMPER_FREE'
  }
];

export const INITIAL_COMPLIANCE_FILINGS: ComplianceFiling[] = [
  {
    id: 'fil-01',
    entityId: 'ent-001',
    entityName: 'DESTRIA GROUP INC.',
    filingType: 'Wyoming Annual Report',
    jurisdiction: 'Wyoming Secretary of State',
    dueDate: '2027-01-31',
    status: 'Current & Valid',
    agent: 'Registered Agents Inc., 30 N Gould St Ste N, Sheridan, WY 82801',
    confirmationCode: 'WY-AR-2026-990142'
  },
  {
    id: 'fil-02',
    entityId: 'ent-001',
    entityName: 'DESTRIA GROUP INC.',
    filingType: 'FinCEN Beneficial Ownership',
    jurisdiction: 'US Department of the Treasury',
    dueDate: '2026-12-31',
    status: 'Current & Valid',
    agent: 'Corporate Legal Officers',
    confirmationCode: 'FINCEN-BOIR-882190'
  },
  {
    id: 'fil-03',
    entityId: 'ent-002',
    entityName: 'Destria Industrial Dynamics Corp.',
    filingType: 'DE Franchise Tax',
    jurisdiction: 'Delaware Division of Corporations',
    dueDate: '2027-03-01',
    status: 'Current & Valid',
    agent: 'Corporation Service Company (CSC)',
    confirmationCode: 'DE-TAX-2026-10492'
  },
  {
    id: 'fil-04',
    entityId: 'ent-003',
    entityName: 'Destria CleanTech & Grid Infrastructure LLC',
    filingType: 'Wyoming Annual Report',
    jurisdiction: 'Wyoming Secretary of State',
    dueDate: '2027-06-30',
    status: 'Current & Valid',
    agent: 'Registered Agents Inc., Sheridan WY',
    confirmationCode: 'WY-AR-2026-33918'
  }
];

export const INITIAL_CLAIMS: CorporateClaim[] = [
  {
    id: 'clm-001',
    statement: 'Operating strictly under NAICS 551114 as a domestic management holding corporation with statutory seat at 30 N Gould St, Sheridan, WY.',
    pageContext: 'Public Website / About / Legal Profile',
    substantiatingSource: 'Wyoming SOS Filing #WY-2024-001482910',
    legalReviewer: 'Eleanor Vance, Esq.',
    approvalStatus: 'Approved For Public Distribution',
    effectiveDate: '2024-01-14'
  },
  {
    id: 'clm-002',
    statement: 'Consolidated subsidiary equity valuation of $840.5M with $148.2M trailing enterprise revenue across industrial, energy, and logistics units.',
    pageContext: 'Public Website / Home / Corporate Metrics',
    substantiatingSource: 'Independent Audit Report FY2026 by Certified Independent Auditors',
    legalReviewer: 'Dr. Evelyn Morales, CPA',
    approvalStatus: 'Approved For Public Distribution',
    effectiveDate: '2026-09-30'
  },
  {
    id: 'clm-003',
    statement: '420 MW renewable solar and utility battery capacity managed under long-term power purchase agreements.',
    pageContext: 'Public Website / Businesses / Destria CleanTech',
    substantiatingSource: 'CleanTech Interconnection Agreements and PPA Portfolio Ledger',
    legalReviewer: 'Sarah Lindqvist (CleanTech MD)',
    approvalStatus: 'Approved For Public Distribution',
    effectiveDate: '2026-10-01'
  },
  {
    id: 'clm-004',
    statement: 'Zero default history across all structured credit and mezzanine facilities originated by Destria Strategic Capital.',
    pageContext: 'Public Website / Businesses / Destria Capital',
    substantiatingSource: 'Credit Committee Risk Registry Q3 2026',
    legalReviewer: 'Eleanor Vance, Esq.',
    approvalStatus: 'Approved For Public Distribution',
    effectiveDate: '2026-10-15'
  }
];

export const FINANCIAL_HISTORICAL_DATA: FinancialMetric[] = [
  { period: 'Q4 2025', revenue: 31.4, ebitda: 8.9, netIncome: 5.8, freeCashFlow: 6.2, assets: 710.0, liabilities: 195.0 },
  { period: 'Q1 2026', revenue: 35.8, ebitda: 10.4, netIncome: 7.1, freeCashFlow: 7.8, assets: 755.0, liabilities: 202.0 },
  { period: 'Q2 2026', revenue: 39.2, ebitda: 11.8, netIncome: 8.3, freeCashFlow: 9.1, assets: 798.0, liabilities: 210.0 },
  { period: 'Q3 2026', revenue: 41.8, ebitda: 13.2, netIncome: 9.5, freeCashFlow: 10.4, assets: 840.5, liabilities: 218.0 }
];
