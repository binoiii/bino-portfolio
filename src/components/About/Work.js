import React from "react"

import queryUserData from "../../utilities/queryUserData"

const Work = () => {
  const { work } = queryUserData()

  return (
    <div className="mx-8 mb-16 md:mx-16 font-primary">
      <h4 className="mb-4 text-3xl text-blue-450 font-bold">Experience</h4>
      <ul>
        {work &&
          work.map(({ company, date, title, description, awards }, i) => (
            <li key={i}>
              <div className="mb-6">
                <div className="mb-4">
                  <h5 className="text-xl text-gray-700 font-bold">{company}</h5>
                  <h5 className="text-gray-400">{title}</h5>
                  <h5 className="text-gray-400">{date}</h5>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">{description}</p>
                </div>
                {awards && (
                  <div className="mb-4">
                    <h5 className="mb-2 text-gray-700 font-bold">Awards</h5>
                    {awards.map((award, i) => (
                      <div key={i} className="mb-2">
                        <h5 className="text-gray-700 font-bold">
                          {award.title}
                        </h5>
                        <p className="text-gray-700">{award.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Work
