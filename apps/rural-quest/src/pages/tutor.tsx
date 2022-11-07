import React, { useState, useContext, FC } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { Authenticator } from '@aws-amplify/ui-react'

import Header from '../components/tutor/_header'
import Footer from '../components/tutor/_footer'

import Hub from './tutor/hub'
import CurrentQuest from './tutor/current-quests'
import PreviousQuest from './tutor/previous-quest'
import AddStudents from './tutor/add-students'
import CreateTeam from './tutor/create-team'
import Stage1Submitted from './tutor/stages/stage-1/tutor-stage-1-submitted'
import Stage3Submitted from './tutor/stages/stage-3/tutor-stage-3-submitted'
import Stage4Submitted from './tutor/stages/stage-4/tutor-stage-4-submitted'
import Stage5Submitted from './tutor/stages/stage-5/tutor-stage-5-submitted'
import TutorAssessment from './tutor/assessment'
import TutorTeamAssessment from './tutor/team-assessment'
import TutorGuide from './tutor/tutor-guide'
import TechnicalGuide from './tutor/technical-guide'
import { StudentType } from '../gql/types'

import { UserStateContext } from '../utils/user-state'
import { CurrentQuestsContext, NewQuestContext } from '../utils/tutor-contexts'

type LoggedInRouteProps = RouteComponentProps & {
    component: () => string | JSX.Element
}

const LoggedInRoute: FC<LoggedInRouteProps> = ({
    component: Component,
    navigate,
    ...rest
}) => {
    const { isSignedIn, userInfo } = useContext(UserStateContext)

    if (isSignedIn) {
        if (userInfo.role === 'student') {
            navigate('/student/team-hub') //TODO: not working...why?? Something to do with client-only?
        }
    }

    return (
        <Authenticator hideSignUp>
            <Component {...rest} />
        </Authenticator>
    )
}

const Routes = () => {
    const [studentsToAdd, setStudentsToAdd] = useState<Array<StudentType>>([])
    const [expanded, setExpanded] = useState<Array<string>>([])
    const [selectedTab, setSelectedTab] = useState<number>(0)

    return (
        <NewQuestContext.Provider value={{ studentsToAdd, setStudentsToAdd }}>
            <CurrentQuestsContext.Provider
                value={{ expanded, setExpanded, selectedTab, setSelectedTab }}
            >
                <Header />
                <div className="min-height">
                    <Router basepath="/tutor">
                        <LoggedInRoute path="/hub" component={Hub} />
                        <LoggedInRoute
                            path="/current-quests"
                            component={CurrentQuest}
                        />
                        <LoggedInRoute
                            path="/previous-quest"
                            component={PreviousQuest}
                        />
                        <LoggedInRoute
                            path="/add-students"
                            component={AddStudents}
                        />
                        <LoggedInRoute
                            path="/create-team"
                            component={CreateTeam}
                        />

                        <LoggedInRoute
                            path="/stage-1/submitted"
                            component={Stage1Submitted}
                        />

                        <LoggedInRoute
                            path="/stage-3/submitted"
                            component={Stage3Submitted}
                        />

                        <LoggedInRoute
                            path="/stage-4/submitted"
                            component={Stage4Submitted}
                        />

                        <LoggedInRoute
                            path="/stage-5/submitted"
                            component={Stage5Submitted}
                        />

                        <LoggedInRoute
                            path="/assessment"
                            component={TutorAssessment}
                        />
                        <LoggedInRoute
                            path="/team-assessment"
                            component={TutorTeamAssessment}
                        />
                        <LoggedInRoute
                            path="/tutor-guide"
                            component={TutorGuide}
                        />
                        <LoggedInRoute
                            path="/technical-guide"
                            component={TechnicalGuide}
                        />
                    </Router>
                </div>
                <Footer />
            </CurrentQuestsContext.Provider>
        </NewQuestContext.Provider>
    )
}

export default Routes
