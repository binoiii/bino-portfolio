import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const HeroTemplate = ({
  title,
  link,
  source: { imageSourceWeb, imageSourceMobile },
}) => (
  <div className="mb-12 flex flex-row flex-wrap justify-center items-center">
    <a
      href={`https://${link}`}
      rel="noopener noreferrer"
      target="_blank"
      className="ml-2 text-blue-450 font-normal hover:underline"
    >
      <div className="mr-4 mb transition duration-300 ease-out transform hover:-translate-y-2">
        <Img alt={title} fixed={imageSourceWeb} className="shadow-xl" />
      </div>
    </a>
    <a
      href={`https://${link}`}
      rel="noopener noreferrer"
      target="_blank"
      className="ml-2 text-blue-450 font-normal hover:underline"
    >
      <div className="ml-4 mt-8 self-end transition duration-300 ease-out transform hover:-translate-y-2">
        <Img alt={title} fixed={imageSourceMobile} />
      </div>
    </a>
  </div>
)

export default HeroTemplate

HeroTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
}
