/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: ModelSwot
// ====================================================

export interface ModelSwot_strengths {
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

export interface ModelSwot_weaknesses {
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

export interface ModelSwot_opportunities {
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

export interface ModelSwot_threats {
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

export interface ModelSwot_createdBy {
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

export interface ModelSwot_updatedBy {
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

export interface ModelSwot_publishedBy {
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

export interface ModelSwot_scheduledIn {
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

export interface ModelSwot {
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
  developmentOption: string;
  strengths: ModelSwot_strengths;
  weaknesses: ModelSwot_weaknesses;
  opportunities: ModelSwot_opportunities;
  threats: ModelSwot_threats;
  /**
   * User that created this document
   */
  createdBy: ModelSwot_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: ModelSwot_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: ModelSwot_publishedBy | null;
  scheduledIn: ModelSwot_scheduledIn[];
}
