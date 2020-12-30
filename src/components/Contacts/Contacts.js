import React from "react"
import ContactForm from "./ContactForm"

const Contacts = () => {
  return (
    <section className="p-4 pb-20 md:p-0 m-0 sm:m-10 md:m-16">
      <div className="md:w-8/12">
        <h2 className="mb-4 font-mono text-blue-450 text-4xl md:text-5xl font-bold">
          Get in touch
        </h2>
        <p className="mb-8 font-mono text-gray-700 md:text-lg">
          In need of help or do you want to work on a project and collaborate?
          <br />
          Feel free to reach out.
        </p>
      </div>
      <div className="sm:w-10/12 md:w-8/12">
        <ContactForm />
      </div>
    </section>
  )
}

export default Contacts
