import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import {
    StudentHeader,
    StudentFooter,
    Intro,
    InfoBlock,
} from '@community-land-quest/shared-ui'

import '../scss/index.scss'

const IntroductionPage = ({
    data: {
        graphCmsInfo: { title, intro, infoBlock },
    },
}) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Community Land Quest - Introduction</title>
        </Helmet>

        <main className="the-quest homepage">
            <StudentHeader headerText="Community Land Quest" />
            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                            {title}
                        </h2>

                        <Intro item={intro} />

                        <div className="form-holder-border">
                            <InfoBlock items={infoBlock} />
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>

                <div className="row">
                    <div className="col-lg-12"></div>
                </div>
                <Link to="/student/team-hub" className="btn-solid-reg">
                    Go to Team Hub
                </Link>
            </section>

            <StudentFooter />
        </main>
    </>
)

export default IntroductionPage

export const query = graphql`
    query IntroductionQuery {
        graphCmsInfo(slug: { eq: "introduction" }) {
            title
            intro {
                raw
            }
            infoBlock {
                raw
            }
        }
    }
`
