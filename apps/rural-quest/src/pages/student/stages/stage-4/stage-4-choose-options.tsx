import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { Intro } from '../../../../components/student/Intro'
import {
    TaskContainer,
    TaskPanel,
} from '../../../../components/common/stages/TaskPanel'
import { Submitted } from '../../../../components/student/Submitted'
import { Helpful } from '../../../../components/student/Helpful'
import { CheckList } from '../../../../components/student/Checklist'

import { useCheckboxState } from '../../../../utils/input-utils'
import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
import { CHOOSE_SHORTLIST_OPTIONS } from '../../../../gql/mutations'

import {
    Stage4TaskQuery,
    Stage4TaskQueryVariables,
} from '../../../../gql/types/Stage4TaskQuery'

import '../../../../scss/index.scss'

const STAGE_4_TASK_QUERY = gql`
    query Stage4TaskQuery($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            team_development_options(
                order_by: { development_option: { id: asc } }
            ) {
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
`

const ChooseOptionsCheckboxes = ({
    devOptions,
    selectedOptions,
    toggleValue,
}) => (
    <>
        {devOptions
            .slice()
            .map(
                (
                    {
                        id,
                        team_choice_name,
                        development_option: { display_name },
                    },
                    i
                ) => (
                    <div key={i} className="multiple-choice">
                        <input
                            className="form-control"
                            id={id}
                            type="checkbox"
                            checked={selectedOptions.includes(id)}
                            onChange={() => toggleValue(id)}
                        />
                        <label className="form-label" htmlFor={id}>
                            {team_choice_name || display_name}
                        </label>
                    </div>
                )
            )}
    </>
)

// TODO: move this out to components
const Stage4Task = ({ taskToComplete }) => {
    const [selectedOptions, toggleValue, allowedNumberSelected] =
        useCheckboxState<number>([], 3)

    const [chooseDevOptions, chooseDevOptionsResponse] = useAuthMutation(
        CHOOSE_SHORTLIST_OPTIONS,
        {
            query: STAGE_4_TASK_QUERY,
            variables: {},
            idRequired: 'teamId',
        }
    )

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage4TaskQuery, Stage4TaskQueryVariables>(
        STAGE_4_TASK_QUERY,
        {},
        'teamId'
    )

    if (loading) return <Loading />
    if (error || !pageData)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { team_development_options: devOptions } = pageData.team_by_pk
    const taskComplete = devOptions.filter((opt) => opt.shortlist).length === 3

    return (
        <TaskPanel docSubmitted={taskComplete}>
            {taskComplete || chooseDevOptionsResponse.data ? (
                <Submitted content={taskToComplete.submittedText} />
            ) : (
                <TaskContainer taskToComplete={taskToComplete}>
                    <ChooseOptionsCheckboxes
                        devOptions={devOptions}
                        selectedOptions={selectedOptions}
                        toggleValue={toggleValue}
                    />

                    <button
                        className="btn-solid-lg mt-4"
                        disabled={
                            !allowedNumberSelected ||
                            chooseDevOptionsResponse.loading
                        }
                        onClick={() => {
                            chooseDevOptions({
                                variables: {
                                    optionsToUpdate: selectedOptions,
                                },
                            })
                        }}
                    >
                        {chooseDevOptionsResponse?.loading && (
                            <span className="spinner"></span>
                        )}{' '}
                        Submit options
                    </button>
                </TaskContainer>
            )}
        </TaskPanel>
    )
}

const Stage4ChooseOptionsPage = () => {
    const {
        graphCmsStageTaskPage: {
            title,
            taskInfo,
            tasksToComplete,
            helpfulInfo,
            checklist,
        },
    } = useStaticQuery(graphql`
        query {
            graphCmsStageTaskPage(stageNumber: { eq: 4 }) {
                ...StageTaskPageContent
            }
        }
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 4 - Progress Your Plans - {title}</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Stage 4',
                                        url: '/student/stage-4/',
                                    },
                                ]}
                                currentDisplayName={title}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {title}
                            </h2>

                            <Intro item={taskInfo} />

                            <Stage4Task taskToComplete={tasksToComplete[0]} />
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>

                    <Link to="/student/stage-4">Back to Stage 4</Link>
                </section>
            </main>
        </>
    )
}

export default Stage4ChooseOptionsPage
