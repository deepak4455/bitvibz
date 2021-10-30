import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import axios from "axios"
import * as qs from "query-string"
import "../assets/css/contact.scss"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
  }

  handleSubmit(event) {
    // Do not submit form via HTTP, since we're doing that via XHR request.
    event.preventDefault()
    // Loop through this component's refs (the fields) and add them to the
    // formData object. What we're left with is an object of key-value pairs
    // that represent the form data we want to send to Netlify.
    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    // Set options for axios. The URL we're submitting to
    // (this.props.location.pathname) is the current page.
    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    // Submit to Netlify. Upon success, set the feedback message and clear all
    // the fields within the form. Upon failure, keep the fields as they are,
    // but set the feedback message to show the error state.
    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg: "Form submitted successfully!",
        })
        this.domRef.current.reset()
      })
      .catch(err =>
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      )
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" description="Feel free to contact us." />
        <div className="container contact pt-16 px-6 pb-14">
          <h1 class="pb-12">Contact</h1>

          {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}

          <form
            ref={this.domRef}
            name="Contact Form"
            method="POST"
            data-netlify="true"
            onSubmit={event => this.handleSubmit(event)}
            id="form"
            action="/thank-you"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <p id="name">
              <label>
                Your Name: <input rel="name" type="text" name="name" />
              </label>
            </p>
            <p id="email">
              <label>
                Your Email: <input rel="email" type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea rel="message" name="message"></textarea>
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
}

export default Contact
