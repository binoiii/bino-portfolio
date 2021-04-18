import React from "react"
import Fade from "react-reveal/Fade"

import HeroAbout from "./HeroAbout"
import Technologies from "./Technologies"
import Work from "./Work"
import Education from "./Education"

const AboutMe = () => {
  return (
    <section className="p-4 pb-20 md:p-0 m-0 sm:m-10 md:m-16">
      <Fade left delay={500} duration={1000} distance="30px">
        <h2 className="mb-8 font-primary text-blue-450 text-4xl md:text-5xl font-bold">
          About me
        </h2>
      </Fade>
      <Fade left delay={1000} duration={1000} distance="30px">
        <HeroAbout />
        <Technologies />
        <Work />
        <Education />
      </Fade>
    </section>
  )
}

export default AboutMe
