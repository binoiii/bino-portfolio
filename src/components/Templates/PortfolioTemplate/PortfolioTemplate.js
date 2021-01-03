import React from "react"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import Layout from "../../layout"
import BackButton from "../../Utilities/BackButton"
import HeroTemplate from "./HeroTemplate"
import LinksTemplate from "./LinksTemplate"
import TechnologiesTemplate from "./TechnologiesTemplate"
import ResponsibilitiesTemplate from "./ResponsibilitiesTemplate"

export const query = graphql`
  query($slug: String!) {
    projectsDataJson(slug: { eq: $slug }) {
      title
      link
      repository
      technologies
      specification
      responsibilities
      challenges
    }
    imgWebSm: projectsDataJson(slug: { eq: $slug }) {
      imgWeb {
        childImageSharp {
          fixed(width: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    imgWebLg: projectsDataJson(slug: { eq: $slug }) {
      imgWeb {
        childImageSharp {
          fixed(width: 400, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    imgMobSm: projectsDataJson(slug: { eq: $slug }) {
      imgMobile {
        childImageSharp {
          fixed(width: 80, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    imgMobLg: projectsDataJson(slug: { eq: $slug }) {
      imgMobile {
        childImageSharp {
          fixed(width: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const PortfolioTemplate = ({ data }) => {
  const {
    title,
    link,
    repository,
    technologies,
    specification,
    responsibilities,
    challenges,
  } = data.projectsDataJson

  const imageSourceWeb = [
    {
      ...data.imgWebSm.imgWeb.childImageSharp.fixed,
      media: "(max-width: 576px)",
    },
    {
      ...data.imgWebLg.imgWeb.childImageSharp.fixed,
    },
  ]

  const imageSourceMobile = [
    {
      ...data.imgMobSm.imgMobile.childImageSharp.fixed,
      media: "(max-width: 576px)",
    },
    {
      ...data.imgMobLg.imgMobile.childImageSharp.fixed,
    },
  ]

  const imageSources = { imageSourceWeb, imageSourceMobile }

  return (
    <Layout>
      <section className="p-4 pb-20 md:p-0 m-0 sm:m-10 md:m-16 md:mt-8 font-mono text-gray-700">
        <BackButton location="portfolio" />
        {data && (
          <>
            <Fade left delay={500} duration={1000} distance="30px">
              <h3 className="mb-12 font-mono text-blue-450 text-3xl md:text-4xl font-bold">
                {title}
              </h3>
            </Fade>
            <Fade left delay={1000} duration={1000} distance="30px">
              <HeroTemplate title={title} link={link} source={imageSources} />
              <LinksTemplate link={link} repository={repository} />
              <TechnologiesTemplate technologies={technologies} />
              <div className="mb-12">
                <h4 className="mb-2 font-bold">Specification</h4>
                <p>{specification}</p>
              </div>
              {challenges && (
                <div className="mb-12">
                  <h4 className="mb-2 font-bold">Challenges</h4>
                  <p>{challenges}</p>
                </div>
              )}
              <ResponsibilitiesTemplate responsibilities={responsibilities} />
            </Fade>
          </>
        )}
      </section>
    </Layout>
  )
}

export default PortfolioTemplate
