import React from "react"
import { Link } from "gatsby"

import queryUserData from "../../utilities/queryUserData"

const Home = () => {
  const {
    profile: { name, occupation, specialisation },
  } = queryUserData()

  return (
    <section className="flex justify-center">
      <div className="p-2 md:px-8 pb-16 md:pb-0 min-h-screen flex flex-col justify-center">
        <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-mono text-gray-700 font-bold">
          Hi there, <br />
          my name is <span className="text-yellow-400">{name}</span>.
        </h1>
        <h2 className="mb-10 text-3xl sm:text-4xl md:text-5xl font-mono text-gray-700 font-bold">
          I am a <span className="text-blue-450">{occupation}</span> <br />
          specialised in {specialisation}.
        </h2>
        <div className="flex">
          <Link to="/portfolio">
            <div className="btn">See portfolio</div>
          </Link>
          <Link to="/about">
            <div className="btn">Know more</div>
          </Link>
          <div className="mx-1 md:mx-2 self-end font-mono text-sm md:text-base">
            or
            <Link
              className="mx-1 md:mx-2 text-sm md:text-base text-yellow-400 hover:text-blue-450 font-medium"
              to="/contact"
            >
              contact me.
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
