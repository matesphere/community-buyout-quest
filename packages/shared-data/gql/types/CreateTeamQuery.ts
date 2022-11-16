/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CreateTeamQuery
// ====================================================

export interface CreateTeamQuery_user_by_pk_tutor {
  id: any;
}

export interface CreateTeamQuery_user_by_pk {
  id: any;
  /**
   * An object relationship
   */
  tutor: CreateTeamQuery_user_by_pk_tutor | null;
}

export interface CreateTeamQuery {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: CreateTeamQuery_user_by_pk | null;
}

export interface CreateTeamQueryVariables {
  user_id: any;
}
