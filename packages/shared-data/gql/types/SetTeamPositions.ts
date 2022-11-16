/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { student_insert_input, student_position_enum_enum, stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SetTeamPositions
// ====================================================

export interface SetTeamPositions_insert_student_returning_user {
  id: any;
}

export interface SetTeamPositions_insert_student_returning {
  /**
   * An object relationship
   */
  user: SetTeamPositions_insert_student_returning_user;
  position: student_position_enum_enum | null;
}

export interface SetTeamPositions_insert_student {
  /**
   * data from the rows affected by the mutation
   */
  returning: SetTeamPositions_insert_student_returning[];
}

export interface SetTeamPositions_update_stage_progress_returning_stage {
  id: number;
  title: string;
}

export interface SetTeamPositions_update_stage_progress_returning {
  id: any;
  /**
   * An object relationship
   */
  stage: SetTeamPositions_update_stage_progress_returning_stage;
  status: stage_progress_status_enum_enum;
  team_id: any;
}

export interface SetTeamPositions_update_stage_progress {
  /**
   * data from the rows affected by the mutation
   */
  returning: SetTeamPositions_update_stage_progress_returning[];
}

export interface SetTeamPositions_update_team_by_pk {
  id: any;
  logo: string | null;
}

export interface SetTeamPositions {
  /**
   * insert data into the table: "student"
   */
  insert_student: SetTeamPositions_insert_student | null;
  /**
   * update data of the table: "stage_progress"
   */
  update_stage_progress: SetTeamPositions_update_stage_progress | null;
  /**
   * update single row of the table: "team"
   */
  update_team_by_pk: SetTeamPositions_update_team_by_pk | null;
}

export interface SetTeamPositionsVariables {
  objects: student_insert_input[];
  stageProgressId: any;
  teamId: any;
  logo: string;
}
