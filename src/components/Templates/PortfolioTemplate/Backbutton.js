import React from "react"
import { Link } from "gatsby"
import { BackIcon } from "../../Icons/Icons"

const BackButton = () => (
  <div className="mb-4 flex justify-end">
    <Link
      to="/portfolio"
      className="text-yellow-500 transition duration-300 ease-out transform hover:-translate-x-2 hover:text-blue-450"
    >
      <BackIcon className="inline text-lg md:text-xl " />
      <span className="m-2 font-mono tracking-wider">Back</span>
    </Link>
  </div>
)

export default BackButton
