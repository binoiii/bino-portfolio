import React from "react"
import HeroAbout from "./HeroAbout"
import Technologies from "./Technologies"
import Work from "./Work"
import Education from "./Education"

const AboutMe = () => {
  return (
    <section className="p-4 pb-20 md:p-0 m-0 sm:m-10 md:m-16">
      <h2 className="mb-16 font-mono text-blue-450 text-4xl md:text-5xl font-bold">
        About me
      </h2>
      <HeroAbout />
      <Technologies />
      <Work />
      <Education />
    </section>
  )
}

export default AboutMe
