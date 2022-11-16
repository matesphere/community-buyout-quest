/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: StageQuery
// ====================================================

export interface StageQuery_team_by_pk_stage_progresses_documents {
  id: any;
  feedback: any | null;
}

export interface StageQuery_team_by_pk_stage_progresses {
  id: any;
  stage_id: number;
  status: stage_progress_status_enum_enum;
  /**
   * An array relationship
   */
  documents: StageQuery_team_by_pk_stage_progresses_documents[];
}

export interface StageQuery_team_by_pk_team_development_options_development_option {
  id: number;
  display_name: string | null;
  option: string;
}

export interface StageQuery_team_by_pk_team_development_options {
  id: any;
  team_choice_name: string | null;
  shortlist: boolean;
  /**
   * An object relationship
   */
  development_option: StageQuery_team_by_pk_team_development_options_development_option;
}

export interface StageQuery_team_by_pk {
  id: any;
  name: string;
  /**
   * An array relationship
   */
  stage_progresses: StageQuery_team_by_pk_stage_progresses[];
  /**
   * An array relationship
   */
  team_development_options: StageQuery_team_by_pk_team_development_options[];
}

export interface StageQuery_stage_by_pk {
  title: string;
}

export interface StageQuery {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: StageQuery_team_by_pk | null;
  /**
   * fetch data from the table: "stage" using primary key columns
   */
  stage_by_pk: StageQuery_stage_by_pk | null;
}

export interface StageQueryVariables {
  team_id: any;
  stage_id: number;
  includeDevOptions: boolean;
}
