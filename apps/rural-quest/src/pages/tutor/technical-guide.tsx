import React from 'react'
import { Helmet } from 'react-helmet'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

import { Breadcrumbs } from '../../components/common/Breadcrumbs'

// import signinGIF from '../../gif/tutor-signin.gif'
// import signoutGIF from '../../gif/tutor-signout.gif'

const TechnicalGuide = () => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Tutor Guide</title>
            <meta name="description" content="Technical guide" />
        </Helmet>

        <main className="the-quest">
            <section className="container" id="main">
                <Breadcrumbs
                    previous={[
                        {
                            displayName: 'Tutor Hub',
                            url: '/tutor/hub',
                        },
                    ]}
                    currentDisplayName="Technical guide"
                />
                <div className="row">
                    <div className="col-lg-9">
                        <h2 className="sm-type-drum sm-type-drum--medium mt-4 mb-4">
                            COMMUNITY LAND QUEST - TECHNICAL GUIDE
                        </h2>

                        <p className="sm-type-lead mb-4">
                            The following serves as a reference for tutor use of
                            the Community Land Quest. It covers all potential
                            actions required to be taken during normal
                            completion of a Quest (n.b. the term 'Quest' used
                            here refers to a number of teams, consisting of 4 or
                            more students, contemporaneously starting, working
                            through and completing all tasks).
                        </p>

                        <p className="sm-type-lead mb-4">
                            For certain tasks, such as the student onboarding
                            (new Quest), it may be helpful to have this guide
                            open in a separate browser tab, which you can do by
                            clicking{' '}
                            <a
                                href="https://www.community-land.quest/tutor/technical-guide"
                                target="_blank"
                                rel="external"
                            >
                                here
                            </a>
                            .
                        </p>

                        <Accordion allowZeroExpanded>
                            <AccordionItem className="side-grey">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Sign In
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="sm-type-lead mb-4">
                                        Upon initially accessing the quest
                                        you'll be presented with a splash
                                        screen. Click the 'SIGN IN' button and
                                        enter your login details (these should
                                        have been provided to you). Then click
                                        'SIGN IN' again.
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        Once this is done you will be able to
                                        navigate to the 'Tutor Hub' as shown.
                                    </p>

                                    {/* <img className="mb-4" src={signinGIF} /> */}
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className="side-grey">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Sign Out
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="sm-type-lead mb-4">
                                        If you are using a shared computer or
                                        will be leaving your machine unattended
                                        for any length of time, you may wish to
                                        sign out to prevent unwarranted access
                                        to your area of the system.{' '}
                                        <b>
                                            Simply closing your browser will not
                                            achieve this!
                                        </b>
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        To do this, simply hit the 'SIGN OUT'
                                        button, which can be found in the footer
                                        of any page.
                                    </p>

                                    {/* <img className="mb-4" src={signoutGIF} /> */}
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className="side-grey">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Starting a New Quest (Student
                                        Onboarding)
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="sm-type-lead mb-4">
                                        To begin a new Quest, click the 'Start a
                                        new Quest' button. This will then take
                                        you to the 'Add Students' page.
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        <b>Add Students</b>
                                        <br />
                                        Here you should fill out the first name,
                                        last name and email for each student who
                                        will be taking part in this Quest. This
                                        can be achieved by clicking 'Add more
                                        names' until the number of rows visible
                                        matches the number of students.
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        Click the 'X' button if you accidentally
                                        add any additional rows.
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        When done, click 'Submit names', check
                                        that the number of students in the
                                        prompt is correct, then click 'Cancel'
                                        if not to go back and correct this, or
                                        click 'Yes, add students' to continue.
                                    </p>

                                    {/* <p>*** GIF HERE ***</p> */}

                                    <p className="sm-type-lead mb-4">
                                        <b>Create Teams</b>
                                        <br />
                                        You are now able to create the teams and
                                        assign students to them. It will help if
                                        you have already decided the team
                                        allocations previously, as you will need
                                        to know the number of teams required
                                        before performing this step.{' '}
                                        <b>
                                            If at any point you realise you have
                                            made an error in the 'add students'
                                            step, use the link below the header
                                            to go back and rectify this.
                                        </b>
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        Add a team by typing the team name into
                                        the box labelled 'Name' (in the section
                                        labelled 'STEP 1'), and clicking 'Add
                                        team'. You should see the newly created
                                        team appear in the 'Teams' panel on the
                                        right. Repeat this process until you
                                        have the required number of teams.
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        Next, in the section labelled 'STEP 2'
                                        you should see all of the students you
                                        added in the previous step. Assign each
                                        of these to their team by using the
                                        drop-down next to each name (where you
                                        should see a list of all team names you
                                        have created).{' '}
                                        <b>
                                            Remember that each team must
                                            comprise at least 4 individuals!
                                        </b>
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        Once done, click 'Create teams', check
                                        the number of teams is correct, then
                                        cancel or continue as appropriate. Click
                                        through the prompts to start the Quest!
                                    </p>

                                    {/* <p>*** GIF HERE ***</p> */}

                                    <p className="sm-type-lead mb-4">
                                        You are free to create as many Quests to
                                        run simultaneously as are required.
                                        <br />
                                        <b>
                                            n.b. if at any point during these
                                            steps you would prefer to cancel new
                                            Quest creation altogether, just
                                            click the 'Tutor Hub' link in the
                                            header and you will be returned to
                                            the Hub.
                                        </b>
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className="side-grey">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Current Quests
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="sm-type-lead mb-4">
                                        Once you have one or more active Quests
                                        in play, you will be able to access the
                                        'Current Quests' area. This is where you
                                        will control the progression of the
                                        teams looking to complete a Quest.
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        If you have more than one active Quest
                                        at any one point, you will be able to
                                        switch between them using the tabs near
                                        the top of the page. Each tab will show
                                        a list of the teams for that Quest.
                                        Click on a team name to expand or
                                        collapse that team's display area.
                                    </p>

                                    {/* <p>*** GIF HERE ***</p> */}

                                    <h3>Team Display</h3>
                                    <p className="sm-type-lead mb-4">
                                        <b>Team members panel</b>
                                        <br />
                                        This panel displays the students who are
                                        part of this team. Once the team
                                        completes Stage 2, this panel will
                                        update to show the 'steering group'
                                        positions the team has selected for each
                                        student.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        You are also able to display the
                                        username and passwords for each of the
                                        team members, to allow you to provide
                                        these to any students who lose track of
                                        their credentials.
                                    </p>

                                    {/* <p>*** GIF HERE ***</p> */}

                                    <p className="sm-type-lead mb-4">
                                        <b>Development options panel</b>
                                        <br />
                                        This panel displays the development
                                        option longlist selected by the team
                                        during Stage 3, and indeed only becomes
                                        visible at this point. It will update
                                        during Stage 4 to show a green tick icon
                                        next to the options selected for the
                                        team's shortlist.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        <b>Quest stages</b>
                                        <br />
                                        Each Quest stage is shown, along with
                                        the current status of the stage.
                                        Additionally it is from here that you
                                        will be able to perform the actions
                                        required to assess the team's
                                        performance in each stage and allow them
                                        to progress. See the 'stage actions'
                                        section for help with this.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className="side-grey">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Stage Actions
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="sm-type-lead mb-4">
                                        The actions available to you for a stage
                                        are dependent on the status of that
                                        stage.
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        <b>Unlock stage</b>
                                        <br />
                                        Your first step for each stage is to
                                        unlock it, which will allow the team to
                                        access it from the Team Hub. You can do
                                        this by clicking 'Unlock stage'.{' '}
                                    </p>

                                    <p className="sm-type-lead mb-4">
                                        It is possible to unlock any stage at
                                        any point, but we would suggest for the
                                        optimal Quest experience you allow a
                                        stage to be completed before unlocking
                                        the next.
                                    </p>

                                    {/* <p>*** GIF HERE ***</p> */}

                                    <p className="sm-type-lead mb-4">
                                        <b>View submitted work</b>
                                        <br />
                                        Available once work has been submitted
                                        by the team, clicking this link allows
                                        you to view this work and provied
                                        feedback. See the 'view work and provide
                                        feedback' section for more information.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        There are a few stages where this option
                                        is not available, which indicates that
                                        completion of the task will not result
                                        in any submittable work.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        <b>Re-enable submission</b>
                                        <br />
                                        Upon initial submission of work for a
                                        stage, further submissions are disabled
                                        for the team. If, upon inspecting the
                                        work, you feel it requires changes
                                        before the team can progress, clicking
                                        this link will allow the team to make
                                        further changes and resubmit.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        The team will be able to see any
                                        feedback you have provided while they
                                        are making changes and resubmitting.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        <b>Complete stage</b>
                                        <br />
                                        Clicking this link will update the stage
                                        to 'completed' status, signifying that
                                        you are satisfied with the team's work
                                        for this stage. This is then made
                                        visible to the team from the 'Team Hub',
                                        along with your feedback. You should do
                                        this before unlocking the next stage.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className="side-grey">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        View Work and Provide Feedback
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="sm-type-lead mb-4">
                                        After clicking 'View submitted work',
                                        you will be taken to a page displaying
                                        the team's submitted work for that
                                        stage.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        Each stage's work will necessarily be
                                        displayed differently, due to the
                                        differing tasks, but each should be
                                        fairly self-explanatory and will reflect
                                        what the team saw when attempting it.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        After reviewing the work, you are able
                                        to provide feedback in the 'Your
                                        feedback' section located below it. ***
                                        DO THIS BIT ***
                                    </p>

                                    {/* <p>*** GIF HERE ***</p> */}

                                    <p className="sm-type-lead mb-4">
                                        You are also able to update any feedback
                                        provided, by clicking 'Update Feedback'
                                        and repeating the above step. This
                                        should be useful when assessing
                                        resubmitted work.
                                    </p>

                                    {/* <p>*** GIF HERE ***</p> */}
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className="side-grey">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Complete Quest
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="sm-type-lead mb-4">
                                        Once you are satisfied that all teams
                                        have completed the Quest to an
                                        acceptable level, click 'Complete
                                        Quest'.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        You will be shown a number of 'tutor
                                        reflection' questions; it would be
                                        extremely helpful to us (the developers)
                                        if you could provide as much detail as
                                        possible.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        Once done, click 'Submit feedback and
                                        complete Quest' to update this Quest's
                                        status to 'complete'. This will cause it
                                        to move from 'Current Quests' to
                                        'Previous Quests' in your 'Tutor Hub'.
                                    </p>

                                    {/* <p>*** GIF HERE ***</p> */}
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className="side-grey">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Previous Quests
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="sm-type-lead mb-4">
                                        It is possible to review previous Quests
                                        by clicking 'View' next to the
                                        appropriate Quest in the 'Tutor Hub'.
                                    </p>
                                    <p className="sm-type-lead mb-4">
                                        This will take you to a view very
                                        similar to that of 'Current Quests',
                                        where you will be able to access any
                                        work completed by teams that took part
                                        in the selected Quest.
                                    </p>

                                    {/* <p>*** GIF HERE ***</p>1 */}
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </main>
    </>
)

export default TechnicalGuide
