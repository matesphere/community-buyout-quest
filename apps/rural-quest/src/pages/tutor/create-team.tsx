import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'
import { LoadingSpinner } from '../../components/common/LoadingSpinner'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'

import {
    useAuthQuery,
    useAuthMutation,
    addStudentToTeam,
    mergeIdsIntoStudents,
    createStudentsInCognito,
} from '../../utils/auth-utils'

import { UserStateContext } from '../../utils/user-state'
import { NewQuestContext } from '../../utils/tutor-contexts'

import { CREATE_QUEST_WITH_TEAMS, START_QUEST } from '../../gql/mutations'
import { StudentType } from '../../gql/types'
import {
    CreateQuestWithTeams,
    CreateQuestWithTeamsVariables,
} from '../../gql/types/CreateQuestWithTeams'
import {
    CreateTeamQuery,
    CreateTeamQueryVariables,
} from '../../gql/types/CreateTeamQuery'

import HelpIcon from '../../assets/help-icon.svg'
import Cross from '../../assets/cross.svg'

import '../../scss/index.scss'

// TODO: sort out 'team/teams' pluralisation in modals

interface TeamType {
    name: string
    students: Array<StudentType>
}

const TeamInput = ({ setTeams }) => {
    const [teamName, setTeamName] = useState('')
    return (
        <form
            className="container"
            onSubmit={(e) => {
                e.preventDefault()
                setTeams((teams) => [
                    ...teams,
                    { name: teamName, students: [] },
                ])
                setTeamName('')
            }}
        >
            <div className="side-grey row mb-4">
                <div className="col-lg-6 mb-2">
                    <label className="form-label sm-type-amp">Name</label>
                    <span>
                        <input
                            id="name"
                            type="name"
                            className="form-control"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </span>
                </div>
                <div className="col-lg-6 mb-2">
                    <button type="submit" className="btn-outline-lg">
                        Add team
                    </button>
                </div>
            </div>
        </form>
    )
}

const Team = ({ team: { name, students }, setTeams }) => (
    <>
        <p className="sm-type-leadguitar sm-type-lead--medium">
            <span className="blackdot"></span> {name}
            <span
                className="cross-icon"
                onClick={() =>
                    setTeams((teams) =>
                        teams.filter((team) => team.name !== name)
                    )
                }
            >
                <Cross />
            </span>
        </p>
        {students.map(({ firstName, lastName }, i) => (
            <p key={i} className="sm-type-amp">
                {firstName} {lastName}
                <span className="cross-icon">
                    <Cross />
                </span>
            </p>
        ))}
    </>
)

