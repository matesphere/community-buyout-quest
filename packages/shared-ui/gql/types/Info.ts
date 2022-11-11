/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: Info
// ====================================================

export interface Info_intro {
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

export interface Info_infoBlock {
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

export interface Info_slider {
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

export interface Info_createdBy {
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

export interface Info_updatedBy {
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

export interface Info_publishedBy {
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

export interface Info_helpfulInfo {
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

export interface Info_checklist {
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

export interface Info_image {
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

export interface Info_scheduledIn {
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

export interface Info {
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
  title: string | null;
  intro: Info_intro | null;
  infoBlock: Info_infoBlock[];
  slider: Info_slider[];
  slug: string | null;
  /**
   * User that created this document
   */
  createdBy: Info_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: Info_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: Info_publishedBy | null;
  helpfulInfo: Info_helpfulInfo | null;
  checklist: Info_checklist | null;
  image: Info_image[];
  scheduledIn: Info_scheduledIn[];
}
