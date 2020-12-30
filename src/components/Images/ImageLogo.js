import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "albin-light.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  `)

  return (
    <Img
      alt={data.placeholderImage.name}
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={className}
    />
  )
}

export default ImageLogo

ImageLogo.propTypes = {
  className: PropTypes.string,
}
