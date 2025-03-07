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
  siteTitle: 'LYX\'S Running Page',
  siteUrl: 'https://davpanda.github.io/Running_Page/',
  logo: 'https://i.imgur.com/A2DzEyn.jpeg',
  description: 'Personal Running Records',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/yihong0618/running_page',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
