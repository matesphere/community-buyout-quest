/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { student_position_enum_enum, stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: Stage2TaskQuery
// ====================================================

export interface Stage2TaskQuery_team_by_pk_students_user {
  username: string;
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
}

export interface Stage2TaskQuery_team_by_pk_students {
  id: any;
  user_id: any;
  school_id: any;
  team_id: any | null;
  position: student_position_enum_enum | null;
  /**
   * An object relationship
   */
  user: Stage2TaskQuery_team_by_pk_students_user;
}

export interface Stage2TaskQuery_team_by_pk_stage_progresses {
  id: any;
  status: stage_progress_status_enum_enum;
}

export interface Stage2TaskQuery_team_by_pk {
  id: any;
  logo: string | null;
  /**
   * An array relationship
   */
  students: Stage2TaskQuery_team_by_pk_students[];
  /**
   * An array relationship
   */
  stage_progresses: Stage2TaskQuery_team_by_pk_stage_progresses[];
}

export interface Stage2TaskQuery {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: Stage2TaskQuery_team_by_pk | null;
}

export interface Stage2TaskQueryVariables {
  team_id: any;
}
