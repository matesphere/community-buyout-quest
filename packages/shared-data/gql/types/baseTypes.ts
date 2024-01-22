export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Json: any;
  Long: any;
  RichTextAST: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  iconDevelopmentOption: Array<DevelopmentOption>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageInfo: Array<Info>;
  informationMainImageDevelopmentOption: Array<DevelopmentOption>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetIconDevelopmentOptionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<DevelopmentOptionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DevelopmentOptionWhereInput>;
};


/** Asset system model */
export type AssetImageInfoArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<InfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoWhereInput>;
};


/** Asset system model */
export type AssetInformationMainImageDevelopmentOptionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<DevelopmentOptionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DevelopmentOptionWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  iconDevelopmentOption?: InputMaybe<DevelopmentOptionCreateManyInlineInput>;
  imageInfo?: InputMaybe<InfoCreateManyInlineInput>;
  informationMainImageDevelopmentOption?: InputMaybe<DevelopmentOptionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  iconDevelopmentOption_every?: InputMaybe<DevelopmentOptionWhereInput>;
  iconDevelopmentOption_none?: InputMaybe<DevelopmentOptionWhereInput>;
  iconDevelopmentOption_some?: InputMaybe<DevelopmentOptionWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageInfo_every?: InputMaybe<InfoWhereInput>;
  imageInfo_none?: InputMaybe<InfoWhereInput>;
  imageInfo_some?: InputMaybe<InfoWhereInput>;
  informationMainImageDevelopmentOption_every?: InputMaybe<DevelopmentOptionWhereInput>;
  informationMainImageDevelopmentOption_none?: InputMaybe<DevelopmentOptionWhereInput>;
  informationMainImageDevelopmentOption_some?: InputMaybe<DevelopmentOptionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  iconDevelopmentOption?: InputMaybe<DevelopmentOptionUpdateManyInlineInput>;
  imageInfo?: InputMaybe<InfoUpdateManyInlineInput>;
  informationMainImageDevelopmentOption?: InputMaybe<DevelopmentOptionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  iconDevelopmentOption_every?: InputMaybe<DevelopmentOptionWhereInput>;
  iconDevelopmentOption_none?: InputMaybe<DevelopmentOptionWhereInput>;
  iconDevelopmentOption_some?: InputMaybe<DevelopmentOptionWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageInfo_every?: InputMaybe<InfoWhereInput>;
  imageInfo_none?: InputMaybe<InfoWhereInput>;
  imageInfo_some?: InputMaybe<InfoWhereInput>;
  informationMainImageDevelopmentOption_every?: InputMaybe<DevelopmentOptionWhereInput>;
  informationMainImageDevelopmentOption_none?: InputMaybe<DevelopmentOptionWhereInput>;
  informationMainImageDevelopmentOption_some?: InputMaybe<DevelopmentOptionWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type CapitalCosts = Entity & {
  __typename?: 'CapitalCosts';
  details: RichText;
  funding: RichText;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

export type Checklist = Entity & Node & {
  __typename?: 'Checklist';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Checklist>;
  /** List of Checklist versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  item: Array<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Checklist>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  stageNumber: Scalars['Int'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ChecklistCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ChecklistCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ChecklistDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ChecklistHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ChecklistLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ChecklistPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ChecklistPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ChecklistScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ChecklistUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ChecklistUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

/** A connection to a list of items. */
export type ChecklistConnection = {
  __typename?: 'ChecklistConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ChecklistEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ChecklistCreateInput = {
  cksmc1goj0t7t01xnf4dw7vi9?: InputMaybe<StageLandingPageCreateManyInlineInput>;
  cksmc87jz0uud01yu0roc3o1j?: InputMaybe<StageTaskCreateManyInlineInput>;
  cksnopkbt1ca601yu1pzj1h7s?: InputMaybe<StageTaskPageCreateManyInlineInput>;
  cksq9r4ob369a01xn3iy4g7cl?: InputMaybe<DevelopmentOptionCreateManyInlineInput>;
  cksqevq1g3fr001y2dkbk22se?: InputMaybe<InfoCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** item input for default locale (en) */
  item?: InputMaybe<Array<Scalars['String']>>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ChecklistCreateLocalizationsInput>;
  stageNumber: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChecklistCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  item?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChecklistCreateLocalizationInput = {
  /** Localization input */
  data: ChecklistCreateLocalizationDataInput;
  locale: Locale;
};

export type ChecklistCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ChecklistCreateLocalizationInput>>;
};

export type ChecklistCreateOneInlineInput = {
  /** Connect one existing Checklist document */
  connect?: InputMaybe<ChecklistWhereUniqueInput>;
  /** Create and connect one Checklist document */
  create?: InputMaybe<ChecklistCreateInput>;
};

/** An edge in a connection. */
export type ChecklistEdge = {
  __typename?: 'ChecklistEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Checklist;
};

/** Identifies documents */
export type ChecklistManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChecklistWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChecklistWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChecklistWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ChecklistWhereStageInput>;
  documentInStages_none?: InputMaybe<ChecklistWhereStageInput>;
  documentInStages_some?: InputMaybe<ChecklistWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ChecklistOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ItemAsc = 'item_ASC',
  ItemDesc = 'item_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StageNumberAsc = 'stageNumber_ASC',
  StageNumberDesc = 'stageNumber_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ChecklistUpdateInput = {
  cksmc1goj0t7t01xnf4dw7vi9?: InputMaybe<StageLandingPageUpdateManyInlineInput>;
  cksmc87jz0uud01yu0roc3o1j?: InputMaybe<StageTaskUpdateManyInlineInput>;
  cksnopkbt1ca601yu1pzj1h7s?: InputMaybe<StageTaskPageUpdateManyInlineInput>;
  cksq9r4ob369a01xn3iy4g7cl?: InputMaybe<DevelopmentOptionUpdateManyInlineInput>;
  cksqevq1g3fr001y2dkbk22se?: InputMaybe<InfoUpdateManyInlineInput>;
  /** item input for default locale (en) */
  item?: InputMaybe<Array<Scalars['String']>>;
  /** Manage document localizations */
  localizations?: InputMaybe<ChecklistUpdateLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
};

export type ChecklistUpdateLocalizationDataInput = {
  item?: InputMaybe<Array<Scalars['String']>>;
};

export type ChecklistUpdateLocalizationInput = {
  data: ChecklistUpdateLocalizationDataInput;
  locale: Locale;
};

export type ChecklistUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ChecklistCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ChecklistUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ChecklistUpsertLocalizationInput>>;
};

export type ChecklistUpdateManyInput = {
  /** item input for default locale (en) */
  item?: InputMaybe<Array<Scalars['String']>>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ChecklistUpdateManyLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
};

export type ChecklistUpdateManyLocalizationDataInput = {
  item?: InputMaybe<Array<Scalars['String']>>;
};

export type ChecklistUpdateManyLocalizationInput = {
  data: ChecklistUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ChecklistUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ChecklistUpdateManyLocalizationInput>>;
};

export type ChecklistUpdateOneInlineInput = {
  /** Connect existing Checklist document */
  connect?: InputMaybe<ChecklistWhereUniqueInput>;
  /** Create and connect one Checklist document */
  create?: InputMaybe<ChecklistCreateInput>;
  /** Delete currently connected Checklist document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Checklist document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Checklist document */
  update?: InputMaybe<ChecklistUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Checklist document */
  upsert?: InputMaybe<ChecklistUpsertWithNestedWhereUniqueInput>;
};

export type ChecklistUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ChecklistUpdateInput;
  /** Unique document search */
  where: ChecklistWhereUniqueInput;
};

export type ChecklistUpsertInput = {
  /** Create document if it didn't exist */
  create: ChecklistCreateInput;
  /** Update document if it exists */
  update: ChecklistUpdateInput;
};

export type ChecklistUpsertLocalizationInput = {
  create: ChecklistCreateLocalizationDataInput;
  locale: Locale;
  update: ChecklistUpdateLocalizationDataInput;
};

export type ChecklistUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ChecklistUpsertInput;
  /** Unique document search */
  where: ChecklistWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ChecklistWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ChecklistWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChecklistWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChecklistWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChecklistWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ChecklistWhereStageInput>;
  documentInStages_none?: InputMaybe<ChecklistWhereStageInput>;
  documentInStages_some?: InputMaybe<ChecklistWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  item?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  item_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  item_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  item_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  item_not?: InputMaybe<Array<Scalars['String']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ChecklistWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChecklistWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChecklistWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChecklistWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ChecklistWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Checklist record uniquely */
export type ChecklistWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type DevelopmentOption = Entity & Node & {
  __typename?: 'DevelopmentOption';
  checklist?: Maybe<Checklist>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<DevelopmentOption>;
  fundingOptions?: Maybe<RichText>;
  /** List of DevelopmentOption versions */
  history: Array<Version>;
  icon: Asset;
  /** The unique identifier */
  id: Scalars['ID'];
  informationMainImage?: Maybe<Asset>;
  /** Read info text */
  intro?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<DevelopmentOption>;
  mainText?: Maybe<RichText>;
  modelBusinessPlan?: Maybe<ModelBusinessPlan>;
  modelSwot?: Maybe<ModelSwot>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** Information Page Title */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type DevelopmentOptionChecklistArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DevelopmentOptionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type DevelopmentOptionCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DevelopmentOptionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type DevelopmentOptionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type DevelopmentOptionIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DevelopmentOptionInformationMainImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DevelopmentOptionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type DevelopmentOptionModelBusinessPlanArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DevelopmentOptionModelSwotArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DevelopmentOptionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type DevelopmentOptionPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DevelopmentOptionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type DevelopmentOptionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type DevelopmentOptionUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type DevelopmentOptionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DevelopmentOptionWhereUniqueInput;
};

/** A connection to a list of items. */
export type DevelopmentOptionConnection = {
  __typename?: 'DevelopmentOptionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DevelopmentOptionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DevelopmentOptionCreateInput = {
  checklist?: InputMaybe<ChecklistCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fundingOptions?: InputMaybe<Scalars['RichTextAST']>;
  icon: AssetCreateOneInlineInput;
  informationMainImage?: InputMaybe<AssetCreateOneInlineInput>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<DevelopmentOptionCreateLocalizationsInput>;
  /** mainText input for default locale (en) */
  mainText?: InputMaybe<Scalars['RichTextAST']>;
  modelBusinessPlan?: InputMaybe<ModelBusinessPlanCreateOneInlineInput>;
  modelSwot?: InputMaybe<ModelSwotCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DevelopmentOptionCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  intro?: InputMaybe<Scalars['String']>;
  mainText?: InputMaybe<Scalars['RichTextAST']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DevelopmentOptionCreateLocalizationInput = {
  /** Localization input */
  data: DevelopmentOptionCreateLocalizationDataInput;
  locale: Locale;
};

export type DevelopmentOptionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<DevelopmentOptionCreateLocalizationInput>>;
};

export type DevelopmentOptionCreateManyInlineInput = {
  /** Connect multiple existing DevelopmentOption documents */
  connect?: InputMaybe<Array<DevelopmentOptionWhereUniqueInput>>;
  /** Create and connect multiple existing DevelopmentOption documents */
  create?: InputMaybe<Array<DevelopmentOptionCreateInput>>;
};

/** An edge in a connection. */
export type DevelopmentOptionEdge = {
  __typename?: 'DevelopmentOptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DevelopmentOption;
};

/** Identifies documents */
export type DevelopmentOptionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DevelopmentOptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DevelopmentOptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DevelopmentOptionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<DevelopmentOptionWhereStageInput>;
  documentInStages_none?: InputMaybe<DevelopmentOptionWhereStageInput>;
  documentInStages_some?: InputMaybe<DevelopmentOptionWhereStageInput>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  informationMainImage?: InputMaybe<AssetWhereInput>;
  modelBusinessPlan?: InputMaybe<ModelBusinessPlanWhereInput>;
  modelSwot?: InputMaybe<ModelSwotWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum DevelopmentOptionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type DevelopmentOptionUpdateInput = {
  checklist?: InputMaybe<ChecklistUpdateOneInlineInput>;
  fundingOptions?: InputMaybe<Scalars['RichTextAST']>;
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  informationMainImage?: InputMaybe<AssetUpdateOneInlineInput>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<DevelopmentOptionUpdateLocalizationsInput>;
  /** mainText input for default locale (en) */
  mainText?: InputMaybe<Scalars['RichTextAST']>;
  modelBusinessPlan?: InputMaybe<ModelBusinessPlanUpdateOneInlineInput>;
  modelSwot?: InputMaybe<ModelSwotUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type DevelopmentOptionUpdateLocalizationDataInput = {
  intro?: InputMaybe<Scalars['String']>;
  mainText?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DevelopmentOptionUpdateLocalizationInput = {
  data: DevelopmentOptionUpdateLocalizationDataInput;
  locale: Locale;
};

export type DevelopmentOptionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<DevelopmentOptionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<DevelopmentOptionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<DevelopmentOptionUpsertLocalizationInput>>;
};

export type DevelopmentOptionUpdateManyInlineInput = {
  /** Connect multiple existing DevelopmentOption documents */
  connect?: InputMaybe<Array<DevelopmentOptionConnectInput>>;
  /** Create and connect multiple DevelopmentOption documents */
  create?: InputMaybe<Array<DevelopmentOptionCreateInput>>;
  /** Delete multiple DevelopmentOption documents */
  delete?: InputMaybe<Array<DevelopmentOptionWhereUniqueInput>>;
  /** Disconnect multiple DevelopmentOption documents */
  disconnect?: InputMaybe<Array<DevelopmentOptionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing DevelopmentOption documents */
  set?: InputMaybe<Array<DevelopmentOptionWhereUniqueInput>>;
  /** Update multiple DevelopmentOption documents */
  update?: InputMaybe<Array<DevelopmentOptionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple DevelopmentOption documents */
  upsert?: InputMaybe<Array<DevelopmentOptionUpsertWithNestedWhereUniqueInput>>;
};

export type DevelopmentOptionUpdateManyInput = {
  fundingOptions?: InputMaybe<Scalars['RichTextAST']>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<DevelopmentOptionUpdateManyLocalizationsInput>;
  /** mainText input for default locale (en) */
  mainText?: InputMaybe<Scalars['RichTextAST']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type DevelopmentOptionUpdateManyLocalizationDataInput = {
  intro?: InputMaybe<Scalars['String']>;
  mainText?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DevelopmentOptionUpdateManyLocalizationInput = {
  data: DevelopmentOptionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type DevelopmentOptionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<DevelopmentOptionUpdateManyLocalizationInput>>;
};

export type DevelopmentOptionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DevelopmentOptionUpdateInput;
  /** Unique document search */
  where: DevelopmentOptionWhereUniqueInput;
};

export type DevelopmentOptionUpsertInput = {
  /** Create document if it didn't exist */
  create: DevelopmentOptionCreateInput;
  /** Update document if it exists */
  update: DevelopmentOptionUpdateInput;
};

export type DevelopmentOptionUpsertLocalizationInput = {
  create: DevelopmentOptionCreateLocalizationDataInput;
  locale: Locale;
  update: DevelopmentOptionUpdateLocalizationDataInput;
};

export type DevelopmentOptionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DevelopmentOptionUpsertInput;
  /** Unique document search */
  where: DevelopmentOptionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type DevelopmentOptionWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type DevelopmentOptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DevelopmentOptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DevelopmentOptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DevelopmentOptionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<DevelopmentOptionWhereStageInput>;
  documentInStages_none?: InputMaybe<DevelopmentOptionWhereStageInput>;
  documentInStages_some?: InputMaybe<DevelopmentOptionWhereStageInput>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  informationMainImage?: InputMaybe<AssetWhereInput>;
  intro?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  intro_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  intro_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  intro_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  intro_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  intro_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  intro_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  intro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  intro_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  intro_starts_with?: InputMaybe<Scalars['String']>;
  modelBusinessPlan?: InputMaybe<ModelBusinessPlanWhereInput>;
  modelSwot?: InputMaybe<ModelSwotWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type DevelopmentOptionWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DevelopmentOptionWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DevelopmentOptionWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DevelopmentOptionWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<DevelopmentOptionWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References DevelopmentOption record uniquely */
export type DevelopmentOptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  CapitalCosts = 'CapitalCosts',
  Checklist = 'Checklist',
  DevelopmentOption = 'DevelopmentOption',
  FundingSource = 'FundingSource',
  HelpfulInfo = 'HelpfulInfo',
  Info = 'Info',
  ModelBusinessPlan = 'ModelBusinessPlan',
  ModelSwot = 'ModelSwot',
  PresentationTipsPage = 'PresentationTipsPage',
  RunningCostItem = 'RunningCostItem',
  RunningCostsSection = 'RunningCostsSection',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  SetupCostItem = 'SetupCostItem',
  SetupCostsSection = 'SetupCostsSection',
  StageLandingPage = 'StageLandingPage',
  StageTask = 'StageTask',
  StageTaskPage = 'StageTaskPage',
  TaskToComplete = 'TaskToComplete',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type FundingSource = Entity & {
  __typename?: 'FundingSource';
  amount: Scalars['Int'];
  funder: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

export type FundingSourceCreateInput = {
  amount: Scalars['Int'];
  funder: Scalars['String'];
};

export type FundingSourceCreateManyInlineInput = {
  /** Create and connect multiple existing FundingSource documents */
  create?: InputMaybe<Array<FundingSourceCreateInput>>;
};

export type FundingSourceCreateWithPositionInput = {
  /** Document to create */
  data: FundingSourceCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

export enum FundingSourceOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  FunderAsc = 'funder_ASC',
  FunderDesc = 'funder_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type FundingSourceUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  funder?: InputMaybe<Scalars['String']>;
};

export type FundingSourceUpdateManyInlineInput = {
  /** Create and connect multiple FundingSource component instances */
  create?: InputMaybe<Array<FundingSourceCreateWithPositionInput>>;
  /** Delete multiple FundingSource documents */
  delete?: InputMaybe<Array<FundingSourceWhereUniqueInput>>;
  /** Update multiple FundingSource component instances */
  update?: InputMaybe<Array<FundingSourceUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FundingSource component instances */
  upsert?: InputMaybe<Array<FundingSourceUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FundingSourceUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FundingSourceUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FundingSourceWhereUniqueInput;
};

export type FundingSourceUpsertInput = {
  /** Create document if it didn't exist */
  create: FundingSourceCreateInput;
  /** Update document if it exists */
  update: FundingSourceUpdateInput;
};

export type FundingSourceUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FundingSourceUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FundingSourceWhereUniqueInput;
};

/** Identifies documents */
export type FundingSourceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FundingSourceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FundingSourceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FundingSourceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  amount_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  amount_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  amount_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  amount_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  amount_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  funder?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  funder_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  funder_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  funder_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  funder_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  funder_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  funder_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  funder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  funder_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  funder_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References FundingSource record uniquely */
export type FundingSourceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type HelpfulInfo = Entity & Node & {
  __typename?: 'HelpfulInfo';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<HelpfulInfo>;
  /** List of HelpfulInfo versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  info: RichText;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<HelpfulInfo>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  stageNumber: Scalars['Int'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type HelpfulInfoCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type HelpfulInfoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HelpfulInfoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type HelpfulInfoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type HelpfulInfoLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type HelpfulInfoPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type HelpfulInfoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HelpfulInfoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type HelpfulInfoUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type HelpfulInfoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

/** A connection to a list of items. */
export type HelpfulInfoConnection = {
  __typename?: 'HelpfulInfoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HelpfulInfoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HelpfulInfoCreateInput = {
  cksmc9czo0t9901xn047yfiro?: InputMaybe<StageTaskCreateManyInlineInput>;
  cksmc215y0us801yudj7z4n3i?: InputMaybe<StageLandingPageCreateManyInlineInput>;
  cksnoq7jg1c7v01xn58atfv6o?: InputMaybe<StageTaskPageCreateManyInlineInput>;
  cksqevglx3chq01yu9wz61b9s?: InputMaybe<InfoCreateManyInlineInput>;
  cksql58573inh01y23ue7bkwr?: InputMaybe<PresentationTipsPageCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** info input for default locale (en) */
  info: Scalars['RichTextAST'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<HelpfulInfoCreateLocalizationsInput>;
  stageNumber: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HelpfulInfoCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  info: Scalars['RichTextAST'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HelpfulInfoCreateLocalizationInput = {
  /** Localization input */
  data: HelpfulInfoCreateLocalizationDataInput;
  locale: Locale;
};

export type HelpfulInfoCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<HelpfulInfoCreateLocalizationInput>>;
};

export type HelpfulInfoCreateOneInlineInput = {
  /** Connect one existing HelpfulInfo document */
  connect?: InputMaybe<HelpfulInfoWhereUniqueInput>;
  /** Create and connect one HelpfulInfo document */
  create?: InputMaybe<HelpfulInfoCreateInput>;
};

/** An edge in a connection. */
export type HelpfulInfoEdge = {
  __typename?: 'HelpfulInfoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HelpfulInfo;
};

/** Identifies documents */
export type HelpfulInfoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HelpfulInfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HelpfulInfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HelpfulInfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HelpfulInfoWhereStageInput>;
  documentInStages_none?: InputMaybe<HelpfulInfoWhereStageInput>;
  documentInStages_some?: InputMaybe<HelpfulInfoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum HelpfulInfoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StageNumberAsc = 'stageNumber_ASC',
  StageNumberDesc = 'stageNumber_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HelpfulInfoUpdateInput = {
  cksmc9czo0t9901xn047yfiro?: InputMaybe<StageTaskUpdateManyInlineInput>;
  cksmc215y0us801yudj7z4n3i?: InputMaybe<StageLandingPageUpdateManyInlineInput>;
  cksnoq7jg1c7v01xn58atfv6o?: InputMaybe<StageTaskPageUpdateManyInlineInput>;
  cksqevglx3chq01yu9wz61b9s?: InputMaybe<InfoUpdateManyInlineInput>;
  cksql58573inh01y23ue7bkwr?: InputMaybe<PresentationTipsPageUpdateManyInlineInput>;
  /** info input for default locale (en) */
  info?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<HelpfulInfoUpdateLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
};

export type HelpfulInfoUpdateLocalizationDataInput = {
  info?: InputMaybe<Scalars['RichTextAST']>;
};

export type HelpfulInfoUpdateLocalizationInput = {
  data: HelpfulInfoUpdateLocalizationDataInput;
  locale: Locale;
};

export type HelpfulInfoUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<HelpfulInfoCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<HelpfulInfoUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<HelpfulInfoUpsertLocalizationInput>>;
};

export type HelpfulInfoUpdateManyInput = {
  /** info input for default locale (en) */
  info?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<HelpfulInfoUpdateManyLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
};

export type HelpfulInfoUpdateManyLocalizationDataInput = {
  info?: InputMaybe<Scalars['RichTextAST']>;
};

export type HelpfulInfoUpdateManyLocalizationInput = {
  data: HelpfulInfoUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type HelpfulInfoUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<HelpfulInfoUpdateManyLocalizationInput>>;
};

export type HelpfulInfoUpdateOneInlineInput = {
  /** Connect existing HelpfulInfo document */
  connect?: InputMaybe<HelpfulInfoWhereUniqueInput>;
  /** Create and connect one HelpfulInfo document */
  create?: InputMaybe<HelpfulInfoCreateInput>;
  /** Delete currently connected HelpfulInfo document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected HelpfulInfo document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single HelpfulInfo document */
  update?: InputMaybe<HelpfulInfoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HelpfulInfo document */
  upsert?: InputMaybe<HelpfulInfoUpsertWithNestedWhereUniqueInput>;
};

export type HelpfulInfoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HelpfulInfoUpdateInput;
  /** Unique document search */
  where: HelpfulInfoWhereUniqueInput;
};

export type HelpfulInfoUpsertInput = {
  /** Create document if it didn't exist */
  create: HelpfulInfoCreateInput;
  /** Update document if it exists */
  update: HelpfulInfoUpdateInput;
};

export type HelpfulInfoUpsertLocalizationInput = {
  create: HelpfulInfoCreateLocalizationDataInput;
  locale: Locale;
  update: HelpfulInfoUpdateLocalizationDataInput;
};

export type HelpfulInfoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HelpfulInfoUpsertInput;
  /** Unique document search */
  where: HelpfulInfoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type HelpfulInfoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type HelpfulInfoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HelpfulInfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HelpfulInfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HelpfulInfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HelpfulInfoWhereStageInput>;
  documentInStages_none?: InputMaybe<HelpfulInfoWhereStageInput>;
  documentInStages_some?: InputMaybe<HelpfulInfoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HelpfulInfoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HelpfulInfoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HelpfulInfoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HelpfulInfoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HelpfulInfoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References HelpfulInfo record uniquely */
export type HelpfulInfoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Info = Entity & Node & {
  __typename?: 'Info';
  checklist?: Maybe<Checklist>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Info>;
  helpfulInfo?: Maybe<HelpfulInfo>;
  /** List of Info versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image: Array<Asset>;
  infoBlock: Array<RichText>;
  intro?: Maybe<RichText>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Info>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slider: Array<RichText>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type InfoChecklistArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type InfoCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type InfoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type InfoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type InfoHelpfulInfoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type InfoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type InfoImageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type InfoLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type InfoPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type InfoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type InfoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type InfoUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type InfoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type InfoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: InfoWhereUniqueInput;
};

/** A connection to a list of items. */
export type InfoConnection = {
  __typename?: 'InfoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<InfoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type InfoCreateInput = {
  checklist?: InputMaybe<ChecklistCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  helpfulInfo?: InputMaybe<HelpfulInfoCreateOneInlineInput>;
  image?: InputMaybe<AssetCreateManyInlineInput>;
  /** infoBlock input for default locale (en) */
  infoBlock?: InputMaybe<Array<Scalars['RichTextAST']>>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['RichTextAST']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<InfoCreateLocalizationsInput>;
  /** slider input for default locale (en) */
  slider?: InputMaybe<Array<Scalars['RichTextAST']>>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InfoCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  infoBlock?: InputMaybe<Array<Scalars['RichTextAST']>>;
  intro?: InputMaybe<Scalars['RichTextAST']>;
  slider?: InputMaybe<Array<Scalars['RichTextAST']>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InfoCreateLocalizationInput = {
  /** Localization input */
  data: InfoCreateLocalizationDataInput;
  locale: Locale;
};

export type InfoCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<InfoCreateLocalizationInput>>;
};

export type InfoCreateManyInlineInput = {
  /** Connect multiple existing Info documents */
  connect?: InputMaybe<Array<InfoWhereUniqueInput>>;
  /** Create and connect multiple existing Info documents */
  create?: InputMaybe<Array<InfoCreateInput>>;
};

/** An edge in a connection. */
export type InfoEdge = {
  __typename?: 'InfoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Info;
};

/** Identifies documents */
export type InfoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<InfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<InfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<InfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<InfoWhereStageInput>;
  documentInStages_none?: InputMaybe<InfoWhereStageInput>;
  documentInStages_some?: InputMaybe<InfoWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image_every?: InputMaybe<AssetWhereInput>;
  image_none?: InputMaybe<AssetWhereInput>;
  image_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum InfoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type InfoUpdateInput = {
  checklist?: InputMaybe<ChecklistUpdateOneInlineInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoUpdateOneInlineInput>;
  image?: InputMaybe<AssetUpdateManyInlineInput>;
  /** infoBlock input for default locale (en) */
  infoBlock?: InputMaybe<Array<Scalars['RichTextAST']>>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<InfoUpdateLocalizationsInput>;
  /** slider input for default locale (en) */
  slider?: InputMaybe<Array<Scalars['RichTextAST']>>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type InfoUpdateLocalizationDataInput = {
  infoBlock?: InputMaybe<Array<Scalars['RichTextAST']>>;
  intro?: InputMaybe<Scalars['RichTextAST']>;
  slider?: InputMaybe<Array<Scalars['RichTextAST']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type InfoUpdateLocalizationInput = {
  data: InfoUpdateLocalizationDataInput;
  locale: Locale;
};

export type InfoUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<InfoCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<InfoUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<InfoUpsertLocalizationInput>>;
};

export type InfoUpdateManyInlineInput = {
  /** Connect multiple existing Info documents */
  connect?: InputMaybe<Array<InfoConnectInput>>;
  /** Create and connect multiple Info documents */
  create?: InputMaybe<Array<InfoCreateInput>>;
  /** Delete multiple Info documents */
  delete?: InputMaybe<Array<InfoWhereUniqueInput>>;
  /** Disconnect multiple Info documents */
  disconnect?: InputMaybe<Array<InfoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Info documents */
  set?: InputMaybe<Array<InfoWhereUniqueInput>>;
  /** Update multiple Info documents */
  update?: InputMaybe<Array<InfoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Info documents */
  upsert?: InputMaybe<Array<InfoUpsertWithNestedWhereUniqueInput>>;
};

export type InfoUpdateManyInput = {
  /** infoBlock input for default locale (en) */
  infoBlock?: InputMaybe<Array<Scalars['RichTextAST']>>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<InfoUpdateManyLocalizationsInput>;
  /** slider input for default locale (en) */
  slider?: InputMaybe<Array<Scalars['RichTextAST']>>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type InfoUpdateManyLocalizationDataInput = {
  infoBlock?: InputMaybe<Array<Scalars['RichTextAST']>>;
  intro?: InputMaybe<Scalars['RichTextAST']>;
  slider?: InputMaybe<Array<Scalars['RichTextAST']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type InfoUpdateManyLocalizationInput = {
  data: InfoUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type InfoUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<InfoUpdateManyLocalizationInput>>;
};

export type InfoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: InfoUpdateInput;
  /** Unique document search */
  where: InfoWhereUniqueInput;
};

export type InfoUpsertInput = {
  /** Create document if it didn't exist */
  create: InfoCreateInput;
  /** Update document if it exists */
  update: InfoUpdateInput;
};

export type InfoUpsertLocalizationInput = {
  create: InfoCreateLocalizationDataInput;
  locale: Locale;
  update: InfoUpdateLocalizationDataInput;
};

export type InfoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: InfoUpsertInput;
  /** Unique document search */
  where: InfoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type InfoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type InfoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<InfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<InfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<InfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<InfoWhereStageInput>;
  documentInStages_none?: InputMaybe<InfoWhereStageInput>;
  documentInStages_some?: InputMaybe<InfoWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image_every?: InputMaybe<AssetWhereInput>;
  image_none?: InputMaybe<AssetWhereInput>;
  image_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type InfoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<InfoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<InfoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<InfoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<InfoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Info record uniquely */
export type InfoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Gd = 'gd'
}

export type ModelBusinessPlan = Entity & Node & {
  __typename?: 'ModelBusinessPlan';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  developmentOption: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<ModelBusinessPlan>;
  /** List of ModelBusinessPlan versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ModelBusinessPlan>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  runningCosts: RunningCostsSection;
  scheduledIn: Array<ScheduledOperation>;
  setupCosts: SetupCostsSection;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ModelBusinessPlanCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ModelBusinessPlanCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ModelBusinessPlanDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ModelBusinessPlanHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ModelBusinessPlanLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ModelBusinessPlanPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ModelBusinessPlanPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ModelBusinessPlanRunningCostsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ModelBusinessPlanScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ModelBusinessPlanSetupCostsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ModelBusinessPlanUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ModelBusinessPlanUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

/** A connection to a list of items. */
export type ModelBusinessPlanConnection = {
  __typename?: 'ModelBusinessPlanConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ModelBusinessPlanEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ModelBusinessPlanCreateInput = {
  cldcw4edz0cr301ui96p63gb9?: InputMaybe<DevelopmentOptionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** developmentOption input for default locale (en) */
  developmentOption: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ModelBusinessPlanCreateLocalizationsInput>;
  runningCosts: RunningCostsSectionCreateOneInlineInput;
  setupCosts: SetupCostsSectionCreateOneInlineInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ModelBusinessPlanCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  developmentOption: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ModelBusinessPlanCreateLocalizationInput = {
  /** Localization input */
  data: ModelBusinessPlanCreateLocalizationDataInput;
  locale: Locale;
};

export type ModelBusinessPlanCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ModelBusinessPlanCreateLocalizationInput>>;
};

export type ModelBusinessPlanCreateOneInlineInput = {
  /** Connect one existing ModelBusinessPlan document */
  connect?: InputMaybe<ModelBusinessPlanWhereUniqueInput>;
  /** Create and connect one ModelBusinessPlan document */
  create?: InputMaybe<ModelBusinessPlanCreateInput>;
};

/** An edge in a connection. */
export type ModelBusinessPlanEdge = {
  __typename?: 'ModelBusinessPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ModelBusinessPlan;
};

/** Identifies documents */
export type ModelBusinessPlanManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelBusinessPlanWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelBusinessPlanWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelBusinessPlanWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ModelBusinessPlanWhereStageInput>;
  documentInStages_none?: InputMaybe<ModelBusinessPlanWhereStageInput>;
  documentInStages_some?: InputMaybe<ModelBusinessPlanWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  runningCosts?: InputMaybe<RunningCostsSectionWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  setupCosts?: InputMaybe<SetupCostsSectionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ModelBusinessPlanOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DevelopmentOptionAsc = 'developmentOption_ASC',
  DevelopmentOptionDesc = 'developmentOption_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ModelBusinessPlanUpdateInput = {
  cldcw4edz0cr301ui96p63gb9?: InputMaybe<DevelopmentOptionUpdateManyInlineInput>;
  /** developmentOption input for default locale (en) */
  developmentOption?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ModelBusinessPlanUpdateLocalizationsInput>;
  runningCosts?: InputMaybe<RunningCostsSectionUpdateOneInlineInput>;
  setupCosts?: InputMaybe<SetupCostsSectionUpdateOneInlineInput>;
};

export type ModelBusinessPlanUpdateLocalizationDataInput = {
  developmentOption?: InputMaybe<Scalars['String']>;
};

export type ModelBusinessPlanUpdateLocalizationInput = {
  data: ModelBusinessPlanUpdateLocalizationDataInput;
  locale: Locale;
};

export type ModelBusinessPlanUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ModelBusinessPlanCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ModelBusinessPlanUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ModelBusinessPlanUpsertLocalizationInput>>;
};

export type ModelBusinessPlanUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type ModelBusinessPlanUpdateOneInlineInput = {
  /** Connect existing ModelBusinessPlan document */
  connect?: InputMaybe<ModelBusinessPlanWhereUniqueInput>;
  /** Create and connect one ModelBusinessPlan document */
  create?: InputMaybe<ModelBusinessPlanCreateInput>;
  /** Delete currently connected ModelBusinessPlan document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ModelBusinessPlan document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ModelBusinessPlan document */
  update?: InputMaybe<ModelBusinessPlanUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ModelBusinessPlan document */
  upsert?: InputMaybe<ModelBusinessPlanUpsertWithNestedWhereUniqueInput>;
};

export type ModelBusinessPlanUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ModelBusinessPlanUpdateInput;
  /** Unique document search */
  where: ModelBusinessPlanWhereUniqueInput;
};

export type ModelBusinessPlanUpsertInput = {
  /** Create document if it didn't exist */
  create: ModelBusinessPlanCreateInput;
  /** Update document if it exists */
  update: ModelBusinessPlanUpdateInput;
};

export type ModelBusinessPlanUpsertLocalizationInput = {
  create: ModelBusinessPlanCreateLocalizationDataInput;
  locale: Locale;
  update: ModelBusinessPlanUpdateLocalizationDataInput;
};

export type ModelBusinessPlanUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ModelBusinessPlanUpsertInput;
  /** Unique document search */
  where: ModelBusinessPlanWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ModelBusinessPlanWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ModelBusinessPlanWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelBusinessPlanWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelBusinessPlanWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelBusinessPlanWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  developmentOption?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  developmentOption_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  developmentOption_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  developmentOption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  developmentOption_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  developmentOption_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  developmentOption_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  developmentOption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  developmentOption_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  developmentOption_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ModelBusinessPlanWhereStageInput>;
  documentInStages_none?: InputMaybe<ModelBusinessPlanWhereStageInput>;
  documentInStages_some?: InputMaybe<ModelBusinessPlanWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  runningCosts?: InputMaybe<RunningCostsSectionWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  setupCosts?: InputMaybe<SetupCostsSectionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ModelBusinessPlanWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelBusinessPlanWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelBusinessPlanWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelBusinessPlanWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ModelBusinessPlanWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ModelBusinessPlan record uniquely */
export type ModelBusinessPlanWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ModelSwot = Entity & Node & {
  __typename?: 'ModelSwot';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  developmentOption: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<ModelSwot>;
  /** List of ModelSwot versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ModelSwot>;
  opportunities: RichText;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  strengths: RichText;
  threats: RichText;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  weaknesses: RichText;
};


export type ModelSwotCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ModelSwotCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ModelSwotDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ModelSwotHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ModelSwotLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ModelSwotPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ModelSwotPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ModelSwotScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ModelSwotUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ModelSwotUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

/** A connection to a list of items. */
export type ModelSwotConnection = {
  __typename?: 'ModelSwotConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ModelSwotEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ModelSwotCreateInput = {
  cl05hzmf71w3001xocg7ze5vq?: InputMaybe<DevelopmentOptionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** developmentOption input for default locale (en) */
  developmentOption: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ModelSwotCreateLocalizationsInput>;
  /** opportunities input for default locale (en) */
  opportunities: Scalars['RichTextAST'];
  /** strengths input for default locale (en) */
  strengths: Scalars['RichTextAST'];
  /** threats input for default locale (en) */
  threats: Scalars['RichTextAST'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** weaknesses input for default locale (en) */
  weaknesses: Scalars['RichTextAST'];
};

export type ModelSwotCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  developmentOption: Scalars['String'];
  opportunities: Scalars['RichTextAST'];
  strengths: Scalars['RichTextAST'];
  threats: Scalars['RichTextAST'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weaknesses: Scalars['RichTextAST'];
};

export type ModelSwotCreateLocalizationInput = {
  /** Localization input */
  data: ModelSwotCreateLocalizationDataInput;
  locale: Locale;
};

export type ModelSwotCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ModelSwotCreateLocalizationInput>>;
};

export type ModelSwotCreateOneInlineInput = {
  /** Connect one existing ModelSwot document */
  connect?: InputMaybe<ModelSwotWhereUniqueInput>;
  /** Create and connect one ModelSwot document */
  create?: InputMaybe<ModelSwotCreateInput>;
};

/** An edge in a connection. */
export type ModelSwotEdge = {
  __typename?: 'ModelSwotEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ModelSwot;
};

/** Identifies documents */
export type ModelSwotManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelSwotWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelSwotWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelSwotWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ModelSwotWhereStageInput>;
  documentInStages_none?: InputMaybe<ModelSwotWhereStageInput>;
  documentInStages_some?: InputMaybe<ModelSwotWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ModelSwotOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DevelopmentOptionAsc = 'developmentOption_ASC',
  DevelopmentOptionDesc = 'developmentOption_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ModelSwotUpdateInput = {
  cl05hzmf71w3001xocg7ze5vq?: InputMaybe<DevelopmentOptionUpdateManyInlineInput>;
  /** developmentOption input for default locale (en) */
  developmentOption?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ModelSwotUpdateLocalizationsInput>;
  /** opportunities input for default locale (en) */
  opportunities?: InputMaybe<Scalars['RichTextAST']>;
  /** strengths input for default locale (en) */
  strengths?: InputMaybe<Scalars['RichTextAST']>;
  /** threats input for default locale (en) */
  threats?: InputMaybe<Scalars['RichTextAST']>;
  /** weaknesses input for default locale (en) */
  weaknesses?: InputMaybe<Scalars['RichTextAST']>;
};

export type ModelSwotUpdateLocalizationDataInput = {
  developmentOption?: InputMaybe<Scalars['String']>;
  opportunities?: InputMaybe<Scalars['RichTextAST']>;
  strengths?: InputMaybe<Scalars['RichTextAST']>;
  threats?: InputMaybe<Scalars['RichTextAST']>;
  weaknesses?: InputMaybe<Scalars['RichTextAST']>;
};

export type ModelSwotUpdateLocalizationInput = {
  data: ModelSwotUpdateLocalizationDataInput;
  locale: Locale;
};

export type ModelSwotUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ModelSwotCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ModelSwotUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ModelSwotUpsertLocalizationInput>>;
};

export type ModelSwotUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<ModelSwotUpdateManyLocalizationsInput>;
  /** opportunities input for default locale (en) */
  opportunities?: InputMaybe<Scalars['RichTextAST']>;
  /** strengths input for default locale (en) */
  strengths?: InputMaybe<Scalars['RichTextAST']>;
  /** threats input for default locale (en) */
  threats?: InputMaybe<Scalars['RichTextAST']>;
  /** weaknesses input for default locale (en) */
  weaknesses?: InputMaybe<Scalars['RichTextAST']>;
};

