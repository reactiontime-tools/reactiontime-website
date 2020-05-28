module.exports = {
  siteMetadata: {
    title: 'ReactionTime.app',
    author: 'Tony Shen, Jimmy Phong, Christian Hubbard, Jae Myung',
    description: 'A simpler way to write tests for Concurrent Mode',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
  pathPrefix: "/reactiontime-website"
}
