/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UnlockStage
// ====================================================

export interface UnlockStage_insert_stage_progress_one {
  id: any;
  team_id: any;
  stage_id: number;
  status: stage_progress_status_enum_enum;
}

export interface UnlockStage {
  /**
   * insert a single row into the table: "stage_progress"
   */
  insert_stage_progress_one: UnlockStage_insert_stage_progress_one | null;
}

export interface UnlockStageVariables {
  teamId?: any | null;
  stageId?: number | null;
}
