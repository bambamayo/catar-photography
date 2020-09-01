import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({
  children,
  footerDisplay,
  linkColor,
  footerColor,
  logoColor,
  bgColor,
}) => {
  return (
    <>
      <Header bgColor={bgColor} linkColor={linkColor} logoColor={logoColor} />
      <main>{children}</main>
      <Footer footerDisplay={footerDisplay} footerColor={footerColor} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footerDisplay: PropTypes.string,
  linkColor: PropTypes.string,
  footerColor: PropTypes.string,
  bgColor: PropTypes.string,
}

export default Layout
