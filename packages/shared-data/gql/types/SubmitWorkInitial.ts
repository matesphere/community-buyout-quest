/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitWorkInitial
// ====================================================

export interface SubmitWorkInitial_insert_document_one {
  id: any;
  status: document_status_enum_enum;
}

export interface SubmitWorkInitial {
  /**
   * insert a single row into the table: "document"
   */
  insert_document_one: SubmitWorkInitial_insert_document_one | null;
}

export interface SubmitWorkInitialVariables {
  stageProgressId?: any | null;
  docData: any;
}
