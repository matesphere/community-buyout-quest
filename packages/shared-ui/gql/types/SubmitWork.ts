/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitWork
// ====================================================

export interface SubmitWork_update_document_by_pk {
  id: any;
  status: document_status_enum_enum;
}

export interface SubmitWork {
  /**
   * update single row of the table: "document"
   */
  update_document_by_pk: SubmitWork_update_document_by_pk | null;
}

export interface SubmitWorkVariables {
  docId: any;
  docData: any;
}
