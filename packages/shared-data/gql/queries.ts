import { gql } from '@apollo/client'

// common

export const LOGGED_IN_QUERY = gql`
    query LoggedIn($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            first_name
            student {
                id
                team {
                    id
                    students {
                        id
                        user {
                            id
                            times_logged_in
                        }
                    }
                }
            }
        }
    }
`

// student

export const NAV_QUERY = gql`
    query Nav($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            username
            student {
                id
                position
                team {
                    id
                    name
                    stage_progresses(order_by: { stage_id: asc }) {
                        stage_id
                        status
                    }
                }
            }
        }
    }
`

export const TEAM_HUB_QUERY = gql`
    query TeamHub($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            student {
                id
                team {
                    id
                    name
                    logo
                    stage_progresses(order_by: { stage_id: asc }) {
                        id
                        stage_id
                        status
                        documents(order_by: { id: asc }) {
                            status
                        }
                    }
                    students {
                        id
                        position
                        user {
                            id
                            full_name
                        }
                    }
                    team_development_options(
                        order_by: { development_option: { id: asc } }
                    ) {
                        id
                        shortlist
                        team_choice_name
                        development_option {
                            id
                            display_name
                            option
                        }
                    }
                }
            }
        }
        stage(order_by: { id: asc }) {
            id
            title
        }
    }
`

export const TEAM_HUB_SUB = gql`
    subscription TeamHubSub($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            student {
                team {
                    name
                    stage_progresses {
                        stage_id
                        status
                    }
                    students {
                        user {
                            full_name
                        }
                    }
                    team_development_options {
                        shortlist
                        development_option {
                            id
                            display_name
                            option
                        }
                    }
                }
            }
        }
    }
`

export const STAGE_QUERY = gql`
    query Stage(
        $team_id: uuid!
        $stage_id: Int!
        $includeDevOptions: Boolean!
    ) {
        team_by_pk(id: $team_id) {
            id
            name
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(order_by: { id: asc }) {
                    id
                    feedback
                }
            }
            team_development_options @include(if: $includeDevOptions) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

export const DOCUMENT_QUERY = gql`
    query Document(
        $team_id: uuid!
        $stage_id: Int!
        $includeDevOptions: Boolean!
    ) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(
                    where: {
                        _or: [
                            { status: { _eq: draft } }
                            { status: { _eq: submitted } }
                            { status: { _eq: marked_passed } }
                        ]
                    }
                    order_by: { id: asc }
                ) {
                    id
                    status
                    feedback
                    doc_data
                }
            }
            team_development_options @include(if: $includeDevOptions) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

export const DOCUMENT_COMPLETE_QUERY = gql`
    query DocumentComplete(
        $team_id: uuid!
        $stage_id: Int!
        $includeDevOptions: Boolean!
    ) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(
                    where: { _or: [{ status: { _eq: marked_passed } }] }
                    order_by: { id: asc }
                ) {
                    id
                    doc_data
                    feedback
                }
            }
            team_development_options @include(if: $includeDevOptions) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

export const TEAM_QUERY = gql`
    query Team($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            students {
                id
                user_id
                school_id
                team_id
                position
                user {
                    username
                    full_name
                }
            }
        }
    }
`

export const STAGE_2_TASK_QUERY = gql`
    query Stage2Task($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            logo
            students {
                id
                user_id
                school_id
                team_id
                position
                user {
                    username
                    full_name
                }
            }
            stage_progresses(where: { stage_id: { _eq: 2 } }) {
                id
                status
            }
        }
    }
`

export const STAGE_3_TASK_QUERY = gql`
    query Stage3Task($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            team_development_options {
                id
            }
        }
        development_option(order_by: { id: asc }) {
            id
            option
            display_name
            location
        }
    }
`

export const SWOT_EXAMPLE_QUERY = gql`
    query SwotExample($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(where: { stage_id: { _eq: 3 } }) {
                documents(
                    where: {
                        _or: [
                            { status: { _eq: draft } }
                            { status: { _eq: submitted } }
                        ]
                    }
                ) {
                    doc_data
                }
            }
        }
        development_option(order_by: { id: asc }) {
            option
            display_name
        }
    }
`

export const STAGE_4_TASK_QUERY = gql`
    query Stage4Task($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            team_development_options(
                order_by: { development_option: { id: asc } }
            ) {
                id
                team_choice_name
                team_choice_location
                shortlist
                development_option {
                    id
                    option
                    display_name
                    location
                }
            }
        }
    }
`

export const BUSINESS_PLAN_EXAMPLE_QUERY = gql`
    query BusinessPlanExample($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(where: { stage_id: { _eq: 5 } }) {
                documents(
                    where: {
                        _or: [
                            { status: { _eq: draft } }
                            { status: { _eq: submitted } }
                        ]
                    }
                ) {
                    doc_data
                }
            }
        }
        development_option(order_by: { id: asc }) {
            option
            display_name
        }
    }
