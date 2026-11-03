/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole =
  | 'CHIEF_EXECUTIVE_OFFICER'
  | 'GENERAL_COUNSEL'
  | 'VP_FINANCE'
  | 'COMPLIANCE_AUDITOR'
  | 'SUBSIDIARY_DIRECTOR';

export interface EnterpriseUser {
  id: string;
  name: string;
  title: string;
  email: string;
  role: UserRole;
  avatarInitials: string;
  mfaEnabled: boolean;
  department: string;
  lastActive: string;
  entityScope?: string; // for subsidiary directors
}

export interface CorporateEntity {
  id: string;
  legalName: string;
  tradeName: string;
  entityType: 'Corporation' | 'LLC' | 'Limited Partnership' | 'Holding Parent';
  jurisdiction: string;
  registrationNumber: string;
  naicsCode: string;
  ownershipPercentage: number;
  managingDirector: string;
  incorporationDate: string;
  status: 'Active / Good Standing' | 'Pending Review' | 'Regulatory Restructuring';
  annualFilingDue: string;
  headquarters: string;
  assetValuation: string;
  consolidatedRevenue: string;
  employeeCount: number;
  industry: string;
  summary: string;
  keyAssets: string[];
}

export interface BoardResolution {
  id: string;
  resolutionNumber: string;
  title: string;
  category: 'Capital Allocation' | 'Corporate Governance' | 'Executive Appointment' | 'Statutory Filing' | 'Asset Acquisition';
  dateProposed: string;
  effectiveDate: string;
  sponsor: string;
  status: 'Adopted' | 'Pending Dual Approval' | 'Under Review' | 'Archived';
  quorumRequired: string;
  votesInFavor: number;
  votesAgainst: number;
  votesAbstain: number;
  text: string;
  signatories: { name: string; title: string; signedAt: string; signatureHash: string }[];
}

export interface FinancialMetric {
  period: string;
  revenue: number; // in millions
  ebitda: number;
  netIncome: number;
  freeCashFlow: number;
  assets: number;
  liabilities: number;
}

export interface IntercompanyTransaction {
  id: string;
  originatingEntity: string;
  receivingEntity: string;
  amount: number;
  currency: string;
  facilityType: 'Subordinated Revolver' | 'Management Services Fee' | 'Dividend Distribution' | 'Equity Contribution';
  date: string;
  status: 'Executed' | 'Pending Maker-Checker' | 'Audited';
  maker: string;
  checker?: string;
  referenceDoc: string;
}

export interface ComplianceFiling {
  id: string;
  entityId: string;
  entityName: string;
  filingType: 'Wyoming Annual Report' | 'IRS Form 1120 Consolidated' | 'FinCEN Beneficial Ownership' | 'DE Franchise Tax' | 'Registered Agent Representation';
  jurisdiction: string;
  dueDate: string;
  status: 'Current & Valid' | 'Filing In Progress' | 'Action Required';
  agent: string;
  confirmationCode: string;
}

export interface VaultDocument {
  id: string;
  title: string;
  documentNumber: string;
  category: 'Articles & Bylaws' | 'Board Minutes' | 'Financial Audits' | 'Regulatory Certificates' | 'Legal Contracts';
  classification: 'Board Confidential' | 'Privileged & Secret' | 'Restricted Corporate' | 'Public Disclosure';
  entityRelated: string;
  dateUploaded: string;
  fileSize: string;
  sha256Checksum: string;
  uploader: string;
  summary: string;
  contentSnippet: string;
}

export interface MakerCheckerAction {
  id: string;
  actionType: 'TREASURY_TRANSFER' | 'ENTITY_AMENDMENT' | 'RESOLUTION_RATIFICATION' | 'EXECUTIVE_GRANT';
  description: string;
  amount?: number;
  entity: string;
  makerId: string;
  makerName: string;
  makerRole: string;
  createdAt: string;
  status: 'PENDING_SECOND_APPROVAL' | 'APPROVED_AND_EXECUTED' | 'REJECTED';
  checkerId?: string;
  checkerName?: string;
  reviewedAt?: string;
  rejectionReason?: string;
  cryptographicSignature?: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  actorRole: string;
  action: string;
  targetResource: string;
  ipAddress: string;
  blockHash: string;
  previousHash: string;
  status: 'VERIFIED_TAMPER_FREE' | 'FLAGGED';
}

export interface CorporateClaim {
  id: string;
  statement: string;
  pageContext: string;
  substantiatingSource: string;
  legalReviewer: string;
  approvalStatus: 'Approved For Public Distribution' | 'Pending Legal Verification' | 'Rejected / Under Revision';
  effectiveDate: string;
}