export type ModelSwotUpdateManyLocalizationDataInput = {
  opportunities?: InputMaybe<Scalars['RichTextAST']>;
  strengths?: InputMaybe<Scalars['RichTextAST']>;
  threats?: InputMaybe<Scalars['RichTextAST']>;
  weaknesses?: InputMaybe<Scalars['RichTextAST']>;
};

export type ModelSwotUpdateManyLocalizationInput = {
  data: ModelSwotUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ModelSwotUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ModelSwotUpdateManyLocalizationInput>>;
};

export type ModelSwotUpdateOneInlineInput = {
  /** Connect existing ModelSwot document */
  connect?: InputMaybe<ModelSwotWhereUniqueInput>;
  /** Create and connect one ModelSwot document */
  create?: InputMaybe<ModelSwotCreateInput>;
  /** Delete currently connected ModelSwot document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ModelSwot document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ModelSwot document */
  update?: InputMaybe<ModelSwotUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ModelSwot document */
  upsert?: InputMaybe<ModelSwotUpsertWithNestedWhereUniqueInput>;
};

export type ModelSwotUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ModelSwotUpdateInput;
  /** Unique document search */
  where: ModelSwotWhereUniqueInput;
};

export type ModelSwotUpsertInput = {
  /** Create document if it didn't exist */
  create: ModelSwotCreateInput;
  /** Update document if it exists */
  update: ModelSwotUpdateInput;
};

export type ModelSwotUpsertLocalizationInput = {
  create: ModelSwotCreateLocalizationDataInput;
  locale: Locale;
  update: ModelSwotUpdateLocalizationDataInput;
};

export type ModelSwotUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ModelSwotUpsertInput;
  /** Unique document search */
  where: ModelSwotWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ModelSwotWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ModelSwotWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelSwotWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelSwotWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelSwotWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  developmentOption?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  developmentOption_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  developmentOption_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  developmentOption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  developmentOption_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  developmentOption_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  developmentOption_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  developmentOption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  developmentOption_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  developmentOption_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ModelSwotWhereStageInput>;
  documentInStages_none?: InputMaybe<ModelSwotWhereStageInput>;
  documentInStages_some?: InputMaybe<ModelSwotWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ModelSwotWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ModelSwotWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ModelSwotWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ModelSwotWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ModelSwotWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ModelSwot record uniquely */
export type ModelSwotWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one asset */
  createAsset?: Maybe<Asset>;
  /** Create one checklist */
  createChecklist?: Maybe<Checklist>;
  /** Create one developmentOption */
  createDevelopmentOption?: Maybe<DevelopmentOption>;
  /** Create one helpfulInfo */
  createHelpfulInfo?: Maybe<HelpfulInfo>;
  /** Create one info */
  createInfo?: Maybe<Info>;
  /** Create one modelBusinessPlan */
  createModelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Create one modelSwot */
  createModelSwot?: Maybe<ModelSwot>;
  /** Create one presentationTipsPage */
  createPresentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one stageLandingPage */
  createStageLandingPage?: Maybe<StageLandingPage>;
  /** Create one stageTask */
  createStageTask?: Maybe<StageTask>;
  /** Create one stageTaskPage */
  createStageTaskPage?: Maybe<StageTaskPage>;
  /** Create one taskToComplete */
  createTaskToComplete?: Maybe<TaskToComplete>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one checklist from _all_ existing stages. Returns deleted document. */
  deleteChecklist?: Maybe<Checklist>;
  /** Delete one developmentOption from _all_ existing stages. Returns deleted document. */
  deleteDevelopmentOption?: Maybe<DevelopmentOption>;
  /** Delete one helpfulInfo from _all_ existing stages. Returns deleted document. */
  deleteHelpfulInfo?: Maybe<HelpfulInfo>;
  /** Delete one info from _all_ existing stages. Returns deleted document. */
  deleteInfo?: Maybe<Info>;
  /** Delete many Asset documents */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Delete many Checklist documents */
  deleteManyChecklists: BatchPayload;
  /** Delete many Checklist documents, return deleted documents */
  deleteManyChecklistsConnection: ChecklistConnection;
  /** Delete many DevelopmentOption documents */
  deleteManyDevelopmentOptions: BatchPayload;
  /** Delete many DevelopmentOption documents, return deleted documents */
  deleteManyDevelopmentOptionsConnection: DevelopmentOptionConnection;
  /** Delete many HelpfulInfo documents */
  deleteManyHelpfulInfos: BatchPayload;
  /** Delete many HelpfulInfo documents, return deleted documents */
  deleteManyHelpfulInfosConnection: HelpfulInfoConnection;
  /** Delete many Info documents */
  deleteManyInfos: BatchPayload;
  /** Delete many Info documents, return deleted documents */
  deleteManyInfosConnection: InfoConnection;
  /** Delete many ModelBusinessPlan documents */
  deleteManyModelBusinessPlans: BatchPayload;
  /** Delete many ModelBusinessPlan documents, return deleted documents */
  deleteManyModelBusinessPlansConnection: ModelBusinessPlanConnection;
  /** Delete many ModelSwot documents */
  deleteManyModelSwots: BatchPayload;
  /** Delete many ModelSwot documents, return deleted documents */
  deleteManyModelSwotsConnection: ModelSwotConnection;
  /** Delete many PresentationTipsPage documents */
  deleteManyPresentationTipsPages: BatchPayload;
  /** Delete many PresentationTipsPage documents, return deleted documents */
  deleteManyPresentationTipsPagesConnection: PresentationTipsPageConnection;
  /** Delete many StageLandingPage documents */
  deleteManyStageLandingPages: BatchPayload;
  /** Delete many StageLandingPage documents, return deleted documents */
  deleteManyStageLandingPagesConnection: StageLandingPageConnection;
  /** Delete many StageTaskPage documents */
  deleteManyStageTaskPages: BatchPayload;
  /** Delete many StageTaskPage documents, return deleted documents */
  deleteManyStageTaskPagesConnection: StageTaskPageConnection;
  /** Delete many StageTask documents */
  deleteManyStageTasks: BatchPayload;
  /** Delete many StageTask documents, return deleted documents */
  deleteManyStageTasksConnection: StageTaskConnection;
  /** Delete many TaskToComplete documents */
  deleteManyTasksToComplete: BatchPayload;
  /** Delete many TaskToComplete documents, return deleted documents */
  deleteManyTasksToCompleteConnection: TaskToCompleteConnection;
  /** Delete one modelBusinessPlan from _all_ existing stages. Returns deleted document. */
  deleteModelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Delete one modelSwot from _all_ existing stages. Returns deleted document. */
  deleteModelSwot?: Maybe<ModelSwot>;
  /** Delete one presentationTipsPage from _all_ existing stages. Returns deleted document. */
  deletePresentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one stageLandingPage from _all_ existing stages. Returns deleted document. */
  deleteStageLandingPage?: Maybe<StageLandingPage>;
  /** Delete one stageTask from _all_ existing stages. Returns deleted document. */
  deleteStageTask?: Maybe<StageTask>;
  /** Delete one stageTaskPage from _all_ existing stages. Returns deleted document. */
  deleteStageTaskPage?: Maybe<StageTaskPage>;
  /** Delete one taskToComplete from _all_ existing stages. Returns deleted document. */
  deleteTaskToComplete?: Maybe<TaskToComplete>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one checklist */
  publishChecklist?: Maybe<Checklist>;
  /** Publish one developmentOption */
  publishDevelopmentOption?: Maybe<DevelopmentOption>;
  /** Publish one helpfulInfo */
  publishHelpfulInfo?: Maybe<HelpfulInfo>;
  /** Publish one info */
  publishInfo?: Maybe<Info>;
  /** Publish many Asset documents */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Publish many Checklist documents */
  publishManyChecklists: BatchPayload;
  /** Publish many Checklist documents */
  publishManyChecklistsConnection: ChecklistConnection;
  /** Publish many DevelopmentOption documents */
  publishManyDevelopmentOptions: BatchPayload;
  /** Publish many DevelopmentOption documents */
  publishManyDevelopmentOptionsConnection: DevelopmentOptionConnection;
  /** Publish many HelpfulInfo documents */
  publishManyHelpfulInfos: BatchPayload;
  /** Publish many HelpfulInfo documents */
  publishManyHelpfulInfosConnection: HelpfulInfoConnection;
  /** Publish many Info documents */
  publishManyInfos: BatchPayload;
  /** Publish many Info documents */
  publishManyInfosConnection: InfoConnection;
  /** Publish many ModelBusinessPlan documents */
  publishManyModelBusinessPlans: BatchPayload;
  /** Publish many ModelBusinessPlan documents */
  publishManyModelBusinessPlansConnection: ModelBusinessPlanConnection;
  /** Publish many ModelSwot documents */
  publishManyModelSwots: BatchPayload;
  /** Publish many ModelSwot documents */
  publishManyModelSwotsConnection: ModelSwotConnection;
  /** Publish many PresentationTipsPage documents */
  publishManyPresentationTipsPages: BatchPayload;
  /** Publish many PresentationTipsPage documents */
  publishManyPresentationTipsPagesConnection: PresentationTipsPageConnection;
  /** Publish many StageLandingPage documents */
  publishManyStageLandingPages: BatchPayload;
  /** Publish many StageLandingPage documents */
  publishManyStageLandingPagesConnection: StageLandingPageConnection;
  /** Publish many StageTaskPage documents */
  publishManyStageTaskPages: BatchPayload;
  /** Publish many StageTaskPage documents */
  publishManyStageTaskPagesConnection: StageTaskPageConnection;
  /** Publish many StageTask documents */
  publishManyStageTasks: BatchPayload;
  /** Publish many StageTask documents */
  publishManyStageTasksConnection: StageTaskConnection;
  /** Publish many TaskToComplete documents */
  publishManyTasksToComplete: BatchPayload;
  /** Publish many TaskToComplete documents */
  publishManyTasksToCompleteConnection: TaskToCompleteConnection;
  /** Publish one modelBusinessPlan */
  publishModelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Publish one modelSwot */
  publishModelSwot?: Maybe<ModelSwot>;
  /** Publish one presentationTipsPage */
  publishPresentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Publish one stageLandingPage */
  publishStageLandingPage?: Maybe<StageLandingPage>;
  /** Publish one stageTask */
  publishStageTask?: Maybe<StageTask>;
  /** Publish one stageTaskPage */
  publishStageTaskPage?: Maybe<StageTaskPage>;
  /** Publish one taskToComplete */
  publishTaskToComplete?: Maybe<TaskToComplete>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one checklist */
  schedulePublishChecklist?: Maybe<Checklist>;
  /** Schedule to publish one developmentOption */
  schedulePublishDevelopmentOption?: Maybe<DevelopmentOption>;
  /** Schedule to publish one helpfulInfo */
  schedulePublishHelpfulInfo?: Maybe<HelpfulInfo>;
  /** Schedule to publish one info */
  schedulePublishInfo?: Maybe<Info>;
  /** Schedule to publish one modelBusinessPlan */
  schedulePublishModelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Schedule to publish one modelSwot */
  schedulePublishModelSwot?: Maybe<ModelSwot>;
  /** Schedule to publish one presentationTipsPage */
  schedulePublishPresentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Schedule to publish one stageLandingPage */
  schedulePublishStageLandingPage?: Maybe<StageLandingPage>;
  /** Schedule to publish one stageTask */
  schedulePublishStageTask?: Maybe<StageTask>;
  /** Schedule to publish one stageTaskPage */
  schedulePublishStageTaskPage?: Maybe<StageTaskPage>;
  /** Schedule to publish one taskToComplete */
  schedulePublishTaskToComplete?: Maybe<TaskToComplete>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one checklist from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishChecklist?: Maybe<Checklist>;
  /** Unpublish one developmentOption from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishDevelopmentOption?: Maybe<DevelopmentOption>;
  /** Unpublish one helpfulInfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHelpfulInfo?: Maybe<HelpfulInfo>;
  /** Unpublish one info from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishInfo?: Maybe<Info>;
  /** Unpublish one modelBusinessPlan from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishModelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Unpublish one modelSwot from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishModelSwot?: Maybe<ModelSwot>;
  /** Unpublish one presentationTipsPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPresentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Unpublish one stageLandingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStageLandingPage?: Maybe<StageLandingPage>;
  /** Unpublish one stageTask from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStageTask?: Maybe<StageTask>;
  /** Unpublish one stageTaskPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStageTaskPage?: Maybe<StageTaskPage>;
  /** Unpublish one taskToComplete from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTaskToComplete?: Maybe<TaskToComplete>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one checklist from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishChecklist?: Maybe<Checklist>;
  /** Unpublish one developmentOption from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDevelopmentOption?: Maybe<DevelopmentOption>;
  /** Unpublish one helpfulInfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHelpfulInfo?: Maybe<HelpfulInfo>;
  /** Unpublish one info from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishInfo?: Maybe<Info>;
  /** Unpublish many Asset documents */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /** Unpublish many Checklist documents */
  unpublishManyChecklists: BatchPayload;
  /** Find many Checklist documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyChecklistsConnection: ChecklistConnection;
  /** Unpublish many DevelopmentOption documents */
  unpublishManyDevelopmentOptions: BatchPayload;
  /** Find many DevelopmentOption documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDevelopmentOptionsConnection: DevelopmentOptionConnection;
  /** Unpublish many HelpfulInfo documents */
  unpublishManyHelpfulInfos: BatchPayload;
  /** Find many HelpfulInfo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHelpfulInfosConnection: HelpfulInfoConnection;
  /** Unpublish many Info documents */
  unpublishManyInfos: BatchPayload;
  /** Find many Info documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyInfosConnection: InfoConnection;
  /** Unpublish many ModelBusinessPlan documents */
  unpublishManyModelBusinessPlans: BatchPayload;
  /** Find many ModelBusinessPlan documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyModelBusinessPlansConnection: ModelBusinessPlanConnection;
  /** Unpublish many ModelSwot documents */
  unpublishManyModelSwots: BatchPayload;
  /** Find many ModelSwot documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyModelSwotsConnection: ModelSwotConnection;
  /** Unpublish many PresentationTipsPage documents */
  unpublishManyPresentationTipsPages: BatchPayload;
  /** Find many PresentationTipsPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPresentationTipsPagesConnection: PresentationTipsPageConnection;
  /** Unpublish many StageLandingPage documents */
  unpublishManyStageLandingPages: BatchPayload;
  /** Find many StageLandingPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStageLandingPagesConnection: StageLandingPageConnection;
  /** Unpublish many StageTaskPage documents */
  unpublishManyStageTaskPages: BatchPayload;
  /** Find many StageTaskPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStageTaskPagesConnection: StageTaskPageConnection;
  /** Unpublish many StageTask documents */
  unpublishManyStageTasks: BatchPayload;
  /** Find many StageTask documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStageTasksConnection: StageTaskConnection;
  /** Unpublish many TaskToComplete documents */
  unpublishManyTasksToComplete: BatchPayload;
  /** Find many TaskToComplete documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTasksToCompleteConnection: TaskToCompleteConnection;
  /** Unpublish one modelBusinessPlan from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishModelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Unpublish one modelSwot from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishModelSwot?: Maybe<ModelSwot>;
  /** Unpublish one presentationTipsPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPresentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Unpublish one stageLandingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStageLandingPage?: Maybe<StageLandingPage>;
  /** Unpublish one stageTask from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStageTask?: Maybe<StageTask>;
  /** Unpublish one stageTaskPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStageTaskPage?: Maybe<StageTaskPage>;
  /** Unpublish one taskToComplete from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTaskToComplete?: Maybe<TaskToComplete>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one checklist */
  updateChecklist?: Maybe<Checklist>;
  /** Update one developmentOption */
  updateDevelopmentOption?: Maybe<DevelopmentOption>;
  /** Update one helpfulInfo */
  updateHelpfulInfo?: Maybe<HelpfulInfo>;
  /** Update one info */
  updateInfo?: Maybe<Info>;
  /** Update many assets */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Update many checklists */
  updateManyChecklists: BatchPayload;
  /** Update many Checklist documents */
  updateManyChecklistsConnection: ChecklistConnection;
  /** Update many developmentOptions */
  updateManyDevelopmentOptions: BatchPayload;
  /** Update many DevelopmentOption documents */
  updateManyDevelopmentOptionsConnection: DevelopmentOptionConnection;
  /** Update many helpfulInfos */
  updateManyHelpfulInfos: BatchPayload;
  /** Update many HelpfulInfo documents */
  updateManyHelpfulInfosConnection: HelpfulInfoConnection;
  /** Update many infos */
  updateManyInfos: BatchPayload;
  /** Update many Info documents */
  updateManyInfosConnection: InfoConnection;
  /** Update many modelBusinessPlans */
  updateManyModelBusinessPlans: BatchPayload;
  /** Update many ModelBusinessPlan documents */
  updateManyModelBusinessPlansConnection: ModelBusinessPlanConnection;
  /** Update many modelSwots */
  updateManyModelSwots: BatchPayload;
  /** Update many ModelSwot documents */
  updateManyModelSwotsConnection: ModelSwotConnection;
  /** Update many presentationTipsPages */
  updateManyPresentationTipsPages: BatchPayload;
  /** Update many PresentationTipsPage documents */
  updateManyPresentationTipsPagesConnection: PresentationTipsPageConnection;
  /** Update many stageLandingPages */
  updateManyStageLandingPages: BatchPayload;
  /** Update many StageLandingPage documents */
  updateManyStageLandingPagesConnection: StageLandingPageConnection;
  /** Update many stageTaskPages */
  updateManyStageTaskPages: BatchPayload;
  /** Update many StageTaskPage documents */
  updateManyStageTaskPagesConnection: StageTaskPageConnection;
  /** Update many stageTasks */
  updateManyStageTasks: BatchPayload;
  /** Update many StageTask documents */
  updateManyStageTasksConnection: StageTaskConnection;
  /** Update many tasksToComplete */
  updateManyTasksToComplete: BatchPayload;
  /** Update many TaskToComplete documents */
  updateManyTasksToCompleteConnection: TaskToCompleteConnection;
  /** Update one modelBusinessPlan */
  updateModelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Update one modelSwot */
  updateModelSwot?: Maybe<ModelSwot>;
  /** Update one presentationTipsPage */
  updatePresentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one stageLandingPage */
  updateStageLandingPage?: Maybe<StageLandingPage>;
  /** Update one stageTask */
  updateStageTask?: Maybe<StageTask>;
  /** Update one stageTaskPage */
  updateStageTaskPage?: Maybe<StageTaskPage>;
  /** Update one taskToComplete */
  updateTaskToComplete?: Maybe<TaskToComplete>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one checklist */
  upsertChecklist?: Maybe<Checklist>;
  /** Upsert one developmentOption */
  upsertDevelopmentOption?: Maybe<DevelopmentOption>;
  /** Upsert one helpfulInfo */
  upsertHelpfulInfo?: Maybe<HelpfulInfo>;
  /** Upsert one info */
  upsertInfo?: Maybe<Info>;
  /** Upsert one modelBusinessPlan */
  upsertModelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Upsert one modelSwot */
  upsertModelSwot?: Maybe<ModelSwot>;
  /** Upsert one presentationTipsPage */
  upsertPresentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Upsert one stageLandingPage */
  upsertStageLandingPage?: Maybe<StageLandingPage>;
  /** Upsert one stageTask */
  upsertStageTask?: Maybe<StageTask>;
  /** Upsert one stageTaskPage */
  upsertStageTaskPage?: Maybe<StageTaskPage>;
  /** Upsert one taskToComplete */
  upsertTaskToComplete?: Maybe<TaskToComplete>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateChecklistArgs = {
  data: ChecklistCreateInput;
};


