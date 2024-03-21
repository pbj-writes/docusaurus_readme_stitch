import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/readme_stitch/__docusaurus/debug/',
    component: ComponentCreator('/readme_stitch/__docusaurus/debug/', '133'),
    exact: true
  },
  {
    path: '/readme_stitch/__docusaurus/debug/config/',
    component: ComponentCreator('/readme_stitch/__docusaurus/debug/config/', 'd4b'),
    exact: true
  },
  {
    path: '/readme_stitch/__docusaurus/debug/content/',
    component: ComponentCreator('/readme_stitch/__docusaurus/debug/content/', 'be8'),
    exact: true
  },
  {
    path: '/readme_stitch/__docusaurus/debug/globalData/',
    component: ComponentCreator('/readme_stitch/__docusaurus/debug/globalData/', '131'),
    exact: true
  },
  {
    path: '/readme_stitch/__docusaurus/debug/metadata/',
    component: ComponentCreator('/readme_stitch/__docusaurus/debug/metadata/', '123'),
    exact: true
  },
  {
    path: '/readme_stitch/__docusaurus/debug/registry/',
    component: ComponentCreator('/readme_stitch/__docusaurus/debug/registry/', 'b91'),
    exact: true
  },
  {
    path: '/readme_stitch/__docusaurus/debug/routes/',
    component: ComponentCreator('/readme_stitch/__docusaurus/debug/routes/', 'cd5'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/',
    component: ComponentCreator('/readme_stitch/blog/', '8ea'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/archive/',
    component: ComponentCreator('/readme_stitch/blog/archive/', 'c11'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/first-blog-post/',
    component: ComponentCreator('/readme_stitch/blog/first-blog-post/', '3ef'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/long-blog-post/',
    component: ComponentCreator('/readme_stitch/blog/long-blog-post/', '687'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/mdx-blog-post/',
    component: ComponentCreator('/readme_stitch/blog/mdx-blog-post/', 'aec'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/tags/',
    component: ComponentCreator('/readme_stitch/blog/tags/', 'f17'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/tags/docusaurus/',
    component: ComponentCreator('/readme_stitch/blog/tags/docusaurus/', '96d'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/tags/facebook/',
    component: ComponentCreator('/readme_stitch/blog/tags/facebook/', '2fb'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/tags/hello/',
    component: ComponentCreator('/readme_stitch/blog/tags/hello/', 'b18'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/tags/hola/',
    component: ComponentCreator('/readme_stitch/blog/tags/hola/', '855'),
    exact: true
  },
  {
    path: '/readme_stitch/blog/welcome/',
    component: ComponentCreator('/readme_stitch/blog/welcome/', '536'),
    exact: true
  },
  {
    path: '/readme_stitch/markdown-page/',
    component: ComponentCreator('/readme_stitch/markdown-page/', '8bd'),
    exact: true
  },
  {
    path: '/readme_stitch/docs/',
    component: ComponentCreator('/readme_stitch/docs/', 'f97'),
    routes: [
      {
        path: '/readme_stitch/docs/',
        component: ComponentCreator('/readme_stitch/docs/', 'd56'),
        routes: [
          {
            path: '/readme_stitch/docs/',
            component: ComponentCreator('/readme_stitch/docs/', '0f9'),
            routes: [
              {
                path: '/readme_stitch/docs/category/repo-2/',
                component: ComponentCreator('/readme_stitch/docs/category/repo-2/', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/category/repo-3/',
                component: ComponentCreator('/readme_stitch/docs/category/repo-3/', '597'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/intro/',
                component: ComponentCreator('/readme_stitch/docs/intro/', '29b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/tutorial-basics/congratulations/',
                component: ComponentCreator('/readme_stitch/docs/tutorial-basics/congratulations/', 'b96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/tutorial-basics/create-a-blog-post/',
                component: ComponentCreator('/readme_stitch/docs/tutorial-basics/create-a-blog-post/', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/tutorial-basics/create-a-document/',
                component: ComponentCreator('/readme_stitch/docs/tutorial-basics/create-a-document/', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/tutorial-basics/create-a-page/',
                component: ComponentCreator('/readme_stitch/docs/tutorial-basics/create-a-page/', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/tutorial-basics/deploy-your-site/',
                component: ComponentCreator('/readme_stitch/docs/tutorial-basics/deploy-your-site/', 'db2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/tutorial-basics/markdown-features/',
                component: ComponentCreator('/readme_stitch/docs/tutorial-basics/markdown-features/', '7bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/tutorial-extras/manage-docs-versions/',
                component: ComponentCreator('/readme_stitch/docs/tutorial-extras/manage-docs-versions/', '207'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/readme_stitch/docs/tutorial-extras/translate-your-site/',
                component: ComponentCreator('/readme_stitch/docs/tutorial-extras/translate-your-site/', '146'),
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
    path: '/readme_stitch/',
    component: ComponentCreator('/readme_stitch/', '62a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
