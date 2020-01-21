import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({ iconClass, type, iconClicked }) => (
  <FontAwesomeIcon className={iconClass} icon={type} onClick={iconClicked} />
)

Icon.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  iconClass: PropTypes.string,
  iconClicked: PropTypes.func,
}
export default Icon
