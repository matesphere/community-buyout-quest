/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: StageLandingPage
// ====================================================

export interface StageLandingPage_stageInfo {
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

export interface StageLandingPage_stageIntroRich {
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

export interface StageLandingPage_infoLink {
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

export interface StageLandingPage_createdBy {
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

export interface StageLandingPage_updatedBy {
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

export interface StageLandingPage_publishedBy {
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

export interface StageLandingPage_tasksToComplete {
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

export interface StageLandingPage_checklist {
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

export interface StageLandingPage_helpfulInfo {
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

export interface StageLandingPage_scheduledIn {
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

export interface StageLandingPage {
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
  stageTitle: string;
  /**
   * Questy box at top of landing page
   */
  stageIntro: string;
  stageInfo: StageLandingPage_stageInfo | null;
  slug: string | null;
  stageIntroRich: StageLandingPage_stageIntroRich | null;
  infoLink: StageLandingPage_infoLink[];
  /**
   * User that created this document
   */
  createdBy: StageLandingPage_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: StageLandingPage_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: StageLandingPage_publishedBy | null;
  tasksToComplete: StageLandingPage_tasksToComplete[];
  checklist: StageLandingPage_checklist | null;
  helpfulInfo: StageLandingPage_helpfulInfo | null;
  scheduledIn: StageLandingPage_scheduledIn[];
}
