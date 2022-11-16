/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetTeamLogo
// ====================================================

export interface SetTeamLogo_update_team_by_pk {
  id: any;
  logo: string | null;
}

export interface SetTeamLogo {
  /**
   * update single row of the table: "team"
   */
  update_team_by_pk: SetTeamLogo_update_team_by_pk | null;
}

export interface SetTeamLogoVariables {
  team_id: any;
  logo: string;
}
