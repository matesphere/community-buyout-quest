/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: Checklist
// ====================================================

export interface Checklist_createdBy {
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

export interface Checklist_updatedBy {
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

export interface Checklist_publishedBy {
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

export interface Checklist_scheduledIn {
  remoteTypeName: "ScheduledOperation";
  /**
   * The unique identifier
   */
  remoteId: string;
  /**
   * System stage field
   */
  stage: Stage;
}

export interface Checklist {
  /**
   * System stage field
   */
  stage: Stage;
  /**
   * System Locale field
   */
  locale: Locale;
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
  stageNumber: number;
  item: string[];
  /**
   * User that created this document
   */
  createdBy: Checklist_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: Checklist_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: Checklist_publishedBy | null;
  scheduledIn: Checklist_scheduledIn[];
}
