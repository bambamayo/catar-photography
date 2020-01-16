import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"
import GalleryCategoriesList from "../components/Gallery/GalleryCategoriesList/GalleryCategoriesList"
import Image from "../components/Image/Image"
import ImageModal from "../components/Gallery/ImageModal/ImageModal"

const GalleryCategory = ({ location }) => {
  const [categoryInView, setCategoryInView] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [imageInModal, setImageInModal] = useState(null)
  const [index, setIndex] = useState(0)
  const [categoryName, setCategoryName] = useState("")
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategoryListWithPictures(
        sort: { fields: createdAt, order: ASC }
      ) {
        edges {
          node {
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
      }
    }
  `)

  useEffect(() => {
    let categoryInView = data.allContentfulCategoryListWithPictures.edges.find(
      edge => edge.node.categoryName === location.state.catName
    )
    setCategoryInView(categoryInView)
    setCategoryName(categoryInView.node.categoryName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Function for opening modal slideshow
  const openImagesModal = id => {
    let imageInModal = categoryInView.node.categoryImage.find(
      image => image.id === id
    )
    setImageInModal(imageInModal)
    setShowModal(true)
    setIndex(categoryInView.node.categoryImage.indexOf(imageInModal))
  }

  // Function for closing modal slideshow
  const closeImagesModal = () => setShowModal(false)

  //Function for going to next image in modal slideshow
  const modalRightArrowHandler = () => {
    setImageInModal(categoryInView.node.categoryImage[index + 1])
    setIndex(index + 1)
  }

  //Function for going to previous image in modal slideshow
  const modalLeftArrowHandler = () => {
    setImageInModal(categoryInView.node.categoryImage[index - 1])
    setIndex(index - 1)
  }

  return (
    <Layout footerColor="black" footerDisplay="block" linkColor="black">
      <SEO
        title={`Catar photography | Gallery - ${location.state.catName ||
          null}`}
      />
      {showModal ? (
        <ImageModal
          showModal={showModal}
          closeModal={closeImagesModal}
          arrowRightClicked={modalRightArrowHandler}
          arrowLeftClicked={modalLeftArrowHandler}
          index={index}
          arrLength={categoryInView.node.categoryImage.length - 1}
        >
          <Image
            imageAlt={imageInModal.description}
            imageClass="gallery-image-modal-image"
            imageSrc={imageInModal.fluid}
          />
        </ImageModal>
      ) : null}
      <h2 className="section-header">{location.state.catName}</h2>
      <div className="gallery-content-container">
        <GalleryCategoriesList
          presentCategoryName={categoryName}
          categoryInView={data.allContentfulCategoryListWithPictures.edges}
        />
        <div className="gallery-pictures">
          {!categoryInView ? (
            <h3>Loadinggg</h3>
          ) : (
            categoryInView.node.categoryImage.map(image => (
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
            ))
          )}
        </div>
      </div>
    </Layout>
  )
}

export default GalleryCategory
