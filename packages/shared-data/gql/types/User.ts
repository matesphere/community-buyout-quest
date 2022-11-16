/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, UserKind } from "./globalTypes";

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User {
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
   * The username
   */
  name: string;
  /**
   * Profile Picture url
   */
  picture: string | null;
  /**
   * Flag to determine if user is active or not
   */
  isActive: boolean;
  /**
   * User Kind. Can be either MEMBER, PAT or PUBLIC
   */
  kind: UserKind;
}
