/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveWork
// ====================================================

export interface SaveWork_update_document_by_pk {
  id: any;
  status: document_status_enum_enum;
}

export interface SaveWork {
  /**
   * update single row of the table: "document"
   */
  update_document_by_pk: SaveWork_update_document_by_pk | null;
}

export interface SaveWorkVariables {
  docId: any;
  docData: any;
}
