import React from "react"

const ContactForm = () => {
  return (
    <form className="flex flex-col">
      <div className="md:mb-8 w-full md:flex">
        <input
          type="text"
          placeholder="Enter fullname"
          className="mb-2 md:mb-0 p-3 w-full bg-gray-100 font-mono shadow-md focus:outline-none focus:ring-2 focus:ring-blue-450"
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          className="mb-2 md:mb-0 p-3 w-full bg-gray-100 font-mono shadow-md focus:outline-none focus:ring-2 focus:ring-blue-450 ml-0 md:ml-8"
          required
        />
      </div>
      <textarea
        type="text"
        placeholder="Enter message"
        className="mb-8 p-4 h-40 md:h-56 bg-gray-100 font-mono shadow-md focus:outline-none focus:ring-2 focus:ring-blue-450"
        required
      ></textarea>
      <button className="px-8 py-2 w-48 font-mono border-2 border-blue-450 font-mono text-blue-450 tracking-wide hover:bg-blue-450 hover:text-white active:outline-none">
        Send message
      </button>
    </form>
  )
}

export default ContactForm
