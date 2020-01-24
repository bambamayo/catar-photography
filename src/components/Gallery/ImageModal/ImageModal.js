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
      <button
        aria-label="close images modal icon"
        className="gallery-image-modal-close"
        onClick={closeModal}
      >
        &#215;
      </button>
      <button
        aria-label="go to previous image icon in images modal"
        style={index < 1 ? { display: "none" } : null}
        className="gallery-image-modal-left"
        onClick={arrowLeftClicked}
      >
        &#8592;
      </button>
      <button
        aria-label="go to next image icon in images modal"
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
