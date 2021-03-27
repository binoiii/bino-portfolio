import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import { AiFillHome } from "react-icons/ai"
import { FaLaptopCode, FaUser } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { BiArrowBack } from "react-icons/bi"

export const Home = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <AiFillHome />
  </IconContext.Provider>
)

Home.defaultProps = {
  className: "text-sm text-white",
}

Home.propTypes = {
  className: PropTypes.string,
}

export const LaptopIcon = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <FaLaptopCode />
  </IconContext.Provider>
)

LaptopIcon.defaultProps = {
  className: "text-sm text-white",
}

LaptopIcon.propTypes = {
  className: PropTypes.string,
}

export const UserIcon = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <FaUser />
  </IconContext.Provider>
)

UserIcon.defaultProps = {
  className: "text-sm text-white",
}

UserIcon.propTypes = {
  className: PropTypes.string,
}

export const ContactIcon = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <GrMail />
  </IconContext.Provider>
)

ContactIcon.defaultProps = {
  className: "text-sm text-white",
}

ContactIcon.propTypes = {
  className: PropTypes.string,
}

export const BackIcon = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <BiArrowBack />
  </IconContext.Provider>
)

BackIcon.defaultProps = {
  className: "text-sm text-white",
}

BackIcon.propTypes = {
  className: PropTypes.string,
}
