import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import { StudentHeader, StudentFooter } from '@community-land-quest/shared-ui'

import '../scss/index.scss'

const AcknowledgementsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Information - Community</title>
            </Helmet>
            <main className="the-quest">
                <StudentHeader headerText="Information" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">
                                        Team Hub
                                    </Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    Creators and Acknowledgements
                                </span>
                            </div>
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4 mb-2">
                                Creators
                            </h2>
                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                Developers
                            </p>
                            <ul>
                                <li className="sm-type-guitar mb-2">
                                    Dave Carter – MateSphere Digital Consulting
                                </li>
                                <li className="sm-type-guitar mb-2">
                                    Stuart Hull – MateSphere Digital Consulting
                                </li>
                            </ul>
                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                Author
                            </p>
                            <ul>
                                <li className="sm-type-guitar mb-2">
                                    Steve Carter
                                </li>
                            </ul>

                            <h2 className="sm-type-drum sm-type-drum--medium mt-4 mb-2">
                                Acknowledgements
                            </h2>
                            <ul>
                                <li className="sm-type-guitar mb-2">
                                    Emma Margrett (Community Land Scotland)
                                </li>
                                <li className="sm-type-guitar mb-2">
                                    Heather Yearwood (Community Land Scotland)
                                </li>
                                <li className="sm-type-guitar mb-2">
                                    Carey Doyle (Community Land Scotland)
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <StudentFooter />
            </main>
        </>
    )
}

export default AcknowledgementsPage
