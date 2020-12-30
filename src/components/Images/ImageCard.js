import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageCard = ({ img: imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 450, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `)

  const image =
    data &&
    data.allFile.edges.find(
      img => img.node.childImageSharp.fluid.originalName === imageName
    ).node.childImageSharp.fluid

  return <Img alt={imageName} fluid={image} />
}

export default ImageCard

ImageCard.propTypes = {
  imageName: PropTypes.string,
}
