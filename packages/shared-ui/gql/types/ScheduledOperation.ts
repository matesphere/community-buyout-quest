/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, ScheduledOperationStatus, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: ScheduledOperation
// ====================================================

export interface ScheduledOperation_createdBy {
  remoteTypeName: "User";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_updatedBy {
  remoteTypeName: "User";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_publishedBy {
  remoteTypeName: "User";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_release {
  remoteTypeName: "ScheduledRelease";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_ModelBusinessPlan {}

export interface ScheduledOperation_affectedDocuments_Asset {
  remoteTypeName: "Asset";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_Checklist {
  remoteTypeName: "Checklist";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_DevelopmentOption {
  remoteTypeName: "DevelopmentOption";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_HelpfulInfo {
  remoteTypeName: "HelpfulInfo";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_Info {
  remoteTypeName: "Info";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_ModelSwot {
  remoteTypeName: "ModelSwot";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_PresentationTipsPage {
  remoteTypeName: "PresentationTipsPage";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_StageLandingPage {
  remoteTypeName: "StageLandingPage";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_StageTask {
  remoteTypeName: "StageTask";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_StageTaskPage {
  remoteTypeName: "StageTaskPage";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface ScheduledOperation_affectedDocuments_TaskToComplete {
  remoteTypeName: "TaskToComplete";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * System stage field
   */
  stage: Stage;
}

export type ScheduledOperation_affectedDocuments = ScheduledOperation_affectedDocuments_ModelBusinessPlan | ScheduledOperation_affectedDocuments_Asset | ScheduledOperation_affectedDocuments_Checklist | ScheduledOperation_affectedDocuments_DevelopmentOption | ScheduledOperation_affectedDocuments_HelpfulInfo | ScheduledOperation_affectedDocuments_Info | ScheduledOperation_affectedDocuments_ModelSwot | ScheduledOperation_affectedDocuments_PresentationTipsPage | ScheduledOperation_affectedDocuments_StageLandingPage | ScheduledOperation_affectedDocuments_StageTask | ScheduledOperation_affectedDocuments_StageTaskPage | ScheduledOperation_affectedDocuments_TaskToComplete;

export interface ScheduledOperation {
  /**
   * System stage field
   */
  stage: Stage;
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * The time the document was created
   */
  createdAt: any;
  /**
   * The time the document was updated
   */
  updatedAt: any;
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: any | null;
  /**
   * Operation description
   */
  description: string | null;
  /**
   * Operation error message
   */
  errorMessage: string | null;
  /**
   * Raw operation payload including all details, this field is subject to change
   */
  rawPayload: any;
  /**
   * User that created this document
   */
  createdBy: ScheduledOperation_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: ScheduledOperation_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: ScheduledOperation_publishedBy | null;
  /**
   * The release this operation is scheduled for
   */
  release: ScheduledOperation_release | null;
  /**
   * operation Status
   */
  status: ScheduledOperationStatus;
  affectedDocuments: ScheduledOperation_affectedDocuments[];
}
