import React from "react"
import { Link } from "gatsby"
import PorfolioHead from "./PorfolioHead"

const PortfolioCard = ({ portfolio }) => {
  const { img, title, description, slug } = portfolio

  return (
    <Link
      to={`/portfolio/${slug}`}
      className="border border-gray-100 transition duration-500 ease-out transform hover:-translate-y-2 cursor-pointer shadow-lg"
    >
      <PorfolioHead img={img} />
      <div className="p-6 pt-0 bg-white">
        <h4 className="font-primary text-xl text-blue-450 tracking-wide font-medium">
          {title}
        </h4>
        <p className="font-primary text-gray-700">{description}</p>
      </div>
    </Link>
  )
}

export default PortfolioCard
