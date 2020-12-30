import React from "react"
import PropTypes from "prop-types"

const LinksTemplate = ({ link, repository }) => (
  <div className="mb-12">
    <div>
      <h4 className="mb-2 font-bold">
        Online Link:
        <a
          href={`https://${link}`}
          rel="noopener noreferrer"
          target="_blank"
          className="ml-2 text-blue-450 font-normal hover:underline"
        >
          {link}
        </a>
      </h4>
    </div>
    <div>
      <h4 className="mb-2 font-bold">
        Repository:
        <a
          href={`https://${repository}`}
          rel="noopener noreferrer"
          target="_blank"
          className="ml-2 text-blue-450 font-normal hover:underline"
        >
          {repository}
        </a>
      </h4>
    </div>
  </div>
)

export default LinksTemplate

LinksTemplate.propTypes = {
  link: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
}
