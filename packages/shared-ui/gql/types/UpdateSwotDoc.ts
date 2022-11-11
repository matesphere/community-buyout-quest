/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateSwotDoc
// ====================================================

export interface UpdateSwotDoc_update_document_by_pk {
  id: any;
}

export interface UpdateSwotDoc {
  /**
   * update single row of the table: "document"
   */
  update_document_by_pk: UpdateSwotDoc_update_document_by_pk | null;
}

export interface UpdateSwotDocVariables {
  docId: any;
  modelSwot: any;
}
