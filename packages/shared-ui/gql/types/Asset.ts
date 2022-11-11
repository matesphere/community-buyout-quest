/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stage, Locale } from "./globalTypes";

// ====================================================
// GraphQL fragment: Asset
// ====================================================

export interface Asset_createdBy {
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

export interface Asset_updatedBy {
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

export interface Asset_publishedBy {
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

export interface Asset_informationMainImageDevelopmentOption {
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

export interface Asset_imageInfo {
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

export interface Asset_iconDevelopmentOption {
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

export interface Asset_scheduledIn {
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

export interface Asset {
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
  /**
   * The file handle
   */
  handle: string;
  /**
   * The file name
   */
  fileName: string;
  /**
   * The height of the file
   */
  height: number | null;
  /**
   * The file width
   */
  width: number | null;
  /**
   * The file size
   */
  size: number | null;
  /**
   * The mime type of the file
   */
  mimeType: string | null;
  /**
   * User that created this document
   */
  createdBy: Asset_createdBy | null;
  /**
   * User that last updated this document
   */
  updatedBy: Asset_updatedBy | null;
  /**
   * User that last published this document
   */
  publishedBy: Asset_publishedBy | null;
  informationMainImageDevelopmentOption: Asset_informationMainImageDevelopmentOption[];
  imageInfo: Asset_imageInfo[];
  iconDevelopmentOption: Asset_iconDevelopmentOption[];
  scheduledIn: Asset_scheduledIn[];
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}
