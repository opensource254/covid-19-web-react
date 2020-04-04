module.exports = {
    siteMetadata: {
        title: `Global COVID-19 Tracker`,
        description: `Track coronavirus status globally - Get country-wise value in real-time. And you stay safe!`,
        author: `Rakesh Mandal`,
        twittercreator: `@rkalways_`,
        socialthumb: `https://i.ibb.co/QfD7VC2/og.png?v=1`,
    },

    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `COVID-19 Tracker`,
                short_name: `COVID-19 Tracker`,
                description: `Global Coronavirus Outbreak Tracker`,
                icon: `src/images/favicon.png`,
                start_url: `/`,
                background_color: `#EFF1F6`,
                theme_color: `#02d587`,
                display: `standalone`,
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                workboxConfig: {
                    globPatterns: [`**/*`],
                },
            },
        },
    ],
}
