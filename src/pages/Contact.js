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
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
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
