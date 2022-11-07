import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Breadcrumbs } from '../../components/common/Breadcrumbs'

const TutorAssessment = () => {
    const data2 = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "learner.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
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
                <title>Assessment</title>
                <meta name="description" content="Assessment" />
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
                        currentDisplayName="Assessment"
                    />
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4 mb-4">
                                Assessment of the Community Land Quest
                            </h2>

                            <p className="sm-type-lead mb-4">
                                The Quest is an interdisciplinary learning
                                project that lends itself to assessment of the
                                Four Capacities of Curriculum for Excellence.
                            </p>
                            <p className="sm-type-lead mb-4">
                                Throughout the Quest, the pupils work
                                independently of the teacher and must work
                                cooperatively with each other to successfully
                                navigate each stage. This therefore provides an
                                ideal opportunity for the teacher to observe how
                                the individuals are learning, what skills they
                                are developing and how they are performing as a
                                member of the group.
                            </p>
                            <p className="sm-type-lead mb-4">
                                ‘The child or young person is at the centre of
                                learning provision. The purpose of the
                                curriculum is to enable the child or young
                                person to develop the ‘four capacities’. The
                                headings of the four capacities serve well as a
                                memorable statement of purpose for the
                                curriculum, but the indicative descriptions
                                underneath the headings are probably even more
                                important in terms of understanding the
                                attributes and capabilities which contribute to
                                the capacities.’ (Building the Curriculum 3: A
                                framework for Learning and Teaching:
                                https://education.gov.scot/Documents/btc3.pdf)
                            </p>

                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data2.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4 mb-2">
                                Assessment of the Students taking the Quest
                            </p>
                            <p className="sm-type-lead mb-4">
                                The attributes and capabilities can be used as
                                an assessment instrument and therefore can be
                                used to assess a young person’s success within
                                the Quest. It is suggested that the following
                                grid could be used as a record of each
                                individual’s achievements. A grade could be
                                given, A-E for example, or a comment, or both,
                                for each attribute and capability.
                            </p>

                            <div className="table table-tutor">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Successful Learners</p>
                                    </div>
                                    <div className="cell">
                                        <p>Grade and/or comment</p>
                                    </div>
                                </div>
                                <div className="roww rowwbg">
                                    <div className="cell">with</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • enthusiasm and motivation for learning
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • determination to reach high standards
                                        of achievement
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • openness to new thinking and ideas
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww rowwbg">
                                    <div className="cell">and able to</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • use literacy, communication and
                                        numeracy skills
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • use technology for learning
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • think creatively and independently
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • learn independently and as part of a
                                        group
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • make reasoned evaluations
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • link and apply different kinds of
                                        learning in new situations
                                    </div>
                                    <div className="cell"></div>
                                </div>
                            </div>

                            <div className="table table-tutor">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Confident Individuals</p>
                                    </div>
                                    <div className="cell">
                                        <p>Grade and/or comment</p>
                                    </div>
                                </div>
                                <div className="roww rowwbg">
                                    <div className="cell">with</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • enthusiasm and motivation for learning
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">• self respect</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • a sense of physical, mental and
                                        emotional wellbeing
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • secure values and belief
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">• ambition</div>
                                    <div className="cell"></div>
                                </div>

                                <div className="roww rowwbg">
                                    <div className="cell">and able to</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • relate to others and manage themselves
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • pursue a healthy and active lifestyle
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">• be self-aware</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • develop and communicate their own
                                        beliefs and view of the world
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • live as independently as they can
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • assess risk and take informed
                                        decisions
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • achieve success in different areas of
                                        activity
                                    </div>
                                    <div className="cell"></div>
                                </div>
                            </div>

                            <div className="table table-tutor">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Responsible Citizens</p>
                                    </div>
                                    <div className="cell">
                                        <p>Grade and/or comment</p>
                                    </div>
                                </div>
                                <div className="roww rowwbg">
                                    <div className="cell">with</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • respect for others
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • commitment to participate responsibly
                                        in political, economic, social and
                                        cultural life
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww rowwbg">
                                    <div className="cell">and able to</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • develop knowledge and understanding of
                                        the world and Scotland’s place in it
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • understand different beliefs and
                                        cultures
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • make informed choices and decisions
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • evaluate environmental, scientific and
                                        technological issues
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • develop informed, ethical views of
                                        complex issues
                                    </div>
                                    <div className="cell"></div>
                                </div>
                            </div>

                            <div className="table table-tutor">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Effective Contributors</p>
                                    </div>
                                    <div className="cell">
                                        <p>Grade and/or comment</p>
                                    </div>
                                </div>
                                <div className="roww rowwbg">
                                    <div className="cell">with</div>
                                    <div className="cell"></div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        • an enterprising attitude
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">• resilience</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">• self-reliance</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww rowwbg">
                                    <div className="cell">and able to</div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • communicate in different ways and in
                                        different settings
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • work in partnership and in teams
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • take the initiative and lead
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • apply critical thinking in new
                                        contexts
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        • create and develop
                                    </div>
                                    <div className="cell"></div>
                                </div>
                                <div className="roww">
                                    <div className="cell">• solve problems</div>
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
}

export default TutorAssessment
