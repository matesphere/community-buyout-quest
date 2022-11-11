/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SwotExampleQuery
// ====================================================

export interface SwotExampleQuery_team_by_pk_stage_progresses_documents {
  doc_data: any | null;
}

export interface SwotExampleQuery_team_by_pk_stage_progresses {
  /**
   * An array relationship
   */
  documents: SwotExampleQuery_team_by_pk_stage_progresses_documents[];
}

export interface SwotExampleQuery_team_by_pk {
  id: any;
  /**
   * An array relationship
   */
  stage_progresses: SwotExampleQuery_team_by_pk_stage_progresses[];
}

export interface SwotExampleQuery_development_option {
  option: string;
  display_name: string | null;
}

export interface SwotExampleQuery {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: SwotExampleQuery_team_by_pk | null;
  /**
   * fetch data from the table: "development_option"
   */
  development_option: SwotExampleQuery_development_option[];
}

export interface SwotExampleQueryVariables {
  team_id: any;
}
