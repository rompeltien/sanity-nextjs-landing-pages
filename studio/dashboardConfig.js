export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df9f53a62d65155d3ea3182',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-h5g166kw',
                  apiId: 'a1c2dd4f-54b6-4a93-802a-b41d45b7a4c9'
                },
                {
                  buildHookId: '5df9f53a05e7215d5ba3f50a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w8nrz8y9',
                  apiId: 'f5511c69-a7e5-42e3-ac0a-804d457ec6f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rompeltien/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w8nrz8y9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
