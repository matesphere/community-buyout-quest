/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Locale system enumeration
 */
export enum Locale {
  en = "en",
  gd = "gd",
}

/**
 * System Scheduled Operation Status
 */
export enum ScheduledOperationStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

/**
 * System Scheduled Release Status
 */
export enum ScheduledReleaseStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

/**
 * Stage system enumeration
 */
export enum Stage {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

/**
 * System User Kind
 */
export enum UserKind {
  MEMBER = "MEMBER",
  PAT = "PAT",
  PUBLIC = "PUBLIC",
  WEBHOOK = "WEBHOOK",
}

/**
 * unique or primary key constraints on table "development_option"
 */
export enum development_option_constraint {
  development_option_pkey = "development_option_pkey",
}

/**
 * update columns of table "development_option"
 */
export enum development_option_update_column {
  display_name = "display_name",
  id = "id",
  model_swot = "model_swot",
  option = "option",
}

/**
 * unique or primary key constraints on table "document"
 */
export enum document_constraint {
  document_pkey = "document_pkey",
}

/**
 * unique or primary key constraints on table "document_status_enum"
 */
export enum document_status_enum_constraint {
  document_status_pkey = "document_status_pkey",
}

export enum document_status_enum_enum {
  draft = "draft",
  marked_failed = "marked_failed",
  marked_passed = "marked_passed",
  submitted = "submitted",
}

/**
 * update columns of table "document_status_enum"
 */
export enum document_status_enum_update_column {
  value = "value",
}

/**
 * update columns of table "document"
 */
export enum document_update_column {
  doc_data = "doc_data",
  feedback = "feedback",
  id = "id",
  stage_progress_id = "stage_progress_id",
  status = "status",
}

/**
 * unique or primary key constraints on table "quest"
 */
export enum quest_constraint {
  quest_pkey = "quest_pkey",
}

/**
 * unique or primary key constraints on table "quest_status_enum"
 */
export enum quest_status_enum_constraint {
  quest_status_enum_pkey = "quest_status_enum_pkey",
}

export enum quest_status_enum_enum {
  active = "active",
  complete = "complete",
  pending = "pending",
}

/**
 * update columns of table "quest_status_enum"
 */
export enum quest_status_enum_update_column {
  value = "value",
}

/**
 * update columns of table "quest"
 */
export enum quest_update_column {
  completed_at = "completed_at",
  id = "id",
  started_at = "started_at",
  status = "status",
  tutor_feedback = "tutor_feedback",
  tutor_id = "tutor_id",
}

/**
 * unique or primary key constraints on table "school"
 */
export enum school_constraint {
  school_pkey = "school_pkey",
}

/**
 * update columns of table "school"
 */
export enum school_update_column {
  id = "id",
  name = "name",
}

/**
 * unique or primary key constraints on table "stage"
 */
export enum stage_constraint {
  stage_pkey = "stage_pkey",
}

/**
 * unique or primary key constraints on table "stage_progress"
 */
export enum stage_progress_constraint {
  stage_progress_id_key = "stage_progress_id_key",
  stage_progress_pkey = "stage_progress_pkey",
  stage_progress_team_id_stage_id_key = "stage_progress_team_id_stage_id_key",
}

/**
 * unique or primary key constraints on table "stage_progress_status_enum"
 */
export enum stage_progress_status_enum_constraint {
  stage_progress_status_pkey = "stage_progress_status_pkey",
}

export enum stage_progress_status_enum_enum {
  completed = "completed",
  failed = "failed",
  submitted = "submitted",
  unlocked = "unlocked",
}

/**
 * update columns of table "stage_progress_status_enum"
 */
export enum stage_progress_status_enum_update_column {
  value = "value",
}

/**
 * update columns of table "stage_progress"
 */
export enum stage_progress_update_column {
  id = "id",
  stage_id = "stage_id",
  status = "status",
  team_id = "team_id",
}

/**
 * update columns of table "stage"
 */
export enum stage_update_column {
  id = "id",
  next_stage_id = "next_stage_id",
  prev_stage_id = "prev_stage_id",
  title = "title",
}

/**
 * unique or primary key constraints on table "student"
 */
export enum student_constraint {
  student_pkey = "student_pkey",
  student_user_id_key = "student_user_id_key",
}

/**
 * unique or primary key constraints on table "student_position_enum"
 */
export enum student_position_enum_constraint {
  student_position_pkey = "student_position_pkey",
}

export enum student_position_enum_enum {
  chairperson = "chairperson",
  secretary = "secretary",
  treasurer = "treasurer",
  vicechairperson = "vicechairperson",
}

/**
 * update columns of table "student_position_enum"
 */
export enum student_position_enum_update_column {
  value = "value",
}

/**
 * update columns of table "student"
 */
export enum student_update_column {
  id = "id",
  position = "position",
  school_id = "school_id",
  team_id = "team_id",
  user_id = "user_id",
}

/**
 * unique or primary key constraints on table "team"
 */
export enum team_constraint {
  team_name_key = "team_name_key",
  team_pkey = "team_pkey",
}

/**
 * unique or primary key constraints on table "team_development_option"
 */
export enum team_development_option_constraint {
  team_development_option_pkey = "team_development_option_pkey",
}

/**
 * update columns of table "team_development_option"
 */
export enum team_development_option_update_column {
  development_option_id = "development_option_id",
  id = "id",
  shortlist = "shortlist",
  team_choice_name = "team_choice_name",
  team_id = "team_id",
}

/**
 * update columns of table "team"
 */
export enum team_update_column {
  id = "id",
  logo = "logo",
  name = "name",
  quest_id = "quest_id",
}

/**
 * unique or primary key constraints on table "tutor"
 */
export enum tutor_constraint {
  tutor_pkey = "tutor_pkey",
  tutor_user_id_key = "tutor_user_id_key",
}

/**
 * update columns of table "tutor"
 */
export enum tutor_update_column {
  id = "id",
  school_id = "school_id",
  user_id = "user_id",
}

/**
 * unique or primary key constraints on table "user"
 */
export enum user_constraint {
  user_pkey = "user_pkey",
  user_username_key = "user_username_key",
}

/**
 * update columns of table "user"
 */
export enum user_update_column {
  email = "email",
  first_name = "first_name",
  id = "id",
  last_name = "last_name",
  last_seen = "last_seen",
  password = "password",
  times_logged_in = "times_logged_in",
  username = "username",
}

/**
 * Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'.
 */
export interface Boolean_comparison_exp {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: boolean[] | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: boolean[] | null;
}

/**
 * Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _iregex?: string | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _niregex?: string | null;
  _nlike?: string | null;
  _nregex?: string | null;
  _nsimilar?: string | null;
  _regex?: string | null;
  _similar?: string | null;
}

/**
 * Boolean expression to filter rows from the table "development_option". All fields are combined with a logical 'AND'.
 */
export interface development_option_bool_exp {
  _and?: development_option_bool_exp[] | null;
  _not?: development_option_bool_exp | null;
  _or?: development_option_bool_exp[] | null;
  display_name?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  model_swot?: jsonb_comparison_exp | null;
  option?: String_comparison_exp | null;
  team_development_options?: team_development_option_bool_exp | null;
}

/**
 * input type for inserting data into table "development_option"
 */
export interface development_option_insert_input {
  display_name?: string | null;
  id?: number | null;
  model_swot?: any | null;
  option?: string | null;
  team_development_options?: team_development_option_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "development_option"
 */
export interface development_option_obj_rel_insert_input {
  data: development_option_insert_input;
  on_conflict?: development_option_on_conflict | null;
}

/**
 * on conflict condition type for table "development_option"
 */
export interface development_option_on_conflict {
  constraint: development_option_constraint;
  update_columns: development_option_update_column[];
  where?: development_option_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "document"
 */
export interface document_arr_rel_insert_input {
  data: document_insert_input[];
  on_conflict?: document_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'.
 */
export interface document_bool_exp {
  _and?: document_bool_exp[] | null;
  _not?: document_bool_exp | null;
  _or?: document_bool_exp[] | null;
  doc_data?: jsonb_comparison_exp | null;
  document_status?: document_status_enum_bool_exp | null;
  feedback?: jsonb_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  stage_progress?: stage_progress_bool_exp | null;
  stage_progress_id?: uuid_comparison_exp | null;
  status?: document_status_enum_enum_comparison_exp | null;
}

/**
 * input type for inserting data into table "document"
 */
export interface document_insert_input {
  doc_data?: any | null;
  document_status?: document_status_enum_obj_rel_insert_input | null;
  feedback?: any | null;
  id?: any | null;
  stage_progress?: stage_progress_obj_rel_insert_input | null;
  stage_progress_id?: any | null;
  status?: document_status_enum_enum | null;
}

/**
 * on conflict condition type for table "document"
 */
export interface document_on_conflict {
  constraint: document_constraint;
  update_columns: document_update_column[];
  where?: document_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "document_status_enum". All fields are combined with a logical 'AND'.
 */
export interface document_status_enum_bool_exp {
  _and?: document_status_enum_bool_exp[] | null;
  _not?: document_status_enum_bool_exp | null;
  _or?: document_status_enum_bool_exp[] | null;
  documents?: document_bool_exp | null;
  value?: String_comparison_exp | null;
}

/**
 * Boolean expression to compare columns of type "document_status_enum_enum". All fields are combined with logical 'AND'.
 */
export interface document_status_enum_enum_comparison_exp {
  _eq?: document_status_enum_enum | null;
  _in?: document_status_enum_enum[] | null;
  _is_null?: boolean | null;
  _neq?: document_status_enum_enum | null;
  _nin?: document_status_enum_enum[] | null;
}

/**
 * input type for inserting data into table "document_status_enum"
 */
export interface document_status_enum_insert_input {
  documents?: document_arr_rel_insert_input | null;
  value?: string | null;
}

/**
 * input type for inserting object relation for remote table "document_status_enum"
 */
export interface document_status_enum_obj_rel_insert_input {
  data: document_status_enum_insert_input;
  on_conflict?: document_status_enum_on_conflict | null;
}

/**
 * on conflict condition type for table "document_status_enum"
 */
export interface document_status_enum_on_conflict {
  constraint: document_status_enum_constraint;
  update_columns: document_status_enum_update_column[];
  where?: document_status_enum_bool_exp | null;
}

/**
 * Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'.
 */
export interface jsonb_comparison_exp {
  _contained_in?: any | null;
  _contains?: any | null;
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _has_key?: string | null;
  _has_keys_all?: string[] | null;
  _has_keys_any?: string[] | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * input type for inserting array relation for remote table "quest"
 */
export interface quest_arr_rel_insert_input {
  data: quest_insert_input[];
  on_conflict?: quest_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "quest". All fields are combined with a logical 'AND'.
 */
export interface quest_bool_exp {
  _and?: quest_bool_exp[] | null;
  _not?: quest_bool_exp | null;
  _or?: quest_bool_exp[] | null;
  completed_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  quest_status_enum?: quest_status_enum_bool_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  status?: quest_status_enum_enum_comparison_exp | null;
  teams?: team_bool_exp | null;
  tutor?: tutor_bool_exp | null;
  tutor_feedback?: jsonb_comparison_exp | null;
  tutor_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "quest"
 */
export interface quest_insert_input {
  completed_at?: any | null;
  id?: any | null;
  quest_status_enum?: quest_status_enum_obj_rel_insert_input | null;
  started_at?: any | null;
  status?: quest_status_enum_enum | null;
  teams?: team_arr_rel_insert_input | null;
  tutor?: tutor_obj_rel_insert_input | null;
  tutor_feedback?: any | null;
  tutor_id?: any | null;
}

/**
 * input type for inserting object relation for remote table "quest"
 */
export interface quest_obj_rel_insert_input {
  data: quest_insert_input;
  on_conflict?: quest_on_conflict | null;
}

/**
 * on conflict condition type for table "quest"
 */
export interface quest_on_conflict {
  constraint: quest_constraint;
  update_columns: quest_update_column[];
  where?: quest_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "quest_status_enum". All fields are combined with a logical 'AND'.
 */
export interface quest_status_enum_bool_exp {
  _and?: quest_status_enum_bool_exp[] | null;
  _not?: quest_status_enum_bool_exp | null;
  _or?: quest_status_enum_bool_exp[] | null;
  quests?: quest_bool_exp | null;
  value?: String_comparison_exp | null;
}

/**
 * Boolean expression to compare columns of type "quest_status_enum_enum". All fields are combined with logical 'AND'.
 */
export interface quest_status_enum_enum_comparison_exp {
  _eq?: quest_status_enum_enum | null;
  _in?: quest_status_enum_enum[] | null;
  _is_null?: boolean | null;
  _neq?: quest_status_enum_enum | null;
  _nin?: quest_status_enum_enum[] | null;
}

/**
 * input type for inserting data into table "quest_status_enum"
 */
export interface quest_status_enum_insert_input {
  quests?: quest_arr_rel_insert_input | null;
  value?: string | null;
}

/**
 * input type for inserting object relation for remote table "quest_status_enum"
 */
export interface quest_status_enum_obj_rel_insert_input {
  data: quest_status_enum_insert_input;
  on_conflict?: quest_status_enum_on_conflict | null;
}

/**
 * on conflict condition type for table "quest_status_enum"
 */
export interface quest_status_enum_on_conflict {
  constraint: quest_status_enum_constraint;
  update_columns: quest_status_enum_update_column[];
  where?: quest_status_enum_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "school". All fields are combined with a logical 'AND'.
 */
export interface school_bool_exp {
  _and?: school_bool_exp[] | null;
  _not?: school_bool_exp | null;
  _or?: school_bool_exp[] | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  students?: student_bool_exp | null;
  tutors?: tutor_bool_exp | null;
}

/**
 * input type for inserting data into table "school"
 */
export interface school_insert_input {
  id?: any | null;
  name?: string | null;
  students?: student_arr_rel_insert_input | null;
  tutors?: tutor_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "school"
 */
export interface school_obj_rel_insert_input {
  data: school_insert_input;
  on_conflict?: school_on_conflict | null;
}

/**
 * on conflict condition type for table "school"
 */
export interface school_on_conflict {
  constraint: school_constraint;
  update_columns: school_update_column[];
  where?: school_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "stage". All fields are combined with a logical 'AND'.
 */
export interface stage_bool_exp {
  _and?: stage_bool_exp[] | null;
  _not?: stage_bool_exp | null;
  _or?: stage_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  next_stage_id?: Int_comparison_exp | null;
  prev_stage_id?: Int_comparison_exp | null;
  stage_progresses?: stage_progress_bool_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "stage"
 */
export interface stage_insert_input {
  id?: number | null;
  next_stage_id?: number | null;
  prev_stage_id?: number | null;
  stage_progresses?: stage_progress_arr_rel_insert_input | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "stage"
 */
export interface stage_obj_rel_insert_input {
  data: stage_insert_input;
  on_conflict?: stage_on_conflict | null;
}

/**
 * on conflict condition type for table "stage"
 */
export interface stage_on_conflict {
  constraint: stage_constraint;
  update_columns: stage_update_column[];
  where?: stage_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "stage_progress"
 */
export interface stage_progress_arr_rel_insert_input {
  data: stage_progress_insert_input[];
  on_conflict?: stage_progress_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "stage_progress". All fields are combined with a logical 'AND'.
 */
export interface stage_progress_bool_exp {
  _and?: stage_progress_bool_exp[] | null;
  _not?: stage_progress_bool_exp | null;
  _or?: stage_progress_bool_exp[] | null;
  documents?: document_bool_exp | null;
  id?: uuid_comparison_exp | null;
  stage?: stage_bool_exp | null;
  stage_id?: Int_comparison_exp | null;
  stage_progress_status_enum?: stage_progress_status_enum_bool_exp | null;
  status?: stage_progress_status_enum_enum_comparison_exp | null;
  team?: team_bool_exp | null;
  team_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "stage_progress"
 */
export interface stage_progress_insert_input {
  documents?: document_arr_rel_insert_input | null;
  id?: any | null;
  stage?: stage_obj_rel_insert_input | null;
  stage_id?: number | null;
  stage_progress_status_enum?: stage_progress_status_enum_obj_rel_insert_input | null;
  status?: stage_progress_status_enum_enum | null;
  team?: team_obj_rel_insert_input | null;
  team_id?: any | null;
}

/**
 * input type for inserting object relation for remote table "stage_progress"
 */
export interface stage_progress_obj_rel_insert_input {
  data: stage_progress_insert_input;
  on_conflict?: stage_progress_on_conflict | null;
}

/**
 * on conflict condition type for table "stage_progress"
 */
export interface stage_progress_on_conflict {
  constraint: stage_progress_constraint;
  update_columns: stage_progress_update_column[];
  where?: stage_progress_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "stage_progress_status_enum". All fields are combined with a logical 'AND'.
 */
export interface stage_progress_status_enum_bool_exp {
  _and?: stage_progress_status_enum_bool_exp[] | null;
  _not?: stage_progress_status_enum_bool_exp | null;
  _or?: stage_progress_status_enum_bool_exp[] | null;
  stage_progresses?: stage_progress_bool_exp | null;
  value?: String_comparison_exp | null;
}

/**
 * Boolean expression to compare columns of type "stage_progress_status_enum_enum". All fields are combined with logical 'AND'.
 */
export interface stage_progress_status_enum_enum_comparison_exp {
  _eq?: stage_progress_status_enum_enum | null;
  _in?: stage_progress_status_enum_enum[] | null;
  _is_null?: boolean | null;
  _neq?: stage_progress_status_enum_enum | null;
  _nin?: stage_progress_status_enum_enum[] | null;
}

/**
 * input type for inserting data into table "stage_progress_status_enum"
 */
export interface stage_progress_status_enum_insert_input {
  stage_progresses?: stage_progress_arr_rel_insert_input | null;
  value?: string | null;
}

/**
 * input type for inserting object relation for remote table "stage_progress_status_enum"
 */
export interface stage_progress_status_enum_obj_rel_insert_input {
  data: stage_progress_status_enum_insert_input;
  on_conflict?: stage_progress_status_enum_on_conflict | null;
}

/**
 * on conflict condition type for table "stage_progress_status_enum"
 */
export interface stage_progress_status_enum_on_conflict {
  constraint: stage_progress_status_enum_constraint;
  update_columns: stage_progress_status_enum_update_column[];
  where?: stage_progress_status_enum_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "student"
 */
export interface student_arr_rel_insert_input {
  data: student_insert_input[];
  on_conflict?: student_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "student". All fields are combined with a logical 'AND'.
 */
export interface student_bool_exp {
  _and?: student_bool_exp[] | null;
  _not?: student_bool_exp | null;
  _or?: student_bool_exp[] | null;
  id?: uuid_comparison_exp | null;
  position?: student_position_enum_enum_comparison_exp | null;
  school?: school_bool_exp | null;
  school_id?: uuid_comparison_exp | null;
  student_position_enum?: student_position_enum_bool_exp | null;
  team?: team_bool_exp | null;
  team_id?: uuid_comparison_exp | null;
  user?: user_bool_exp | null;
  user_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "student"
 */
export interface student_insert_input {
  id?: any | null;
  position?: student_position_enum_enum | null;
  school?: school_obj_rel_insert_input | null;
  school_id?: any | null;
  student_position_enum?: student_position_enum_obj_rel_insert_input | null;
  team?: team_obj_rel_insert_input | null;
  team_id?: any | null;
  user?: user_obj_rel_insert_input | null;
  user_id?: any | null;
}

/**
 * input type for inserting object relation for remote table "student"
 */
export interface student_obj_rel_insert_input {
  data: student_insert_input;
  on_conflict?: student_on_conflict | null;
}

/**
 * on conflict condition type for table "student"
 */
export interface student_on_conflict {
  constraint: student_constraint;
  update_columns: student_update_column[];
  where?: student_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "student_position_enum". All fields are combined with a logical 'AND'.
 */
export interface student_position_enum_bool_exp {
  _and?: student_position_enum_bool_exp[] | null;
  _not?: student_position_enum_bool_exp | null;
  _or?: student_position_enum_bool_exp[] | null;
  students?: student_bool_exp | null;
  value?: String_comparison_exp | null;
}

/**
 * Boolean expression to compare columns of type "student_position_enum_enum". All fields are combined with logical 'AND'.
 */
export interface student_position_enum_enum_comparison_exp {
  _eq?: student_position_enum_enum | null;
  _in?: student_position_enum_enum[] | null;
  _is_null?: boolean | null;
  _neq?: student_position_enum_enum | null;
  _nin?: student_position_enum_enum[] | null;
}

/**
 * input type for inserting data into table "student_position_enum"
 */
export interface student_position_enum_insert_input {
  students?: student_arr_rel_insert_input | null;
  value?: string | null;
}

/**
 * input type for inserting object relation for remote table "student_position_enum"
 */
export interface student_position_enum_obj_rel_insert_input {
  data: student_position_enum_insert_input;
  on_conflict?: student_position_enum_on_conflict | null;
}

/**
 * on conflict condition type for table "student_position_enum"
 */
export interface student_position_enum_on_conflict {
  constraint: student_position_enum_constraint;
  update_columns: student_position_enum_update_column[];
  where?: student_position_enum_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "team"
 */
export interface team_arr_rel_insert_input {
  data: team_insert_input[];
  on_conflict?: team_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'.
 */
export interface team_bool_exp {
  _and?: team_bool_exp[] | null;
  _not?: team_bool_exp | null;
  _or?: team_bool_exp[] | null;
  id?: uuid_comparison_exp | null;
  is_valid_team?: Boolean_comparison_exp | null;
  logo?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  quest?: quest_bool_exp | null;
  quest_id?: uuid_comparison_exp | null;
  stage_progresses?: stage_progress_bool_exp | null;
  students?: student_bool_exp | null;
  team_development_options?: team_development_option_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "team_development_option"
 */
export interface team_development_option_arr_rel_insert_input {
  data: team_development_option_insert_input[];
  on_conflict?: team_development_option_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "team_development_option". All fields are combined with a logical 'AND'.
 */
export interface team_development_option_bool_exp {
  _and?: team_development_option_bool_exp[] | null;
  _not?: team_development_option_bool_exp | null;
  _or?: team_development_option_bool_exp[] | null;
  development_option?: development_option_bool_exp | null;
  development_option_id?: Int_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  shortlist?: Boolean_comparison_exp | null;
  team?: team_bool_exp | null;
  team_choice_name?: String_comparison_exp | null;
  team_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "team_development_option"
 */
export interface team_development_option_insert_input {
  development_option?: development_option_obj_rel_insert_input | null;
  development_option_id?: number | null;
  id?: any | null;
  shortlist?: boolean | null;
  team?: team_obj_rel_insert_input | null;
  team_choice_name?: string | null;
  team_id?: any | null;
}

/**
 * on conflict condition type for table "team_development_option"
 */
export interface team_development_option_on_conflict {
  constraint: team_development_option_constraint;
  update_columns: team_development_option_update_column[];
  where?: team_development_option_bool_exp | null;
}

/**
 * input type for inserting data into table "team"
 */
export interface team_insert_input {
  id?: any | null;
  logo?: string | null;
  name?: string | null;
  quest?: quest_obj_rel_insert_input | null;
  quest_id?: any | null;
  stage_progresses?: stage_progress_arr_rel_insert_input | null;
  students?: student_arr_rel_insert_input | null;
  team_development_options?: team_development_option_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "team"
 */
export interface team_obj_rel_insert_input {
  data: team_insert_input;
  on_conflict?: team_on_conflict | null;
}

/**
 * on conflict condition type for table "team"
 */
export interface team_on_conflict {
  constraint: team_constraint;
  update_columns: team_update_column[];
  where?: team_bool_exp | null;
}

/**
 * Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * input type for inserting array relation for remote table "tutor"
 */
export interface tutor_arr_rel_insert_input {
  data: tutor_insert_input[];
  on_conflict?: tutor_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "tutor". All fields are combined with a logical 'AND'.
 */
export interface tutor_bool_exp {
  _and?: tutor_bool_exp[] | null;
  _not?: tutor_bool_exp | null;
  _or?: tutor_bool_exp[] | null;
  id?: uuid_comparison_exp | null;
  quests?: quest_bool_exp | null;
  school?: school_bool_exp | null;
  school_id?: uuid_comparison_exp | null;
  user?: user_bool_exp | null;
  user_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "tutor"
 */
export interface tutor_insert_input {
  id?: any | null;
  quests?: quest_arr_rel_insert_input | null;
  school?: school_obj_rel_insert_input | null;
  school_id?: any | null;
  user?: user_obj_rel_insert_input | null;
  user_id?: any | null;
}

/**
 * input type for inserting object relation for remote table "tutor"
 */
export interface tutor_obj_rel_insert_input {
  data: tutor_insert_input;
  on_conflict?: tutor_on_conflict | null;
}

/**
 * on conflict condition type for table "tutor"
 */
export interface tutor_on_conflict {
  constraint: tutor_constraint;
  update_columns: tutor_update_column[];
  where?: tutor_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'.
 */
export interface user_bool_exp {
  _and?: user_bool_exp[] | null;
  _not?: user_bool_exp | null;
  _or?: user_bool_exp[] | null;
  email?: String_comparison_exp | null;
  first_name?: String_comparison_exp | null;
  full_name?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  last_name?: String_comparison_exp | null;
  last_seen?: timestamptz_comparison_exp | null;
  password?: String_comparison_exp | null;
  student?: student_bool_exp | null;
  times_logged_in?: Int_comparison_exp | null;
  tutor?: tutor_bool_exp | null;
  username?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "user"
 */
export interface user_insert_input {
  email?: string | null;
  first_name?: string | null;
  id?: any | null;
  last_name?: string | null;
  last_seen?: any | null;
  password?: string | null;
  student?: student_obj_rel_insert_input | null;
  times_logged_in?: number | null;
  tutor?: tutor_obj_rel_insert_input | null;
  username?: string | null;
}

/**
 * input type for inserting object relation for remote table "user"
 */
export interface user_obj_rel_insert_input {
  data: user_insert_input;
  on_conflict?: user_on_conflict | null;
}

/**
 * on conflict condition type for table "user"
 */
export interface user_on_conflict {
  constraint: user_constraint;
  update_columns: user_update_column[];
  where?: user_bool_exp | null;
}

/**
 * Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'.
 */
export interface uuid_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
