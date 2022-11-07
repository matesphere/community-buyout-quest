import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// styles
const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: '#8A6534',
    padding: 4,
    backgroundColor: '#FFF4DB',
    fontSize: '1.25rem',
    borderRadius: 4,
}

// markup
const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "blue-404.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)
    return (
        <main style={pageStyles}>
            <title>Not found</title>
            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 style={headingStyles}>Page not found</h1>
                        <div className="blue-holder-border">
                            <div className="small-image">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                            <p style={paragraphStyles} className="small-image-holder">
                                Sorry{' '}
                                <span role="img" aria-label="Pensive emoji">
                                😔
                            </span>{' '}
                                we couldn’t find what you were looking for.
                                <br />
                                {process.env.NODE_ENV === 'development' ? (
                                    <>
                                        <br />
                                        Try creating a page in{' '}
                                        <code style={codeStyles}>src/pages/</code>.
                                        <br />
                                    </>
                                ) : null}
                                <br />
                                <Link to="/">Go back to the home page</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default NotFoundPage
