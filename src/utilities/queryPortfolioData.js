import { useStaticQuery, graphql } from "gatsby"

const QueryPortfolioData = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsDataJson {
        edges {
          node {
            id
            title
            img
            description
            slug
          }
        }
      }
    }
  `)

  return data.allProjectsDataJson.edges
}

export default QueryPortfolioData
