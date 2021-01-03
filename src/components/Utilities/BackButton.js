import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { BackIcon } from "../Icons/Icons"

const BackButton = ({ location }) => (
  <div className="mb-4 flex justify-end">
    <Link
      to={`/${location}`}
      className="text-yellow-500 transition duration-300 ease-out transform hover:-translate-x-2 hover:text-blue-450"
    >
      <BackIcon className="inline text-lg md:text-xl " />
      <span className="m-2 font-mono tracking-wider">Back</span>
    </Link>
  </div>
)

export default BackButton

BackButton.defaultProps = {
  location: "",
}

BackButton.propTypes = {
  location: PropTypes.string,
}
