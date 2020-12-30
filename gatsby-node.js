const path = require(`path`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allProjectsDataJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allProjectsDataJson.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `/portfolio/${slug}/`,
      component: path.resolve(
        `./src/components/Templates/PortfolioTemplate/PortfolioTemplate.js`
      ),
      context: {
        slug,
      },
    })
  })
}
