import React from "react"
import { Link } from "gatsby"
import { LaptopIcon, UserIcon, ContactIcon } from "../Icons/Icons"
import LogoSVG from "../../images/albin-light.svg"

const Nav = () => {
  return (
    <header className="px-4 sm:px-8 md:p-2 flex md:flex-col justify-between md:justify-start items-center fixed bottom-0 left-0 h-16 md:h-full w-full md:w-72 bg-blue-450 z-50">
      <Link to="/" className="w-16 md:w-64" activeClassName="animate-pulse">
        <img src={LogoSVG} alt="albin-logo" />
      </Link>
      <div className="flex md:flex-col md:items-center text-white">
        <Link
          className="ml-10 sm:ml-14 md:ml-0 md:mb-4 md:px-8 md:py-2 flex items-center font-mono tracking-widest hover:text-yellow-300"
          activeClassName="text-yellow-300"
          to="/portfolio"
        >
          <LaptopIcon className="text-3xl md:text-base md:mr-2" />
          <span className="hidden md:block uppercase">Portfolio</span>
        </Link>
        <Link
          className="ml-10 sm:ml-14 md:mb-4 md:ml-0 md:px-8 md:py-2  flex items-center font-mono tracking-widest hover:text-yellow-300"
          activeClassName="text-yellow-300"
          to="/about"
        >
          <UserIcon className="text-2xl md:text-base md:mr-2" />
          <span className="hidden md:block uppercase">about</span>
        </Link>
        <Link
          className="ml-10 sm:ml-14 md:mb-4 md:ml-0 md:px-8 md:py-2  flex items-center font-mono tracking-widest hover:text-yellow-300"
          activeClassName="text-yellow-300"
          to="/contact"
        >
          <ContactIcon className="text-3xl md:text-base md:mr-2" />
          <span className="hidden md:block uppercase">contact</span>
        </Link>
      </div>
    </header>
  )
}
export default Nav
