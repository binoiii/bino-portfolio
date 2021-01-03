import React from "react"
import PropTypes from "prop-types"

const ResponsibilitiesTemplate = ({ responsibilities }) => (
  <div>
    <h4 className="mb-2 font-bold">Responsibilities</h4>
    <ul>
      {responsibilities &&
        responsibilities.map((resp, i) => (
          <li key={i} className="ml-4 list-disc">
            {resp}
          </li>
        ))}
    </ul>
  </div>
)

export default ResponsibilitiesTemplate

ResponsibilitiesTemplate.propTypes = {
  responsibilities: PropTypes.array.isRequired,
}
