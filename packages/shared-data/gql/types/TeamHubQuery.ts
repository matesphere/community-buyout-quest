/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { stage_progress_status_enum_enum, document_status_enum_enum, student_position_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: TeamHubQuery
// ====================================================

export interface TeamHubQuery_user_by_pk_student_team_stage_progresses_documents {
  status: document_status_enum_enum;
}

export interface TeamHubQuery_user_by_pk_student_team_stage_progresses {
  id: any;
  stage_id: number;
  status: stage_progress_status_enum_enum;
  /**
   * An array relationship
   */
  documents: TeamHubQuery_user_by_pk_student_team_stage_progresses_documents[];
}

export interface TeamHubQuery_user_by_pk_student_team_students_user {
  id: any;
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
}

export interface TeamHubQuery_user_by_pk_student_team_students {
  id: any;
  position: student_position_enum_enum | null;
  /**
   * An object relationship
   */
  user: TeamHubQuery_user_by_pk_student_team_students_user;
}

export interface TeamHubQuery_user_by_pk_student_team_team_development_options_development_option {
  id: number;
  display_name: string | null;
  option: string;
}

export interface TeamHubQuery_user_by_pk_student_team_team_development_options {
  id: any;
  shortlist: boolean;
  team_choice_name: string | null;
  /**
   * An object relationship
   */
  development_option: TeamHubQuery_user_by_pk_student_team_team_development_options_development_option;
}

export interface TeamHubQuery_user_by_pk_student_team {
  id: any;
  name: string;
  logo: string | null;
  /**
   * An array relationship
   */
  stage_progresses: TeamHubQuery_user_by_pk_student_team_stage_progresses[];
  /**
   * An array relationship
   */
  students: TeamHubQuery_user_by_pk_student_team_students[];
  /**
   * An array relationship
   */
  team_development_options: TeamHubQuery_user_by_pk_student_team_team_development_options[];
}

export interface TeamHubQuery_user_by_pk_student {
  id: any;
  /**
   * An object relationship
   */
  team: TeamHubQuery_user_by_pk_student_team | null;
}

export interface TeamHubQuery_user_by_pk {
  id: any;
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
  /**
   * An object relationship
   */
  student: TeamHubQuery_user_by_pk_student | null;
}

export interface TeamHubQuery_stage {
  id: number;
  title: string;
}

export interface TeamHubQuery {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: TeamHubQuery_user_by_pk | null;
  /**
   * fetch data from the table: "stage"
   */
  stage: TeamHubQuery_stage[];
}

export interface TeamHubQueryVariables {
  user_id: any;
}
