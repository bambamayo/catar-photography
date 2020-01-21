import React, { useState } from "react"
import "../sass/main.scss"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"
import InputField from "../components/InputField/InputField"
import isEmail from "validator/lib/isEmail"
import Icon from "../components/UI/Icon/Icon"
import Spinner from "../components/UI/Spinner/Spinner"

const Contact = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [message, setMessage] = useState({ name: "", email: "", message: "" })
  const [fieldErrors, setFieldErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [formMsg, setFormMsg] = useState("")

  const onInputChangedHandler = e => {
    const newFormFields = { ...formFields }
    newFormFields[e.target.name] = e.target.value
    setFormFields(newFormFields)
  }

  const validate = message => {
    const errors = {}
    if (!message.name) errors.name = "Name is Required!!!"
    if (!message.email) errors.email = "Email is Required!!!"
    if (message.email && !isEmail(message.email))
      errors.email = "An Invalid Email Was Entered!!!"
    if (!message.message) errors.message = "Message is Required!!!"
    return errors
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onFormSubmitHandler = e => {
    e.preventDefault()
    setLoading(true)
    const visitorMessage = { ...message }
    visitorMessage.name = formFields.name
    visitorMessage.email = formFields.email
    visitorMessage.message = formFields.message
    const fieldErrors = validate(visitorMessage)

    setFieldErrors(fieldErrors)

    if (Object.keys(fieldErrors).length) {
      setLoading(false)
      return
    }

    setMessage(visitorMessage)
    setFormFields({
      name: "",
      email: "",
      message: "",
    })

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...visitorMessage }),
    })
      .then(() => {
        setInterval(() => {
          setFormMsg(`Thank you, your message has been received, i will get back to you
      as soon as i can.`)
          setLoading(false)
        }, 4000)
      })
      .catch(error => {
        setInterval(() => {
          setFormMsg(
            `Sorry your message could not be delivered, please try again`
          )
          setLoading(false)
        }, 4000)
      })
  }

  return (
    <Layout footerColor="black" footerDisplay="block" linkColor="black">
      <SEO title="Catar photography | Contact me" />

      <section className="contact">
        <h2 className="section-header">Contact Me</h2>
        <p className="section-header--sub">
          Please reach out to me if you would like to talk about work or just to
          say hi!
        </p>
        {loading ? (
          <Spinner />
        ) : (
          <form
            onSubmit={onFormSubmitHandler}
            className="contact__form"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <InputField
              inputtype="input"
              type="text"
              name="name"
              placeholder="Full Name"
              className="contact__form-input"
              value={formFields.name}
              onChange={onInputChangedHandler}
              validationmsg={fieldErrors.name}
            />
            <InputField
              inputtype="input"
              type="email"
              name="email"
              placeholder="Email Address"
              className="contact__form-input"
              value={formFields.email}
              onChange={onInputChangedHandler}
              validationmsg={fieldErrors.email}
            />
            <InputField
              inputtype="textarea"
              name="message"
              placeholder="Your Message"
              className="contact__form-input"
              value={formFields.message}
              onChange={onInputChangedHandler}
              validationmsg={fieldErrors.message}
            />
            <button className="contact__form-button" type="submit">
              Send Message
            </button>
          </form>
        )}
        <div className="form-submit-message">
          {formMsg === "" ? null : (
            <p className="success">
              <span style={{ display: "inline-block", marginRight: "0.5rem" }}>
                <Icon type="info-circle" />
              </span>
              {formMsg}
            </p>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Contact
