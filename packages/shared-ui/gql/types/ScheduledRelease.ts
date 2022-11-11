/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, ScheduledReleaseStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: ScheduledRelease
// ====================================================

export interface ScheduledRelease_createdBy {
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

export interface ScheduledRelease_updatedBy {
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

export interface ScheduledRelease_publishedBy {
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

export interface ScheduledRelease_operations {
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

export interface ScheduledRelease {
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
   * Release Title
   */
  title: string | null;
  /**
   * Release description
   */
  description: string | null;
  /**
   * Release error message
   */
  errorMessage: string | null;
  /**
   * Whether scheduled release should be run
   */
  isActive: boolean;
  /**
   * Whether scheduled release is implicit
   */
  isImplicit: boolean;
  /**
   * Release date and time
   */
  releaseAt: any | null;
  /**
   * User that created this document
   */
  createdBy: ScheduledRelease_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: ScheduledRelease_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: ScheduledRelease_publishedBy | null;
  /**
   * Operations to run with this release
   */
  operations: ScheduledRelease_operations[];
  /**
   * Release Status
   */
  status: ScheduledReleaseStatus;
}
