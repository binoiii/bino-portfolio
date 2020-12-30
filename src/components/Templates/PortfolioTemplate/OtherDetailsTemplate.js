import React from "react"
import PropTypes from "prop-types"

const OtherDetailsTemplate = () => (
  <>
    <div>
      <h2>Specification</h2>
      <p>{specification}</p>
    </div>
    <div>
      <h2>Responsibility</h2>
      <p>{responsibilities}</p>
    </div>
    <div>
      <h2>Challenges</h2>
      <p>{challenges}</p>
    </div>
  </>
)

export default OtherDetailsTemplate