export type MutationCreateDevelopmentOptionArgs = {
  data: DevelopmentOptionCreateInput;
};


export type MutationCreateHelpfulInfoArgs = {
  data: HelpfulInfoCreateInput;
};


export type MutationCreateInfoArgs = {
  data: InfoCreateInput;
};


export type MutationCreateModelBusinessPlanArgs = {
  data: ModelBusinessPlanCreateInput;
};


export type MutationCreateModelSwotArgs = {
  data: ModelSwotCreateInput;
};


export type MutationCreatePresentationTipsPageArgs = {
  data: PresentationTipsPageCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateStageLandingPageArgs = {
  data: StageLandingPageCreateInput;
};


export type MutationCreateStageTaskArgs = {
  data: StageTaskCreateInput;
};


export type MutationCreateStageTaskPageArgs = {
  data: StageTaskPageCreateInput;
};


export type MutationCreateTaskToCompleteArgs = {
  data: TaskToCompleteCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteChecklistArgs = {
  where: ChecklistWhereUniqueInput;
};


export type MutationDeleteDevelopmentOptionArgs = {
  where: DevelopmentOptionWhereUniqueInput;
};


export type MutationDeleteHelpfulInfoArgs = {
  where: HelpfulInfoWhereUniqueInput;
};


export type MutationDeleteInfoArgs = {
  where: InfoWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyChecklistsArgs = {
  where?: InputMaybe<ChecklistManyWhereInput>;
};


export type MutationDeleteManyChecklistsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChecklistManyWhereInput>;
};


export type MutationDeleteManyDevelopmentOptionsArgs = {
  where?: InputMaybe<DevelopmentOptionManyWhereInput>;
};


export type MutationDeleteManyDevelopmentOptionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DevelopmentOptionManyWhereInput>;
};


export type MutationDeleteManyHelpfulInfosArgs = {
  where?: InputMaybe<HelpfulInfoManyWhereInput>;
};


export type MutationDeleteManyHelpfulInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HelpfulInfoManyWhereInput>;
};


export type MutationDeleteManyInfosArgs = {
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationDeleteManyInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationDeleteManyModelBusinessPlansArgs = {
  where?: InputMaybe<ModelBusinessPlanManyWhereInput>;
};


export type MutationDeleteManyModelBusinessPlansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModelBusinessPlanManyWhereInput>;
};


export type MutationDeleteManyModelSwotsArgs = {
  where?: InputMaybe<ModelSwotManyWhereInput>;
};


export type MutationDeleteManyModelSwotsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModelSwotManyWhereInput>;
};


export type MutationDeleteManyPresentationTipsPagesArgs = {
  where?: InputMaybe<PresentationTipsPageManyWhereInput>;
};


export type MutationDeleteManyPresentationTipsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationTipsPageManyWhereInput>;
};


export type MutationDeleteManyStageLandingPagesArgs = {
  where?: InputMaybe<StageLandingPageManyWhereInput>;
};


export type MutationDeleteManyStageLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StageLandingPageManyWhereInput>;
};


export type MutationDeleteManyStageTaskPagesArgs = {
  where?: InputMaybe<StageTaskPageManyWhereInput>;
};


export type MutationDeleteManyStageTaskPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StageTaskPageManyWhereInput>;
};


export type MutationDeleteManyStageTasksArgs = {
  where?: InputMaybe<StageTaskManyWhereInput>;
};


export type MutationDeleteManyStageTasksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StageTaskManyWhereInput>;
};


export type MutationDeleteManyTasksToCompleteArgs = {
  where?: InputMaybe<TaskToCompleteManyWhereInput>;
};


export type MutationDeleteManyTasksToCompleteConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskToCompleteManyWhereInput>;
};


export type MutationDeleteModelBusinessPlanArgs = {
  where: ModelBusinessPlanWhereUniqueInput;
};


export type MutationDeleteModelSwotArgs = {
  where: ModelSwotWhereUniqueInput;
};


export type MutationDeletePresentationTipsPageArgs = {
  where: PresentationTipsPageWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteStageLandingPageArgs = {
  where: StageLandingPageWhereUniqueInput;
};


export type MutationDeleteStageTaskArgs = {
  where: StageTaskWhereUniqueInput;
};


export type MutationDeleteStageTaskPageArgs = {
  where: StageTaskPageWhereUniqueInput;
};


export type MutationDeleteTaskToCompleteArgs = {
  where: TaskToCompleteWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishChecklistArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ChecklistWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishDevelopmentOptionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: DevelopmentOptionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishHelpfulInfoArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: HelpfulInfoWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishInfoArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: InfoWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyChecklistsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ChecklistManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyChecklistsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ChecklistManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyDevelopmentOptionsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<DevelopmentOptionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyDevelopmentOptionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<DevelopmentOptionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyHelpfulInfosArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<HelpfulInfoManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyHelpfulInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<HelpfulInfoManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyInfosArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<InfoManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<InfoManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyModelBusinessPlansArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ModelBusinessPlanManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyModelBusinessPlansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ModelBusinessPlanManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyModelSwotsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ModelSwotManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyModelSwotsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ModelSwotManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPresentationTipsPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PresentationTipsPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPresentationTipsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PresentationTipsPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyStageLandingPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<StageLandingPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyStageLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<StageLandingPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyStageTaskPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<StageTaskPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyStageTaskPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<StageTaskPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyStageTasksArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<StageTaskManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyStageTasksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<StageTaskManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyTasksToCompleteArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<TaskToCompleteManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyTasksToCompleteConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TaskToCompleteManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishModelBusinessPlanArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ModelBusinessPlanWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishModelSwotArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ModelSwotWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPresentationTipsPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PresentationTipsPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishStageLandingPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: StageLandingPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishStageTaskArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: StageTaskWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishStageTaskPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: StageTaskPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishTaskToCompleteArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: TaskToCompleteWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishChecklistArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ChecklistWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishDevelopmentOptionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: DevelopmentOptionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishHelpfulInfoArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: HelpfulInfoWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishInfoArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: InfoWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishModelBusinessPlanArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ModelBusinessPlanWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishModelSwotArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ModelSwotWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPresentationTipsPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PresentationTipsPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishStageLandingPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: StageLandingPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishStageTaskArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: StageTaskWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishStageTaskPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: StageTaskPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishTaskToCompleteArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TaskToCompleteWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishChecklistArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ChecklistWhereUniqueInput;
};


export type MutationScheduleUnpublishDevelopmentOptionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: DevelopmentOptionWhereUniqueInput;
};


export type MutationScheduleUnpublishHelpfulInfoArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: HelpfulInfoWhereUniqueInput;
};


export type MutationScheduleUnpublishInfoArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: InfoWhereUniqueInput;
};


export type MutationScheduleUnpublishModelBusinessPlanArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ModelBusinessPlanWhereUniqueInput;
};


export type MutationScheduleUnpublishModelSwotArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ModelSwotWhereUniqueInput;
};


export type MutationScheduleUnpublishPresentationTipsPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PresentationTipsPageWhereUniqueInput;
};


export type MutationScheduleUnpublishStageLandingPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: StageLandingPageWhereUniqueInput;
};


export type MutationScheduleUnpublishStageTaskArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: StageTaskWhereUniqueInput;
};


export type MutationScheduleUnpublishStageTaskPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: StageTaskPageWhereUniqueInput;
};


export type MutationScheduleUnpublishTaskToCompleteArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: TaskToCompleteWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishChecklistArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ChecklistWhereUniqueInput;
};


export type MutationUnpublishDevelopmentOptionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: DevelopmentOptionWhereUniqueInput;
};


export type MutationUnpublishHelpfulInfoArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: HelpfulInfoWhereUniqueInput;
};


export type MutationUnpublishInfoArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: InfoWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyChecklistsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ChecklistManyWhereInput>;
};


export type MutationUnpublishManyChecklistsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ChecklistManyWhereInput>;
};


export type MutationUnpublishManyDevelopmentOptionsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DevelopmentOptionManyWhereInput>;
};


export type MutationUnpublishManyDevelopmentOptionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DevelopmentOptionManyWhereInput>;
};


export type MutationUnpublishManyHelpfulInfosArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<HelpfulInfoManyWhereInput>;
};


export type MutationUnpublishManyHelpfulInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<HelpfulInfoManyWhereInput>;
};


export type MutationUnpublishManyInfosArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationUnpublishManyInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationUnpublishManyModelBusinessPlansArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ModelBusinessPlanManyWhereInput>;
};


export type MutationUnpublishManyModelBusinessPlansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ModelBusinessPlanManyWhereInput>;
};


export type MutationUnpublishManyModelSwotsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ModelSwotManyWhereInput>;
};


export type MutationUnpublishManyModelSwotsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ModelSwotManyWhereInput>;
};


export type MutationUnpublishManyPresentationTipsPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PresentationTipsPageManyWhereInput>;
};


export type MutationUnpublishManyPresentationTipsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PresentationTipsPageManyWhereInput>;
};


export type MutationUnpublishManyStageLandingPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<StageLandingPageManyWhereInput>;
};


export type MutationUnpublishManyStageLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<StageLandingPageManyWhereInput>;
};


export type MutationUnpublishManyStageTaskPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<StageTaskPageManyWhereInput>;
};


export type MutationUnpublishManyStageTaskPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<StageTaskPageManyWhereInput>;
};


export type MutationUnpublishManyStageTasksArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<StageTaskManyWhereInput>;
};


export type MutationUnpublishManyStageTasksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<StageTaskManyWhereInput>;
};


export type MutationUnpublishManyTasksToCompleteArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TaskToCompleteManyWhereInput>;
};


export type MutationUnpublishManyTasksToCompleteConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TaskToCompleteManyWhereInput>;
};


export type MutationUnpublishModelBusinessPlanArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ModelBusinessPlanWhereUniqueInput;
};


export type MutationUnpublishModelSwotArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ModelSwotWhereUniqueInput;
};


export type MutationUnpublishPresentationTipsPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PresentationTipsPageWhereUniqueInput;
};


export type MutationUnpublishStageLandingPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: StageLandingPageWhereUniqueInput;
};


export type MutationUnpublishStageTaskArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: StageTaskWhereUniqueInput;
};


export type MutationUnpublishStageTaskPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: StageTaskPageWhereUniqueInput;
};


export type MutationUnpublishTaskToCompleteArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: TaskToCompleteWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateChecklistArgs = {
  data: ChecklistUpdateInput;
  where: ChecklistWhereUniqueInput;
};


export type MutationUpdateDevelopmentOptionArgs = {
  data: DevelopmentOptionUpdateInput;
  where: DevelopmentOptionWhereUniqueInput;
};


export type MutationUpdateHelpfulInfoArgs = {
  data: HelpfulInfoUpdateInput;
  where: HelpfulInfoWhereUniqueInput;
};


export type MutationUpdateInfoArgs = {
  data: InfoUpdateInput;
  where: InfoWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyChecklistsArgs = {
  data: ChecklistUpdateManyInput;
  where?: InputMaybe<ChecklistManyWhereInput>;
};


export type MutationUpdateManyChecklistsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ChecklistUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChecklistManyWhereInput>;
};


export type MutationUpdateManyDevelopmentOptionsArgs = {
  data: DevelopmentOptionUpdateManyInput;
  where?: InputMaybe<DevelopmentOptionManyWhereInput>;
};


export type MutationUpdateManyDevelopmentOptionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: DevelopmentOptionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DevelopmentOptionManyWhereInput>;
};


export type MutationUpdateManyHelpfulInfosArgs = {
  data: HelpfulInfoUpdateManyInput;
  where?: InputMaybe<HelpfulInfoManyWhereInput>;
};


export type MutationUpdateManyHelpfulInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: HelpfulInfoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HelpfulInfoManyWhereInput>;
};


export type MutationUpdateManyInfosArgs = {
  data: InfoUpdateManyInput;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationUpdateManyInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: InfoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationUpdateManyModelBusinessPlansArgs = {
  data: ModelBusinessPlanUpdateManyInput;
  where?: InputMaybe<ModelBusinessPlanManyWhereInput>;
};


export type MutationUpdateManyModelBusinessPlansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ModelBusinessPlanUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModelBusinessPlanManyWhereInput>;
};


export type MutationUpdateManyModelSwotsArgs = {
  data: ModelSwotUpdateManyInput;
  where?: InputMaybe<ModelSwotManyWhereInput>;
};


export type MutationUpdateManyModelSwotsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ModelSwotUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ModelSwotManyWhereInput>;
};


export type MutationUpdateManyPresentationTipsPagesArgs = {
  data: PresentationTipsPageUpdateManyInput;
  where?: InputMaybe<PresentationTipsPageManyWhereInput>;
};


export type MutationUpdateManyPresentationTipsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PresentationTipsPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationTipsPageManyWhereInput>;
};


export type MutationUpdateManyStageLandingPagesArgs = {
  data: StageLandingPageUpdateManyInput;
  where?: InputMaybe<StageLandingPageManyWhereInput>;
};


export type MutationUpdateManyStageLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: StageLandingPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StageLandingPageManyWhereInput>;
};


export type MutationUpdateManyStageTaskPagesArgs = {
  data: StageTaskPageUpdateManyInput;
  where?: InputMaybe<StageTaskPageManyWhereInput>;
};


export type MutationUpdateManyStageTaskPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: StageTaskPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StageTaskPageManyWhereInput>;
};


export type MutationUpdateManyStageTasksArgs = {
  data: StageTaskUpdateManyInput;
  where?: InputMaybe<StageTaskManyWhereInput>;
};


export type MutationUpdateManyStageTasksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: StageTaskUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StageTaskManyWhereInput>;
};


export type MutationUpdateManyTasksToCompleteArgs = {
  data: TaskToCompleteUpdateManyInput;
  where?: InputMaybe<TaskToCompleteManyWhereInput>;
};


export type MutationUpdateManyTasksToCompleteConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TaskToCompleteUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskToCompleteManyWhereInput>;
};


export type MutationUpdateModelBusinessPlanArgs = {
  data: ModelBusinessPlanUpdateInput;
  where: ModelBusinessPlanWhereUniqueInput;
};


export type MutationUpdateModelSwotArgs = {
  data: ModelSwotUpdateInput;
  where: ModelSwotWhereUniqueInput;
};


export type MutationUpdatePresentationTipsPageArgs = {
  data: PresentationTipsPageUpdateInput;
  where: PresentationTipsPageWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateStageLandingPageArgs = {
  data: StageLandingPageUpdateInput;
  where: StageLandingPageWhereUniqueInput;
};


export type MutationUpdateStageTaskArgs = {
  data: StageTaskUpdateInput;
  where: StageTaskWhereUniqueInput;
};


export type MutationUpdateStageTaskPageArgs = {
  data: StageTaskPageUpdateInput;
  where: StageTaskPageWhereUniqueInput;
};


export type MutationUpdateTaskToCompleteArgs = {
  data: TaskToCompleteUpdateInput;
  where: TaskToCompleteWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertChecklistArgs = {
  upsert: ChecklistUpsertInput;
  where: ChecklistWhereUniqueInput;
};


export type MutationUpsertDevelopmentOptionArgs = {
  upsert: DevelopmentOptionUpsertInput;
  where: DevelopmentOptionWhereUniqueInput;
};


export type MutationUpsertHelpfulInfoArgs = {
  upsert: HelpfulInfoUpsertInput;
  where: HelpfulInfoWhereUniqueInput;
};


export type MutationUpsertInfoArgs = {
  upsert: InfoUpsertInput;
  where: InfoWhereUniqueInput;
};


export type MutationUpsertModelBusinessPlanArgs = {
  upsert: ModelBusinessPlanUpsertInput;
  where: ModelBusinessPlanWhereUniqueInput;
};


export type MutationUpsertModelSwotArgs = {
  upsert: ModelSwotUpsertInput;
  where: ModelSwotWhereUniqueInput;
};


export type MutationUpsertPresentationTipsPageArgs = {
  upsert: PresentationTipsPageUpsertInput;
  where: PresentationTipsPageWhereUniqueInput;
};


export type MutationUpsertStageLandingPageArgs = {
  upsert: StageLandingPageUpsertInput;
  where: StageLandingPageWhereUniqueInput;
};


export type MutationUpsertStageTaskArgs = {
  upsert: StageTaskUpsertInput;
  where: StageTaskWhereUniqueInput;
};


export type MutationUpsertStageTaskPageArgs = {
  upsert: StageTaskPageUpsertInput;
  where: StageTaskPageWhereUniqueInput;
};


export type MutationUpsertTaskToCompleteArgs = {
  upsert: TaskToCompleteUpsertInput;
  where: TaskToCompleteWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PresentationTipsPage = Entity & Node & {
  __typename?: 'PresentationTipsPage';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PresentationTipsPage>;
  helpfulInfo?: Maybe<HelpfulInfo>;
  /** List of PresentationTipsPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  info?: Maybe<RichText>;
  intro?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PresentationTipsPage>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stageNumber?: Maybe<Scalars['Int']>;
  tips?: Maybe<RichText>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PresentationTipsPageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PresentationTipsPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PresentationTipsPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PresentationTipsPageHelpfulInfoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PresentationTipsPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PresentationTipsPageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PresentationTipsPagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PresentationTipsPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PresentationTipsPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PresentationTipsPageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PresentationTipsPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PresentationTipsPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PresentationTipsPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PresentationTipsPageConnection = {
  __typename?: 'PresentationTipsPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PresentationTipsPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PresentationTipsPageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  helpfulInfo?: InputMaybe<HelpfulInfoCreateOneInlineInput>;
  /** info input for default locale (en) */
  info?: InputMaybe<Scalars['RichTextAST']>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PresentationTipsPageCreateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** tips input for default locale (en) */
  tips?: InputMaybe<Scalars['RichTextAST']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PresentationTipsPageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  info?: InputMaybe<Scalars['RichTextAST']>;
  intro?: InputMaybe<Scalars['String']>;
  tips?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PresentationTipsPageCreateLocalizationInput = {
  /** Localization input */
  data: PresentationTipsPageCreateLocalizationDataInput;
  locale: Locale;
};

export type PresentationTipsPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PresentationTipsPageCreateLocalizationInput>>;
};

export type PresentationTipsPageCreateManyInlineInput = {
  /** Connect multiple existing PresentationTipsPage documents */
  connect?: InputMaybe<Array<PresentationTipsPageWhereUniqueInput>>;
  /** Create and connect multiple existing PresentationTipsPage documents */
  create?: InputMaybe<Array<PresentationTipsPageCreateInput>>;
};

/** An edge in a connection. */
export type PresentationTipsPageEdge = {
  __typename?: 'PresentationTipsPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PresentationTipsPage;
};

/** Identifies documents */
export type PresentationTipsPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PresentationTipsPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PresentationTipsPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PresentationTipsPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PresentationTipsPageWhereStageInput>;
  documentInStages_none?: InputMaybe<PresentationTipsPageWhereStageInput>;
  documentInStages_some?: InputMaybe<PresentationTipsPageWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PresentationTipsPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StageNumberAsc = 'stageNumber_ASC',
  StageNumberDesc = 'stageNumber_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PresentationTipsPageUpdateInput = {
  helpfulInfo?: InputMaybe<HelpfulInfoUpdateOneInlineInput>;
  /** info input for default locale (en) */
  info?: InputMaybe<Scalars['RichTextAST']>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PresentationTipsPageUpdateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** tips input for default locale (en) */
  tips?: InputMaybe<Scalars['RichTextAST']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type PresentationTipsPageUpdateLocalizationDataInput = {
  info?: InputMaybe<Scalars['RichTextAST']>;
  intro?: InputMaybe<Scalars['String']>;
  tips?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PresentationTipsPageUpdateLocalizationInput = {
  data: PresentationTipsPageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PresentationTipsPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PresentationTipsPageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PresentationTipsPageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PresentationTipsPageUpsertLocalizationInput>>;
};

export type PresentationTipsPageUpdateManyInlineInput = {
  /** Connect multiple existing PresentationTipsPage documents */
  connect?: InputMaybe<Array<PresentationTipsPageConnectInput>>;
  /** Create and connect multiple PresentationTipsPage documents */
  create?: InputMaybe<Array<PresentationTipsPageCreateInput>>;
  /** Delete multiple PresentationTipsPage documents */
  delete?: InputMaybe<Array<PresentationTipsPageWhereUniqueInput>>;
  /** Disconnect multiple PresentationTipsPage documents */
  disconnect?: InputMaybe<Array<PresentationTipsPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PresentationTipsPage documents */
  set?: InputMaybe<Array<PresentationTipsPageWhereUniqueInput>>;
  /** Update multiple PresentationTipsPage documents */
  update?: InputMaybe<Array<PresentationTipsPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PresentationTipsPage documents */
  upsert?: InputMaybe<Array<PresentationTipsPageUpsertWithNestedWhereUniqueInput>>;
};

export type PresentationTipsPageUpdateManyInput = {
  /** info input for default locale (en) */
  info?: InputMaybe<Scalars['RichTextAST']>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PresentationTipsPageUpdateManyLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** tips input for default locale (en) */
  tips?: InputMaybe<Scalars['RichTextAST']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type PresentationTipsPageUpdateManyLocalizationDataInput = {
  info?: InputMaybe<Scalars['RichTextAST']>;
  intro?: InputMaybe<Scalars['String']>;
  tips?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PresentationTipsPageUpdateManyLocalizationInput = {
  data: PresentationTipsPageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PresentationTipsPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PresentationTipsPageUpdateManyLocalizationInput>>;
};

export type PresentationTipsPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PresentationTipsPageUpdateInput;
  /** Unique document search */
  where: PresentationTipsPageWhereUniqueInput;
};

export type PresentationTipsPageUpsertInput = {
  /** Create document if it didn't exist */
  create: PresentationTipsPageCreateInput;
  /** Update document if it exists */
  update: PresentationTipsPageUpdateInput;
};

export type PresentationTipsPageUpsertLocalizationInput = {
  create: PresentationTipsPageCreateLocalizationDataInput;
  locale: Locale;
  update: PresentationTipsPageUpdateLocalizationDataInput;
};

export type PresentationTipsPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PresentationTipsPageUpsertInput;
  /** Unique document search */
  where: PresentationTipsPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PresentationTipsPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PresentationTipsPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PresentationTipsPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PresentationTipsPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PresentationTipsPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PresentationTipsPageWhereStageInput>;
  documentInStages_none?: InputMaybe<PresentationTipsPageWhereStageInput>;
  documentInStages_some?: InputMaybe<PresentationTipsPageWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  intro?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  intro_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  intro_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  intro_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  intro_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  intro_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  intro_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  intro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  intro_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  intro_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PresentationTipsPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PresentationTipsPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PresentationTipsPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PresentationTipsPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PresentationTipsPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PresentationTipsPage record uniquely */
export type PresentationTipsPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single checklist */
  checklist?: Maybe<Checklist>;
  /** Retrieve document version */
  checklistVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple checklists */
  checklists: Array<Checklist>;
  /** Retrieve multiple checklists using the Relay connection interface */
  checklistsConnection: ChecklistConnection;
  /** Retrieve a single developmentOption */
  developmentOption?: Maybe<DevelopmentOption>;
  /** Retrieve document version */
  developmentOptionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple developmentOptions */
  developmentOptions: Array<DevelopmentOption>;
  /** Retrieve multiple developmentOptions using the Relay connection interface */
  developmentOptionsConnection: DevelopmentOptionConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single helpfulInfo */
  helpfulInfo?: Maybe<HelpfulInfo>;
  /** Retrieve document version */
  helpfulInfoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple helpfulInfos */
  helpfulInfos: Array<HelpfulInfo>;
  /** Retrieve multiple helpfulInfos using the Relay connection interface */
  helpfulInfosConnection: HelpfulInfoConnection;
  /** Retrieve a single info */
  info?: Maybe<Info>;
  /** Retrieve document version */
  infoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple infos */
  infos: Array<Info>;
  /** Retrieve multiple infos using the Relay connection interface */
  infosConnection: InfoConnection;
  /** Retrieve a single modelBusinessPlan */
  modelBusinessPlan?: Maybe<ModelBusinessPlan>;
  /** Retrieve document version */
  modelBusinessPlanVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple modelBusinessPlans */
  modelBusinessPlans: Array<ModelBusinessPlan>;
  /** Retrieve multiple modelBusinessPlans using the Relay connection interface */
  modelBusinessPlansConnection: ModelBusinessPlanConnection;
  /** Retrieve a single modelSwot */
  modelSwot?: Maybe<ModelSwot>;
  /** Retrieve document version */
  modelSwotVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple modelSwots */
  modelSwots: Array<ModelSwot>;
  /** Retrieve multiple modelSwots using the Relay connection interface */
  modelSwotsConnection: ModelSwotConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single presentationTipsPage */
  presentationTipsPage?: Maybe<PresentationTipsPage>;
  /** Retrieve document version */
  presentationTipsPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple presentationTipsPages */
  presentationTipsPages: Array<PresentationTipsPage>;
  /** Retrieve multiple presentationTipsPages using the Relay connection interface */
  presentationTipsPagesConnection: PresentationTipsPageConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single stageLandingPage */
  stageLandingPage?: Maybe<StageLandingPage>;
  /** Retrieve document version */
  stageLandingPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple stageLandingPages */
  stageLandingPages: Array<StageLandingPage>;
  /** Retrieve multiple stageLandingPages using the Relay connection interface */
  stageLandingPagesConnection: StageLandingPageConnection;
  /** Retrieve a single stageTask */
  stageTask?: Maybe<StageTask>;
  /** Retrieve a single stageTaskPage */
  stageTaskPage?: Maybe<StageTaskPage>;
  /** Retrieve document version */
  stageTaskPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple stageTaskPages */
  stageTaskPages: Array<StageTaskPage>;
  /** Retrieve multiple stageTaskPages using the Relay connection interface */
  stageTaskPagesConnection: StageTaskPageConnection;
  /** Retrieve document version */
  stageTaskVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple stageTasks */
  stageTasks: Array<StageTask>;
  /** Retrieve multiple stageTasks using the Relay connection interface */
  stageTasksConnection: StageTaskConnection;
  /** Retrieve a single taskToComplete */
  taskToComplete?: Maybe<TaskToComplete>;
  /** Retrieve document version */
  taskToCompleteVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tasksToComplete */
  tasksToComplete: Array<TaskToComplete>;
  /** Retrieve multiple tasksToComplete using the Relay connection interface */
  tasksToCompleteConnection: TaskToCompleteConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryChecklistArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ChecklistWhereUniqueInput;
};


export type QueryChecklistVersionArgs = {
  where: VersionWhereInput;
};


export type QueryChecklistsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ChecklistOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ChecklistWhereInput>;
};


export type QueryChecklistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ChecklistOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ChecklistWhereInput>;
};


export type QueryDevelopmentOptionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: DevelopmentOptionWhereUniqueInput;
};


export type QueryDevelopmentOptionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryDevelopmentOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DevelopmentOptionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DevelopmentOptionWhereInput>;
};