const Student = ({ student, teams, setTeams }) => (
    <div className="side-grey row mb-4">
        <div className="col-lg-6">
            <p className="sm-type-guitar sm-type-guitar--medium">
                {student.firstName} {student.lastName}
            </p>
        </div>
        <div className="col-lg-6">
            <div className="multiple-choice">
                <select
                    defaultValue="none"
                    className="form-control"
                    onChange={({ target: { value } }) => {
                        setTeams(addStudentToTeam(value, student))
                    }}
                >
                    <option disabled value="none">
                        {' '}
                        -- select a team --{' '}
                    </option>
                    {teams.map(({ name }, i) => (
                        <option key={i} value={i}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    </div>
)

const createStudents = async (
    studentsWithTeamId,
    setCognitoLoading,
    setCognitoResponse
) => {
    setCognitoLoading(true)
    const response = await createStudentsInCognito(studentsWithTeamId)

    setCognitoLoading(false)
    setCognitoResponse(response)
}

const CreateStudentsSection = ({
    teamsWithStudents,
    teamsFromResponse,
    cognitoResponse,
    setCognitoResponse,
    schoolId,
}) => {
    const [cognitoLoading, setCognitoLoading] = useState(false)
    // TODO: response is array of promises - need to handle rejections
    // const [cognitoError, setCognitoError] = useState(false)

    const studentsWithTeamId = mergeIdsIntoStudents(
        teamsWithStudents,
        teamsFromResponse,
        schoolId
    )

    useEffect(() => {
        if (cognitoResponse.length === 0) {
            createStudents(
                studentsWithTeamId,
                setCognitoLoading,
                setCognitoResponse
            )
        }
    }, [])

    return (
        <>
            {cognitoLoading && (
                <>
                    <p>Adding students to teams...</p>
                    <LoadingSpinner delay={200} />
                </>
            )}

            {/* {cognitoError && <p>Oops, problem adding students!</p>} */}
        </>
    )
}

const getInvalidTeams = (teams: Array<TeamType>) =>
    teams.filter((team) => team.students.length < 4)

interface ConfirmModalProps {
    teams: Array<TeamType>
    showModal: boolean
    setShowModal: (value: boolean) => void
    setStudentsToAdd: (value: Array<StudentType>) => void
    tutorId: string
    schoolId: string
}

const ConfirmModal = ({
    teams,
    showModal,
    setShowModal,
    setStudentsToAdd,
    tutorId,
    schoolId,
}: ConfirmModalProps) => {
    const [createQuestWithTeams, createQuestWithTeamsResponse] =
        useAuthMutation<CreateQuestWithTeams, CreateQuestWithTeamsVariables>(
            CREATE_QUEST_WITH_TEAMS
        )
    const [startQuest, startQuestResponse] = useAuthMutation(START_QUEST)

    const [cognitoResponse, setCognitoResponse] = useState([])

    const invalidTeams = getInvalidTeams(teams)
    // console.log(createQuestWithTeamsResponse)

    return (
        <>
            {showModal && (
                <div className="modal-window">
                    <div>
                        <button
                            onClick={() => setShowModal(false)}
                            title="Close"
                            className="modal-close"
                        >
                            Cancel
                        </button>

                        {!createQuestWithTeamsResponse.data &&
                            invalidTeams.length !== 0 && (
                                <>
                                    <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                        {`The following teams do not have the minimum required number of students (4): ${invalidTeams
                                            .map((team) => team.name)
                                            .join(', ')}`}
                                    </p>
                                    <p>
                                        Click cancel to go back and rectify
                                        this.
                                    </p>
                                </>
                            )}

                        {!createQuestWithTeamsResponse.data &&
                            invalidTeams.length === 0 && (
                                <>
                                    <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                        {`You are about to create ${teams.length} teams! Is this correct?`}{' '}
                                    </p>

                                    <button
                                        className="btn-solid-lg mt-4"
                                        onClick={() => {
                                            createQuestWithTeams({
                                                variables: {
                                                    object: {
                                                        tutor_id: tutorId,
                                                        teams: {
                                                            data: teams.map(
                                                                ({ name }) => ({
                                                                    name,
                                                                })
                                                            ),
                                                        },
                                                    },
                                                },
                                            })
                                        }}
                                    >
                                        Yes, create teams
                                    </button>
                                </>
                            )}

                        {createQuestWithTeamsResponse.loading && (
                            <LoadingSpinner delay={200} />
                        )}

                        {createQuestWithTeamsResponse.data && (
                            <div>
                                <p className="sm-type-guitar sm-type-guitar--medium">
                                    {`Created ${createQuestWithTeamsResponse.data.insert_quest_one.teams.length} teams!`}{' '}
                                </p>

                                <CreateStudentsSection
                                    teamsWithStudents={teams}
                                    teamsFromResponse={
                                        createQuestWithTeamsResponse.data
                                            .insert_quest_one.teams
                                    }
                                    cognitoResponse={cognitoResponse}
                                    setCognitoResponse={setCognitoResponse}
                                    schoolId={schoolId}
                                />

                                {cognitoResponse.length > 0 && (
                                    <>
                                        <p className="sm-type-guitar sm-type-guitar--medium">
                                            {`${cognitoResponse.length} students added.`}{' '}
                                        </p>
                                        <button
                                            className="btn-solid-lg mt-4 mb-4"
                                            onClick={() => {
                                                startQuest({
                                                    variables: {
                                                        quest_id:
                                                            createQuestWithTeamsResponse
                                                                .data
                                                                .insert_quest_one
                                                                .id,
                                                    },
                                                })
                                                setShowModal(false)
                                                setStudentsToAdd([])
                                            }}
                                        >
                                            START QUEST!
                                        </button>
                                        <span>
                                            You'll now be able to access this
                                            quest from your hub
                                        </span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {startQuestResponse.data && (
                <div className="modal-window">
                    <div>
                        <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                            Quest created!{' '}
                        </p>
                        <Link
                            to="/tutor/current-quests"
                            className="btn-solid-lg mt-4 mb-4"
                        >
                            View current quests
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

const CREATE_TEAM_QUERY = gql`
    query CreateTeamQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            tutor {
                id
            }
        }
    }
`

const TutorCreateTeamPage = () => {
    const [teams, setTeams] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { studentsToAdd, setStudentsToAdd } = useContext(NewQuestContext)
    const {
        userInfo: { schoolId },
    } = useContext(UserStateContext)

    const { loading, error, data } = useAuthQuery<
        CreateTeamQuery,
        CreateTeamQueryVariables
    >(CREATE_TEAM_QUERY, {}, 'userId')

    if (loading) return <Loading />
    if (error || !data)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { id: tutorId } = data.user_by_pk?.tutor

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>New Quest - Create Teams</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Add students',
                                        url: '/tutor/add-students',
                                    },
                                ]}
                                currentDisplayName="Create teams"
                            />
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                STEP 1: Create Teams
                            </h2>
                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                Add all required teams here...
                            </p>

                            <TeamInput setTeams={setTeams} />

                            <h3 className="sm-type-drum sm-type-drum--medium mt-4">
                                STEP 2: Assign students
                            </h3>
                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                ...then assign students to teams here
                            </p>
                            <form
                                className="mb-4 container"
                                id="form-login"
                                action="/account/tutor-add-student-to-teams"
                            >
                                {studentsToAdd.map((student, i) => (
                                    <Student
                                        key={i}
                                        student={student}
                                        teams={teams}
                                        setTeams={setTeams}
                                    />
                                ))}
                            </form>

                            <button
                                className="btn-solid-lg mt-4"
                                onClick={() => setShowModal(true)}
                            >
                                Create teams
                            </button>
                        </div>

                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Teams
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Your teams will appear below.
                                </p>

                                {teams.length > 0 && (
                                    <>
                                        {teams.map((team, i) => (
                                            <Team
                                                key={i}
                                                team={team}
                                                setTeams={setTeams}
                                            />
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <ConfirmModal
                    {...{
                        teams,
                        showModal,
                        setShowModal,
                        setStudentsToAdd,
                        tutorId,
                        schoolId,
                    }}
                />
            </main>
        </>
    )
}

export default TutorCreateTeamPage
