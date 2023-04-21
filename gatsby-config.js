/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require("path");
module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `Gatsby-Immobilien`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: [path.join(__dirname, "src", "assets")],
        components: path.join(__dirname, "src", "components"),
        helpers: path.join(__dirname, 'src', 'helpers'),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": "dlPhTF-pQf9pmV3suIAyFGj_wdxQKqj-eTp97u3qbco",
        "spaceId": "fhon8lg5vg0c"
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/images/icon.png"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "montserrat\:300,500,700",
          "Lato\:300,400,900"
        ],
        display: 'swap'
      }
    }]
};