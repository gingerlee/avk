module.exports = {
  siteMetadata: {
    description: "Portfolio site for Alex V Kretschmer, Senior Data Analyst at Adidas",
    locale: "en",
    title: "Alex v Kretschmer — Senior Data Analyst",
    formspreeEndpoint: "https://formspree.io/f/mvodlgkv",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'content/images/space.png'
      }
    }
  ],
}