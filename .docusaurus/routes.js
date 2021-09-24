
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact','244'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/people',
    component: ComponentCreator('/people','6da'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','665'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/OITNo10/sub1',
        component: ComponentCreator('/docs/OITNo10/sub1','faf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/OITNo10/sub2',
        component: ComponentCreator('/docs/OITNo10/sub2','15a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/OITNo9/sub1',
        component: ComponentCreator('/docs/OITNo9/sub1','117'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/OITNo9/sub2',
        component: ComponentCreator('/docs/OITNo9/sub2','956'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/OITNo9/sub3',
        component: ComponentCreator('/docs/OITNo9/sub3','997'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/OITNo9/sub4',
        component: ComponentCreator('/docs/OITNo9/sub4','16a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/OITNo9/sub5',
        component: ComponentCreator('/docs/OITNo9/sub5','6d4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
