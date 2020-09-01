import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ linkColor, bgColor }) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulLogo {
        logoAlt
        logoImage {
          fluid(maxWidth: 676) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="logo-box" style={{ backgroundColor: bgColor }}>
          <Link to="/" className="site-logo">
            <Img
              className="site-logo-image"
              alt={data.contentfulLogo.logoAlt}
              fluid={data.contentfulLogo.logoImage.fluid}
            />
          </Link>
        </div>
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <Link
              style={{ color: linkColor }}
              activeStyle={{ borderBottom: "1px solid #000000" }}
              className="header__nav-list-link"
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li className="header__nav-list-item">
            <Link
              style={{ color: linkColor }}
              activeStyle={{ borderBottom: "1px solid #000000" }}
              className="header__nav-list-link"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="header__nav-list-item">
            <Link
              style={{ color: linkColor }}
              activeStyle={{ borderBottom: "1px solid #000000" }}
              className="header__nav-list-link"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  linkColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
}

export default Header
