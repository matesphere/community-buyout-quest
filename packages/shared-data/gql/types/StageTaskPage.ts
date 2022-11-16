/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: StageTaskPage
// ====================================================

export interface StageTaskPage_taskInfo {
  /**
   * Returns AST representation
   */
  raw: any;
  /**
   * Returns HTMl representation
   */
  html: string;
  /**
   * Returns Markdown representation
   */
  markdown: string;
  /**
   * Returns plain-text contents of RichText
   */
  text: string;
}

export interface StageTaskPage_submittedText {
  /**
   * Returns AST representation
   */
  raw: any;
  /**
   * Returns HTMl representation
   */
  html: string;
  /**
   * Returns Markdown representation
   */
  markdown: string;
  /**
   * Returns plain-text contents of RichText
   */
  text: string;
}

export interface StageTaskPage_createdBy {
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

export interface StageTaskPage_updatedBy {
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

export interface StageTaskPage_publishedBy {
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

export interface StageTaskPage_tasksToComplete {
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

export interface StageTaskPage_checklist {
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

export interface StageTaskPage_helpfulInfo {
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

export interface StageTaskPage_scheduledIn {
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

export interface StageTaskPage {
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
  stageNumber: number | null;
  title: string | null;
  taskInfo: StageTaskPage_taskInfo | null;
  submittedText: StageTaskPage_submittedText | null;
  /**
   * User that created this document
   */
  createdBy: StageTaskPage_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: StageTaskPage_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: StageTaskPage_publishedBy | null;
  tasksToComplete: StageTaskPage_tasksToComplete[];
  checklist: StageTaskPage_checklist | null;
  helpfulInfo: StageTaskPage_helpfulInfo | null;
  scheduledIn: StageTaskPage_scheduledIn[];
}
