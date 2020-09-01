import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"
import "../sass/main.scss"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"

library.add(faTwitter, faInstagram, faFacebookF, faInfoCircle)

const IndexPage = () => (
  <Layout
    footerDisplay="none"
    linkColor="white"
    logoColor="white"
    bgColor="white"
  >
    <SEO title="Catar photography | Home" />
    <section className="hero">
      <div className="text-box">
        <h2 className="text-box-text-main">catar photograpy</h2>
        <p className="text-box-text-sub">The iPhone Photographer</p>
        <p className="text-box-text-small">#ShotandEditedoniPhone</p>
      </div>
      <div className="call-to-action">
        <Link to="/gallery" className="call-to-action-btn">
          <span className="btn-arr btn-arr-left">&#8920;</span>
          Gallery
          <span className="btn-arr btn-arr-right">&#8921;</span>
        </Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
