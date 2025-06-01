import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-website/markdown-page',
    component: ComponentCreator('/my-website/markdown-page', '773'),
    exact: true
  },
  {
    path: '/my-website/docs',
    component: ComponentCreator('/my-website/docs', 'faa'),
    routes: [
      {
        path: '/my-website/docs',
        component: ComponentCreator('/my-website/docs', 'a5c'),
        routes: [
          {
            path: '/my-website/docs',
            component: ComponentCreator('/my-website/docs', 'af8'),
            routes: [
              {
                path: '/my-website/docs/category/content-writing-samples',
                component: ComponentCreator('/my-website/docs/category/content-writing-samples', '92d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/category/technical-writing-samples',
                component: ComponentCreator('/my-website/docs/category/technical-writing-samples', '14f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/content-writing-samples/greenland-shark',
                component: ComponentCreator('/my-website/docs/content-writing-samples/greenland-shark', 'e6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/content-writing-samples/latitude-and-longitude',
                component: ComponentCreator('/my-website/docs/content-writing-samples/latitude-and-longitude', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/content-writing-samples/ocean-myths',
                component: ComponentCreator('/my-website/docs/content-writing-samples/ocean-myths', '794'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/content-writing-samples/renewable-energy',
                component: ComponentCreator('/my-website/docs/content-writing-samples/renewable-energy', '138'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/content-writing-samples/three-datums',
                component: ComponentCreator('/my-website/docs/content-writing-samples/three-datums', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/intro',
                component: ComponentCreator('/my-website/docs/intro', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/technical-writing-samples/AC manual',
                component: ComponentCreator('/my-website/docs/technical-writing-samples/AC manual', '685'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/technical-writing-samples/how-to-sample',
                component: ComponentCreator('/my-website/docs/technical-writing-samples/how-to-sample', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/technical-writing-samples/inclusivity',
                component: ComponentCreator('/my-website/docs/technical-writing-samples/inclusivity', '0a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/technical-writing-samples/manual-sample',
                component: ComponentCreator('/my-website/docs/technical-writing-samples/manual-sample', '940'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/my-website/',
    component: ComponentCreator('/my-website/', 'e41'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
