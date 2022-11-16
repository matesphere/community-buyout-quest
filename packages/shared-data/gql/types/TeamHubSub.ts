/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: TeamHubSub
// ====================================================

export interface TeamHubSub_user_by_pk_student_team_stage_progresses {
  stage_id: number;
  status: stage_progress_status_enum_enum;
}

export interface TeamHubSub_user_by_pk_student_team_students_user {
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
}

export interface TeamHubSub_user_by_pk_student_team_students {
  /**
   * An object relationship
   */
  user: TeamHubSub_user_by_pk_student_team_students_user;
}

export interface TeamHubSub_user_by_pk_student_team_team_development_options_development_option {
  id: number;
  display_name: string | null;
  option: string;
}

export interface TeamHubSub_user_by_pk_student_team_team_development_options {
  shortlist: boolean;
  /**
   * An object relationship
   */
  development_option: TeamHubSub_user_by_pk_student_team_team_development_options_development_option;
}

export interface TeamHubSub_user_by_pk_student_team {
  name: string;
  /**
   * An array relationship
   */
  stage_progresses: TeamHubSub_user_by_pk_student_team_stage_progresses[];
  /**
   * An array relationship
   */
  students: TeamHubSub_user_by_pk_student_team_students[];
  /**
   * An array relationship
   */
  team_development_options: TeamHubSub_user_by_pk_student_team_team_development_options[];
}

export interface TeamHubSub_user_by_pk_student {
  /**
   * An object relationship
   */
  team: TeamHubSub_user_by_pk_student_team | null;
}

export interface TeamHubSub_user_by_pk {
  id: any;
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
  /**
   * An object relationship
   */
  student: TeamHubSub_user_by_pk_student | null;
}

export interface TeamHubSub {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: TeamHubSub_user_by_pk | null;
}

export interface TeamHubSubVariables {
  user_id: any;
}
