import React, { useState } from "react"
import { navigate } from "gatsby-link"

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...data }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      className="flex flex-col"
      name="contact"
      method="post"
      action="/thankyou"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <div className="md:mb-8 w-full md:flex">
        <input
          type="text"
          placeholder="Enter fullname"
          className="mb-2 md:mb-0 p-3 w-full bg-gray-100 font-mono shadow-md focus:outline-none focus:ring-2 focus:ring-blue-450"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          className="mb-2 md:mb-0 p-3 w-full bg-gray-100 font-mono shadow-md focus:outline-none focus:ring-2 focus:ring-blue-450 ml-0 md:ml-8"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        type="text"
        placeholder="Enter message"
        className="mb-8 p-4 h-40 md:h-56 bg-gray-100 font-mono shadow-md focus:outline-none focus:ring-2 focus:ring-blue-450"
        name="message"
        value={data.message}
        onChange={handleChange}
        required
      ></textarea>
      <button className="px-8 py-2 w-48 font-mono border-2 border-blue-450 font-mono text-blue-450 tracking-wide hover:bg-blue-450 hover:text-white active:outline-none">
        Send message
      </button>
    </form>
  )
}

export default ContactForm
