/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: ModelBusinessPlan
// ====================================================

export interface ModelBusinessPlan_capitalCosts_details {
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

export interface ModelBusinessPlan_capitalCosts_funding {
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

export interface ModelBusinessPlan_capitalCosts {
  /**
   * System stage field
   */
  stage: Stage;
  /**
   * The unique identifier
   */
  id: string;
  details: ModelBusinessPlan_capitalCosts_details;
  funding: ModelBusinessPlan_capitalCosts_funding;
}

export interface ModelBusinessPlan_publishedBy {
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

export interface ModelBusinessPlan_updatedBy {
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

export interface ModelBusinessPlan_createdBy {
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

export interface ModelBusinessPlan_scheduledIn {
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

export interface ModelBusinessPlan {
  /**
   * System stage field
   */
  stage: Stage;
  /**
   * System Locale field
   */
  locale: Locale;
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: any | null;
  /**
   * The time the document was updated
   */
  updatedAt: any;
  /**
   * The time the document was created
   */
  createdAt: any;
  /**
   * The unique identifier
   */
  remoteId: string;
  developmentOption: string;
  capitalCosts: ModelBusinessPlan_capitalCosts | null;
  /**
   * User that last published this document
   */
  publishedBy: ModelBusinessPlan_publishedBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: ModelBusinessPlan_updatedBy | null;
  /**
   * User that created this document
   */
  createdBy: ModelBusinessPlan_createdBy | null;
  scheduledIn: ModelBusinessPlan_scheduledIn[];
}
