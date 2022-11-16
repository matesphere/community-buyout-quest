/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { document_status_enum_enum, stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MarkPassed
// ====================================================

export interface MarkPassed_update_document_returning {
  id: any;
  feedback: any | null;
  status: document_status_enum_enum;
}

export interface MarkPassed_update_document {
  /**
   * data from the rows affected by the mutation
   */
  returning: MarkPassed_update_document_returning[];
}

export interface MarkPassed_update_stage_progress_returning_stage {
  id: number;
  title: string;
}

export interface MarkPassed_update_stage_progress_returning {
  id: any;
  /**
   * An object relationship
   */
  stage: MarkPassed_update_stage_progress_returning_stage;
  status: stage_progress_status_enum_enum;
  team_id: any;
}

export interface MarkPassed_update_stage_progress {
  /**
   * data from the rows affected by the mutation
   */
  returning: MarkPassed_update_stage_progress_returning[];
}

export interface MarkPassed {
  /**
   * update data of the table: "document"
   */
  update_document: MarkPassed_update_document | null;
  /**
   * update data of the table: "stage_progress"
   */
  update_stage_progress: MarkPassed_update_stage_progress | null;
}

export interface MarkPassedVariables {
  docId?: any | null;
  stageProgressId?: any | null;
}
