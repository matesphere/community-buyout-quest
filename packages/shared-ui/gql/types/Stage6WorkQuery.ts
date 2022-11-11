/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Stage6WorkQuery
// ====================================================

export interface Stage6WorkQuery_team_by_pk_stage_progresses_documents {
  doc_data: any | null;
}

export interface Stage6WorkQuery_team_by_pk_stage_progresses {
  stage_id: number;
  /**
   * An array relationship
   */
  documents: Stage6WorkQuery_team_by_pk_stage_progresses_documents[];
}

export interface Stage6WorkQuery_team_by_pk_team_development_options_development_option {
  option: string;
  display_name: string | null;
}

export interface Stage6WorkQuery_team_by_pk_team_development_options {
  shortlist: boolean;
  /**
   * An object relationship
   */
  development_option: Stage6WorkQuery_team_by_pk_team_development_options_development_option;
}

export interface Stage6WorkQuery_team_by_pk {
  id: any;
  /**
   * An array relationship
   */
  stage_progresses: Stage6WorkQuery_team_by_pk_stage_progresses[];
  /**
   * An array relationship
   */
  team_development_options: Stage6WorkQuery_team_by_pk_team_development_options[];
}

export interface Stage6WorkQuery {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: Stage6WorkQuery_team_by_pk | null;
}

export interface Stage6WorkQueryVariables {
  team_id: any;
  dev_option_id: any;
}
