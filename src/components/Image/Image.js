import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Image = ({ imageAlt, imageClass, imageClicked, imageSrc }) => {
  return <Img alt={imageAlt} fluid={imageSrc} className={imageClass} />
}

Image.propTypes = {
  imageAlt: PropTypes.string.isRequired,
  imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  imageClass: PropTypes.string.isRequired,
}

export default Image
