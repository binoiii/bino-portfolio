import React from "react"
import PropTypes from "prop-types"

const TechnologiesTemplate = ({ technologies }) => (
  <div className="mb-12">
    <h4 className="mb-4 font-bold">Technologies</h4>
    <div className="flex flex-wrap">
      {technologies &&
        technologies.map((tech, i) => (
          <div
            key={i}
            className="p-2 mr-1 mb-1 bg-gray-100 transition duration-300 ease-out transform hover:-translate-y-2 cursor-default"
          >
            {tech}
          </div>
        ))}
    </div>
  </div>
)

export default TechnologiesTemplate

TechnologiesTemplate.propTypes = {
  technologies: PropTypes.array.isRequired,
}