export type QueryDevelopmentOptionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DevelopmentOptionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DevelopmentOptionWhereInput>;
};


export type QueryEntitiesArgs = {
  where: Array<EntityWhereInput>;
};


export type QueryHelpfulInfoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HelpfulInfoWhereUniqueInput;
};


export type QueryHelpfulInfoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHelpfulInfosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HelpfulInfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HelpfulInfoWhereInput>;
};


export type QueryHelpfulInfosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HelpfulInfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HelpfulInfoWhereInput>;
};


export type QueryInfoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: InfoWhereUniqueInput;
};


export type QueryInfoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryInfosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<InfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<InfoWhereInput>;
};


export type QueryInfosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<InfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<InfoWhereInput>;
};


export type QueryModelBusinessPlanArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ModelBusinessPlanWhereUniqueInput;
};


export type QueryModelBusinessPlanVersionArgs = {
  where: VersionWhereInput;
};


export type QueryModelBusinessPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ModelBusinessPlanOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ModelBusinessPlanWhereInput>;
};


export type QueryModelBusinessPlansConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ModelBusinessPlanOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ModelBusinessPlanWhereInput>;
};


export type QueryModelSwotArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ModelSwotWhereUniqueInput;
};


export type QueryModelSwotVersionArgs = {
  where: VersionWhereInput;
};


export type QueryModelSwotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ModelSwotOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ModelSwotWhereInput>;
};


export type QueryModelSwotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ModelSwotOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ModelSwotWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPresentationTipsPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PresentationTipsPageWhereUniqueInput;
};


export type QueryPresentationTipsPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPresentationTipsPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PresentationTipsPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PresentationTipsPageWhereInput>;
};


export type QueryPresentationTipsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PresentationTipsPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PresentationTipsPageWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryStageLandingPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StageLandingPageWhereUniqueInput;
};


export type QueryStageLandingPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStageLandingPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StageLandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StageLandingPageWhereInput>;
};


export type QueryStageLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StageLandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StageLandingPageWhereInput>;
};


export type QueryStageTaskArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StageTaskWhereUniqueInput;
};


export type QueryStageTaskPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StageTaskPageWhereUniqueInput;
};


export type QueryStageTaskPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStageTaskPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StageTaskPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StageTaskPageWhereInput>;
};


export type QueryStageTaskPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StageTaskPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StageTaskPageWhereInput>;
};


export type QueryStageTaskVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStageTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StageTaskOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StageTaskWhereInput>;
};


export type QueryStageTasksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StageTaskOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StageTaskWhereInput>;
};


export type QueryTaskToCompleteArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TaskToCompleteWhereUniqueInput;
};


export type QueryTaskToCompleteVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTasksToCompleteArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TaskToCompleteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TaskToCompleteWhereInput>;
};


export type QueryTasksToCompleteConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TaskToCompleteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TaskToCompleteWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type RunningCostItem = Entity & {
  __typename?: 'RunningCostItem';
  /** The unique identifier */
  id: Scalars['ID'];
  item: Scalars['String'];
  /** System stage field */
  stage: Stage;
  yearFour: Scalars['Int'];
  yearOne: Scalars['Int'];
  yearThree: Scalars['Int'];
  yearTwo: Scalars['Int'];
};

export type RunningCostItemCreateInput = {
  item: Scalars['String'];
  yearFour: Scalars['Int'];
  yearOne: Scalars['Int'];
  yearThree: Scalars['Int'];
  yearTwo: Scalars['Int'];
};

export type RunningCostItemCreateManyInlineInput = {
  /** Create and connect multiple existing RunningCostItem documents */
  create?: InputMaybe<Array<RunningCostItemCreateInput>>;
};

export type RunningCostItemCreateWithPositionInput = {
  /** Document to create */
  data: RunningCostItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

export enum RunningCostItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ItemAsc = 'item_ASC',
  ItemDesc = 'item_DESC',
  YearFourAsc = 'yearFour_ASC',
  YearFourDesc = 'yearFour_DESC',
  YearOneAsc = 'yearOne_ASC',
  YearOneDesc = 'yearOne_DESC',
  YearThreeAsc = 'yearThree_ASC',
  YearThreeDesc = 'yearThree_DESC',
  YearTwoAsc = 'yearTwo_ASC',
  YearTwoDesc = 'yearTwo_DESC'
}

export type RunningCostItemUpdateInput = {
  item?: InputMaybe<Scalars['String']>;
  yearFour?: InputMaybe<Scalars['Int']>;
  yearOne?: InputMaybe<Scalars['Int']>;
  yearThree?: InputMaybe<Scalars['Int']>;
  yearTwo?: InputMaybe<Scalars['Int']>;
};

export type RunningCostItemUpdateManyInlineInput = {
  /** Create and connect multiple RunningCostItem component instances */
  create?: InputMaybe<Array<RunningCostItemCreateWithPositionInput>>;
  /** Delete multiple RunningCostItem documents */
  delete?: InputMaybe<Array<RunningCostItemWhereUniqueInput>>;
  /** Update multiple RunningCostItem component instances */
  update?: InputMaybe<Array<RunningCostItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple RunningCostItem component instances */
  upsert?: InputMaybe<Array<RunningCostItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type RunningCostItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<RunningCostItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RunningCostItemWhereUniqueInput;
};

export type RunningCostItemUpsertInput = {
  /** Create document if it didn't exist */
  create: RunningCostItemCreateInput;
  /** Update document if it exists */
  update: RunningCostItemUpdateInput;
};

export type RunningCostItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<RunningCostItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RunningCostItemWhereUniqueInput;
};

/** Identifies documents */
export type RunningCostItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RunningCostItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RunningCostItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RunningCostItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  item_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  item_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  item_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  item_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  item_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  item_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  item_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  item_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  item_starts_with?: InputMaybe<Scalars['String']>;
  yearFour?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  yearFour_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  yearFour_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  yearFour_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  yearFour_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  yearFour_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  yearFour_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  yearFour_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  yearOne?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  yearOne_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  yearOne_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  yearOne_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  yearOne_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  yearOne_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  yearOne_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  yearOne_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  yearThree?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  yearThree_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  yearThree_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  yearThree_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  yearThree_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  yearThree_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  yearThree_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  yearThree_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  yearTwo?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  yearTwo_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  yearTwo_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  yearTwo_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  yearTwo_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  yearTwo_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  yearTwo_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  yearTwo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** References RunningCostItem record uniquely */
export type RunningCostItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type RunningCostsSection = Entity & {
  __typename?: 'RunningCostsSection';
  costs: Array<RunningCostItem>;
  /** The unique identifier */
  id: Scalars['ID'];
  incomes: Array<RunningCostItem>;
  /** System stage field */
  stage: Stage;
};


export type RunningCostsSectionCostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<RunningCostItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RunningCostItemWhereInput>;
};


export type RunningCostsSectionIncomesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<RunningCostItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RunningCostItemWhereInput>;
};

export type RunningCostsSectionCreateInput = {
  costs?: InputMaybe<RunningCostItemCreateManyInlineInput>;
  incomes?: InputMaybe<RunningCostItemCreateManyInlineInput>;
};

export type RunningCostsSectionCreateOneInlineInput = {
  /** Create and connect one RunningCostsSection document */
  create?: InputMaybe<RunningCostsSectionCreateInput>;
};

export type RunningCostsSectionUpdateInput = {
  costs?: InputMaybe<RunningCostItemUpdateManyInlineInput>;
  incomes?: InputMaybe<RunningCostItemUpdateManyInlineInput>;
};

export type RunningCostsSectionUpdateOneInlineInput = {
  /** Create and connect one RunningCostsSection document */
  create?: InputMaybe<RunningCostsSectionCreateInput>;
  /** Delete currently connected RunningCostsSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single RunningCostsSection document */
  update?: InputMaybe<RunningCostsSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RunningCostsSection document */
  upsert?: InputMaybe<RunningCostsSectionUpsertWithNestedWhereUniqueInput>;
};

export type RunningCostsSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RunningCostsSectionUpdateInput;
  /** Unique document search */
  where: RunningCostsSectionWhereUniqueInput;
};

export type RunningCostsSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: RunningCostsSectionCreateInput;
  /** Update document if it exists */
  update: RunningCostsSectionUpdateInput;
};

export type RunningCostsSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RunningCostsSectionUpsertInput;
  /** Unique document search */
  where: RunningCostsSectionWhereUniqueInput;
};

/** Identifies documents */
export type RunningCostsSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RunningCostsSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RunningCostsSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RunningCostsSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  costs_every?: InputMaybe<RunningCostItemWhereInput>;
  costs_none?: InputMaybe<RunningCostItemWhereInput>;
  costs_some?: InputMaybe<RunningCostItemWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  incomes_every?: InputMaybe<RunningCostItemWhereInput>;
  incomes_none?: InputMaybe<RunningCostItemWhereInput>;
  incomes_some?: InputMaybe<RunningCostItemWhereInput>;
};

/** References RunningCostsSection record uniquely */
export type RunningCostsSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Checklist | DevelopmentOption | HelpfulInfo | Info | ModelBusinessPlan | ModelSwot | PresentationTipsPage | StageLandingPage | StageTask | StageTaskPage | TaskToComplete;

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SetupCostItem = Entity & {
  __typename?: 'SetupCostItem';
  cost: Scalars['Int'];
  /** The unique identifier */
  id: Scalars['ID'];
  item: Scalars['String'];
  /** System stage field */
  stage: Stage;
};

export type SetupCostItemCreateInput = {
  cost: Scalars['Int'];
  item: Scalars['String'];
};

export type SetupCostItemCreateManyInlineInput = {
  /** Create and connect multiple existing SetupCostItem documents */
  create?: InputMaybe<Array<SetupCostItemCreateInput>>;
};

export type SetupCostItemCreateWithPositionInput = {
  /** Document to create */
  data: SetupCostItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

export enum SetupCostItemOrderByInput {
  CostAsc = 'cost_ASC',
  CostDesc = 'cost_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ItemAsc = 'item_ASC',
  ItemDesc = 'item_DESC'
}

export type SetupCostItemUpdateInput = {
  cost?: InputMaybe<Scalars['Int']>;
  item?: InputMaybe<Scalars['String']>;
};

export type SetupCostItemUpdateManyInlineInput = {
  /** Create and connect multiple SetupCostItem component instances */
  create?: InputMaybe<Array<SetupCostItemCreateWithPositionInput>>;
  /** Delete multiple SetupCostItem documents */
  delete?: InputMaybe<Array<SetupCostItemWhereUniqueInput>>;
  /** Update multiple SetupCostItem component instances */
  update?: InputMaybe<Array<SetupCostItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SetupCostItem component instances */
  upsert?: InputMaybe<Array<SetupCostItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SetupCostItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SetupCostItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SetupCostItemWhereUniqueInput;
};

export type SetupCostItemUpsertInput = {
  /** Create document if it didn't exist */
  create: SetupCostItemCreateInput;
  /** Update document if it exists */
  update: SetupCostItemUpdateInput;
};

export type SetupCostItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SetupCostItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SetupCostItemWhereUniqueInput;
};

/** Identifies documents */
export type SetupCostItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SetupCostItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SetupCostItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SetupCostItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  cost_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  cost_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  cost_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  cost_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  cost_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  cost_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  cost_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  item_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  item_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  item_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  item_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  item_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  item_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  item_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  item_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  item_starts_with?: InputMaybe<Scalars['String']>;
};

/** References SetupCostItem record uniquely */
export type SetupCostItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SetupCostsSection = Entity & {
  __typename?: 'SetupCostsSection';
  costItems: Array<SetupCostItem>;
  fundingSources: Array<FundingSource>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};


export type SetupCostsSectionCostItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SetupCostItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SetupCostItemWhereInput>;
};


export type SetupCostsSectionFundingSourcesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FundingSourceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FundingSourceWhereInput>;
};

export type SetupCostsSectionCreateInput = {
  costItems?: InputMaybe<SetupCostItemCreateManyInlineInput>;
  fundingSources?: InputMaybe<FundingSourceCreateManyInlineInput>;
};

export type SetupCostsSectionCreateOneInlineInput = {
  /** Create and connect one SetupCostsSection document */
  create?: InputMaybe<SetupCostsSectionCreateInput>;
};

export type SetupCostsSectionUpdateInput = {
  costItems?: InputMaybe<SetupCostItemUpdateManyInlineInput>;
  fundingSources?: InputMaybe<FundingSourceUpdateManyInlineInput>;
};

export type SetupCostsSectionUpdateOneInlineInput = {
  /** Create and connect one SetupCostsSection document */
  create?: InputMaybe<SetupCostsSectionCreateInput>;
  /** Delete currently connected SetupCostsSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single SetupCostsSection document */
  update?: InputMaybe<SetupCostsSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SetupCostsSection document */
  upsert?: InputMaybe<SetupCostsSectionUpsertWithNestedWhereUniqueInput>;
};

export type SetupCostsSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SetupCostsSectionUpdateInput;
  /** Unique document search */
  where: SetupCostsSectionWhereUniqueInput;
};

export type SetupCostsSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: SetupCostsSectionCreateInput;
  /** Update document if it exists */
  update: SetupCostsSectionUpdateInput;
};

export type SetupCostsSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SetupCostsSectionUpsertInput;
  /** Unique document search */
  where: SetupCostsSectionWhereUniqueInput;
};

/** Identifies documents */
export type SetupCostsSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SetupCostsSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SetupCostsSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SetupCostsSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  costItems_every?: InputMaybe<SetupCostItemWhereInput>;
  costItems_none?: InputMaybe<SetupCostItemWhereInput>;
  costItems_some?: InputMaybe<SetupCostItemWhereInput>;
  fundingSources_every?: InputMaybe<FundingSourceWhereInput>;
  fundingSources_none?: InputMaybe<FundingSourceWhereInput>;
  fundingSources_some?: InputMaybe<FundingSourceWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References SetupCostsSection record uniquely */
export type SetupCostsSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type StageLandingPage = Entity & Node & {
  __typename?: 'StageLandingPage';
  checklist?: Maybe<Checklist>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<StageLandingPage>;
  helpfulInfo?: Maybe<HelpfulInfo>;
  /** List of StageLandingPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  infoLink: Array<RichText>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<StageLandingPage>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stageInfo?: Maybe<RichText>;
  /** Questy box at top of landing page */
  stageIntro: Scalars['String'];
  stageIntroRich?: Maybe<RichText>;
  stageNumber: Scalars['Int'];
  stageTitle: Scalars['String'];
  tasksToComplete: Array<TaskToComplete>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type StageLandingPageChecklistArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageLandingPageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageLandingPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageLandingPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type StageLandingPageHelpfulInfoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageLandingPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type StageLandingPageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type StageLandingPagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageLandingPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageLandingPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StageLandingPageTasksToCompleteArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TaskToCompleteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskToCompleteWhereInput>;
};


export type StageLandingPageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageLandingPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type StageLandingPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StageLandingPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type StageLandingPageConnection = {
  __typename?: 'StageLandingPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StageLandingPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StageLandingPageCreateInput = {
  checklist?: InputMaybe<ChecklistCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  helpfulInfo?: InputMaybe<HelpfulInfoCreateOneInlineInput>;
  /** infoLink input for default locale (en) */
  infoLink?: InputMaybe<Array<Scalars['RichTextAST']>>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<StageLandingPageCreateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** stageInfo input for default locale (en) */
  stageInfo?: InputMaybe<Scalars['RichTextAST']>;
  /** stageIntro input for default locale (en) */
  stageIntro: Scalars['String'];
  /** stageIntroRich input for default locale (en) */
  stageIntroRich?: InputMaybe<Scalars['RichTextAST']>;
  stageNumber: Scalars['Int'];
  /** stageTitle input for default locale (en) */
  stageTitle: Scalars['String'];
  tasksToComplete?: InputMaybe<TaskToCompleteCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StageLandingPageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  infoLink?: InputMaybe<Array<Scalars['RichTextAST']>>;
  stageInfo?: InputMaybe<Scalars['RichTextAST']>;
  stageIntro: Scalars['String'];
  stageIntroRich?: InputMaybe<Scalars['RichTextAST']>;
  stageTitle: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StageLandingPageCreateLocalizationInput = {
  /** Localization input */
  data: StageLandingPageCreateLocalizationDataInput;
  locale: Locale;
};

export type StageLandingPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<StageLandingPageCreateLocalizationInput>>;
};

export type StageLandingPageCreateManyInlineInput = {
  /** Connect multiple existing StageLandingPage documents */
  connect?: InputMaybe<Array<StageLandingPageWhereUniqueInput>>;
  /** Create and connect multiple existing StageLandingPage documents */
  create?: InputMaybe<Array<StageLandingPageCreateInput>>;
};

/** An edge in a connection. */
export type StageLandingPageEdge = {
  __typename?: 'StageLandingPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: StageLandingPage;
};

/** Identifies documents */
export type StageLandingPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageLandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageLandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageLandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StageLandingPageWhereStageInput>;
  documentInStages_none?: InputMaybe<StageLandingPageWhereStageInput>;
  documentInStages_some?: InputMaybe<StageLandingPageWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tasksToComplete_every?: InputMaybe<TaskToCompleteWhereInput>;
  tasksToComplete_none?: InputMaybe<TaskToCompleteWhereInput>;
  tasksToComplete_some?: InputMaybe<TaskToCompleteWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StageLandingPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StageIntroAsc = 'stageIntro_ASC',
  StageIntroDesc = 'stageIntro_DESC',
  StageNumberAsc = 'stageNumber_ASC',
  StageNumberDesc = 'stageNumber_DESC',
  StageTitleAsc = 'stageTitle_ASC',
  StageTitleDesc = 'stageTitle_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StageLandingPageUpdateInput = {
  checklist?: InputMaybe<ChecklistUpdateOneInlineInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoUpdateOneInlineInput>;
  /** infoLink input for default locale (en) */
  infoLink?: InputMaybe<Array<Scalars['RichTextAST']>>;
  /** Manage document localizations */
  localizations?: InputMaybe<StageLandingPageUpdateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** stageInfo input for default locale (en) */
  stageInfo?: InputMaybe<Scalars['RichTextAST']>;
  /** stageIntro input for default locale (en) */
  stageIntro?: InputMaybe<Scalars['String']>;
  /** stageIntroRich input for default locale (en) */
  stageIntroRich?: InputMaybe<Scalars['RichTextAST']>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** stageTitle input for default locale (en) */
  stageTitle?: InputMaybe<Scalars['String']>;
  tasksToComplete?: InputMaybe<TaskToCompleteUpdateManyInlineInput>;
};

export type StageLandingPageUpdateLocalizationDataInput = {
  infoLink?: InputMaybe<Array<Scalars['RichTextAST']>>;
  stageInfo?: InputMaybe<Scalars['RichTextAST']>;
  stageIntro?: InputMaybe<Scalars['String']>;
  stageIntroRich?: InputMaybe<Scalars['RichTextAST']>;
  stageTitle?: InputMaybe<Scalars['String']>;
};

export type StageLandingPageUpdateLocalizationInput = {
  data: StageLandingPageUpdateLocalizationDataInput;
  locale: Locale;
};

export type StageLandingPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<StageLandingPageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<StageLandingPageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<StageLandingPageUpsertLocalizationInput>>;
};

export type StageLandingPageUpdateManyInlineInput = {
  /** Connect multiple existing StageLandingPage documents */
  connect?: InputMaybe<Array<StageLandingPageConnectInput>>;
  /** Create and connect multiple StageLandingPage documents */
  create?: InputMaybe<Array<StageLandingPageCreateInput>>;
  /** Delete multiple StageLandingPage documents */
  delete?: InputMaybe<Array<StageLandingPageWhereUniqueInput>>;
  /** Disconnect multiple StageLandingPage documents */
  disconnect?: InputMaybe<Array<StageLandingPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StageLandingPage documents */
  set?: InputMaybe<Array<StageLandingPageWhereUniqueInput>>;
  /** Update multiple StageLandingPage documents */
  update?: InputMaybe<Array<StageLandingPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StageLandingPage documents */
  upsert?: InputMaybe<Array<StageLandingPageUpsertWithNestedWhereUniqueInput>>;
};

export type StageLandingPageUpdateManyInput = {
  /** infoLink input for default locale (en) */
  infoLink?: InputMaybe<Array<Scalars['RichTextAST']>>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<StageLandingPageUpdateManyLocalizationsInput>;
  /** stageInfo input for default locale (en) */
  stageInfo?: InputMaybe<Scalars['RichTextAST']>;
  /** stageIntro input for default locale (en) */
  stageIntro?: InputMaybe<Scalars['String']>;
  /** stageIntroRich input for default locale (en) */
  stageIntroRich?: InputMaybe<Scalars['RichTextAST']>;
  stageNumber?: InputMaybe<Scalars['Int']>;
};

export type StageLandingPageUpdateManyLocalizationDataInput = {
  infoLink?: InputMaybe<Array<Scalars['RichTextAST']>>;
  stageInfo?: InputMaybe<Scalars['RichTextAST']>;
  stageIntro?: InputMaybe<Scalars['String']>;
  stageIntroRich?: InputMaybe<Scalars['RichTextAST']>;
};

export type StageLandingPageUpdateManyLocalizationInput = {
  data: StageLandingPageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type StageLandingPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<StageLandingPageUpdateManyLocalizationInput>>;
};

export type StageLandingPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StageLandingPageUpdateInput;
  /** Unique document search */
  where: StageLandingPageWhereUniqueInput;
};

export type StageLandingPageUpsertInput = {
  /** Create document if it didn't exist */
  create: StageLandingPageCreateInput;
  /** Update document if it exists */
  update: StageLandingPageUpdateInput;
};

export type StageLandingPageUpsertLocalizationInput = {
  create: StageLandingPageCreateLocalizationDataInput;
  locale: Locale;
  update: StageLandingPageUpdateLocalizationDataInput;
};

export type StageLandingPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StageLandingPageUpsertInput;
  /** Unique document search */
  where: StageLandingPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StageLandingPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type StageLandingPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageLandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageLandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageLandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StageLandingPageWhereStageInput>;
  documentInStages_none?: InputMaybe<StageLandingPageWhereStageInput>;
  documentInStages_some?: InputMaybe<StageLandingPageWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stageIntro?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  stageIntro_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  stageIntro_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stageIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  stageIntro_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  stageIntro_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  stageIntro_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stageIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  stageIntro_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  stageIntro_starts_with?: InputMaybe<Scalars['String']>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  stageTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  stageTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  stageTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  stageTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  stageTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  stageTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  stageTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  stageTitle_starts_with?: InputMaybe<Scalars['String']>;
  tasksToComplete_every?: InputMaybe<TaskToCompleteWhereInput>;
  tasksToComplete_none?: InputMaybe<TaskToCompleteWhereInput>;
  tasksToComplete_some?: InputMaybe<TaskToCompleteWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StageLandingPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageLandingPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageLandingPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageLandingPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StageLandingPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References StageLandingPage record uniquely */
export type StageLandingPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type StageTask = Entity & Node & {
  __typename?: 'StageTask';
  checklist?: Maybe<Checklist>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<StageTask>;
  helpfulInfo?: Maybe<HelpfulInfo>;
  /** List of StageTask versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<RichText>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<StageTask>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  questions: Array<RichText>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  stageNumber?: Maybe<Scalars['Int']>;
  submittedText?: Maybe<RichText>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type StageTaskChecklistArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageTaskCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageTaskCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageTaskDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type StageTaskHelpfulInfoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageTaskHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type StageTaskLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type StageTaskPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageTaskPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageTaskScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StageTaskUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageTaskUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type StageTaskConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StageTaskWhereUniqueInput;
};

/** A connection to a list of items. */
export type StageTaskConnection = {
  __typename?: 'StageTaskConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StageTaskEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StageTaskCreateInput = {
  checklist?: InputMaybe<ChecklistCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  helpfulInfo?: InputMaybe<HelpfulInfoCreateOneInlineInput>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['RichTextAST']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<StageTaskCreateLocalizationsInput>;
  /** questions input for default locale (en) */
  questions?: InputMaybe<Array<Scalars['RichTextAST']>>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StageTaskCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  intro?: InputMaybe<Scalars['RichTextAST']>;
  questions?: InputMaybe<Array<Scalars['RichTextAST']>>;
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StageTaskCreateLocalizationInput = {
  /** Localization input */
  data: StageTaskCreateLocalizationDataInput;
  locale: Locale;
};

export type StageTaskCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<StageTaskCreateLocalizationInput>>;
};

export type StageTaskCreateManyInlineInput = {
  /** Connect multiple existing StageTask documents */
  connect?: InputMaybe<Array<StageTaskWhereUniqueInput>>;
  /** Create and connect multiple existing StageTask documents */
  create?: InputMaybe<Array<StageTaskCreateInput>>;
};

/** An edge in a connection. */
export type StageTaskEdge = {
  __typename?: 'StageTaskEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: StageTask;
};

/** Identifies documents */
export type StageTaskManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageTaskWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageTaskWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageTaskWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StageTaskWhereStageInput>;
  documentInStages_none?: InputMaybe<StageTaskWhereStageInput>;
  documentInStages_some?: InputMaybe<StageTaskWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StageTaskOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StageNumberAsc = 'stageNumber_ASC',
  StageNumberDesc = 'stageNumber_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StageTaskPage = Entity & Node & {
  __typename?: 'StageTaskPage';
  checklist?: Maybe<Checklist>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<StageTaskPage>;
  helpfulInfo?: Maybe<HelpfulInfo>;
  /** List of StageTaskPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<StageTaskPage>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  stageNumber?: Maybe<Scalars['Int']>;
  submittedText?: Maybe<RichText>;
  taskInfo?: Maybe<RichText>;
  tasksToComplete: Array<TaskToComplete>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type StageTaskPageChecklistArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageTaskPageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageTaskPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageTaskPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type StageTaskPageHelpfulInfoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageTaskPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type StageTaskPageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type StageTaskPagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageTaskPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StageTaskPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StageTaskPageTasksToCompleteArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TaskToCompleteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskToCompleteWhereInput>;
};


export type StageTaskPageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StageTaskPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type StageTaskPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StageTaskPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type StageTaskPageConnection = {
  __typename?: 'StageTaskPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StageTaskPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StageTaskPageCreateInput = {
  checklist?: InputMaybe<ChecklistCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  helpfulInfo?: InputMaybe<HelpfulInfoCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<StageTaskPageCreateLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** taskInfo input for default locale (en) */
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  tasksToComplete?: InputMaybe<TaskToCompleteCreateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StageTaskPageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StageTaskPageCreateLocalizationInput = {
  /** Localization input */
  data: StageTaskPageCreateLocalizationDataInput;
  locale: Locale;
};

export type StageTaskPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<StageTaskPageCreateLocalizationInput>>;
};

export type StageTaskPageCreateManyInlineInput = {
  /** Connect multiple existing StageTaskPage documents */
  connect?: InputMaybe<Array<StageTaskPageWhereUniqueInput>>;
  /** Create and connect multiple existing StageTaskPage documents */
  create?: InputMaybe<Array<StageTaskPageCreateInput>>;
};

/** An edge in a connection. */
export type StageTaskPageEdge = {
  __typename?: 'StageTaskPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: StageTaskPage;
};

/** Identifies documents */
export type StageTaskPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageTaskPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageTaskPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageTaskPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StageTaskPageWhereStageInput>;
  documentInStages_none?: InputMaybe<StageTaskPageWhereStageInput>;
  documentInStages_some?: InputMaybe<StageTaskPageWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tasksToComplete_every?: InputMaybe<TaskToCompleteWhereInput>;
  tasksToComplete_none?: InputMaybe<TaskToCompleteWhereInput>;
  tasksToComplete_some?: InputMaybe<TaskToCompleteWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StageTaskPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StageNumberAsc = 'stageNumber_ASC',
  StageNumberDesc = 'stageNumber_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StageTaskPageUpdateInput = {
  checklist?: InputMaybe<ChecklistUpdateOneInlineInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<StageTaskPageUpdateLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** taskInfo input for default locale (en) */
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  tasksToComplete?: InputMaybe<TaskToCompleteUpdateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type StageTaskPageUpdateLocalizationDataInput = {
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StageTaskPageUpdateLocalizationInput = {
  data: StageTaskPageUpdateLocalizationDataInput;
  locale: Locale;
};

export type StageTaskPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<StageTaskPageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<StageTaskPageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<StageTaskPageUpsertLocalizationInput>>;
};

