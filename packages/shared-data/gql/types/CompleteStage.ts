/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CompleteStage
// ====================================================

export interface CompleteStage_update_stage_progress_returning_stage {
  id: number;
  title: string;
}

export interface CompleteStage_update_stage_progress_returning {
  id: any;
  /**
   * An object relationship
   */
  stage: CompleteStage_update_stage_progress_returning_stage;
  status: stage_progress_status_enum_enum;
  team_id: any;
}

export interface CompleteStage_update_stage_progress {
  /**
   * data from the rows affected by the mutation
   */
  returning: CompleteStage_update_stage_progress_returning[];
}

export interface CompleteStage {
  /**
   * update data of the table: "stage_progress"
   */
  update_stage_progress: CompleteStage_update_stage_progress | null;
}

export interface CompleteStageVariables {
  stageProgressId: any;
}
