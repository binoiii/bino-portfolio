import React from "react"

import queryUserData from "../../utilities/queryUserData"

const Education = () => {
  const { education } = queryUserData()

  return (
    <div className="mx-8 md:mx-16 font-primary">
      <h4 className="mb-4 text-3xl text-blue-450 font-bold">Education</h4>
      <ul>
        {education &&
          education.map(
            ({ school, degree, date, accomplishments, extra }, i) => (
              <li key={i}>
                <div className="mb-6">
                  <div className="mb-4">
                    <h5 className="text-xl text-gray-700 font-bold">
                      {school}
                    </h5>
                    <h5 className="text-gray-400">{degree}</h5>
                    <h5 className="text-gray-400">{date}</h5>
                  </div>
                  {accomplishments &&
                    accomplishments.map((entry, i) => (
                      <p key={i} className="text-gray-700">
                        {entry}
                      </p>
                    ))}
                  <p className="text-gray-700">{extra}</p>
                </div>
              </li>
            )
          )}
      </ul>
    </div>
  )
}

export default Education
