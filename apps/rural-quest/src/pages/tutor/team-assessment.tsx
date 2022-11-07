import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import { Breadcrumbs } from '../../components/common/Breadcrumbs'

const TutorTeamAssessment = () => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Team Assessment</title>
            <meta name="description" content="Team Assessment" />
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
                    currentDisplayName="Team Assessment"
                />
                <div className="row">
                    <div className="col-lg-9">
                        <h2 className="sm-type-drum sm-type-drum--medium mt-4 mb-4">
                            Teamwork Assessment of the Community Land Buyout
                            QUEST
                        </h2>

                        <p className="sm-type-lead mb-4">
                            Feedback to the teams is provided by the teacher
                            throughout the QUEST, however the teacher may wish
                            to carry out a summative assessment of this aspect
                            of the work. The following provides assessment
                            criteria on which to provide summative feedback to
                            the groups. It is quick to do and provides a score
                            out of 50. Alternatively, or in addition, it can be
                            completed in the form of comments which can then be
                            shared with the groups.
                        </p>

                        <div className="table table-tutorassess">
                            <div className="heading">
                                <div className="cell">
                                    <p>Teamwork Assessment Criteria</p>
                                </div>
                                <div className="cell">
                                    <p>Mark / 5</p>
                                </div>
                                <div className="cell">
                                    <p>Comment (optional)</p>
                                </div>
                            </div>

                            <div className="roww">
                                <div className="cell">
                                    1. You have listened carefully to one
                                    another.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    2. You have devised/used protocols for how
                                    to ensure that everyone is heard.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    3. You have recognised the strengths of all
                                    in the group and put these to good use.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    4. You have managed your time well and paid
                                    attention to time constraints.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    5. You have behaved respectfully and
                                    politely to one another.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    6. You have responded well to feedback and
                                    used it to inform the next stages.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    7. Where disagreement or obstacles have
                                    arisen, you have worked constructively to
                                    find resolution.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    8. You have ensured that everyone is
                                    included in every task.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    9. You have taken care of one another and
                                    ensured that everyone is safe.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                            <div className="roww">
                                <div className="cell">
                                    10. You have approached tasks with a
                                    positive attitude.
                                </div>
                                <div className="cell"></div>
                                <div className="cell"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="sm-type-amp">
                    <Link to="/tutor/hub">Back to Tutor Hub</Link>
                </p>
            </section>
        </main>
    </>
)

export default TutorTeamAssessment
