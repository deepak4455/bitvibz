import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../assets/css/contact.scss"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Feel free to contact us." />
      <div className="container contact pt-16 px-6 pb-14">
        <h1 class="pb-12">Contact</h1>

        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          id="form"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <p id="name">
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p id="email">
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
