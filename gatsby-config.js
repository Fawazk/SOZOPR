module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        fonts:[
          `Futura PT`
        ]
      },
    },
  ],
}
