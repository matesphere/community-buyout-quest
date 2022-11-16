/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { student_position_enum_enum, stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: NavQuery
// ====================================================

export interface NavQuery_user_by_pk_student_team_stage_progresses {
  stage_id: number;
  status: stage_progress_status_enum_enum;
}

export interface NavQuery_user_by_pk_student_team {
  id: any;
  name: string;
  /**
   * An array relationship
   */
  stage_progresses: NavQuery_user_by_pk_student_team_stage_progresses[];
}

export interface NavQuery_user_by_pk_student {
  id: any;
  position: student_position_enum_enum | null;
  /**
   * An object relationship
   */
  team: NavQuery_user_by_pk_student_team | null;
}

export interface NavQuery_user_by_pk {
  id: any;
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
  username: string;
  /**
   * An object relationship
   */
  student: NavQuery_user_by_pk_student | null;
}

export interface NavQuery {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: NavQuery_user_by_pk | null;
}

export interface NavQueryVariables {
  user_id: any;
}
