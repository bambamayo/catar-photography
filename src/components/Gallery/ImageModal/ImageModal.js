import React from "react"
import Icon from "../../UI/Icon/Icon"

const ImageModal = ({
  children,
  closeModal,
  showModal,
  arrowLeftClicked,
  arrowRightClicked,
  index,
  arrLength,
}) => {
  return (
    <div
      className="gallery-image-modal"
      style={showModal ? { width: "100%" } : { width: "0" }}
    >
      <Icon
        type="times"
        iconClass="gallery-image-modal-close"
        iconClicked={closeModal}
      />
      <span
        style={index < 1 ? { display: "none" } : null}
        className="gallery-image-modal-left"
      >
        <Icon type="arrow-left" iconClicked={arrowLeftClicked} />
      </span>

      <span
        className="gallery-image-modal-right"
        style={index === arrLength ? { display: "none" } : null}
      >
        <Icon type="arrow-right" iconClicked={arrowRightClicked} />
      </span>

      {children}
    </div>
  )
}

export default ImageModal
