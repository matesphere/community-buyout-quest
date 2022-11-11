/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Stage3TaskQuery
// ====================================================

export interface Stage3TaskQuery_team_by_pk_team_development_options {
  id: any;
}

export interface Stage3TaskQuery_team_by_pk {
  id: any;
  /**
   * An array relationship
   */
  team_development_options: Stage3TaskQuery_team_by_pk_team_development_options[];
}

export interface Stage3TaskQuery_development_option {
  id: number;
  option: string;
  display_name: string | null;
}

export interface Stage3TaskQuery {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: Stage3TaskQuery_team_by_pk | null;
  /**
   * fetch data from the table: "development_option"
   */
  development_option: Stage3TaskQuery_development_option[];
}

export interface Stage3TaskQueryVariables {
  team_id: any;
}
