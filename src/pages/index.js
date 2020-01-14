import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faTimes,
  faArrowRight,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import "../sass/main.scss"
import Icon from "../components/UI/Icon/Icon"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"

library.add(
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faTimes,
  faArrowRight,
  faBars,
  faArrowLeft,
  faTwitter,
  faInstagram
)

const IndexPage = () => (
  <Layout footerDisplay="none" linkColor="white" logoColor="white">
    <SEO title="Catar photography | Home" />
    <section className="hero">
      <div className="text-box">
        <h2 className="text-box-text-main">catar photograpy</h2>
        <p className="text-box-text-sub">The iphone photographer</p>
      </div>
      <div className="call-to-action">
        <Link to="/gallery" className="call-to-action-btn">
          <span className="btn-arr btn-arr-left">
            <Icon type="angle-double-right" />
          </span>
          Gallery
          <span className="btn-arr btn-arr-right">
            <Icon type="angle-double-left" />
          </span>
        </Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
