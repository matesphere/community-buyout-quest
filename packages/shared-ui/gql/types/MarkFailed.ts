/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MarkFailed
// ====================================================

export interface MarkFailed_update_document_returning {
  id: any;
  feedback: any | null;
  status: document_status_enum_enum;
}

export interface MarkFailed_update_document {
  /**
   * data from the rows affected by the mutation
   */
  returning: MarkFailed_update_document_returning[];
}

export interface MarkFailed {
  /**
   * update data of the table: "document"
   */
  update_document: MarkFailed_update_document | null;
}

export interface MarkFailedVariables {
  docId?: any | null;
}
