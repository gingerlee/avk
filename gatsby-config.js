module.exports = {
  siteMetadata: {
    description: "Portfolio site for Alex V Kretschmer, Senior Data Analyst at Adidas",
    locale: "en",
    title: "Alex V Kretschmer — Senior Data Analyst",
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
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '🛸',
        legacy: true
      }
    }
  ],
}