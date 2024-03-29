import { useState, useContext } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
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

import { UserStateContext } from '@community-land-quest/shared-data/contexts/user-state'
import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { useAuthMutation } from '@community-land-quest/shared-data/gql/hooks/authMutation'
import { CHOOSE_DEVELOPMENT_OPTIONS } from '@community-land-quest/shared-data/gql/mutations'
import { STAGE_3_TASK_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    Stage3TaskQuery,
    Stage3TaskQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import { useCheckboxState } from '@community-land-quest/shared-utils/utils/input-utils'

import '../../../../scss/index.scss'

const ChooseOptionsCheckboxes = ({
    devOptions,
    selectedOptions,
    toggleValue,
    teamChoiceName,
    setTeamChoiceName,
}) => (
    <>
        {devOptions.slice().map(({ id, display_name }, i) =>
            id === 10 ? (
                <div key={i}>
                    <p className="sm-type-lead sm-type-lead--medium mt-4">
                        Or choose your own option - check the box and enter your
                        option name here!
                    </p>
                    <div className="multiple-choice">
                        <input
                            className="form-control"
                            id="10"
                            type="checkbox"
                            checked={selectedOptions.includes(10)}
                            onChange={() => toggleValue(10)}
                        />
                        <label className="form-label" htmlFor="housing">
                            Team choice
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="form-label sm-type-amp">
                            Development option name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={teamChoiceName}
                            onChange={({ target: { value } }) =>
                                setTeamChoiceName(value)
                            }
                        />
                    </div>
                </div>
            ) : (
                <div key={i} className="multiple-choice">
                    <input
                        className="form-control"
                        id={id}
                        type="checkbox"
                        checked={selectedOptions.includes(id)}
                        onChange={() => toggleValue(id)}
                    />
                    <label className="form-label" htmlFor={id}>
                        {display_name}
                    </label>
                </div>
            )
        )}
    </>
)

// TODO: move this out to components
const Stage3Task = ({ taskToComplete }) => {
    const {
        userInfo: { teamId },
    } = useContext(UserStateContext)

    const [teamChoiceName, setTeamChoiceName] = useState('')

    const [selectedOptions, toggleValue, limitAmountSelected] =
        useCheckboxState<number>([], 5)

    const [chooseDevOptions, chooseDevOptionsResponse] = useAuthMutation(
        CHOOSE_DEVELOPMENT_OPTIONS,
        {
            query: STAGE_3_TASK_QUERY,
            variables: {},
            idRequired: 'teamId',
        }
    )

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<
        Stage3TaskQuery,
        Omit<Stage3TaskQueryVariables, 'team_id'>
    >(STAGE_3_TASK_QUERY, {}, 'teamId')

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
    const taskComplete = devOptions.length === 5

    return (
        <TaskPanel docSubmitted={taskComplete}>
            {taskComplete || chooseDevOptionsResponse.data ? (
                <Submitted content={taskToComplete.submittedText} />
            ) : (
                <TaskContainer taskToComplete={taskToComplete}>
                    <ChooseOptionsCheckboxes
                        devOptions={pageData.development_option}
                        selectedOptions={selectedOptions}
                        toggleValue={toggleValue}
                        teamChoiceName={teamChoiceName}
                        setTeamChoiceName={setTeamChoiceName}
                    />

                    <button
                        className="btn-solid-lg mt-4"
                        disabled={
                            !limitAmountSelected ||
                            (selectedOptions.includes(10) && !teamChoiceName) ||
                            chooseDevOptionsResponse?.loading
                        }
                        onClick={() => {
                            const objects = selectedOptions.map((id) => {
                                if (id === 10) {
                                    return {
                                        team_id: teamId,
                                        development_option_id: id,
                                        team_choice_name: teamChoiceName,
                                    }
                                }

                                return {
                                    team_id: teamId,
                                    development_option_id: id,
                                }
                            })

                            chooseDevOptions({
                                variables: {
                                    objects,
                                },
                            })
                        }}
                    >
                        {chooseDevOptionsResponse?.loading && (
                            <span className="spinner"></span>
                        )}{' '}
                        Submit options
                    </button>

                    {/* TODO: replace with proper 'submitted' notification component...if needed? */}
                    {/* {chooseDevOptionsResponse.data && (
                            <p className="sm-type-amp">Submitted!</p>
                        )} */}
                </TaskContainer>
            )}
        </TaskPanel>
    )
}

const Stage3ChooseOptionsPage = () => {
    // TODO: brittle to use the title in order to find this model - don't think we're even using the SWOT one so could delete?
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
            graphCmsStageTaskPage(
                stageNumber: { eq: 3 }
                title: { eq: "Choose Your Longlist" }
            ) {
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
                <title>Stage 3 - Lay The Foundations - {title}</title>
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
                                        displayName: 'Stage 3',
                                        url: '/student/stage-3/',
                                    },
                                ]}
                                currentDisplayName={title}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {title}
                            </h2>

                            <Intro item={taskInfo} />

                            {/* TODO: get the shaky help icon back! */}
                            {/* <p className="sm-type-guitar mb-4">
                                <span className="side-icon side-icon-orange shake">
                                    <HelpIcon />
                                </span>
                                <Link to="/information/development-options">
                                    View the development options
                                </Link>
                            </p> */}

                            <Stage3Task taskToComplete={tasksToComplete[0]} />
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <Checklist items={checklist.item} />
                        </div>
                    </div>

                    <Link to="/student/stage-3">Back to Stage 3</Link>
                </section>
            </main>
        </>
    )
}

export default Stage3ChooseOptionsPage
