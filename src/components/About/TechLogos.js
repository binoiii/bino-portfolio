import React from "react"
import queryUserData from "../../utilities/queryUserData"

const Technologies = () => {
  const {
    profile: { technologies },
  } = queryUserData()
  return (
    <div className="flex flex-wrap">
      {technologies &&
        technologies.map(({ technology, logo }, i) => (
          <div
            key={i}
            className="mr-2 flex items-center transition duration-500 ease-out transform hover:-translate-y-2 cursor-default"
          >
            <span dangerouslySetInnerHTML={{ __html: `${logo}` }} />
            <span className="ml-1">{technology}</span>
          </div>
        ))}
    </div>
  )
}

export default Technologies
