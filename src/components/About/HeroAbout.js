import React from "react"

import queryUserData from "../../utilities/queryUserData"

const HeroAbout = () => {
  const {
    profile: { about },
  } = queryUserData()

  return (
    <div className="mb-16 p-16 py-8 bg-gray-100 font-mono text-gray-700">
      <div className="mb-8">
        {about &&
          about.map((abt, i) => (
            <p className="mb-8" key={i}>
              {abt}
            </p>
          ))}
      </div>
      <div className="flex">
        <div className="py-2 px-2 md:px-6 mr-2 bg-blue-450 border-2 border-blue-450 font-mono text-xs md:text-base text-white tracking-wide cursor-pointer hover:bg-gray-200 hover:text-blue-450 ">
          <a
            href="https://drive.google.com/file/d/1cbD58ws3lARaO73sVcvoQUSO-0PUFkGv/view?usp=sharing"
            download
          >
            See resume
          </a>
        </div>
      </div>
    </div>
  )
}
export default HeroAbout
