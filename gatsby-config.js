module.exports = {
  siteMetadata: {
    description:
      'Portfolio site for Alex Vincent Kretschmer — Senior Data Analyst at Atlassian',
    locale: 'en',
    title: 'Alex Kretschmer — Senior Data Analyst',
    formspreeEndpoint: 'https://formspree.io/f/mvodlgkv',
  },
  plugins: [
    {
      resolve: '@wkocjan/gatsby-theme-intro',
      options: {
        basePath: '/',
        contentPath: 'content/',
        showThemeLogo: false,
        theme: 'classic',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'content/images',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'content/images/space.jpg',
      },
    },
  ],
};
