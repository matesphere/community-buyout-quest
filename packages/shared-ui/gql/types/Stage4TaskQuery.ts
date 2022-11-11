/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Stage4TaskQuery
// ====================================================

export interface Stage4TaskQuery_team_by_pk_team_development_options_development_option {
  id: number;
  display_name: string | null;
  option: string;
}

export interface Stage4TaskQuery_team_by_pk_team_development_options {
  id: any;
  team_choice_name: string | null;
  shortlist: boolean;
  /**
   * An object relationship
   */
  development_option: Stage4TaskQuery_team_by_pk_team_development_options_development_option;
}

export interface Stage4TaskQuery_team_by_pk {
  id: any;
  /**
   * An array relationship
   */
  team_development_options: Stage4TaskQuery_team_by_pk_team_development_options[];
}

export interface Stage4TaskQuery {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: Stage4TaskQuery_team_by_pk | null;
}

export interface Stage4TaskQueryVariables {
  team_id: any;
}