`

export const STAGE_6_QUERY = gql`
    query Stage6($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            team_development_options {
                id
                development_option {
                    display_name
                }
                shortlist
            }
        }
    }
`

export const STAGE_6_WORK_QUERY = gql`
    query Stage6Work($team_id: uuid!, $dev_option_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(
                where: {
                    _or: [
                        { stage_id: { _eq: 3 } }
                        { stage_id: { _eq: 4 } }
                        { stage_id: { _eq: 5 } }
                    ]
                }
                order_by: { stage_id: asc }
            ) {
                stage_id
                documents(where: { status: { _eq: marked_passed } }) {
                    doc_data
                }
            }
            team_development_options(where: { id: { _eq: $dev_option_id } }) {
                shortlist
                development_option {
                    option
                    display_name
                }
            }
        }
    }
`

export const STAGE_8_QUERY = gql`
    query Stage8($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            student {
                id
                team {
                    name
                    students {
                        user {
                            full_name
                        }
                    }
                }
            }
        }
    }
`

// tutor

export const TUTOR_CURRENT_GROUP_QUERY = gql`
    query TutorCurrentGroup($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            tutor {
                quests(
                    where: { status: { _eq: active } }
                    order_by: { started_at: asc }
                ) {
                    id
                    name
                    teams(order_by: { id: asc }) {
                        id
                        name
                        students {
                            id
                            position
                            user {
                                full_name
                                username
                                password
                            }
                        }
                        stage_progresses {
                            id
                            team_id
                            stage_id
                            status
                            documents(order_by: { id: asc }) {
                                id
                                status
                                doc_data
                                feedback
                            }
                        }
                        team_development_options(
                            order_by: { development_option: { id: asc } }
                        ) {
                            team_choice_name
                            shortlist
                            development_option {
                                id
                                display_name
                                option
                            }
                        }
                    }
                }
            }
        }
        stage(order_by: { id: asc }) {
            id
            title
        }
    }
`

export const TUTOR_PREVIOUS_GROUP_QUERY = gql`
    query TutorPreviousGroup($quest_id: uuid!) {
        quest_by_pk(id: $quest_id) {
            id
            name
            started_at
            completed_at
            teams(order_by: { id: asc }) {
                id
                name
                students {
                    id
                    position
                    user {
                        full_name
                        username
                        password
                    }
                }
                stage_progresses {
                    id
                    team_id
                    stage_id
                    status
                    documents(order_by: { id: asc }) {
                        id
                        status
                        doc_data
                        feedback
                    }
                }
                team_development_options(
                    order_by: { development_option: { id: asc } }
                ) {
                    team_choice_name
                    shortlist
                    development_option {
                        id
                        display_name
                        option
                    }
                }
            }
        }
        stage(order_by: { id: asc }) {
            id
            title
        }
    }
`

export const TUTOR_DOCUMENT_QUERY = gql`
    query TutorDocument(
        $stage_progress_id: uuid!
        $includeDevOptions: Boolean!
    ) {
        stage_progress_by_pk(id: $stage_progress_id) {
            id
            stage_id
            status
            documents(
                where: {
                    _or: [
                        { status: { _eq: submitted } }
                        { status: { _eq: marked_passed } }
                    ]
                }
                order_by: { id: asc }
            ) {
                id
                status
                feedback
                doc_data
            }
            team {
                name
                team_development_options @include(if: $includeDevOptions) {
                    id
                    team_choice_name
                    shortlist
                    development_option {
                        id
                        display_name
                        option
                    }
                }
            }
        }
    }
`

export const CREATE_TEAM_QUERY = gql`
    query CreateTeam($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            tutor {
                id
            }
        }
    }
`

export const TUTOR_CURRENT_QUEST_SUB = gql`
    subscription TutorCurrentQuestSub($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            username
            email
            tutor {
                id
                school {
                    name
                }
                quests(where: { status: { _eq: active } }) {
                    id
                    teams {
                        id
                        name
                        students {
                            id
                            user {
                                full_name
                            }
                        }
                        stage_progresses {
                            id
                            team_id
                            stage_id
                            status
                            documents(order_by: { id: asc }) {
                                id
                                status
                                feedback
                            }
                        }
                    }
                }
            }
        }
    }
`

export const TUTOR_HUB_QUERY = gql`
    query TutorHub($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            username
            email
            tutor {
                school {
                    name
                }
                quests(order_by: { started_at: desc }) {
                    id
                    name
                    status
                    started_at
                    completed_at
                    teams {
                        id
                        name
                    }
                }
            }
        }
    }
`
