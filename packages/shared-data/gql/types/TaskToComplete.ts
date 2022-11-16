/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: TaskToComplete
// ====================================================

export interface TaskToComplete_taskInfo {
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

export interface TaskToComplete_submittedText {
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

export interface TaskToComplete_createdBy {
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

export interface TaskToComplete_updatedBy {
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

export interface TaskToComplete_publishedBy {
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

export interface TaskToComplete_scheduledIn {
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

export interface TaskToComplete {
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
  title: string | null;
  taskInfo: TaskToComplete_taskInfo;
  taskLinkText: string | null;
  submittedText: TaskToComplete_submittedText | null;
  /**
   * User that created this document
   */
  createdBy: TaskToComplete_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: TaskToComplete_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: TaskToComplete_publishedBy | null;
  scheduledIn: TaskToComplete_scheduledIn[];
}
