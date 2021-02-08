const config = require('./config/siteConfig');
require('dotenv').config();

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    author: config.author,
    siteUrl: `${config.siteUrl}${config.pathPrefix}`,
    siteLanguage: config.siteLanguage,
    siteTitleAlt: config.siteTitleAlt,
    title: config.siteTitle,
    description: config.siteDescription,
    image: `${config.siteUrl}${config.pathPrefix}/favicons/logo.png`,
    datePublished: config.datePublished,
    copyrightYear: config.copyrightYear,
    twitterUsername: config.twitterUserName,
    // fbAppId: config.siteFBAppID,
    copyright: config.copyright,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-instagram-embed`,
    `gatsby-transformer-remark`,
    `gatsby-remark-embedder`,
    `gatsby-plugin-social9-socialshare`,
    `gatsby-plugin-twitter`,
    `gatsby-remark-autolink-headers`,
    {
      resolve: 'gatsby-plugin-social9-socialshare',
      options: {
        id: 's9-sdk',
        async: true,
        defer: true,
        content: '71eccd5bfc88461da6c6c6dd583ce860',
        src: 'socialshare.min.js',
      },
    },
    {
      resolve: `gatsby-remark-table-of-contents`,
      options: {
        exclude: 'Table of Contents',
        tight: false,
        fromHeading: 1,
        toHeading: 6,
        className: 'table-of-contents',
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
          },
        },
        // Optional filter to limit indexed nodes
        // filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: ['/archives', { regex: '^/archives' }],
        // excludePaths: ['/blog/beep-beep-lettuce'],
        height: 5,
        botttom: 0,
        prependToBody: false,
        color: `#00b0ff`,
        footerHeight: 500,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                Instagram: {
                  // accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                  accessToken: '2819963398283119|Rr84keMtM0ZLS8nflIhu76q3ulM',
                },
              },
            },
          },
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 680,
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                info: {
                  classes: 'info',
                },
                warning: {
                  classes: 'warning',
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `auto-link`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix === '' ? '/' : config.pathPrefix,
        background_color: `#282c35`,
        theme_color: `#282c35`,
        display: `standalone`,
        icon: config.siteLogo,
        icons: [
          {
            src: `favicons/logo-192x192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `favicons/logo-512x512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            };
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.siteGATrackingID,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
              title
              description
              site_url: siteUrl
              copyright
              siteLanguage
              language: siteLanguage
              datePublished
              pubDate: datePublished
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  ...edge.node.frontmatter,
                  date: edge.node.frontmatter.date,
                  categories: edge.node.frontmatter.tags,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }, { author: config.author }],
                };
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                      cover {
                        relativePath
                      }
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss,
            title: config.siteTitle,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
