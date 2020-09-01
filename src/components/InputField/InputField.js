import React from "react"
import PropTypes from "prop-types"

const InputField = props => {
  let inputElement = null

  switch (props.inputtype) {
    case "input":
      inputElement = <input {...props} />
      break
    case "textarea":
      inputElement = <textarea {...props} style={{ resize: "none" }} />
      break
    default:
      inputElement = <input {...props} />
  }
  return (
    <div className="contact__form-input-cont">
      {inputElement}
      <span className="contact__form-input-val">{props.validationmsg}</span>
    </div>
  )
}

InputField.propTpes = {
  inputtype: PropTypes.string.isRequired,
}

export default InputField
