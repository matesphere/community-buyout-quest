/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ChooseShortlistOptions
// ====================================================

export interface ChooseShortlistOptions_update_team_development_option_returning_development_option {
  display_name: string | null;
}

export interface ChooseShortlistOptions_update_team_development_option_returning {
  /**
   * An object relationship
   */
  development_option: ChooseShortlistOptions_update_team_development_option_returning_development_option;
  shortlist: boolean;
}

export interface ChooseShortlistOptions_update_team_development_option {
  /**
   * data from the rows affected by the mutation
   */
  returning: ChooseShortlistOptions_update_team_development_option_returning[];
}

export interface ChooseShortlistOptions {
  /**
   * update data of the table: "team_development_option"
   */
  update_team_development_option: ChooseShortlistOptions_update_team_development_option | null;
}

export interface ChooseShortlistOptionsVariables {
  optionsToUpdate: any[];
}
