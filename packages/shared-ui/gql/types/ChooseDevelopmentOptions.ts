/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { team_development_option_insert_input } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ChooseDevelopmentOptions
// ====================================================

export interface ChooseDevelopmentOptions_insert_team_development_option_returning {
  id: any;
}

export interface ChooseDevelopmentOptions_insert_team_development_option {
  /**
   * data from the rows affected by the mutation
   */
  returning: ChooseDevelopmentOptions_insert_team_development_option_returning[];
}

export interface ChooseDevelopmentOptions {
  /**
   * insert data into the table: "team_development_option"
   */
  insert_team_development_option: ChooseDevelopmentOptions_insert_team_development_option | null;
}

export interface ChooseDevelopmentOptionsVariables {
  objects: team_development_option_insert_input[];
}
