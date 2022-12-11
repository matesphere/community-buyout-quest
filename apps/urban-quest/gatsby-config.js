module.exports = {
    siteMetadata: {
        title: 'buy-out',
    },
    flags: {},
    jsxRuntime: 'automatic',
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-pnpm',
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-smoothscroll',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        'gatsby-plugin-typescript',
        'gatsby-plugin-netlify',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'GA123456',
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon-16x16.png',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-plugin-webfonts',
            options: {
                fonts: {
                    google: [
                        {
                            family: 'Ruda',
                            variants: ['500', '700', '900'],
                            fontDisplay: 'swap',
                            subsets: ['latin-ext'],
                        },
                        {
                            family: 'Roboto Slab',
                            variants: ['500', '700'],
                            fontDisplay: 'swap',
                            subsets: ['latin-ext'],
                        },
                    ],
                },
                usePreconnect: true,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'Content',
                fieldName: 'content',
                url: 'https://api-eu-west-2.hygraph.com/v2/clal11y521clk01tag42h7qf9/master',
            },
        },
        {
            resolve: 'gatsby-source-graphcms',
            options: {
                endpoint:
                    'https://api-eu-west-2.hygraph.com/v2/clal11y521clk01tag42h7qf9/master',
                locales: ['en', 'gd'],
                fragmentsPath: 'src/gql/graphcms-fragments',
                queryConcurrency: 1,
            },
        },
        {
            resolve: 'gatsby-plugin-create-client-paths',
            options: {
                prefixes: ['/student/*', '/tutor/*'],
            },
        },
        {
            resolve: 'gatsby-plugin-newrelic',
            options: {
                config: {
                    instrumentationType: 'proAndSPA',
                    accountId: '3484956',
                    trustKey: '3484956',
                    agentID: '368004654',
                    licenseKey: process.env.GATSBY_NEW_RELIC_LICENSE_KEY,
                    applicationID: '368004654',
                    beacon: 'bam.eu01.nr-data.net',
                    errorBeacon: 'bam.eu01.nr-data.net',
                },
            },
        },
    ],
}
