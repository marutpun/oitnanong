
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
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
