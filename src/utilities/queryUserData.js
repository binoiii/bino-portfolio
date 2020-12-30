import { useStaticQuery, graphql } from "gatsby"

const QueryUserData = () => {
  const data = useStaticQuery(graphql`
    {
      allUserDataJson {
        edges {
          node {
            user {
              profile {
                name
                occupation
                specialisation
                about
                technologies {
                  technology
                  logo
                }
              }
              work {
                title
                company
                date
                description
              }
              education {
                school
                degree
                date
                accomplishments
                extra
              }
            }
          }
        }
      }
    }
  `)

  return data.allUserDataJson.edges[0].node.user
}

export default QueryUserData
