import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import {
    Loading,
    Error,
    Breadcrumbs,
    Intro,
    TaskContainer,
    TaskPanel,
    Submitted,
    Helpful,
    Checklist,
} from '@community-land-quest/shared-ui'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { useAuthMutation } from '@community-land-quest/shared-data/gql/hooks/authMutation'
import { CHOOSE_SHORTLIST_OPTIONS } from '@community-land-quest/shared-data/gql/mutations'
import { STAGE_4_TASK_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    Stage4TaskQuery,
    Stage4TaskQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import { useCheckboxState } from '@community-land-quest/shared-utils/utils/input-utils'

import '../../../../scss/index.scss'

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
                            <Checklist items={checklist.item} />
                        </div>
                    </div>

                    <Link to="/student/stage-4">Back to Stage 4</Link>
                </section>
            </main>
        </>
    )
}

export default Stage4ChooseOptionsPage
