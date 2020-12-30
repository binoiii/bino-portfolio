import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import { FaLaptopCode, FaUser } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { BiArrowBack } from "react-icons/bi"

export const LaptopIcon = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <FaLaptopCode />
  </IconContext.Provider>
)

export const UserIcon = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <FaUser />
  </IconContext.Provider>
)

export const ContactIcon = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <GrMail />
  </IconContext.Provider>
)

export const BackIcon = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <BiArrowBack />
  </IconContext.Provider>
)

LaptopIcon.defaultProps = {
  className: "text-sm text-white",
}

LaptopIcon.propTypes = {
  className: PropTypes.string,
}

UserIcon.defaultProps = {
  className: "text-sm text-white",
}

UserIcon.propTypes = {
  className: PropTypes.string,
}

ContactIcon.defaultProps = {
  className: "text-sm text-white",
}

ContactIcon.propTypes = {
  className: PropTypes.string,
}

BackIcon.defaultProps = {
  className: "text-sm text-white",
}

BackIcon.propTypes = {
  className: PropTypes.string,
}
