/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitFeedback
// ====================================================

export interface SubmitFeedback_update_document_by_pk {
  id: any;
  status: document_status_enum_enum;
}

export interface SubmitFeedback {
  /**
   * update single row of the table: "document"
   */
  update_document_by_pk: SubmitFeedback_update_document_by_pk | null;
}

export interface SubmitFeedbackVariables {
  docId: any;
  feedbackData: any;
}
