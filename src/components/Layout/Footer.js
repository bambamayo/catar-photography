import React from "react"
import PropTypes from "prop-types"
import Icon from "../UI/Icon/Icon"

const Footer = ({ footerDisplay, footerColor }) => (
  <footer
    className="footer"
    style={{ display: footerDisplay, color: footerColor }}
  >
    <ul className="footer__social-links">
      <li className="footer__social-links-listitem">
        <a
          href="https://www.instagram.com/catar_photography"
          className="footer__social-links-link"
        >
          <Icon
            iconClass="footer__social-links-icon"
            type={["fab", "instagram"]}
          />
        </a>
      </li>
      <li className="social-links-listitem">
        <a
          href="https://www.facebook.com/CatarPhotography"
          className="footer__social-links-link"
        >
          <Icon
            iconClass="footer__social-links-icon"
            type={["fab", "facebook-f"]}
          />
        </a>
      </li>
      <li className="social-links-listitem">
        <a
          href="https://www.twitter.com/CatarPhotograph"
          className="footer__social-links-link"
        >
          <Icon
            iconClass="footer__social-links-icon"
            type={["fab", "twitter"]}
          />
        </a>
      </li>
    </ul>
    <p>©{new Date().getFullYear()}, Catar photography</p>
  </footer>
)

Footer.propTypes = {
  footerDisplay: PropTypes.string,
}

export default Footer