export type StageTaskPageUpdateManyInlineInput = {
  /** Connect multiple existing StageTaskPage documents */
  connect?: InputMaybe<Array<StageTaskPageConnectInput>>;
  /** Create and connect multiple StageTaskPage documents */
  create?: InputMaybe<Array<StageTaskPageCreateInput>>;
  /** Delete multiple StageTaskPage documents */
  delete?: InputMaybe<Array<StageTaskPageWhereUniqueInput>>;
  /** Disconnect multiple StageTaskPage documents */
  disconnect?: InputMaybe<Array<StageTaskPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StageTaskPage documents */
  set?: InputMaybe<Array<StageTaskPageWhereUniqueInput>>;
  /** Update multiple StageTaskPage documents */
  update?: InputMaybe<Array<StageTaskPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StageTaskPage documents */
  upsert?: InputMaybe<Array<StageTaskPageUpsertWithNestedWhereUniqueInput>>;
};

export type StageTaskPageUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<StageTaskPageUpdateManyLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** taskInfo input for default locale (en) */
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type StageTaskPageUpdateManyLocalizationDataInput = {
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StageTaskPageUpdateManyLocalizationInput = {
  data: StageTaskPageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type StageTaskPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<StageTaskPageUpdateManyLocalizationInput>>;
};

export type StageTaskPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StageTaskPageUpdateInput;
  /** Unique document search */
  where: StageTaskPageWhereUniqueInput;
};

export type StageTaskPageUpsertInput = {
  /** Create document if it didn't exist */
  create: StageTaskPageCreateInput;
  /** Update document if it exists */
  update: StageTaskPageUpdateInput;
};

export type StageTaskPageUpsertLocalizationInput = {
  create: StageTaskPageCreateLocalizationDataInput;
  locale: Locale;
  update: StageTaskPageUpdateLocalizationDataInput;
};

export type StageTaskPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StageTaskPageUpsertInput;
  /** Unique document search */
  where: StageTaskPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StageTaskPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type StageTaskPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageTaskPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageTaskPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageTaskPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StageTaskPageWhereStageInput>;
  documentInStages_none?: InputMaybe<StageTaskPageWhereStageInput>;
  documentInStages_some?: InputMaybe<StageTaskPageWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tasksToComplete_every?: InputMaybe<TaskToCompleteWhereInput>;
  tasksToComplete_none?: InputMaybe<TaskToCompleteWhereInput>;
  tasksToComplete_some?: InputMaybe<TaskToCompleteWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StageTaskPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageTaskPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageTaskPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageTaskPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StageTaskPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References StageTaskPage record uniquely */
