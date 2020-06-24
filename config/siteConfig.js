const config = {
  author: 'Teeaarbee', // Site owner
  siteTitle: 'Blog by Teeaarbee | Teeaarbee.com', // Site title.
  siteTitleShort: 'Blog by Teeaarbee', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Blog by Teeaarbee', // Alternative site title for SEO.
  siteLanguage: 'en', // Site language.
  siteDescription:
    "Hi! I am TRB. I'm a wannabe Blogger, Influencer, Businessman, Video editor and also an Artist. I'm known as Teeaarbee to the world of internet. Visit my blog and enjoy reading.", // Website description used for RSS feeds/meta description tag.
  siteLogo: 'static/favicons/logo.png', // Logo used for manifest.
  siteUrl: 'https://blog.teeaarbee.com.', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: '/rss.xml', // Path to the RSS file.
  // siteFBAppID: '214355523020609', // FB Application ID for using app insights
  siteGATrackingID: 'UA-168983239-1', // Tracking code ID for google analytics.
  disqusShortname: 'teeaarbee', // Disqus shortname.
  twitterUserName: 'Teeaarbee', // twitter creator for SEO
  datePublished: '2019-12-08', // for SEO
  copyrightYear: '2020', // for SEO
  postsPerPage: 4, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: 'Discord',
      url: 'https://discord.gg/PavaKth',
      iconClassName: 'fab fa-discord',
    },
    {
      label: 'mail',
      url: 'mailto:contact@teeaarbee.com',
      iconClassName: 'fa fa-envelope',
    },
    {
      label: 'Youtube',
      url: 'https://www.youtube.com/teeaarbee?ref=blog.teeaarbee.com',
      iconClassName: 'fab fa-youtube',
    },
    {
      label: 'Website',
      url: 'https://www.teeaarbee.com/?ref=blog.teeaarbee.com',
      iconClassName: 'fas fa-globe',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/teeaarbee/?ref=blog.teeaarbee.com',
      iconClassName: 'fab fa-facebook',
    },
    {
      label: 'Twitter',
      url: 'https://www.twitter.com/teeaarbee?ref=blog.teeaarbee.com',
      iconClassName: 'fab fa-twitter-square',
    },
    {
      label: 'instagram',
      url: 'https://www.instagram.com/teeaarbee/?ref=blog.teeaarbee.com',
      iconClassName: 'fab fa-instagram',
    },
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: 'Archives',
      url: '/archives',
      iconClassName: 'fa fa-book-open',
    },
    {
      label: 'Categories',
      url: '/categories',
      iconClassName: 'fa fa-list-alt',
    },
    {
      label: 'About',
      url: '/about',
      iconClassName: 'fa fa-address-card',
    },
    {
      label: 'Newsletter',
      url: '/Newsletter',
      iconClassName: 'fa fa-envelope',
    },
  ],
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
