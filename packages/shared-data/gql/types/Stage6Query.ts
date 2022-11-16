/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Stage6Query
// ====================================================

export interface Stage6Query_team_by_pk_team_development_options_development_option {
  display_name: string | null;
}

export interface Stage6Query_team_by_pk_team_development_options {
  id: any;
  /**
   * An object relationship
   */
  development_option: Stage6Query_team_by_pk_team_development_options_development_option;
  shortlist: boolean;
}

export interface Stage6Query_team_by_pk {
  /**
   * An array relationship
   */
  team_development_options: Stage6Query_team_by_pk_team_development_options[];
}

export interface Stage6Query {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: Stage6Query_team_by_pk | null;
}

export interface Stage6QueryVariables {
  team_id: any;
}
