/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoggedInQuery
// ====================================================

export interface LoggedInQuery_user_by_pk_student_team_students_user {
  id: any;
  times_logged_in: number;
}

export interface LoggedInQuery_user_by_pk_student_team_students {
  id: any;
  /**
   * An object relationship
   */
  user: LoggedInQuery_user_by_pk_student_team_students_user;
}

export interface LoggedInQuery_user_by_pk_student_team {
  id: any;
  /**
   * An array relationship
   */
  students: LoggedInQuery_user_by_pk_student_team_students[];
}

export interface LoggedInQuery_user_by_pk_student {
  id: any;
  /**
   * An object relationship
   */
  team: LoggedInQuery_user_by_pk_student_team | null;
}

export interface LoggedInQuery_user_by_pk {
  id: any;
  first_name: string;
  /**
   * An object relationship
   */
  student: LoggedInQuery_user_by_pk_student | null;
}

export interface LoggedInQuery {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: LoggedInQuery_user_by_pk | null;
}

export interface LoggedInQueryVariables {
  user_id: any;
}
