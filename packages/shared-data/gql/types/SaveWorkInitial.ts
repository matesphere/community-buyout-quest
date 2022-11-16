/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveWorkInitial
// ====================================================

export interface SaveWorkInitial_insert_document_one {
  id: any;
  status: document_status_enum_enum;
}

export interface SaveWorkInitial {
  /**
   * insert a single row into the table: "document"
   */
  insert_document_one: SaveWorkInitial_insert_document_one | null;
}

export interface SaveWorkInitialVariables {
  stageProgressId: any;
  docData: any;
}
