import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"
import GalleryCategoriesList from "../components/Gallery/GalleryCategoriesList/GalleryCategoriesList"
import Image from "../components/Image/Image"
import ImageModal from "../components/Gallery/ImageModal/ImageModal"

const GalleryCategory = props => {
  const [showModal, setShowModal] = useState(false)
  const [imageInModal, setImageInModal] = useState(null)
  const [index, setIndex] = useState(0)

  let presentCategory = props.data.contentfulCategoryListWithPictures
  console.log(presentCategory)

  // Function for opening modal slideshow
  const openImagesModal = id => {
    let imageInModal = presentCategory.categoryImage.find(
      image => image.id === id
    )
    setImageInModal(imageInModal)
    setShowModal(true)
    setIndex(presentCategory.categoryImage.indexOf(imageInModal))
  }

  // // Function for closing modal slideshow
  const closeImagesModal = () => setShowModal(false)

  // //Function for going to next image in modal slideshow
  const modalRightArrowHandler = () => {
    setImageInModal(presentCategory.categoryImage[index + 1])
    setIndex(index + 1)
  }

  // //Function for going to previous image in modal slideshow
  const modalLeftArrowHandler = () => {
    setImageInModal(presentCategory.categoryImage[index - 1])
    setIndex(index - 1)
  }
  return (
    <Layout footerColor="black" footerDisplay="block" linkColor="black">
      <SEO
        title={`Catar photography | Gallery - ${presentCategory.categoryName}`}
      />
      {showModal ? (
        <ImageModal
          showModal={showModal}
          closeModal={closeImagesModal}
          arrowRightClicked={modalRightArrowHandler}
          arrowLeftClicked={modalLeftArrowHandler}
          index={index}
          arrLength={presentCategory.categoryImage.length - 1}
        >
          <Image
            imageAlt={imageInModal.description}
            imageClass="gallery-image-modal-image"
            imageSrc={imageInModal.fluid}
          />
        </ImageModal>
      ) : null}
      <h2 className="section-header">{presentCategory.categoryName}</h2>
      <div className="gallery-content-container">
        <GalleryCategoriesList
          presentCategoryName={presentCategory.categoryName}
          categoryInView={presentCategory.categoryImage}
        />
        <div className="gallery-pictures">
          {presentCategory.categoryImage.map(image => (
            <button
              onClick={() => openImagesModal(image.id)}
              key={image.id}
              className="gallery-pictures-container"
            >
              <Image
                imageAlt={image.description}
                imageClass="gallery-pictures-picture"
                imageSrc={image.fluid}
              />
            </button>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default GalleryCategory

export const query = graphql`
  query($categoryName: String) {
    contentfulCategoryListWithPictures(categoryName: { eq: $categoryName }) {
      id
      categoryName
      categoryImage {
        id
        description
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
