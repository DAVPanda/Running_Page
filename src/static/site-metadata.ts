interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'LYX Running Page',
  siteUrl: 'https://davpanda.github.io/Running_Page/',
  logo: 'https://i.imgur.com/A2DzEyn.jpeg',
  description: 'Personal Running Records',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://www.bing.com',
    },
    {
      name: 'About',
      url: 'https://www.bing.com',
    },
  ],
};

export default data;
