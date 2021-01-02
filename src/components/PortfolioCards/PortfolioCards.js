import React from "react"
import Fade from "react-reveal/Fade"
import queryPortfolioData from "../../utilities/queryPortfolioData"
import PortfolioCard from "./PortfolioCard"

const PortfolioCards = () => {
  const portfolio = queryPortfolioData()

  return (
    <section className="p-4 pb-20 md:p-0 m-0 sm:m-10 md:m-16">
      <Fade left delay={500} duration={1000} distance="30px">
        <h2 className="mb-8 font-mono text-blue-450 text-4xl md:text-5xl font-bold">
          My Portfolio
        </h2>
      </Fade>
      <div className="flex justify-center">
        <Fade left delay={1000} duration={1000} distance="30px">
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 auto-rows-auto gap-8">
            {portfolio &&
              portfolio.map(({ node }) => (
                <PortfolioCard key={node.id} portfolio={node} />
              ))}
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default PortfolioCards