export type StageTaskPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StageTaskUpdateInput = {
  checklist?: InputMaybe<ChecklistUpdateOneInlineInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoUpdateOneInlineInput>;
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<StageTaskUpdateLocalizationsInput>;
  /** questions input for default locale (en) */
  questions?: InputMaybe<Array<Scalars['RichTextAST']>>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type StageTaskUpdateLocalizationDataInput = {
  intro?: InputMaybe<Scalars['RichTextAST']>;
  questions?: InputMaybe<Array<Scalars['RichTextAST']>>;
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StageTaskUpdateLocalizationInput = {
  data: StageTaskUpdateLocalizationDataInput;
  locale: Locale;
};

export type StageTaskUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<StageTaskCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<StageTaskUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<StageTaskUpsertLocalizationInput>>;
};

export type StageTaskUpdateManyInlineInput = {
  /** Connect multiple existing StageTask documents */
  connect?: InputMaybe<Array<StageTaskConnectInput>>;
  /** Create and connect multiple StageTask documents */
  create?: InputMaybe<Array<StageTaskCreateInput>>;
  /** Delete multiple StageTask documents */
  delete?: InputMaybe<Array<StageTaskWhereUniqueInput>>;
  /** Disconnect multiple StageTask documents */
  disconnect?: InputMaybe<Array<StageTaskWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StageTask documents */
  set?: InputMaybe<Array<StageTaskWhereUniqueInput>>;
  /** Update multiple StageTask documents */
  update?: InputMaybe<Array<StageTaskUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StageTask documents */
  upsert?: InputMaybe<Array<StageTaskUpsertWithNestedWhereUniqueInput>>;
};

export type StageTaskUpdateManyInput = {
  /** intro input for default locale (en) */
  intro?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<StageTaskUpdateManyLocalizationsInput>;
  /** questions input for default locale (en) */
  questions?: InputMaybe<Array<Scalars['RichTextAST']>>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type StageTaskUpdateManyLocalizationDataInput = {
  intro?: InputMaybe<Scalars['RichTextAST']>;
  questions?: InputMaybe<Array<Scalars['RichTextAST']>>;
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StageTaskUpdateManyLocalizationInput = {
  data: StageTaskUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type StageTaskUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<StageTaskUpdateManyLocalizationInput>>;
};

export type StageTaskUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StageTaskUpdateInput;
  /** Unique document search */
  where: StageTaskWhereUniqueInput;
};

export type StageTaskUpsertInput = {
  /** Create document if it didn't exist */
  create: StageTaskCreateInput;
  /** Update document if it exists */
  update: StageTaskUpdateInput;
};

export type StageTaskUpsertLocalizationInput = {
  create: StageTaskCreateLocalizationDataInput;
  locale: Locale;
  update: StageTaskUpdateLocalizationDataInput;
};

export type StageTaskUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StageTaskUpsertInput;
  /** Unique document search */
  where: StageTaskWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StageTaskWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type StageTaskWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageTaskWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageTaskWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageTaskWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  checklist?: InputMaybe<ChecklistWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StageTaskWhereStageInput>;
  documentInStages_none?: InputMaybe<StageTaskWhereStageInput>;
  documentInStages_some?: InputMaybe<StageTaskWhereStageInput>;
  helpfulInfo?: InputMaybe<HelpfulInfoWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StageTaskWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StageTaskWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StageTaskWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StageTaskWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StageTaskWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References StageTask record uniquely */
export type StageTaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type TaskToComplete = Entity & Node & {
  __typename?: 'TaskToComplete';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<TaskToComplete>;
  /** List of TaskToComplete versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<TaskToComplete>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  stageNumber: Scalars['Float'];
  submittedText?: Maybe<RichText>;
  taskInfo: RichText;
  taskLinkText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TaskToCompleteCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TaskToCompleteCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TaskToCompleteDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TaskToCompleteHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TaskToCompleteLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type TaskToCompletePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TaskToCompletePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TaskToCompleteScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TaskToCompleteUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TaskToCompleteUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TaskToCompleteConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TaskToCompleteWhereUniqueInput;
};

/** A connection to a list of items. */
export type TaskToCompleteConnection = {
  __typename?: 'TaskToCompleteConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TaskToCompleteEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TaskToCompleteCreateInput = {
  ckskwd4ey0f2y01yu3rhs33it?: InputMaybe<StageLandingPageCreateManyInlineInput>;
  cksnookna1c9x01yu3wlzhvr6?: InputMaybe<StageTaskPageCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TaskToCompleteCreateLocalizationsInput>;
  stageNumber: Scalars['Float'];
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** taskInfo input for default locale (en) */
  taskInfo: Scalars['RichTextAST'];
  /** taskLinkText input for default locale (en) */
  taskLinkText?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TaskToCompleteCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  taskInfo: Scalars['RichTextAST'];
  taskLinkText?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TaskToCompleteCreateLocalizationInput = {
  /** Localization input */
  data: TaskToCompleteCreateLocalizationDataInput;
  locale: Locale;
};

export type TaskToCompleteCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TaskToCompleteCreateLocalizationInput>>;
};

export type TaskToCompleteCreateManyInlineInput = {
  /** Connect multiple existing TaskToComplete documents */
  connect?: InputMaybe<Array<TaskToCompleteWhereUniqueInput>>;
  /** Create and connect multiple existing TaskToComplete documents */
  create?: InputMaybe<Array<TaskToCompleteCreateInput>>;
};

/** An edge in a connection. */
export type TaskToCompleteEdge = {
  __typename?: 'TaskToCompleteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TaskToComplete;
};

/** Identifies documents */
export type TaskToCompleteManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TaskToCompleteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TaskToCompleteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TaskToCompleteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TaskToCompleteWhereStageInput>;
  documentInStages_none?: InputMaybe<TaskToCompleteWhereStageInput>;
  documentInStages_some?: InputMaybe<TaskToCompleteWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TaskToCompleteOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StageNumberAsc = 'stageNumber_ASC',
  StageNumberDesc = 'stageNumber_DESC',
  TaskLinkTextAsc = 'taskLinkText_ASC',
  TaskLinkTextDesc = 'taskLinkText_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TaskToCompleteUpdateInput = {
  ckskwd4ey0f2y01yu3rhs33it?: InputMaybe<StageLandingPageUpdateManyInlineInput>;
  cksnookna1c9x01yu3wlzhvr6?: InputMaybe<StageTaskPageUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<TaskToCompleteUpdateLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Float']>;
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** taskInfo input for default locale (en) */
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  /** taskLinkText input for default locale (en) */
  taskLinkText?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type TaskToCompleteUpdateLocalizationDataInput = {
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  taskLinkText?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TaskToCompleteUpdateLocalizationInput = {
  data: TaskToCompleteUpdateLocalizationDataInput;
  locale: Locale;
};

export type TaskToCompleteUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TaskToCompleteCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TaskToCompleteUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TaskToCompleteUpsertLocalizationInput>>;
};

export type TaskToCompleteUpdateManyInlineInput = {
  /** Connect multiple existing TaskToComplete documents */
  connect?: InputMaybe<Array<TaskToCompleteConnectInput>>;
  /** Create and connect multiple TaskToComplete documents */
  create?: InputMaybe<Array<TaskToCompleteCreateInput>>;
  /** Delete multiple TaskToComplete documents */
  delete?: InputMaybe<Array<TaskToCompleteWhereUniqueInput>>;
  /** Disconnect multiple TaskToComplete documents */
  disconnect?: InputMaybe<Array<TaskToCompleteWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TaskToComplete documents */
  set?: InputMaybe<Array<TaskToCompleteWhereUniqueInput>>;
  /** Update multiple TaskToComplete documents */
  update?: InputMaybe<Array<TaskToCompleteUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TaskToComplete documents */
  upsert?: InputMaybe<Array<TaskToCompleteUpsertWithNestedWhereUniqueInput>>;
};

export type TaskToCompleteUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<TaskToCompleteUpdateManyLocalizationsInput>;
  stageNumber?: InputMaybe<Scalars['Float']>;
  /** submittedText input for default locale (en) */
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  /** taskInfo input for default locale (en) */
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  /** taskLinkText input for default locale (en) */
  taskLinkText?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type TaskToCompleteUpdateManyLocalizationDataInput = {
  submittedText?: InputMaybe<Scalars['RichTextAST']>;
  taskInfo?: InputMaybe<Scalars['RichTextAST']>;
  taskLinkText?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TaskToCompleteUpdateManyLocalizationInput = {
  data: TaskToCompleteUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TaskToCompleteUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TaskToCompleteUpdateManyLocalizationInput>>;
};

export type TaskToCompleteUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TaskToCompleteUpdateInput;
  /** Unique document search */
  where: TaskToCompleteWhereUniqueInput;
};

export type TaskToCompleteUpsertInput = {
  /** Create document if it didn't exist */
  create: TaskToCompleteCreateInput;
  /** Update document if it exists */
  update: TaskToCompleteUpdateInput;
};

export type TaskToCompleteUpsertLocalizationInput = {
  create: TaskToCompleteCreateLocalizationDataInput;
  locale: Locale;
  update: TaskToCompleteUpdateLocalizationDataInput;
};

export type TaskToCompleteUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TaskToCompleteUpsertInput;
  /** Unique document search */
  where: TaskToCompleteWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TaskToCompleteWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type TaskToCompleteWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TaskToCompleteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TaskToCompleteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TaskToCompleteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TaskToCompleteWhereStageInput>;
  documentInStages_none?: InputMaybe<TaskToCompleteWhereStageInput>;
  documentInStages_some?: InputMaybe<TaskToCompleteWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stageNumber?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  stageNumber_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  stageNumber_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  stageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  stageNumber_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  stageNumber_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  stageNumber_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  stageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  taskLinkText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  taskLinkText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  taskLinkText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  taskLinkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  taskLinkText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  taskLinkText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  taskLinkText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  taskLinkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  taskLinkText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  taskLinkText_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TaskToCompleteWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TaskToCompleteWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TaskToCompleteWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TaskToCompleteWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TaskToCompleteWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References TaskToComplete record uniquely */
export type TaskToCompleteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

/** columns and relationships of "development_option" */
export type Development_Option = {
  __typename?: 'development_option';
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  location?: Maybe<Scalars['String']>;
  model_swot?: Maybe<Scalars['jsonb']>;
  option: Scalars['String'];
  /** An array relationship */
  team_development_options: Array<Team_Development_Option>;
  /** An aggregate relationship */
  team_development_options_aggregate: Team_Development_Option_Aggregate;
};


/** columns and relationships of "development_option" */
export type Development_OptionModel_SwotArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "development_option" */
export type Development_OptionTeam_Development_OptionsArgs = {
  distinct_on?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Development_Option_Order_By>>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};


/** columns and relationships of "development_option" */
export type Development_OptionTeam_Development_Options_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Development_Option_Order_By>>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};

/** aggregated selection of "development_option" */
export type Development_Option_Aggregate = {
  __typename?: 'development_option_aggregate';
  aggregate?: Maybe<Development_Option_Aggregate_Fields>;
  nodes: Array<Development_Option>;
};

/** aggregate fields of "development_option" */
export type Development_Option_Aggregate_Fields = {
  __typename?: 'development_option_aggregate_fields';
  avg?: Maybe<Development_Option_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Development_Option_Max_Fields>;
  min?: Maybe<Development_Option_Min_Fields>;
  stddev?: Maybe<Development_Option_Stddev_Fields>;
  stddev_pop?: Maybe<Development_Option_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Development_Option_Stddev_Samp_Fields>;
  sum?: Maybe<Development_Option_Sum_Fields>;
  var_pop?: Maybe<Development_Option_Var_Pop_Fields>;
  var_samp?: Maybe<Development_Option_Var_Samp_Fields>;
  variance?: Maybe<Development_Option_Variance_Fields>;
};


/** aggregate fields of "development_option" */
export type Development_Option_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Development_Option_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Development_Option_Append_Input = {
  model_swot?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Development_Option_Avg_Fields = {
  __typename?: 'development_option_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "development_option". All fields are combined with a logical 'AND'. */
export type Development_Option_Bool_Exp = {
  _and?: InputMaybe<Array<Development_Option_Bool_Exp>>;
  _not?: InputMaybe<Development_Option_Bool_Exp>;
  _or?: InputMaybe<Array<Development_Option_Bool_Exp>>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  model_swot?: InputMaybe<Jsonb_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  team_development_options?: InputMaybe<Team_Development_Option_Bool_Exp>;
};

/** unique or primary key constraints on table "development_option" */
export enum Development_Option_Constraint {
  /** unique or primary key constraint */
  DevelopmentOptionPkey = 'development_option_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Development_Option_Delete_At_Path_Input = {
  model_swot?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Development_Option_Delete_Elem_Input = {
  model_swot?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Development_Option_Delete_Key_Input = {
  model_swot?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "development_option" */
export type Development_Option_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "development_option" */
export type Development_Option_Insert_Input = {
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  model_swot?: InputMaybe<Scalars['jsonb']>;
  option?: InputMaybe<Scalars['String']>;
  team_development_options?: InputMaybe<Team_Development_Option_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Development_Option_Max_Fields = {
  __typename?: 'development_option_max_fields';
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  option?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Development_Option_Min_Fields = {
  __typename?: 'development_option_min_fields';
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  option?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "development_option" */
export type Development_Option_Mutation_Response = {
  __typename?: 'development_option_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Development_Option>;
};

/** input type for inserting object relation for remote table "development_option" */
export type Development_Option_Obj_Rel_Insert_Input = {
  data: Development_Option_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Development_Option_On_Conflict>;
};

/** on conflict condition type for table "development_option" */
export type Development_Option_On_Conflict = {
  constraint: Development_Option_Constraint;
  update_columns?: Array<Development_Option_Update_Column>;
  where?: InputMaybe<Development_Option_Bool_Exp>;
};

/** Ordering options when selecting data from "development_option". */
export type Development_Option_Order_By = {
  display_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  model_swot?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  team_development_options_aggregate?: InputMaybe<Team_Development_Option_Aggregate_Order_By>;
};

/** primary key columns input for table: development_option */
export type Development_Option_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Development_Option_Prepend_Input = {
  model_swot?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "development_option" */
export enum Development_Option_Select_Column {
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  ModelSwot = 'model_swot',
  /** column name */
  Option = 'option'
}

/** input type for updating data in table "development_option" */
export type Development_Option_Set_Input = {
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  model_swot?: InputMaybe<Scalars['jsonb']>;
  option?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Development_Option_Stddev_Fields = {
  __typename?: 'development_option_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Development_Option_Stddev_Pop_Fields = {
  __typename?: 'development_option_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Development_Option_Stddev_Samp_Fields = {
  __typename?: 'development_option_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Development_Option_Sum_Fields = {
  __typename?: 'development_option_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "development_option" */
export enum Development_Option_Update_Column {
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  ModelSwot = 'model_swot',
  /** column name */
  Option = 'option'
}

/** aggregate var_pop on columns */
export type Development_Option_Var_Pop_Fields = {
  __typename?: 'development_option_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Development_Option_Var_Samp_Fields = {
  __typename?: 'development_option_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Development_Option_Variance_Fields = {
  __typename?: 'development_option_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "document" */
export type Document = {
  __typename?: 'document';
  doc_data?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  document_status: Document_Status_Enum;
  feedback?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  /** An object relationship */
  stage_progress: Stage_Progress;
  stage_progress_id: Scalars['uuid'];
  status: Document_Status_Enum_Enum;
};


/** columns and relationships of "document" */
export type DocumentDoc_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "document" */
export type DocumentFeedbackArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "document" */
export type Document_Aggregate = {
  __typename?: 'document_aggregate';
  aggregate?: Maybe<Document_Aggregate_Fields>;
  nodes: Array<Document>;
};

/** aggregate fields of "document" */
export type Document_Aggregate_Fields = {
  __typename?: 'document_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Document_Max_Fields>;
  min?: Maybe<Document_Min_Fields>;
};


/** aggregate fields of "document" */
export type Document_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Document_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document" */
export type Document_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Document_Max_Order_By>;
  min?: InputMaybe<Document_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Document_Append_Input = {
  doc_data?: InputMaybe<Scalars['jsonb']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "document" */
export type Document_Arr_Rel_Insert_Input = {
  data: Array<Document_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Document_On_Conflict>;
};

/** Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'. */
export type Document_Bool_Exp = {
  _and?: InputMaybe<Array<Document_Bool_Exp>>;
  _not?: InputMaybe<Document_Bool_Exp>;
  _or?: InputMaybe<Array<Document_Bool_Exp>>;
  doc_data?: InputMaybe<Jsonb_Comparison_Exp>;
  document_status?: InputMaybe<Document_Status_Enum_Bool_Exp>;
  feedback?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  stage_progress?: InputMaybe<Stage_Progress_Bool_Exp>;
  stage_progress_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Document_Status_Enum_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "document" */
export enum Document_Constraint {
  /** unique or primary key constraint */
  DocumentPkey = 'document_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Document_Delete_At_Path_Input = {
  doc_data?: InputMaybe<Array<Scalars['String']>>;
  feedback?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Document_Delete_Elem_Input = {
  doc_data?: InputMaybe<Scalars['Int']>;
  feedback?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Document_Delete_Key_Input = {
  doc_data?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "document" */
export type Document_Insert_Input = {
  doc_data?: InputMaybe<Scalars['jsonb']>;
  document_status?: InputMaybe<Document_Status_Enum_Obj_Rel_Insert_Input>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  stage_progress?: InputMaybe<Stage_Progress_Obj_Rel_Insert_Input>;
  stage_progress_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Document_Status_Enum_Enum>;
};

/** aggregate max on columns */
export type Document_Max_Fields = {
  __typename?: 'document_max_fields';
  id?: Maybe<Scalars['uuid']>;
  stage_progress_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "document" */
export type Document_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  stage_progress_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Min_Fields = {
  __typename?: 'document_min_fields';
  id?: Maybe<Scalars['uuid']>;
  stage_progress_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "document" */
export type Document_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  stage_progress_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "document" */
export type Document_Mutation_Response = {
  __typename?: 'document_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Document>;
};

/** on conflict condition type for table "document" */
export type Document_On_Conflict = {
  constraint: Document_Constraint;
  update_columns?: Array<Document_Update_Column>;
  where?: InputMaybe<Document_Bool_Exp>;
};

/** Ordering options when selecting data from "document". */
export type Document_Order_By = {
  doc_data?: InputMaybe<Order_By>;
  document_status?: InputMaybe<Document_Status_Enum_Order_By>;
  feedback?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stage_progress?: InputMaybe<Stage_Progress_Order_By>;
  stage_progress_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: document */
export type Document_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Document_Prepend_Input = {
  doc_data?: InputMaybe<Scalars['jsonb']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "document" */
export enum Document_Select_Column {
  /** column name */
  DocData = 'doc_data',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  StageProgressId = 'stage_progress_id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "document" */
export type Document_Set_Input = {
  doc_data?: InputMaybe<Scalars['jsonb']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  stage_progress_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Document_Status_Enum_Enum>;
};

/** columns and relationships of "document_status_enum" */
export type Document_Status_Enum = {
  __typename?: 'document_status_enum';
  /** An array relationship */
  documents: Array<Document>;
  /** An aggregate relationship */
  documents_aggregate: Document_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "document_status_enum" */
export type Document_Status_EnumDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


/** columns and relationships of "document_status_enum" */
export type Document_Status_EnumDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};

/** aggregated selection of "document_status_enum" */
export type Document_Status_Enum_Aggregate = {
  __typename?: 'document_status_enum_aggregate';
  aggregate?: Maybe<Document_Status_Enum_Aggregate_Fields>;
  nodes: Array<Document_Status_Enum>;
};

/** aggregate fields of "document_status_enum" */
export type Document_Status_Enum_Aggregate_Fields = {
  __typename?: 'document_status_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Document_Status_Enum_Max_Fields>;
  min?: Maybe<Document_Status_Enum_Min_Fields>;
};


/** aggregate fields of "document_status_enum" */
export type Document_Status_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Document_Status_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "document_status_enum". All fields are combined with a logical 'AND'. */
export type Document_Status_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Document_Status_Enum_Bool_Exp>>;
  _not?: InputMaybe<Document_Status_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Document_Status_Enum_Bool_Exp>>;
  documents?: InputMaybe<Document_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_status_enum" */
export enum Document_Status_Enum_Constraint {
  /** unique or primary key constraint */
  DocumentStatusPkey = 'document_status_pkey'
}

export enum Document_Status_Enum_Enum {
  Draft = 'draft',
  MarkedFailed = 'marked_failed',
  MarkedPassed = 'marked_passed',
  Submitted = 'submitted'
}

/** Boolean expression to compare columns of type "document_status_enum_enum". All fields are combined with logical 'AND'. */
export type Document_Status_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Document_Status_Enum_Enum>;
  _in?: InputMaybe<Array<Document_Status_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Document_Status_Enum_Enum>;
  _nin?: InputMaybe<Array<Document_Status_Enum_Enum>>;
};

/** input type for inserting data into table "document_status_enum" */
export type Document_Status_Enum_Insert_Input = {
  documents?: InputMaybe<Document_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Document_Status_Enum_Max_Fields = {
  __typename?: 'document_status_enum_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Document_Status_Enum_Min_Fields = {
  __typename?: 'document_status_enum_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "document_status_enum" */
export type Document_Status_Enum_Mutation_Response = {
  __typename?: 'document_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Document_Status_Enum>;
};

/** input type for inserting object relation for remote table "document_status_enum" */
export type Document_Status_Enum_Obj_Rel_Insert_Input = {
  data: Document_Status_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Document_Status_Enum_On_Conflict>;
};

/** on conflict condition type for table "document_status_enum" */
export type Document_Status_Enum_On_Conflict = {
  constraint: Document_Status_Enum_Constraint;
  update_columns?: Array<Document_Status_Enum_Update_Column>;
  where?: InputMaybe<Document_Status_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "document_status_enum". */
export type Document_Status_Enum_Order_By = {
  documents_aggregate?: InputMaybe<Document_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: document_status_enum */
export type Document_Status_Enum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "document_status_enum" */
export enum Document_Status_Enum_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "document_status_enum" */
export type Document_Status_Enum_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "document_status_enum" */
export enum Document_Status_Enum_Update_Column {
  /** column name */
  Value = 'value'
}

/** update columns of table "document" */
export enum Document_Update_Column {
  /** column name */
  DocData = 'doc_data',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  StageProgressId = 'stage_progress_id',
  /** column name */
  Status = 'status'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  content?: Maybe<Mutation>;
  /** delete data from the table: "development_option" */
  delete_development_option?: Maybe<Development_Option_Mutation_Response>;
  /** delete single row from the table: "development_option" */
  delete_development_option_by_pk?: Maybe<Development_Option>;
  /** delete data from the table: "document" */
  delete_document?: Maybe<Document_Mutation_Response>;
  /** delete single row from the table: "document" */
  delete_document_by_pk?: Maybe<Document>;
  /** delete data from the table: "document_status_enum" */
  delete_document_status_enum?: Maybe<Document_Status_Enum_Mutation_Response>;
  /** delete single row from the table: "document_status_enum" */
  delete_document_status_enum_by_pk?: Maybe<Document_Status_Enum>;
  /** delete data from the table: "quest" */
  delete_quest?: Maybe<Quest_Mutation_Response>;
  /** delete single row from the table: "quest" */
  delete_quest_by_pk?: Maybe<Quest>;
  /** delete data from the table: "quest_status_enum" */
  delete_quest_status_enum?: Maybe<Quest_Status_Enum_Mutation_Response>;
  /** delete single row from the table: "quest_status_enum" */
  delete_quest_status_enum_by_pk?: Maybe<Quest_Status_Enum>;
  /** delete data from the table: "school" */
  delete_school?: Maybe<School_Mutation_Response>;
  /** delete single row from the table: "school" */
  delete_school_by_pk?: Maybe<School>;
  /** delete data from the table: "stage" */
  delete_stage?: Maybe<Stage_Mutation_Response>;
  /** delete single row from the table: "stage" */
  delete_stage_by_pk?: Maybe<Stage>;
  /** delete data from the table: "stage_progress" */
  delete_stage_progress?: Maybe<Stage_Progress_Mutation_Response>;
  /** delete single row from the table: "stage_progress" */
  delete_stage_progress_by_pk?: Maybe<Stage_Progress>;
  /** delete data from the table: "stage_progress_status_enum" */
  delete_stage_progress_status_enum?: Maybe<Stage_Progress_Status_Enum_Mutation_Response>;
  /** delete single row from the table: "stage_progress_status_enum" */
  delete_stage_progress_status_enum_by_pk?: Maybe<Stage_Progress_Status_Enum>;
  /** delete data from the table: "student" */
  delete_student?: Maybe<Student_Mutation_Response>;
  /** delete single row from the table: "student" */
  delete_student_by_pk?: Maybe<Student>;
  /** delete data from the table: "student_feedback" */
  delete_student_feedback?: Maybe<Student_Feedback_Mutation_Response>;
  /** delete single row from the table: "student_feedback" */
  delete_student_feedback_by_pk?: Maybe<Student_Feedback>;
  /** delete data from the table: "student_position_enum" */
  delete_student_position_enum?: Maybe<Student_Position_Enum_Mutation_Response>;
  /** delete single row from the table: "student_position_enum" */
  delete_student_position_enum_by_pk?: Maybe<Student_Position_Enum>;
  /** delete data from the table: "team" */
  delete_team?: Maybe<Team_Mutation_Response>;
  /** delete single row from the table: "team" */
  delete_team_by_pk?: Maybe<Team>;
  /** delete data from the table: "team_development_option" */
  delete_team_development_option?: Maybe<Team_Development_Option_Mutation_Response>;
  /** delete single row from the table: "team_development_option" */
  delete_team_development_option_by_pk?: Maybe<Team_Development_Option>;
  /** delete data from the table: "tutor" */
  delete_tutor?: Maybe<Tutor_Mutation_Response>;
  /** delete single row from the table: "tutor" */
  delete_tutor_by_pk?: Maybe<Tutor>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "development_option" */
  insert_development_option?: Maybe<Development_Option_Mutation_Response>;
  /** insert a single row into the table: "development_option" */
  insert_development_option_one?: Maybe<Development_Option>;
  /** insert data into the table: "document" */
  insert_document?: Maybe<Document_Mutation_Response>;
  /** insert a single row into the table: "document" */
  insert_document_one?: Maybe<Document>;
  /** insert data into the table: "document_status_enum" */
  insert_document_status_enum?: Maybe<Document_Status_Enum_Mutation_Response>;
  /** insert a single row into the table: "document_status_enum" */
  insert_document_status_enum_one?: Maybe<Document_Status_Enum>;
  /** insert data into the table: "quest" */
  insert_quest?: Maybe<Quest_Mutation_Response>;
  /** insert a single row into the table: "quest" */
  insert_quest_one?: Maybe<Quest>;
  /** insert data into the table: "quest_status_enum" */
  insert_quest_status_enum?: Maybe<Quest_Status_Enum_Mutation_Response>;
  /** insert a single row into the table: "quest_status_enum" */
  insert_quest_status_enum_one?: Maybe<Quest_Status_Enum>;
  /** insert data into the table: "school" */
  insert_school?: Maybe<School_Mutation_Response>;
  /** insert a single row into the table: "school" */
  insert_school_one?: Maybe<School>;
  /** insert data into the table: "stage" */
  insert_stage?: Maybe<Stage_Mutation_Response>;
  /** insert a single row into the table: "stage" */
  insert_stage_one?: Maybe<Stage>;
  /** insert data into the table: "stage_progress" */
  insert_stage_progress?: Maybe<Stage_Progress_Mutation_Response>;
  /** insert a single row into the table: "stage_progress" */
  insert_stage_progress_one?: Maybe<Stage_Progress>;
  /** insert data into the table: "stage_progress_status_enum" */
  insert_stage_progress_status_enum?: Maybe<Stage_Progress_Status_Enum_Mutation_Response>;
  /** insert a single row into the table: "stage_progress_status_enum" */
  insert_stage_progress_status_enum_one?: Maybe<Stage_Progress_Status_Enum>;
  /** insert data into the table: "student" */
  insert_student?: Maybe<Student_Mutation_Response>;
  /** insert data into the table: "student_feedback" */
  insert_student_feedback?: Maybe<Student_Feedback_Mutation_Response>;
  /** insert a single row into the table: "student_feedback" */
  insert_student_feedback_one?: Maybe<Student_Feedback>;
  /** insert a single row into the table: "student" */
  insert_student_one?: Maybe<Student>;
  /** insert data into the table: "student_position_enum" */
  insert_student_position_enum?: Maybe<Student_Position_Enum_Mutation_Response>;
  /** insert a single row into the table: "student_position_enum" */
  insert_student_position_enum_one?: Maybe<Student_Position_Enum>;
  /** insert data into the table: "team" */
  insert_team?: Maybe<Team_Mutation_Response>;
  /** insert data into the table: "team_development_option" */
  insert_team_development_option?: Maybe<Team_Development_Option_Mutation_Response>;
  /** insert a single row into the table: "team_development_option" */
  insert_team_development_option_one?: Maybe<Team_Development_Option>;
  /** insert a single row into the table: "team" */
  insert_team_one?: Maybe<Team>;
  /** insert data into the table: "tutor" */
  insert_tutor?: Maybe<Tutor_Mutation_Response>;
  /** insert a single row into the table: "tutor" */
  insert_tutor_one?: Maybe<Tutor>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "development_option" */
  update_development_option?: Maybe<Development_Option_Mutation_Response>;
  /** update single row of the table: "development_option" */
  update_development_option_by_pk?: Maybe<Development_Option>;
  /** update data of the table: "document" */
  update_document?: Maybe<Document_Mutation_Response>;
  /** update single row of the table: "document" */
  update_document_by_pk?: Maybe<Document>;
  /** update data of the table: "document_status_enum" */
  update_document_status_enum?: Maybe<Document_Status_Enum_Mutation_Response>;
  /** update single row of the table: "document_status_enum" */
  update_document_status_enum_by_pk?: Maybe<Document_Status_Enum>;
  /** update data of the table: "quest" */
  update_quest?: Maybe<Quest_Mutation_Response>;
  /** update single row of the table: "quest" */
  update_quest_by_pk?: Maybe<Quest>;
  /** update data of the table: "quest_status_enum" */
  update_quest_status_enum?: Maybe<Quest_Status_Enum_Mutation_Response>;
  /** update single row of the table: "quest_status_enum" */
  update_quest_status_enum_by_pk?: Maybe<Quest_Status_Enum>;
  /** update data of the table: "school" */
  update_school?: Maybe<School_Mutation_Response>;
  /** update single row of the table: "school" */
  update_school_by_pk?: Maybe<School>;
  /** update data of the table: "stage" */
  update_stage?: Maybe<Stage_Mutation_Response>;
  /** update single row of the table: "stage" */
  update_stage_by_pk?: Maybe<Stage>;
  /** update data of the table: "stage_progress" */
  update_stage_progress?: Maybe<Stage_Progress_Mutation_Response>;
  /** update single row of the table: "stage_progress" */
  update_stage_progress_by_pk?: Maybe<Stage_Progress>;
  /** update data of the table: "stage_progress_status_enum" */
  update_stage_progress_status_enum?: Maybe<Stage_Progress_Status_Enum_Mutation_Response>;
  /** update single row of the table: "stage_progress_status_enum" */
  update_stage_progress_status_enum_by_pk?: Maybe<Stage_Progress_Status_Enum>;
  /** update data of the table: "student" */
  update_student?: Maybe<Student_Mutation_Response>;
  /** update single row of the table: "student" */
  update_student_by_pk?: Maybe<Student>;
  /** update data of the table: "student_feedback" */
  update_student_feedback?: Maybe<Student_Feedback_Mutation_Response>;
  /** update single row of the table: "student_feedback" */
  update_student_feedback_by_pk?: Maybe<Student_Feedback>;
  /** update data of the table: "student_position_enum" */
  update_student_position_enum?: Maybe<Student_Position_Enum_Mutation_Response>;
  /** update single row of the table: "student_position_enum" */
  update_student_position_enum_by_pk?: Maybe<Student_Position_Enum>;
  /** update data of the table: "team" */
  update_team?: Maybe<Team_Mutation_Response>;
  /** update single row of the table: "team" */
  update_team_by_pk?: Maybe<Team>;
  /** update data of the table: "team_development_option" */
  update_team_development_option?: Maybe<Team_Development_Option_Mutation_Response>;
  /** update single row of the table: "team_development_option" */
  update_team_development_option_by_pk?: Maybe<Team_Development_Option>;
  /** update data of the table: "tutor" */
  update_tutor?: Maybe<Tutor_Mutation_Response>;
  /** update single row of the table: "tutor" */
  update_tutor_by_pk?: Maybe<Tutor>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_Development_OptionArgs = {
  where: Development_Option_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Development_Option_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DocumentArgs = {
  where: Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Document_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Document_Status_EnumArgs = {
  where: Document_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Document_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_QuestArgs = {
  where: Quest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Quest_Status_EnumArgs = {
  where: Quest_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SchoolArgs = {
  where: School_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_School_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_StageArgs = {
  where: Stage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stage_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Stage_ProgressArgs = {
  where: Stage_Progress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stage_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stage_Progress_Status_EnumArgs = {
  where: Stage_Progress_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stage_Progress_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_StudentArgs = {
  where: Student_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Student_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Student_FeedbackArgs = {
  where: Student_Feedback_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Student_Feedback_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Student_Position_EnumArgs = {
  where: Student_Position_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Student_Position_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Team_Development_OptionArgs = {
  where: Team_Development_Option_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Development_Option_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TutorArgs = {
  where: Tutor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tutor_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Development_OptionArgs = {
  objects: Array<Development_Option_Insert_Input>;
  on_conflict?: InputMaybe<Development_Option_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Development_Option_OneArgs = {
  object: Development_Option_Insert_Input;
  on_conflict?: InputMaybe<Development_Option_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DocumentArgs = {
  objects: Array<Document_Insert_Input>;
  on_conflict?: InputMaybe<Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_OneArgs = {
  object: Document_Insert_Input;
  on_conflict?: InputMaybe<Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Status_EnumArgs = {
  objects: Array<Document_Status_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Document_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Status_Enum_OneArgs = {
  object: Document_Status_Enum_Insert_Input;
  on_conflict?: InputMaybe<Document_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestArgs = {
  objects: Array<Quest_Insert_Input>;
  on_conflict?: InputMaybe<Quest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_OneArgs = {
  object: Quest_Insert_Input;
  on_conflict?: InputMaybe<Quest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Status_EnumArgs = {
  objects: Array<Quest_Status_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Quest_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Status_Enum_OneArgs = {
  object: Quest_Status_Enum_Insert_Input;
  on_conflict?: InputMaybe<Quest_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SchoolArgs = {
  objects: Array<School_Insert_Input>;
  on_conflict?: InputMaybe<School_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_School_OneArgs = {
  object: School_Insert_Input;
  on_conflict?: InputMaybe<School_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StageArgs = {
  objects: Array<Stage_Insert_Input>;
  on_conflict?: InputMaybe<Stage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stage_OneArgs = {
  object: Stage_Insert_Input;
  on_conflict?: InputMaybe<Stage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stage_ProgressArgs = {
  objects: Array<Stage_Progress_Insert_Input>;
  on_conflict?: InputMaybe<Stage_Progress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stage_Progress_OneArgs = {
  object: Stage_Progress_Insert_Input;
  on_conflict?: InputMaybe<Stage_Progress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stage_Progress_Status_EnumArgs = {
  objects: Array<Stage_Progress_Status_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Stage_Progress_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stage_Progress_Status_Enum_OneArgs = {
  object: Stage_Progress_Status_Enum_Insert_Input;
  on_conflict?: InputMaybe<Stage_Progress_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StudentArgs = {
  objects: Array<Student_Insert_Input>;
  on_conflict?: InputMaybe<Student_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Student_FeedbackArgs = {
  objects: Array<Student_Feedback_Insert_Input>;
  on_conflict?: InputMaybe<Student_Feedback_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Student_Feedback_OneArgs = {
  object: Student_Feedback_Insert_Input;
  on_conflict?: InputMaybe<Student_Feedback_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Student_OneArgs = {
  object: Student_Insert_Input;
  on_conflict?: InputMaybe<Student_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Student_Position_EnumArgs = {
  objects: Array<Student_Position_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Student_Position_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Student_Position_Enum_OneArgs = {
  object: Student_Position_Enum_Insert_Input;
  on_conflict?: InputMaybe<Student_Position_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Development_OptionArgs = {
  objects: Array<Team_Development_Option_Insert_Input>;
  on_conflict?: InputMaybe<Team_Development_Option_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Development_Option_OneArgs = {
  object: Team_Development_Option_Insert_Input;
  on_conflict?: InputMaybe<Team_Development_Option_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_OneArgs = {
  object: Team_Insert_Input;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TutorArgs = {
  objects: Array<Tutor_Insert_Input>;
  on_conflict?: InputMaybe<Tutor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tutor_OneArgs = {
  object: Tutor_Insert_Input;
  on_conflict?: InputMaybe<Tutor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Development_OptionArgs = {
  _append?: InputMaybe<Development_Option_Append_Input>;
  _delete_at_path?: InputMaybe<Development_Option_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Development_Option_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Development_Option_Delete_Key_Input>;
  _inc?: InputMaybe<Development_Option_Inc_Input>;
  _prepend?: InputMaybe<Development_Option_Prepend_Input>;
  _set?: InputMaybe<Development_Option_Set_Input>;
  where: Development_Option_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Development_Option_By_PkArgs = {
  _append?: InputMaybe<Development_Option_Append_Input>;
  _delete_at_path?: InputMaybe<Development_Option_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Development_Option_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Development_Option_Delete_Key_Input>;
  _inc?: InputMaybe<Development_Option_Inc_Input>;
  _prepend?: InputMaybe<Development_Option_Prepend_Input>;
  _set?: InputMaybe<Development_Option_Set_Input>;
  pk_columns: Development_Option_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DocumentArgs = {
  _append?: InputMaybe<Document_Append_Input>;
  _delete_at_path?: InputMaybe<Document_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Document_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Document_Delete_Key_Input>;
  _prepend?: InputMaybe<Document_Prepend_Input>;
  _set?: InputMaybe<Document_Set_Input>;
  where: Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Document_By_PkArgs = {
  _append?: InputMaybe<Document_Append_Input>;
  _delete_at_path?: InputMaybe<Document_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Document_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Document_Delete_Key_Input>;
  _prepend?: InputMaybe<Document_Prepend_Input>;
  _set?: InputMaybe<Document_Set_Input>;
  pk_columns: Document_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Status_EnumArgs = {
  _set?: InputMaybe<Document_Status_Enum_Set_Input>;
  where: Document_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Status_Enum_By_PkArgs = {
  _set?: InputMaybe<Document_Status_Enum_Set_Input>;
  pk_columns: Document_Status_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestArgs = {
  _append?: InputMaybe<Quest_Append_Input>;
  _delete_at_path?: InputMaybe<Quest_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Quest_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Quest_Delete_Key_Input>;
  _prepend?: InputMaybe<Quest_Prepend_Input>;
  _set?: InputMaybe<Quest_Set_Input>;
  where: Quest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_By_PkArgs = {
  _append?: InputMaybe<Quest_Append_Input>;
  _delete_at_path?: InputMaybe<Quest_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Quest_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Quest_Delete_Key_Input>;
  _prepend?: InputMaybe<Quest_Prepend_Input>;
  _set?: InputMaybe<Quest_Set_Input>;
  pk_columns: Quest_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Status_EnumArgs = {
  _set?: InputMaybe<Quest_Status_Enum_Set_Input>;
  where: Quest_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Status_Enum_By_PkArgs = {
  _set?: InputMaybe<Quest_Status_Enum_Set_Input>;
  pk_columns: Quest_Status_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SchoolArgs = {
  _set?: InputMaybe<School_Set_Input>;
  where: School_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_School_By_PkArgs = {
  _set?: InputMaybe<School_Set_Input>;
  pk_columns: School_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StageArgs = {
  _inc?: InputMaybe<Stage_Inc_Input>;
  _set?: InputMaybe<Stage_Set_Input>;
  where: Stage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stage_By_PkArgs = {
  _inc?: InputMaybe<Stage_Inc_Input>;
  _set?: InputMaybe<Stage_Set_Input>;
  pk_columns: Stage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stage_ProgressArgs = {
  _inc?: InputMaybe<Stage_Progress_Inc_Input>;
  _set?: InputMaybe<Stage_Progress_Set_Input>;
  where: Stage_Progress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stage_Progress_By_PkArgs = {
  _inc?: InputMaybe<Stage_Progress_Inc_Input>;
  _set?: InputMaybe<Stage_Progress_Set_Input>;
  pk_columns: Stage_Progress_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stage_Progress_Status_EnumArgs = {
  _set?: InputMaybe<Stage_Progress_Status_Enum_Set_Input>;
  where: Stage_Progress_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stage_Progress_Status_Enum_By_PkArgs = {
  _set?: InputMaybe<Stage_Progress_Status_Enum_Set_Input>;
  pk_columns: Stage_Progress_Status_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StudentArgs = {
  _set?: InputMaybe<Student_Set_Input>;
  where: Student_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Student_By_PkArgs = {
  _set?: InputMaybe<Student_Set_Input>;
  pk_columns: Student_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Student_FeedbackArgs = {
  _append?: InputMaybe<Student_Feedback_Append_Input>;
  _delete_at_path?: InputMaybe<Student_Feedback_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Student_Feedback_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Student_Feedback_Delete_Key_Input>;
  _prepend?: InputMaybe<Student_Feedback_Prepend_Input>;
  _set?: InputMaybe<Student_Feedback_Set_Input>;
  where: Student_Feedback_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Student_Feedback_By_PkArgs = {
  _append?: InputMaybe<Student_Feedback_Append_Input>;
  _delete_at_path?: InputMaybe<Student_Feedback_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Student_Feedback_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Student_Feedback_Delete_Key_Input>;
  _prepend?: InputMaybe<Student_Feedback_Prepend_Input>;
  _set?: InputMaybe<Student_Feedback_Set_Input>;
  pk_columns: Student_Feedback_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Student_Position_EnumArgs = {
  _set?: InputMaybe<Student_Position_Enum_Set_Input>;
  where: Student_Position_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Student_Position_Enum_By_PkArgs = {
  _set?: InputMaybe<Student_Position_Enum_Set_Input>;
  pk_columns: Student_Position_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeamArgs = {
  _set?: InputMaybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_By_PkArgs = {
  _set?: InputMaybe<Team_Set_Input>;
  pk_columns: Team_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Development_OptionArgs = {
  _inc?: InputMaybe<Team_Development_Option_Inc_Input>;
  _set?: InputMaybe<Team_Development_Option_Set_Input>;
  where: Team_Development_Option_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Development_Option_By_PkArgs = {
  _inc?: InputMaybe<Team_Development_Option_Inc_Input>;
  _set?: InputMaybe<Team_Development_Option_Set_Input>;
  pk_columns: Team_Development_Option_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TutorArgs = {
  _set?: InputMaybe<Tutor_Set_Input>;
  where: Tutor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tutor_By_PkArgs = {
  _set?: InputMaybe<Tutor_Set_Input>;
  pk_columns: Tutor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  content?: Maybe<Query>;
  /** fetch data from the table: "development_option" */
  development_option: Array<Development_Option>;
  /** fetch aggregated fields from the table: "development_option" */
  development_option_aggregate: Development_Option_Aggregate;
  /** fetch data from the table: "development_option" using primary key columns */
  development_option_by_pk?: Maybe<Development_Option>;
  /** fetch data from the table: "document" */
  document: Array<Document>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: Document_Aggregate;
  /** fetch data from the table: "document" using primary key columns */
  document_by_pk?: Maybe<Document>;
  /** fetch data from the table: "document_status_enum" */
  document_status_enum: Array<Document_Status_Enum>;
  /** fetch aggregated fields from the table: "document_status_enum" */
  document_status_enum_aggregate: Document_Status_Enum_Aggregate;
  /** fetch data from the table: "document_status_enum" using primary key columns */
  document_status_enum_by_pk?: Maybe<Document_Status_Enum>;
  /** fetch data from the table: "quest" */
  quest: Array<Quest>;
  /** fetch aggregated fields from the table: "quest" */
  quest_aggregate: Quest_Aggregate;
  /** fetch data from the table: "quest" using primary key columns */
  quest_by_pk?: Maybe<Quest>;
  /** fetch data from the table: "quest_status_enum" */
  quest_status_enum: Array<Quest_Status_Enum>;
  /** fetch aggregated fields from the table: "quest_status_enum" */
  quest_status_enum_aggregate: Quest_Status_Enum_Aggregate;
  /** fetch data from the table: "quest_status_enum" using primary key columns */
  quest_status_enum_by_pk?: Maybe<Quest_Status_Enum>;
  /** fetch data from the table: "school" */
  school: Array<School>;
  /** fetch aggregated fields from the table: "school" */
  school_aggregate: School_Aggregate;
  /** fetch data from the table: "school" using primary key columns */
  school_by_pk?: Maybe<School>;
  /** fetch data from the table: "stage" */
  stage: Array<Stage>;
  /** fetch aggregated fields from the table: "stage" */
  stage_aggregate: Stage_Aggregate;
  /** fetch data from the table: "stage" using primary key columns */
  stage_by_pk?: Maybe<Stage>;
  /** fetch data from the table: "stage_progress" */
  stage_progress: Array<Stage_Progress>;
  /** fetch aggregated fields from the table: "stage_progress" */
  stage_progress_aggregate: Stage_Progress_Aggregate;
  /** fetch data from the table: "stage_progress" using primary key columns */
  stage_progress_by_pk?: Maybe<Stage_Progress>;
  /** fetch data from the table: "stage_progress_status_enum" */
  stage_progress_status_enum: Array<Stage_Progress_Status_Enum>;
  /** fetch aggregated fields from the table: "stage_progress_status_enum" */
  stage_progress_status_enum_aggregate: Stage_Progress_Status_Enum_Aggregate;
  /** fetch data from the table: "stage_progress_status_enum" using primary key columns */
  stage_progress_status_enum_by_pk?: Maybe<Stage_Progress_Status_Enum>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_feedback" */
  student_feedback: Array<Student_Feedback>;
  /** fetch aggregated fields from the table: "student_feedback" */
  student_feedback_aggregate: Student_Feedback_Aggregate;
  /** fetch data from the table: "student_feedback" using primary key columns */
  student_feedback_by_pk?: Maybe<Student_Feedback>;
  /** fetch data from the table: "student_position_enum" */
  student_position_enum: Array<Student_Position_Enum>;
  /** fetch aggregated fields from the table: "student_position_enum" */
  student_position_enum_aggregate: Student_Position_Enum_Aggregate;
  /** fetch data from the table: "student_position_enum" using primary key columns */
  student_position_enum_by_pk?: Maybe<Student_Position_Enum>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** fetch data from the table: "team_development_option" */
  team_development_option: Array<Team_Development_Option>;
  /** fetch aggregated fields from the table: "team_development_option" */
  team_development_option_aggregate: Team_Development_Option_Aggregate;
  /** fetch data from the table: "team_development_option" using primary key columns */
  team_development_option_by_pk?: Maybe<Team_Development_Option>;
  /** fetch data from the table: "tutor" */
  tutor: Array<Tutor>;
  /** fetch aggregated fields from the table: "tutor" */
  tutor_aggregate: Tutor_Aggregate;
  /** fetch data from the table: "tutor" using primary key columns */
  tutor_by_pk?: Maybe<Tutor>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootDevelopment_OptionArgs = {
  distinct_on?: InputMaybe<Array<Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Development_Option_Order_By>>;
  where?: InputMaybe<Development_Option_Bool_Exp>;
};


export type Query_RootDevelopment_Option_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Development_Option_Order_By>>;
  where?: InputMaybe<Development_Option_Bool_Exp>;
};


export type Query_RootDevelopment_Option_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootDocumentArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


export type Query_RootDocument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


export type Query_RootDocument_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDocument_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Document_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Status_Enum_Order_By>>;
  where?: InputMaybe<Document_Status_Enum_Bool_Exp>;
};


export type Query_RootDocument_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Status_Enum_Order_By>>;
  where?: InputMaybe<Document_Status_Enum_Bool_Exp>;
};


export type Query_RootDocument_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootQuestArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


export type Query_RootQuest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


export type Query_RootQuest_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootQuest_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Quest_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Status_Enum_Order_By>>;
  where?: InputMaybe<Quest_Status_Enum_Bool_Exp>;
};


export type Query_RootQuest_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Status_Enum_Order_By>>;
  where?: InputMaybe<Quest_Status_Enum_Bool_Exp>;
};


export type Query_RootQuest_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootSchoolArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


export type Query_RootSchool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


export type Query_RootSchool_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStageArgs = {
  distinct_on?: InputMaybe<Array<Stage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Order_By>>;
  where?: InputMaybe<Stage_Bool_Exp>;
};


export type Query_RootStage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Order_By>>;
  where?: InputMaybe<Stage_Bool_Exp>;
};


export type Query_RootStage_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStage_ProgressArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};


export type Query_RootStage_Progress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};


export type Query_RootStage_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStage_Progress_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Status_Enum_Order_By>>;
  where?: InputMaybe<Stage_Progress_Status_Enum_Bool_Exp>;
};


export type Query_RootStage_Progress_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Status_Enum_Order_By>>;
  where?: InputMaybe<Stage_Progress_Status_Enum_Bool_Exp>;
};


export type Query_RootStage_Progress_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootStudentArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Query_RootStudent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Query_RootStudent_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStudent_FeedbackArgs = {
  distinct_on?: InputMaybe<Array<Student_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Feedback_Order_By>>;
  where?: InputMaybe<Student_Feedback_Bool_Exp>;
};


export type Query_RootStudent_Feedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Feedback_Order_By>>;
  where?: InputMaybe<Student_Feedback_Bool_Exp>;
};


export type Query_RootStudent_Feedback_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStudent_Position_EnumArgs = {
  distinct_on?: InputMaybe<Array<Student_Position_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Position_Enum_Order_By>>;
  where?: InputMaybe<Student_Position_Enum_Bool_Exp>;
};


export type Query_RootStudent_Position_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Position_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Position_Enum_Order_By>>;
  where?: InputMaybe<Student_Position_Enum_Bool_Exp>;
};


export type Query_RootStudent_Position_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Query_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Query_RootTeam_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTeam_Development_OptionArgs = {
  distinct_on?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Development_Option_Order_By>>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};


export type Query_RootTeam_Development_Option_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Development_Option_Order_By>>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};


export type Query_RootTeam_Development_Option_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTutorArgs = {
  distinct_on?: InputMaybe<Array<Tutor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tutor_Order_By>>;
  where?: InputMaybe<Tutor_Bool_Exp>;
};


export type Query_RootTutor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tutor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tutor_Order_By>>;
  where?: InputMaybe<Tutor_Bool_Exp>;
};


export type Query_RootTutor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "quest" */
export type Quest = {
  __typename?: 'quest';
  completed_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  quest_status_enum: Quest_Status_Enum;
  started_at?: Maybe<Scalars['timestamptz']>;
  status: Quest_Status_Enum_Enum;
  /** An array relationship */
  teams: Array<Team>;
  /** An aggregate relationship */
  teams_aggregate: Team_Aggregate;
  /** An object relationship */
  tutor: Tutor;
  tutor_feedback?: Maybe<Scalars['jsonb']>;
  tutor_id: Scalars['uuid'];
};


/** columns and relationships of "quest" */
export type QuestTeamsArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestTutor_FeedbackArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "quest" */
export type Quest_Aggregate = {
  __typename?: 'quest_aggregate';
  aggregate?: Maybe<Quest_Aggregate_Fields>;
  nodes: Array<Quest>;
};

/** aggregate fields of "quest" */
export type Quest_Aggregate_Fields = {
  __typename?: 'quest_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Quest_Max_Fields>;
  min?: Maybe<Quest_Min_Fields>;
};


/** aggregate fields of "quest" */
export type Quest_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest" */
export type Quest_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Quest_Max_Order_By>;
  min?: InputMaybe<Quest_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Quest_Append_Input = {
  tutor_feedback?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "quest" */
export type Quest_Arr_Rel_Insert_Input = {
  data: Array<Quest_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Quest_On_Conflict>;
};

/** Boolean expression to filter rows from the table "quest". All fields are combined with a logical 'AND'. */
export type Quest_Bool_Exp = {
  _and?: InputMaybe<Array<Quest_Bool_Exp>>;
  _not?: InputMaybe<Quest_Bool_Exp>;
  _or?: InputMaybe<Array<Quest_Bool_Exp>>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  quest_status_enum?: InputMaybe<Quest_Status_Enum_Bool_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<Quest_Status_Enum_Enum_Comparison_Exp>;
  teams?: InputMaybe<Team_Bool_Exp>;
  tutor?: InputMaybe<Tutor_Bool_Exp>;
  tutor_feedback?: InputMaybe<Jsonb_Comparison_Exp>;
  tutor_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest" */
export enum Quest_Constraint {
  /** unique or primary key constraint */
  QuestPkey = 'quest_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Quest_Delete_At_Path_Input = {
  tutor_feedback?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Quest_Delete_Elem_Input = {
  tutor_feedback?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Quest_Delete_Key_Input = {
  tutor_feedback?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "quest" */
export type Quest_Insert_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  quest_status_enum?: InputMaybe<Quest_Status_Enum_Obj_Rel_Insert_Input>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Quest_Status_Enum_Enum>;
  teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  tutor?: InputMaybe<Tutor_Obj_Rel_Insert_Input>;
  tutor_feedback?: InputMaybe<Scalars['jsonb']>;
  tutor_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Quest_Max_Fields = {
  __typename?: 'quest_max_fields';
  completed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  tutor_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "quest" */
export type Quest_Max_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  tutor_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Min_Fields = {
  __typename?: 'quest_min_fields';
  completed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  tutor_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "quest" */
export type Quest_Min_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  tutor_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "quest" */
export type Quest_Mutation_Response = {
  __typename?: 'quest_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quest>;
};

/** input type for inserting object relation for remote table "quest" */
export type Quest_Obj_Rel_Insert_Input = {
  data: Quest_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Quest_On_Conflict>;
};

/** on conflict condition type for table "quest" */
export type Quest_On_Conflict = {
  constraint: Quest_Constraint;
  update_columns?: Array<Quest_Update_Column>;
  where?: InputMaybe<Quest_Bool_Exp>;
};

/** Ordering options when selecting data from "quest". */
export type Quest_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  quest_status_enum?: InputMaybe<Quest_Status_Enum_Order_By>;
  started_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  teams_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  tutor?: InputMaybe<Tutor_Order_By>;
  tutor_feedback?: InputMaybe<Order_By>;
  tutor_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quest */
export type Quest_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Quest_Prepend_Input = {
  tutor_feedback?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "quest" */
export enum Quest_Select_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  TutorFeedback = 'tutor_feedback',
  /** column name */
  TutorId = 'tutor_id'
}

/** input type for updating data in table "quest" */
export type Quest_Set_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Quest_Status_Enum_Enum>;
  tutor_feedback?: InputMaybe<Scalars['jsonb']>;
  tutor_id?: InputMaybe<Scalars['uuid']>;
};

/** columns and relationships of "quest_status_enum" */
export type Quest_Status_Enum = {
  __typename?: 'quest_status_enum';
  /** An array relationship */
  quests: Array<Quest>;
  /** An aggregate relationship */
  quests_aggregate: Quest_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "quest_status_enum" */
export type Quest_Status_EnumQuestsArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


/** columns and relationships of "quest_status_enum" */
export type Quest_Status_EnumQuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};

/** aggregated selection of "quest_status_enum" */
export type Quest_Status_Enum_Aggregate = {
  __typename?: 'quest_status_enum_aggregate';
  aggregate?: Maybe<Quest_Status_Enum_Aggregate_Fields>;
  nodes: Array<Quest_Status_Enum>;
};

/** aggregate fields of "quest_status_enum" */
export type Quest_Status_Enum_Aggregate_Fields = {
  __typename?: 'quest_status_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Quest_Status_Enum_Max_Fields>;
  min?: Maybe<Quest_Status_Enum_Min_Fields>;
};


/** aggregate fields of "quest_status_enum" */
export type Quest_Status_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quest_Status_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "quest_status_enum". All fields are combined with a logical 'AND'. */
export type Quest_Status_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Quest_Status_Enum_Bool_Exp>>;
  _not?: InputMaybe<Quest_Status_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Quest_Status_Enum_Bool_Exp>>;
  quests?: InputMaybe<Quest_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest_status_enum" */
export enum Quest_Status_Enum_Constraint {
  /** unique or primary key constraint */
  QuestStatusEnumPkey = 'quest_status_enum_pkey'
}

export enum Quest_Status_Enum_Enum {
  Active = 'active',
  Complete = 'complete',
  Pending = 'pending'
}

/** Boolean expression to compare columns of type "quest_status_enum_enum". All fields are combined with logical 'AND'. */
export type Quest_Status_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Quest_Status_Enum_Enum>;
  _in?: InputMaybe<Array<Quest_Status_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Quest_Status_Enum_Enum>;
  _nin?: InputMaybe<Array<Quest_Status_Enum_Enum>>;
};

/** input type for inserting data into table "quest_status_enum" */
export type Quest_Status_Enum_Insert_Input = {
  quests?: InputMaybe<Quest_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Quest_Status_Enum_Max_Fields = {
  __typename?: 'quest_status_enum_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Quest_Status_Enum_Min_Fields = {
  __typename?: 'quest_status_enum_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "quest_status_enum" */
export type Quest_Status_Enum_Mutation_Response = {
  __typename?: 'quest_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quest_Status_Enum>;
};

/** input type for inserting object relation for remote table "quest_status_enum" */
export type Quest_Status_Enum_Obj_Rel_Insert_Input = {
  data: Quest_Status_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Quest_Status_Enum_On_Conflict>;
};

/** on conflict condition type for table "quest_status_enum" */
export type Quest_Status_Enum_On_Conflict = {
  constraint: Quest_Status_Enum_Constraint;
  update_columns?: Array<Quest_Status_Enum_Update_Column>;
  where?: InputMaybe<Quest_Status_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "quest_status_enum". */
export type Quest_Status_Enum_Order_By = {
  quests_aggregate?: InputMaybe<Quest_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quest_status_enum */
export type Quest_Status_Enum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "quest_status_enum" */
export enum Quest_Status_Enum_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "quest_status_enum" */
export type Quest_Status_Enum_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "quest_status_enum" */
export enum Quest_Status_Enum_Update_Column {
  /** column name */
  Value = 'value'
}

/** update columns of table "quest" */
export enum Quest_Update_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  TutorFeedback = 'tutor_feedback',
  /** column name */
  TutorId = 'tutor_id'
}

/** columns and relationships of "school" */
export type School = {
  __typename?: 'school';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  students: Array<Student>;
  /** An aggregate relationship */
  students_aggregate: Student_Aggregate;
  /** An array relationship */
  tutors: Array<Tutor>;
  /** An aggregate relationship */
  tutors_aggregate: Tutor_Aggregate;
};


/** columns and relationships of "school" */
export type SchoolStudentsArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


/** columns and relationships of "school" */
export type SchoolStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


/** columns and relationships of "school" */
export type SchoolTutorsArgs = {
  distinct_on?: InputMaybe<Array<Tutor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tutor_Order_By>>;
  where?: InputMaybe<Tutor_Bool_Exp>;
};


/** columns and relationships of "school" */
export type SchoolTutors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tutor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tutor_Order_By>>;
  where?: InputMaybe<Tutor_Bool_Exp>;
};

/** aggregated selection of "school" */
export type School_Aggregate = {
  __typename?: 'school_aggregate';
  aggregate?: Maybe<School_Aggregate_Fields>;
  nodes: Array<School>;
};

/** aggregate fields of "school" */
export type School_Aggregate_Fields = {
  __typename?: 'school_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<School_Max_Fields>;
  min?: Maybe<School_Min_Fields>;
};


/** aggregate fields of "school" */
export type School_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<School_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "school". All fields are combined with a logical 'AND'. */
export type School_Bool_Exp = {
  _and?: InputMaybe<Array<School_Bool_Exp>>;
  _not?: InputMaybe<School_Bool_Exp>;
  _or?: InputMaybe<Array<School_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  students?: InputMaybe<Student_Bool_Exp>;
  tutors?: InputMaybe<Tutor_Bool_Exp>;
};

/** unique or primary key constraints on table "school" */
export enum School_Constraint {
  /** unique or primary key constraint */
  SchoolPkey = 'school_pkey'
}

/** input type for inserting data into table "school" */
export type School_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  students?: InputMaybe<Student_Arr_Rel_Insert_Input>;
  tutors?: InputMaybe<Tutor_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type School_Max_Fields = {
  __typename?: 'school_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type School_Min_Fields = {
  __typename?: 'school_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "school" */
export type School_Mutation_Response = {
  __typename?: 'school_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<School>;
};

/** input type for inserting object relation for remote table "school" */
export type School_Obj_Rel_Insert_Input = {
  data: School_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<School_On_Conflict>;
};

/** on conflict condition type for table "school" */
export type School_On_Conflict = {
  constraint: School_Constraint;
  update_columns?: Array<School_Update_Column>;
  where?: InputMaybe<School_Bool_Exp>;
};

/** Ordering options when selecting data from "school". */
export type School_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  students_aggregate?: InputMaybe<Student_Aggregate_Order_By>;
  tutors_aggregate?: InputMaybe<Tutor_Aggregate_Order_By>;
};

/** primary key columns input for table: school */
export type School_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "school" */
export enum School_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "school" */
export type School_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "school" */
export enum School_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "stage" */
export type Stage = {
  __typename?: 'stage';
  id: Scalars['Int'];
  next_stage_id?: Maybe<Scalars['Int']>;
  prev_stage_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  stage_progresses: Array<Stage_Progress>;
  /** An aggregate relationship */
  stage_progresses_aggregate: Stage_Progress_Aggregate;
  title: Scalars['String'];
};


/** columns and relationships of "stage" */
export type StageStage_ProgressesArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};


/** columns and relationships of "stage" */
export type StageStage_Progresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};

/** aggregated selection of "stage" */
export type Stage_Aggregate = {
  __typename?: 'stage_aggregate';
  aggregate?: Maybe<Stage_Aggregate_Fields>;
  nodes: Array<Stage>;
};

/** aggregate fields of "stage" */
export type Stage_Aggregate_Fields = {
  __typename?: 'stage_aggregate_fields';
  avg?: Maybe<Stage_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stage_Max_Fields>;
  min?: Maybe<Stage_Min_Fields>;
  stddev?: Maybe<Stage_Stddev_Fields>;
  stddev_pop?: Maybe<Stage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stage_Stddev_Samp_Fields>;
  sum?: Maybe<Stage_Sum_Fields>;
  var_pop?: Maybe<Stage_Var_Pop_Fields>;
  var_samp?: Maybe<Stage_Var_Samp_Fields>;
  variance?: Maybe<Stage_Variance_Fields>;
};


/** aggregate fields of "stage" */
export type Stage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stage_Avg_Fields = {
  __typename?: 'stage_avg_fields';
  id?: Maybe<Scalars['Float']>;
  next_stage_id?: Maybe<Scalars['Float']>;
  prev_stage_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "stage". All fields are combined with a logical 'AND'. */
export type Stage_Bool_Exp = {
  _and?: InputMaybe<Array<Stage_Bool_Exp>>;
  _not?: InputMaybe<Stage_Bool_Exp>;
  _or?: InputMaybe<Array<Stage_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  next_stage_id?: InputMaybe<Int_Comparison_Exp>;
  prev_stage_id?: InputMaybe<Int_Comparison_Exp>;
  stage_progresses?: InputMaybe<Stage_Progress_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stage" */
export enum Stage_Constraint {
  /** unique or primary key constraint */
  StagePkey = 'stage_pkey'
}

/** input type for incrementing numeric columns in table "stage" */
export type Stage_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  next_stage_id?: InputMaybe<Scalars['Int']>;
  prev_stage_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "stage" */
export type Stage_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  next_stage_id?: InputMaybe<Scalars['Int']>;
  prev_stage_id?: InputMaybe<Scalars['Int']>;
  stage_progresses?: InputMaybe<Stage_Progress_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Stage_Max_Fields = {
  __typename?: 'stage_max_fields';
  id?: Maybe<Scalars['Int']>;
  next_stage_id?: Maybe<Scalars['Int']>;
  prev_stage_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Stage_Min_Fields = {
  __typename?: 'stage_min_fields';
  id?: Maybe<Scalars['Int']>;
  next_stage_id?: Maybe<Scalars['Int']>;
  prev_stage_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "stage" */
export type Stage_Mutation_Response = {
  __typename?: 'stage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stage>;
};

/** input type for inserting object relation for remote table "stage" */
export type Stage_Obj_Rel_Insert_Input = {
  data: Stage_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Stage_On_Conflict>;
};

/** on conflict condition type for table "stage" */
export type Stage_On_Conflict = {
  constraint: Stage_Constraint;
  update_columns?: Array<Stage_Update_Column>;
  where?: InputMaybe<Stage_Bool_Exp>;
};

/** Ordering options when selecting data from "stage". */
export type Stage_Order_By = {
  id?: InputMaybe<Order_By>;
  next_stage_id?: InputMaybe<Order_By>;
  prev_stage_id?: InputMaybe<Order_By>;
  stage_progresses_aggregate?: InputMaybe<Stage_Progress_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stage */
export type Stage_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "stage_progress" */
export type Stage_Progress = {
  __typename?: 'stage_progress';
  /** An array relationship */
  documents: Array<Document>;
  /** An aggregate relationship */
  documents_aggregate: Document_Aggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  stage: Stage;
  stage_id: Scalars['Int'];
  /** An object relationship */
  stage_progress_status_enum: Stage_Progress_Status_Enum;
  status: Stage_Progress_Status_Enum_Enum;
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid'];
};


/** columns and relationships of "stage_progress" */
export type Stage_ProgressDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


/** columns and relationships of "stage_progress" */
export type Stage_ProgressDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};

/** aggregated selection of "stage_progress" */
export type Stage_Progress_Aggregate = {
  __typename?: 'stage_progress_aggregate';
  aggregate?: Maybe<Stage_Progress_Aggregate_Fields>;
  nodes: Array<Stage_Progress>;
};

/** aggregate fields of "stage_progress" */
export type Stage_Progress_Aggregate_Fields = {
  __typename?: 'stage_progress_aggregate_fields';
  avg?: Maybe<Stage_Progress_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stage_Progress_Max_Fields>;
  min?: Maybe<Stage_Progress_Min_Fields>;
  stddev?: Maybe<Stage_Progress_Stddev_Fields>;
  stddev_pop?: Maybe<Stage_Progress_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stage_Progress_Stddev_Samp_Fields>;
  sum?: Maybe<Stage_Progress_Sum_Fields>;
  var_pop?: Maybe<Stage_Progress_Var_Pop_Fields>;
  var_samp?: Maybe<Stage_Progress_Var_Samp_Fields>;
  variance?: Maybe<Stage_Progress_Variance_Fields>;
};


/** aggregate fields of "stage_progress" */
export type Stage_Progress_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stage_progress" */
export type Stage_Progress_Aggregate_Order_By = {
  avg?: InputMaybe<Stage_Progress_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stage_Progress_Max_Order_By>;
  min?: InputMaybe<Stage_Progress_Min_Order_By>;
  stddev?: InputMaybe<Stage_Progress_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stage_Progress_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stage_Progress_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stage_Progress_Sum_Order_By>;
  var_pop?: InputMaybe<Stage_Progress_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stage_Progress_Var_Samp_Order_By>;
  variance?: InputMaybe<Stage_Progress_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stage_progress" */
export type Stage_Progress_Arr_Rel_Insert_Input = {
  data: Array<Stage_Progress_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Stage_Progress_On_Conflict>;
};

/** aggregate avg on columns */
export type Stage_Progress_Avg_Fields = {
  __typename?: 'stage_progress_avg_fields';
  stage_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stage_progress" */
export type Stage_Progress_Avg_Order_By = {
  stage_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stage_progress". All fields are combined with a logical 'AND'. */
export type Stage_Progress_Bool_Exp = {
  _and?: InputMaybe<Array<Stage_Progress_Bool_Exp>>;
  _not?: InputMaybe<Stage_Progress_Bool_Exp>;
  _or?: InputMaybe<Array<Stage_Progress_Bool_Exp>>;
  documents?: InputMaybe<Document_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  stage?: InputMaybe<Stage_Bool_Exp>;
  stage_id?: InputMaybe<Int_Comparison_Exp>;
  stage_progress_status_enum?: InputMaybe<Stage_Progress_Status_Enum_Bool_Exp>;
  status?: InputMaybe<Stage_Progress_Status_Enum_Enum_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stage_progress" */
export enum Stage_Progress_Constraint {
  /** unique or primary key constraint */
  StageProgressIdKey = 'stage_progress_id_key',
  /** unique or primary key constraint */
  StageProgressPkey = 'stage_progress_pkey',
  /** unique or primary key constraint */
  StageProgressTeamIdStageIdKey = 'stage_progress_team_id_stage_id_key'
}

/** input type for incrementing numeric columns in table "stage_progress" */
export type Stage_Progress_Inc_Input = {
  stage_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "stage_progress" */
export type Stage_Progress_Insert_Input = {
  documents?: InputMaybe<Document_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  stage?: InputMaybe<Stage_Obj_Rel_Insert_Input>;
  stage_id?: InputMaybe<Scalars['Int']>;
  stage_progress_status_enum?: InputMaybe<Stage_Progress_Status_Enum_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Stage_Progress_Status_Enum_Enum>;
  team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stage_Progress_Max_Fields = {
  __typename?: 'stage_progress_max_fields';
  id?: Maybe<Scalars['uuid']>;
  stage_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stage_progress" */
export type Stage_Progress_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  stage_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stage_Progress_Min_Fields = {
  __typename?: 'stage_progress_min_fields';
  id?: Maybe<Scalars['uuid']>;
  stage_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stage_progress" */
export type Stage_Progress_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  stage_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "stage_progress" */
export type Stage_Progress_Mutation_Response = {
  __typename?: 'stage_progress_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stage_Progress>;
};

/** input type for inserting object relation for remote table "stage_progress" */
export type Stage_Progress_Obj_Rel_Insert_Input = {
  data: Stage_Progress_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Stage_Progress_On_Conflict>;
};

/** on conflict condition type for table "stage_progress" */
export type Stage_Progress_On_Conflict = {
  constraint: Stage_Progress_Constraint;
  update_columns?: Array<Stage_Progress_Update_Column>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};

/** Ordering options when selecting data from "stage_progress". */
export type Stage_Progress_Order_By = {
  documents_aggregate?: InputMaybe<Document_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  stage?: InputMaybe<Stage_Order_By>;
  stage_id?: InputMaybe<Order_By>;
  stage_progress_status_enum?: InputMaybe<Stage_Progress_Status_Enum_Order_By>;
  status?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stage_progress */
export type Stage_Progress_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stage_progress" */
export enum Stage_Progress_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  StageId = 'stage_id',
  /** column name */
  Status = 'status',
  /** column name */
  TeamId = 'team_id'
}

/** input type for updating data in table "stage_progress" */
export type Stage_Progress_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  stage_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Stage_Progress_Status_Enum_Enum>;
  team_id?: InputMaybe<Scalars['uuid']>;
};

/** columns and relationships of "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum = {
  __typename?: 'stage_progress_status_enum';
  /** An array relationship */
  stage_progresses: Array<Stage_Progress>;
  /** An aggregate relationship */
  stage_progresses_aggregate: Stage_Progress_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "stage_progress_status_enum" */
export type Stage_Progress_Status_EnumStage_ProgressesArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};


/** columns and relationships of "stage_progress_status_enum" */
export type Stage_Progress_Status_EnumStage_Progresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};

/** aggregated selection of "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum_Aggregate = {
  __typename?: 'stage_progress_status_enum_aggregate';
  aggregate?: Maybe<Stage_Progress_Status_Enum_Aggregate_Fields>;
  nodes: Array<Stage_Progress_Status_Enum>;
};

/** aggregate fields of "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum_Aggregate_Fields = {
  __typename?: 'stage_progress_status_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Stage_Progress_Status_Enum_Max_Fields>;
  min?: Maybe<Stage_Progress_Status_Enum_Min_Fields>;
};


/** aggregate fields of "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stage_Progress_Status_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stage_progress_status_enum". All fields are combined with a logical 'AND'. */
export type Stage_Progress_Status_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Stage_Progress_Status_Enum_Bool_Exp>>;
  _not?: InputMaybe<Stage_Progress_Status_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Stage_Progress_Status_Enum_Bool_Exp>>;
  stage_progresses?: InputMaybe<Stage_Progress_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stage_progress_status_enum" */
export enum Stage_Progress_Status_Enum_Constraint {
  /** unique or primary key constraint */
  StageProgressStatusPkey = 'stage_progress_status_pkey'
}

export enum Stage_Progress_Status_Enum_Enum {
  Completed = 'completed',
  Failed = 'failed',
  Submitted = 'submitted',
  Unlocked = 'unlocked'
}

/** Boolean expression to compare columns of type "stage_progress_status_enum_enum". All fields are combined with logical 'AND'. */
export type Stage_Progress_Status_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Stage_Progress_Status_Enum_Enum>;
  _in?: InputMaybe<Array<Stage_Progress_Status_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Stage_Progress_Status_Enum_Enum>;
  _nin?: InputMaybe<Array<Stage_Progress_Status_Enum_Enum>>;
};

/** input type for inserting data into table "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum_Insert_Input = {
  stage_progresses?: InputMaybe<Stage_Progress_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Stage_Progress_Status_Enum_Max_Fields = {
  __typename?: 'stage_progress_status_enum_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Stage_Progress_Status_Enum_Min_Fields = {
  __typename?: 'stage_progress_status_enum_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum_Mutation_Response = {
  __typename?: 'stage_progress_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stage_Progress_Status_Enum>;
};

/** input type for inserting object relation for remote table "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum_Obj_Rel_Insert_Input = {
  data: Stage_Progress_Status_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Stage_Progress_Status_Enum_On_Conflict>;
};

/** on conflict condition type for table "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum_On_Conflict = {
  constraint: Stage_Progress_Status_Enum_Constraint;
  update_columns?: Array<Stage_Progress_Status_Enum_Update_Column>;
  where?: InputMaybe<Stage_Progress_Status_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "stage_progress_status_enum". */
export type Stage_Progress_Status_Enum_Order_By = {
  stage_progresses_aggregate?: InputMaybe<Stage_Progress_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stage_progress_status_enum */
export type Stage_Progress_Status_Enum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "stage_progress_status_enum" */
export enum Stage_Progress_Status_Enum_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "stage_progress_status_enum" */
export type Stage_Progress_Status_Enum_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "stage_progress_status_enum" */
export enum Stage_Progress_Status_Enum_Update_Column {
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Stage_Progress_Stddev_Fields = {
  __typename?: 'stage_progress_stddev_fields';
  stage_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stage_progress" */
export type Stage_Progress_Stddev_Order_By = {
  stage_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stage_Progress_Stddev_Pop_Fields = {
  __typename?: 'stage_progress_stddev_pop_fields';
  stage_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stage_progress" */
export type Stage_Progress_Stddev_Pop_Order_By = {
  stage_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stage_Progress_Stddev_Samp_Fields = {
  __typename?: 'stage_progress_stddev_samp_fields';
  stage_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stage_progress" */
export type Stage_Progress_Stddev_Samp_Order_By = {
  stage_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Stage_Progress_Sum_Fields = {
  __typename?: 'stage_progress_sum_fields';
  stage_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stage_progress" */
export type Stage_Progress_Sum_Order_By = {
  stage_id?: InputMaybe<Order_By>;
};

/** update columns of table "stage_progress" */
export enum Stage_Progress_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  StageId = 'stage_id',
  /** column name */
  Status = 'status',
  /** column name */
  TeamId = 'team_id'
}

/** aggregate var_pop on columns */
export type Stage_Progress_Var_Pop_Fields = {
  __typename?: 'stage_progress_var_pop_fields';
  stage_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stage_progress" */
export type Stage_Progress_Var_Pop_Order_By = {
  stage_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stage_Progress_Var_Samp_Fields = {
  __typename?: 'stage_progress_var_samp_fields';
  stage_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stage_progress" */
export type Stage_Progress_Var_Samp_Order_By = {
  stage_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Stage_Progress_Variance_Fields = {
  __typename?: 'stage_progress_variance_fields';
  stage_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stage_progress" */
export type Stage_Progress_Variance_Order_By = {
  stage_id?: InputMaybe<Order_By>;
};

/** select columns of table "stage" */
export enum Stage_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NextStageId = 'next_stage_id',
  /** column name */
  PrevStageId = 'prev_stage_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "stage" */
export type Stage_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  next_stage_id?: InputMaybe<Scalars['Int']>;
  prev_stage_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Stage_Stddev_Fields = {
  __typename?: 'stage_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  next_stage_id?: Maybe<Scalars['Float']>;
  prev_stage_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stage_Stddev_Pop_Fields = {
  __typename?: 'stage_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  next_stage_id?: Maybe<Scalars['Float']>;
  prev_stage_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stage_Stddev_Samp_Fields = {
  __typename?: 'stage_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  next_stage_id?: Maybe<Scalars['Float']>;
  prev_stage_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stage_Sum_Fields = {
  __typename?: 'stage_sum_fields';
  id?: Maybe<Scalars['Int']>;
  next_stage_id?: Maybe<Scalars['Int']>;
  prev_stage_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "stage" */
export enum Stage_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NextStageId = 'next_stage_id',
  /** column name */
  PrevStageId = 'prev_stage_id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Stage_Var_Pop_Fields = {
  __typename?: 'stage_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  next_stage_id?: Maybe<Scalars['Float']>;
  prev_stage_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stage_Var_Samp_Fields = {
  __typename?: 'stage_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  next_stage_id?: Maybe<Scalars['Float']>;
  prev_stage_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stage_Variance_Fields = {
  __typename?: 'stage_variance_fields';
  id?: Maybe<Scalars['Float']>;
  next_stage_id?: Maybe<Scalars['Float']>;
  prev_stage_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "student" */
export type Student = {
  __typename?: 'student';
  id: Scalars['uuid'];
  position?: Maybe<Student_Position_Enum_Enum>;
  /** An object relationship */
  school: School;
  school_id: Scalars['uuid'];
  /** An object relationship */
  student_position_enum?: Maybe<Student_Position_Enum>;
  /** An object relationship */
  team?: Maybe<Team>;
  team_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "student" */
export type Student_Aggregate = {
  __typename?: 'student_aggregate';
  aggregate?: Maybe<Student_Aggregate_Fields>;
  nodes: Array<Student>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_Fields = {
  __typename?: 'student_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Student_Max_Fields>;
  min?: Maybe<Student_Min_Fields>;
};


/** aggregate fields of "student" */
export type Student_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Student_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student" */
export type Student_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Student_Max_Order_By>;
  min?: InputMaybe<Student_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student" */
export type Student_Arr_Rel_Insert_Input = {
  data: Array<Student_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Student_On_Conflict>;
};

/** Boolean expression to filter rows from the table "student". All fields are combined with a logical 'AND'. */
export type Student_Bool_Exp = {
  _and?: InputMaybe<Array<Student_Bool_Exp>>;
  _not?: InputMaybe<Student_Bool_Exp>;
  _or?: InputMaybe<Array<Student_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Student_Position_Enum_Enum_Comparison_Exp>;
  school?: InputMaybe<School_Bool_Exp>;
  school_id?: InputMaybe<Uuid_Comparison_Exp>;
  student_position_enum?: InputMaybe<Student_Position_Enum_Bool_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "student" */
export enum Student_Constraint {
  /** unique or primary key constraint */
  StudentPkey = 'student_pkey',
  /** unique or primary key constraint */
  StudentUserIdKey = 'student_user_id_key'
}

/** columns and relationships of "student_feedback" */
export type Student_Feedback = {
  __typename?: 'student_feedback';
  created_at: Scalars['timestamptz'];
  feedback: Scalars['jsonb'];
  id: Scalars['uuid'];
  school_id: Scalars['uuid'];
};


/** columns and relationships of "student_feedback" */
export type Student_FeedbackFeedbackArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "student_feedback" */
export type Student_Feedback_Aggregate = {
  __typename?: 'student_feedback_aggregate';
  aggregate?: Maybe<Student_Feedback_Aggregate_Fields>;
  nodes: Array<Student_Feedback>;
};

/** aggregate fields of "student_feedback" */
export type Student_Feedback_Aggregate_Fields = {
  __typename?: 'student_feedback_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Student_Feedback_Max_Fields>;
  min?: Maybe<Student_Feedback_Min_Fields>;
};


/** aggregate fields of "student_feedback" */
export type Student_Feedback_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Student_Feedback_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Student_Feedback_Append_Input = {
  feedback?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "student_feedback". All fields are combined with a logical 'AND'. */
export type Student_Feedback_Bool_Exp = {
  _and?: InputMaybe<Array<Student_Feedback_Bool_Exp>>;
  _not?: InputMaybe<Student_Feedback_Bool_Exp>;
  _or?: InputMaybe<Array<Student_Feedback_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  feedback?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  school_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "student_feedback" */
export enum Student_Feedback_Constraint {
  /** unique or primary key constraint */
  FeedbackPkey = 'feedback_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Student_Feedback_Delete_At_Path_Input = {
  feedback?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Student_Feedback_Delete_Elem_Input = {
  feedback?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Student_Feedback_Delete_Key_Input = {
  feedback?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "student_feedback" */
export type Student_Feedback_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  school_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Student_Feedback_Max_Fields = {
  __typename?: 'student_feedback_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  school_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Student_Feedback_Min_Fields = {
  __typename?: 'student_feedback_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  school_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "student_feedback" */
export type Student_Feedback_Mutation_Response = {
  __typename?: 'student_feedback_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Student_Feedback>;
};

/** on conflict condition type for table "student_feedback" */
export type Student_Feedback_On_Conflict = {
  constraint: Student_Feedback_Constraint;
  update_columns?: Array<Student_Feedback_Update_Column>;
  where?: InputMaybe<Student_Feedback_Bool_Exp>;
};

/** Ordering options when selecting data from "student_feedback". */
export type Student_Feedback_Order_By = {
  created_at?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  school_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: student_feedback */
export type Student_Feedback_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Student_Feedback_Prepend_Input = {
  feedback?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "student_feedback" */
export enum Student_Feedback_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  SchoolId = 'school_id'
}

/** input type for updating data in table "student_feedback" */
export type Student_Feedback_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  school_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "student_feedback" */
export enum Student_Feedback_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  SchoolId = 'school_id'
}

/** input type for inserting data into table "student" */
export type Student_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  position?: InputMaybe<Student_Position_Enum_Enum>;
  school?: InputMaybe<School_Obj_Rel_Insert_Input>;
  school_id?: InputMaybe<Scalars['uuid']>;
  student_position_enum?: InputMaybe<Student_Position_Enum_Obj_Rel_Insert_Input>;
  team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Student_Max_Fields = {
  __typename?: 'student_max_fields';
  id?: Maybe<Scalars['uuid']>;
  school_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "student" */
export type Student_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  school_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Student_Min_Fields = {
  __typename?: 'student_min_fields';
  id?: Maybe<Scalars['uuid']>;
  school_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "student" */
export type Student_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  school_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "student" */
export type Student_Mutation_Response = {
  __typename?: 'student_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Student>;
};

/** input type for inserting object relation for remote table "student" */
export type Student_Obj_Rel_Insert_Input = {
  data: Student_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Student_On_Conflict>;
};

/** on conflict condition type for table "student" */
export type Student_On_Conflict = {
  constraint: Student_Constraint;
  update_columns?: Array<Student_Update_Column>;
  where?: InputMaybe<Student_Bool_Exp>;
};

/** Ordering options when selecting data from "student". */
export type Student_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  school?: InputMaybe<School_Order_By>;
  school_id?: InputMaybe<Order_By>;
  student_position_enum?: InputMaybe<Student_Position_Enum_Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: student */
export type Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "student_position_enum" */
export type Student_Position_Enum = {
  __typename?: 'student_position_enum';
  /** An array relationship */
  students: Array<Student>;
  /** An aggregate relationship */
  students_aggregate: Student_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "student_position_enum" */
export type Student_Position_EnumStudentsArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


/** columns and relationships of "student_position_enum" */
export type Student_Position_EnumStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};

/** aggregated selection of "student_position_enum" */
export type Student_Position_Enum_Aggregate = {
  __typename?: 'student_position_enum_aggregate';
  aggregate?: Maybe<Student_Position_Enum_Aggregate_Fields>;
  nodes: Array<Student_Position_Enum>;
};

/** aggregate fields of "student_position_enum" */
export type Student_Position_Enum_Aggregate_Fields = {
  __typename?: 'student_position_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Student_Position_Enum_Max_Fields>;
  min?: Maybe<Student_Position_Enum_Min_Fields>;
};


/** aggregate fields of "student_position_enum" */
export type Student_Position_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Student_Position_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "student_position_enum". All fields are combined with a logical 'AND'. */
export type Student_Position_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Student_Position_Enum_Bool_Exp>>;
  _not?: InputMaybe<Student_Position_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Student_Position_Enum_Bool_Exp>>;
  students?: InputMaybe<Student_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "student_position_enum" */
export enum Student_Position_Enum_Constraint {
  /** unique or primary key constraint */
  StudentPositionPkey = 'student_position_pkey'
}

export enum Student_Position_Enum_Enum {
  Chairperson = 'chairperson',
  Secretary = 'secretary',
  Treasurer = 'treasurer',
  Vicechairperson = 'vicechairperson'
}

/** Boolean expression to compare columns of type "student_position_enum_enum". All fields are combined with logical 'AND'. */
export type Student_Position_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Student_Position_Enum_Enum>;
  _in?: InputMaybe<Array<Student_Position_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Student_Position_Enum_Enum>;
  _nin?: InputMaybe<Array<Student_Position_Enum_Enum>>;
};

/** input type for inserting data into table "student_position_enum" */
export type Student_Position_Enum_Insert_Input = {
  students?: InputMaybe<Student_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Student_Position_Enum_Max_Fields = {
  __typename?: 'student_position_enum_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Student_Position_Enum_Min_Fields = {
  __typename?: 'student_position_enum_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "student_position_enum" */
export type Student_Position_Enum_Mutation_Response = {
  __typename?: 'student_position_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Student_Position_Enum>;
};

/** input type for inserting object relation for remote table "student_position_enum" */
export type Student_Position_Enum_Obj_Rel_Insert_Input = {
  data: Student_Position_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Student_Position_Enum_On_Conflict>;
};

/** on conflict condition type for table "student_position_enum" */
export type Student_Position_Enum_On_Conflict = {
  constraint: Student_Position_Enum_Constraint;
  update_columns?: Array<Student_Position_Enum_Update_Column>;
  where?: InputMaybe<Student_Position_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "student_position_enum". */
export type Student_Position_Enum_Order_By = {
  students_aggregate?: InputMaybe<Student_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: student_position_enum */
export type Student_Position_Enum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "student_position_enum" */
export enum Student_Position_Enum_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "student_position_enum" */
export type Student_Position_Enum_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "student_position_enum" */
export enum Student_Position_Enum_Update_Column {
  /** column name */
  Value = 'value'
}

/** select columns of table "student" */
export enum Student_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  SchoolId = 'school_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "student" */
export type Student_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  position?: InputMaybe<Student_Position_Enum_Enum>;
  school_id?: InputMaybe<Scalars['uuid']>;
  team_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "student" */
export enum Student_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  SchoolId = 'school_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "development_option" */
  development_option: Array<Development_Option>;
  /** fetch aggregated fields from the table: "development_option" */
  development_option_aggregate: Development_Option_Aggregate;
  /** fetch data from the table: "development_option" using primary key columns */
  development_option_by_pk?: Maybe<Development_Option>;
  /** fetch data from the table: "document" */
  document: Array<Document>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: Document_Aggregate;
  /** fetch data from the table: "document" using primary key columns */
  document_by_pk?: Maybe<Document>;
  /** fetch data from the table: "document_status_enum" */
  document_status_enum: Array<Document_Status_Enum>;
  /** fetch aggregated fields from the table: "document_status_enum" */
  document_status_enum_aggregate: Document_Status_Enum_Aggregate;
  /** fetch data from the table: "document_status_enum" using primary key columns */
  document_status_enum_by_pk?: Maybe<Document_Status_Enum>;
  /** fetch data from the table: "quest" */
  quest: Array<Quest>;
  /** fetch aggregated fields from the table: "quest" */
  quest_aggregate: Quest_Aggregate;
  /** fetch data from the table: "quest" using primary key columns */
  quest_by_pk?: Maybe<Quest>;
  /** fetch data from the table: "quest_status_enum" */
  quest_status_enum: Array<Quest_Status_Enum>;
  /** fetch aggregated fields from the table: "quest_status_enum" */
  quest_status_enum_aggregate: Quest_Status_Enum_Aggregate;
  /** fetch data from the table: "quest_status_enum" using primary key columns */
  quest_status_enum_by_pk?: Maybe<Quest_Status_Enum>;
  /** fetch data from the table: "school" */
  school: Array<School>;
  /** fetch aggregated fields from the table: "school" */
  school_aggregate: School_Aggregate;
  /** fetch data from the table: "school" using primary key columns */
  school_by_pk?: Maybe<School>;
  /** fetch data from the table: "stage" */
  stage: Array<Stage>;
  /** fetch aggregated fields from the table: "stage" */
  stage_aggregate: Stage_Aggregate;
  /** fetch data from the table: "stage" using primary key columns */
  stage_by_pk?: Maybe<Stage>;
  /** fetch data from the table: "stage_progress" */
  stage_progress: Array<Stage_Progress>;
  /** fetch aggregated fields from the table: "stage_progress" */
  stage_progress_aggregate: Stage_Progress_Aggregate;
  /** fetch data from the table: "stage_progress" using primary key columns */
  stage_progress_by_pk?: Maybe<Stage_Progress>;
  /** fetch data from the table: "stage_progress_status_enum" */
  stage_progress_status_enum: Array<Stage_Progress_Status_Enum>;
  /** fetch aggregated fields from the table: "stage_progress_status_enum" */
  stage_progress_status_enum_aggregate: Stage_Progress_Status_Enum_Aggregate;
  /** fetch data from the table: "stage_progress_status_enum" using primary key columns */
  stage_progress_status_enum_by_pk?: Maybe<Stage_Progress_Status_Enum>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_feedback" */
  student_feedback: Array<Student_Feedback>;
  /** fetch aggregated fields from the table: "student_feedback" */
  student_feedback_aggregate: Student_Feedback_Aggregate;
  /** fetch data from the table: "student_feedback" using primary key columns */
  student_feedback_by_pk?: Maybe<Student_Feedback>;
  /** fetch data from the table: "student_position_enum" */
  student_position_enum: Array<Student_Position_Enum>;
  /** fetch aggregated fields from the table: "student_position_enum" */
  student_position_enum_aggregate: Student_Position_Enum_Aggregate;
  /** fetch data from the table: "student_position_enum" using primary key columns */
  student_position_enum_by_pk?: Maybe<Student_Position_Enum>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** fetch data from the table: "team_development_option" */
  team_development_option: Array<Team_Development_Option>;
  /** fetch aggregated fields from the table: "team_development_option" */
  team_development_option_aggregate: Team_Development_Option_Aggregate;
  /** fetch data from the table: "team_development_option" using primary key columns */
  team_development_option_by_pk?: Maybe<Team_Development_Option>;
  /** fetch data from the table: "tutor" */
  tutor: Array<Tutor>;
  /** fetch aggregated fields from the table: "tutor" */
  tutor_aggregate: Tutor_Aggregate;
  /** fetch data from the table: "tutor" using primary key columns */
  tutor_by_pk?: Maybe<Tutor>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootDevelopment_OptionArgs = {
  distinct_on?: InputMaybe<Array<Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Development_Option_Order_By>>;
  where?: InputMaybe<Development_Option_Bool_Exp>;
};


export type Subscription_RootDevelopment_Option_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Development_Option_Order_By>>;
  where?: InputMaybe<Development_Option_Bool_Exp>;
};


export type Subscription_RootDevelopment_Option_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDocumentArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


export type Subscription_RootDocument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


export type Subscription_RootDocument_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDocument_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Document_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Status_Enum_Order_By>>;
  where?: InputMaybe<Document_Status_Enum_Bool_Exp>;
};


export type Subscription_RootDocument_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Status_Enum_Order_By>>;
  where?: InputMaybe<Document_Status_Enum_Bool_Exp>;
};


export type Subscription_RootDocument_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootQuestArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


export type Subscription_RootQuest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


export type Subscription_RootQuest_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootQuest_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Quest_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Status_Enum_Order_By>>;
  where?: InputMaybe<Quest_Status_Enum_Bool_Exp>;
};


export type Subscription_RootQuest_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Status_Enum_Order_By>>;
  where?: InputMaybe<Quest_Status_Enum_Bool_Exp>;
};


export type Subscription_RootQuest_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootSchoolArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


export type Subscription_RootSchool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


export type Subscription_RootSchool_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStageArgs = {
  distinct_on?: InputMaybe<Array<Stage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Order_By>>;
  where?: InputMaybe<Stage_Bool_Exp>;
};


export type Subscription_RootStage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Order_By>>;
  where?: InputMaybe<Stage_Bool_Exp>;
};


export type Subscription_RootStage_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStage_ProgressArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};


export type Subscription_RootStage_Progress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};


export type Subscription_RootStage_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStage_Progress_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Status_Enum_Order_By>>;
  where?: InputMaybe<Stage_Progress_Status_Enum_Bool_Exp>;
};


export type Subscription_RootStage_Progress_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Status_Enum_Order_By>>;
  where?: InputMaybe<Stage_Progress_Status_Enum_Bool_Exp>;
};


export type Subscription_RootStage_Progress_Status_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootStudentArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Subscription_RootStudent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Subscription_RootStudent_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStudent_FeedbackArgs = {
  distinct_on?: InputMaybe<Array<Student_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Feedback_Order_By>>;
  where?: InputMaybe<Student_Feedback_Bool_Exp>;
};


export type Subscription_RootStudent_Feedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Feedback_Order_By>>;
  where?: InputMaybe<Student_Feedback_Bool_Exp>;
};


export type Subscription_RootStudent_Feedback_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStudent_Position_EnumArgs = {
  distinct_on?: InputMaybe<Array<Student_Position_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Position_Enum_Order_By>>;
  where?: InputMaybe<Student_Position_Enum_Bool_Exp>;
};


export type Subscription_RootStudent_Position_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Position_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Position_Enum_Order_By>>;
  where?: InputMaybe<Student_Position_Enum_Bool_Exp>;
};


export type Subscription_RootStudent_Position_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTeam_Development_OptionArgs = {
  distinct_on?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Development_Option_Order_By>>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};


export type Subscription_RootTeam_Development_Option_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Development_Option_Order_By>>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};


export type Subscription_RootTeam_Development_Option_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTutorArgs = {
  distinct_on?: InputMaybe<Array<Tutor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tutor_Order_By>>;
  where?: InputMaybe<Tutor_Bool_Exp>;
};


export type Subscription_RootTutor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tutor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tutor_Order_By>>;
  where?: InputMaybe<Tutor_Bool_Exp>;
};


export type Subscription_RootTutor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "team" */
export type Team = {
  __typename?: 'team';
  id: Scalars['uuid'];
  /** A computed field, executes function "is_valid_team" */
  is_valid_team?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object relationship */
  quest: Quest;
  quest_id: Scalars['uuid'];
  /** An array relationship */
  stage_progresses: Array<Stage_Progress>;
  /** An aggregate relationship */
  stage_progresses_aggregate: Stage_Progress_Aggregate;
  /** An array relationship */
  students: Array<Student>;
  /** An aggregate relationship */
  students_aggregate: Student_Aggregate;
  /** An array relationship */
  team_development_options: Array<Team_Development_Option>;
  /** An aggregate relationship */
  team_development_options_aggregate: Team_Development_Option_Aggregate;
};


/** columns and relationships of "team" */
export type TeamStage_ProgressesArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamStage_Progresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stage_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stage_Progress_Order_By>>;
  where?: InputMaybe<Stage_Progress_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamStudentsArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamTeam_Development_OptionsArgs = {
  distinct_on?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Development_Option_Order_By>>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamTeam_Development_Options_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Development_Option_Order_By>>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};

/** aggregated selection of "team" */
export type Team_Aggregate = {
  __typename?: 'team_aggregate';
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

/** aggregate fields of "team" */
export type Team_Aggregate_Fields = {
  __typename?: 'team_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
};


/** aggregate fields of "team" */
export type Team_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team" */
export type Team_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Max_Order_By>;
  min?: InputMaybe<Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team" */
export type Team_Arr_Rel_Insert_Input = {
  data: Array<Team_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Bool_Exp>>;
  _not?: InputMaybe<Team_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid_team?: InputMaybe<Boolean_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  quest?: InputMaybe<Quest_Bool_Exp>;
  quest_id?: InputMaybe<Uuid_Comparison_Exp>;
  stage_progresses?: InputMaybe<Stage_Progress_Bool_Exp>;
  students?: InputMaybe<Student_Bool_Exp>;
  team_development_options?: InputMaybe<Team_Development_Option_Bool_Exp>;
};

/** unique or primary key constraints on table "team" */
export enum Team_Constraint {
  /** unique or primary key constraint */
  TeamPkey = 'team_pkey',
  /** unique or primary key constraint */
  TeamQuestIdNameKey = 'team_quest_id_name_key'
}

/** columns and relationships of "team_development_option" */
export type Team_Development_Option = {
  __typename?: 'team_development_option';
  /** An object relationship */
  development_option: Development_Option;
  development_option_id: Scalars['Int'];
  id: Scalars['uuid'];
  shortlist: Scalars['Boolean'];
  /** An object relationship */
  team: Team;
  team_choice_location?: Maybe<Scalars['String']>;
  team_choice_name?: Maybe<Scalars['String']>;
  team_id: Scalars['uuid'];
};

/** aggregated selection of "team_development_option" */
export type Team_Development_Option_Aggregate = {
  __typename?: 'team_development_option_aggregate';
  aggregate?: Maybe<Team_Development_Option_Aggregate_Fields>;
  nodes: Array<Team_Development_Option>;
};

/** aggregate fields of "team_development_option" */
export type Team_Development_Option_Aggregate_Fields = {
  __typename?: 'team_development_option_aggregate_fields';
  avg?: Maybe<Team_Development_Option_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Team_Development_Option_Max_Fields>;
  min?: Maybe<Team_Development_Option_Min_Fields>;
  stddev?: Maybe<Team_Development_Option_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Development_Option_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Development_Option_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Development_Option_Sum_Fields>;
  var_pop?: Maybe<Team_Development_Option_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Development_Option_Var_Samp_Fields>;
  variance?: Maybe<Team_Development_Option_Variance_Fields>;
};


/** aggregate fields of "team_development_option" */
export type Team_Development_Option_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Development_Option_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_development_option" */
export type Team_Development_Option_Aggregate_Order_By = {
  avg?: InputMaybe<Team_Development_Option_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Development_Option_Max_Order_By>;
  min?: InputMaybe<Team_Development_Option_Min_Order_By>;
  stddev?: InputMaybe<Team_Development_Option_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Team_Development_Option_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Team_Development_Option_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Team_Development_Option_Sum_Order_By>;
  var_pop?: InputMaybe<Team_Development_Option_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Team_Development_Option_Var_Samp_Order_By>;
  variance?: InputMaybe<Team_Development_Option_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "team_development_option" */
export type Team_Development_Option_Arr_Rel_Insert_Input = {
  data: Array<Team_Development_Option_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Team_Development_Option_On_Conflict>;
};

/** aggregate avg on columns */
export type Team_Development_Option_Avg_Fields = {
  __typename?: 'team_development_option_avg_fields';
  development_option_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team_development_option" */
export type Team_Development_Option_Avg_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "team_development_option". All fields are combined with a logical 'AND'. */
export type Team_Development_Option_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Development_Option_Bool_Exp>>;
  _not?: InputMaybe<Team_Development_Option_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Development_Option_Bool_Exp>>;
  development_option?: InputMaybe<Development_Option_Bool_Exp>;
  development_option_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  shortlist?: InputMaybe<Boolean_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_choice_location?: InputMaybe<String_Comparison_Exp>;
  team_choice_name?: InputMaybe<String_Comparison_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_development_option" */
export enum Team_Development_Option_Constraint {
  /** unique or primary key constraint */
  TeamDevelopmentOptionPkey = 'team_development_option_pkey'
}

/** input type for incrementing numeric columns in table "team_development_option" */
export type Team_Development_Option_Inc_Input = {
  development_option_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "team_development_option" */
export type Team_Development_Option_Insert_Input = {
  development_option?: InputMaybe<Development_Option_Obj_Rel_Insert_Input>;
  development_option_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  shortlist?: InputMaybe<Scalars['Boolean']>;
  team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  team_choice_location?: InputMaybe<Scalars['String']>;
  team_choice_name?: InputMaybe<Scalars['String']>;
  team_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Team_Development_Option_Max_Fields = {
  __typename?: 'team_development_option_max_fields';
  development_option_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  team_choice_location?: Maybe<Scalars['String']>;
  team_choice_name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "team_development_option" */
export type Team_Development_Option_Max_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_choice_location?: InputMaybe<Order_By>;
  team_choice_name?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Development_Option_Min_Fields = {
  __typename?: 'team_development_option_min_fields';
  development_option_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  team_choice_location?: Maybe<Scalars['String']>;
  team_choice_name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "team_development_option" */
export type Team_Development_Option_Min_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_choice_location?: InputMaybe<Order_By>;
  team_choice_name?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "team_development_option" */
export type Team_Development_Option_Mutation_Response = {
  __typename?: 'team_development_option_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Team_Development_Option>;
};

/** on conflict condition type for table "team_development_option" */
export type Team_Development_Option_On_Conflict = {
  constraint: Team_Development_Option_Constraint;
  update_columns?: Array<Team_Development_Option_Update_Column>;
  where?: InputMaybe<Team_Development_Option_Bool_Exp>;
};

/** Ordering options when selecting data from "team_development_option". */
export type Team_Development_Option_Order_By = {
  development_option?: InputMaybe<Development_Option_Order_By>;
  development_option_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shortlist?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_choice_location?: InputMaybe<Order_By>;
  team_choice_name?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: team_development_option */
export type Team_Development_Option_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "team_development_option" */
export enum Team_Development_Option_Select_Column {
  /** column name */
  DevelopmentOptionId = 'development_option_id',
  /** column name */
  Id = 'id',
  /** column name */
  Shortlist = 'shortlist',
  /** column name */
  TeamChoiceLocation = 'team_choice_location',
  /** column name */
  TeamChoiceName = 'team_choice_name',
  /** column name */
  TeamId = 'team_id'
}

/** input type for updating data in table "team_development_option" */
export type Team_Development_Option_Set_Input = {
  development_option_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  shortlist?: InputMaybe<Scalars['Boolean']>;
  team_choice_location?: InputMaybe<Scalars['String']>;
  team_choice_name?: InputMaybe<Scalars['String']>;
  team_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Team_Development_Option_Stddev_Fields = {
  __typename?: 'team_development_option_stddev_fields';
  development_option_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team_development_option" */
export type Team_Development_Option_Stddev_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Team_Development_Option_Stddev_Pop_Fields = {
  __typename?: 'team_development_option_stddev_pop_fields';
  development_option_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team_development_option" */
export type Team_Development_Option_Stddev_Pop_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Team_Development_Option_Stddev_Samp_Fields = {
  __typename?: 'team_development_option_stddev_samp_fields';
  development_option_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team_development_option" */
export type Team_Development_Option_Stddev_Samp_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Team_Development_Option_Sum_Fields = {
  __typename?: 'team_development_option_sum_fields';
  development_option_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team_development_option" */
export type Team_Development_Option_Sum_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
};

/** update columns of table "team_development_option" */
export enum Team_Development_Option_Update_Column {
  /** column name */
  DevelopmentOptionId = 'development_option_id',
  /** column name */
  Id = 'id',
  /** column name */
  Shortlist = 'shortlist',
  /** column name */
  TeamChoiceLocation = 'team_choice_location',
  /** column name */
  TeamChoiceName = 'team_choice_name',
  /** column name */
  TeamId = 'team_id'
}

/** aggregate var_pop on columns */
export type Team_Development_Option_Var_Pop_Fields = {
  __typename?: 'team_development_option_var_pop_fields';
  development_option_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team_development_option" */
export type Team_Development_Option_Var_Pop_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Team_Development_Option_Var_Samp_Fields = {
  __typename?: 'team_development_option_var_samp_fields';
  development_option_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team_development_option" */
export type Team_Development_Option_Var_Samp_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Team_Development_Option_Variance_Fields = {
  __typename?: 'team_development_option_variance_fields';
  development_option_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team_development_option" */
export type Team_Development_Option_Variance_Order_By = {
  development_option_id?: InputMaybe<Order_By>;
};

/** input type for inserting data into table "team" */
export type Team_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quest?: InputMaybe<Quest_Obj_Rel_Insert_Input>;
  quest_id?: InputMaybe<Scalars['uuid']>;
  stage_progresses?: InputMaybe<Stage_Progress_Arr_Rel_Insert_Input>;
  students?: InputMaybe<Student_Arr_Rel_Insert_Input>;
  team_development_options?: InputMaybe<Team_Development_Option_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Team_Max_Fields = {
  __typename?: 'team_max_fields';
  id?: Maybe<Scalars['uuid']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  quest_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "team" */
export type Team_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Min_Fields = {
  __typename?: 'team_min_fields';
  id?: Maybe<Scalars['uuid']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  quest_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "team" */
export type Team_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "team" */
export type Team_Mutation_Response = {
  __typename?: 'team_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Team>;
};

/** input type for inserting object relation for remote table "team" */
export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** on conflict condition type for table "team" */
export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns?: Array<Team_Update_Column>;
  where?: InputMaybe<Team_Bool_Exp>;
};

/** Ordering options when selecting data from "team". */
export type Team_Order_By = {
  id?: InputMaybe<Order_By>;
  is_valid_team?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  quest?: InputMaybe<Quest_Order_By>;
  quest_id?: InputMaybe<Order_By>;
  stage_progresses_aggregate?: InputMaybe<Stage_Progress_Aggregate_Order_By>;
  students_aggregate?: InputMaybe<Student_Aggregate_Order_By>;
  team_development_options_aggregate?: InputMaybe<Team_Development_Option_Aggregate_Order_By>;
};

/** primary key columns input for table: team */
export type Team_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "team" */
export enum Team_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Logo = 'logo',
  /** column name */
  Name = 'name',
  /** column name */
  QuestId = 'quest_id'
}

/** input type for updating data in table "team" */
export type Team_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quest_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "team" */
export enum Team_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Logo = 'logo',
  /** column name */
  Name = 'name',
  /** column name */
  QuestId = 'quest_id'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tutor" */
export type Tutor = {
  __typename?: 'tutor';
  id: Scalars['uuid'];
  /** An array relationship */
  quests: Array<Quest>;
  /** An aggregate relationship */
  quests_aggregate: Quest_Aggregate;
  /** An object relationship */
  school: School;
  school_id: Scalars['uuid'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "tutor" */
export type TutorQuestsArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


/** columns and relationships of "tutor" */
export type TutorQuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};

/** aggregated selection of "tutor" */
export type Tutor_Aggregate = {
  __typename?: 'tutor_aggregate';
  aggregate?: Maybe<Tutor_Aggregate_Fields>;
  nodes: Array<Tutor>;
};

/** aggregate fields of "tutor" */
export type Tutor_Aggregate_Fields = {
  __typename?: 'tutor_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tutor_Max_Fields>;
  min?: Maybe<Tutor_Min_Fields>;
};


/** aggregate fields of "tutor" */
export type Tutor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tutor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tutor" */
export type Tutor_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tutor_Max_Order_By>;
  min?: InputMaybe<Tutor_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tutor" */
export type Tutor_Arr_Rel_Insert_Input = {
  data: Array<Tutor_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Tutor_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tutor". All fields are combined with a logical 'AND'. */
export type Tutor_Bool_Exp = {
  _and?: InputMaybe<Array<Tutor_Bool_Exp>>;
  _not?: InputMaybe<Tutor_Bool_Exp>;
  _or?: InputMaybe<Array<Tutor_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  quests?: InputMaybe<Quest_Bool_Exp>;
  school?: InputMaybe<School_Bool_Exp>;
  school_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tutor" */
export enum Tutor_Constraint {
  /** unique or primary key constraint */
  TutorPkey = 'tutor_pkey',
  /** unique or primary key constraint */
  TutorUserIdKey = 'tutor_user_id_key'
}

/** input type for inserting data into table "tutor" */
export type Tutor_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  quests?: InputMaybe<Quest_Arr_Rel_Insert_Input>;
  school?: InputMaybe<School_Obj_Rel_Insert_Input>;
  school_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Tutor_Max_Fields = {
  __typename?: 'tutor_max_fields';
  id?: Maybe<Scalars['uuid']>;
  school_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tutor" */
export type Tutor_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  school_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tutor_Min_Fields = {
  __typename?: 'tutor_min_fields';
  id?: Maybe<Scalars['uuid']>;
  school_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tutor" */
export type Tutor_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  school_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tutor" */
export type Tutor_Mutation_Response = {
  __typename?: 'tutor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tutor>;
};

/** input type for inserting object relation for remote table "tutor" */
export type Tutor_Obj_Rel_Insert_Input = {
  data: Tutor_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Tutor_On_Conflict>;
};

/** on conflict condition type for table "tutor" */
export type Tutor_On_Conflict = {
  constraint: Tutor_Constraint;
  update_columns?: Array<Tutor_Update_Column>;
  where?: InputMaybe<Tutor_Bool_Exp>;
};

/** Ordering options when selecting data from "tutor". */
export type Tutor_Order_By = {
  id?: InputMaybe<Order_By>;
  quests_aggregate?: InputMaybe<Quest_Aggregate_Order_By>;
  school?: InputMaybe<School_Order_By>;
  school_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tutor */
export type Tutor_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tutor" */
export enum Tutor_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  SchoolId = 'school_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tutor" */
export type Tutor_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  school_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "tutor" */
export enum Tutor_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  SchoolId = 'school_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  email: Scalars['String'];
  first_name: Scalars['String'];
  /** A computed field, executes function "user_full_name" */
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  password: Scalars['String'];
  /** An object relationship */
  student?: Maybe<Student>;
  times_logged_in: Scalars['Int'];
  /** An object relationship */
  tutor?: Maybe<Tutor>;
  username: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  times_logged_in?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  student?: InputMaybe<Student_Bool_Exp>;
  times_logged_in?: InputMaybe<Int_Comparison_Exp>;
  tutor?: InputMaybe<Tutor_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  times_logged_in?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  password?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<Student_Obj_Rel_Insert_Input>;
  times_logged_in?: InputMaybe<Scalars['Int']>;
  tutor?: InputMaybe<Tutor_Obj_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  times_logged_in?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  times_logged_in?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  student?: InputMaybe<Student_Order_By>;
  times_logged_in?: InputMaybe<Order_By>;
  tutor?: InputMaybe<Tutor_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Password = 'password',
  /** column name */
  TimesLoggedIn = 'times_logged_in',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  password?: InputMaybe<Scalars['String']>;
  times_logged_in?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  times_logged_in?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  times_logged_in?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  times_logged_in?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  times_logged_in?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Password = 'password',
  /** column name */
  TimesLoggedIn = 'times_logged_in',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  times_logged_in?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  times_logged_in?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  times_logged_in?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};
