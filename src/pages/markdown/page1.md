---
path: "/page1"
date: "2017-11-07"
title: "About"
---

Deze site is gemaakt met behulp van de static site generator Gatsby.

#Installeren en opstarten van Gatsby 

We beginnen met het installeren van de Gatsby CLI door het onderstaande commando in de console uit te voeren. 

```
npm install -g gatsby-cli
```

Wanneer dit geïnstalleerd is creëren we in de gewenste folder een nieuwe site.

```
gatsby new gatsby-site
```

Eens je dan naar de plek bent genavigeerd waar de nieuwe site staat kun je de development server starten. 

```
gatsby develop
```

Gatsby zal dan vervolgens een live development omgeving creëren die beschikbaar is in de browser via het adres `localhost:8000`

#Code Gatsby-project

Wanneer je Gatsby succesvol hebt geïnstalleerd zorgt dit voor een correct framework waar je zelf dus wijzigingen zult moeten aanbrengen. 

##gatsby-browser

Dit is de inhoud van het `gatsby-browser.js` bestand:

```javascript
import "./src/styles/global.css"
require("prismjs/themes/prism-funky.css")
```

##gatsby-config

Dit is de inhoud van het `gatsby-config.js` bestand:

```javascript
module.exports = {
  pathPrefix: "/04-ssg-milangoossens",
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `CSSE2 - Opdracht 04 - SSG`,
    author: `milan goossens`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages/markdown`,
      name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            
            classPrefix: "language-",
            
            inlineCodeMarker: null,
           
            aliases: {},
            
            showLineNumbers: false,
            
            noInlineHighlight: false,
          },
        },
      ],
    },
  },
]
  
}
```

##gatsby-browser

Dit is de inhoud van het `gatsby-node.js` bestand:

```javascript
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
```

#Opmaak

Voor de opmaak van de site maak je gebruik van javascript en css bestanden.
Deze bestanden plaats je in de `src/components` map.


