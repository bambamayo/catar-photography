import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"

const NotFoundPage = () => (
  <Layout footerColor="black" footerDisplay="block" linkColor="black">
    <SEO title="404: Not found" />
    <div style={{ width: "70vw", margin: "20rem auto" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "600", textAlign: "center" }}>
        NOT FOUND!!!
      </h1>
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          textAlign: "center",
          color: "red",
        }}
      >
        Sorry, the page you're looking for does not exist
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
