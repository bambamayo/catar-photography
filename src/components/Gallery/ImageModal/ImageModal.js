import React from "react"

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
      <button className="gallery-image-modal-close" onClick={closeModal}>
        &#215;
      </button>
      <button
        style={index < 1 ? { display: "none" } : null}
        className="gallery-image-modal-left"
        onClick={arrowLeftClicked}
      >
        &#8592;
      </button>
      <button
        className="gallery-image-modal-right"
        style={index === arrLength ? { display: "none" } : null}
        onClick={arrowRightClicked}
      >
        &#8594;
      </button>

      {children}
    </div>
  )
}

export default ImageModal
