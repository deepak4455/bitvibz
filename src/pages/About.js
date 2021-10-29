import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="container pt-16 px-6 pb-14">
        <h1 class="pb-12">About</h1>

        <p>about content</p>
      </div>
    </Layout>
  )
}

export default About
