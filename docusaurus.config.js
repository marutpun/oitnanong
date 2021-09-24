const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'โรงเรียนวัดนาหนอง',
    tagline: 'แหล่งรวมบริการและข้อมูลที่ดีที่สุดเกี่ยวกับโรงเรียน',
    url: 'https://watnanong.netlify.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'สำนักงานเขตพื้นที่การศึกษาประถมศึกษาราชบุรี เขต 1',
    projectName: 'oitnanong',

    customFields: {
      fullTitle: 'โรงเรียนวัดนาหนอง (วิธานราษฎร์อนุกูล)',
      address: 'หมู่ 2 ตำบลดอนแร่ อำเภอเมือง จังหวัดราชบุรี 70000',
      bannerImg: 'unsplash-teamwork.jpg',
      fbId: 102432438057537,
    },

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/marutpun/oitnanong/edit/main/website/',
          },
          blog: false,
          theme: {
            customCss: [
              require.resolve('./src/css/foundation.min.css'),
              require.resolve('./src/css/custom.css'),
            ],
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'โรงเรียนวัดนาหนอง',
          logo: {
            alt: 'โรงเรียนวัดนาหนอง',
            src: 'img/logo-obec.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'OIT',
            },
            {
              to: '/people',
              label: 'บุคลากร',
              position: 'left',
            },
            {
              to: '/contact',
              label: 'ติดต่อ',
              position: 'left',
            },
          ],
        },
        footer: {
          copyright: `&copy; ${new Date().getFullYear()} Wat Na Nong School. All Rights Reserved.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        colorMode: {
          disableSwitch: true,
        },
      }),
  }
);
