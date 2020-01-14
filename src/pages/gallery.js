import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"
import GalleryCategoriesList from "../components/Gallery/GalleryCategoriesList/GalleryCategoriesList"
import Image from "../components/Image/Image"
import ImageModal from "../components/Gallery/ImageModal/ImageModal"

const Gallery = () => {
  const [categoryInView, setCategoryInView] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [imageInModal, setImageInModal] = useState(null)
  const [index, setIndex] = useState(0)
  const [categoryName, setCategoryName] = useState("")

  const data = useStaticQuery(graphql`
    query {
      allContentfulCategoryList(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            categoryName
          }
        }
      }
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
    let categoryInView =
      data.allContentfulCategoryListWithPictures.edges[0].node.categoryImage
    setCategoryInView(categoryInView)
    setCategoryName(
      data.allContentfulCategoryListWithPictures.edges[0].node.categoryName
    )
  }, [data.allContentfulCategoryListWithPictures.edges])

  const changeCategoryInViewWithNavHandler = id => {
    let clickedButton = data.allContentfulCategoryList.edges.find(
      edgeId => edgeId.node.id === id
    )

    let newCategory = data.allContentfulCategoryListWithPictures.edges.find(
      edgeCategoryName =>
        edgeCategoryName.node.categoryName === clickedButton.node.categoryName
    )
    setCategoryName(newCategory.node.categoryName)

    setCategoryInView(newCategory.node.categoryImage)
  }

  const openImagesModal = id => {
    let imageInModal = categoryInView.find(image => image.id === id)
    setImageInModal(imageInModal)
    setShowModal(true)
    setIndex(categoryInView.indexOf(imageInModal))
  }

  const closeImagesModal = () => setShowModal(false)

  const modalRightArrowHandler = () => {
    setImageInModal(categoryInView[index + 1])
    setIndex(index + 1)
  }

  const modalLeftArrowHandler = () => {
    setImageInModal(categoryInView[index - 1])
    setIndex(index - 1)
  }

  console.log("re renderedddd")

  return (
    <Layout footerColor="black" footerDisplay="block" linkColor="black">
      <SEO title="Catar photography | Gallery" />
      <section className="gallery">
        {showModal ? (
          <ImageModal
            showModal={showModal}
            closeModal={closeImagesModal}
            arrowRightClicked={modalRightArrowHandler}
            arrowLeftClicked={modalLeftArrowHandler}
            index={index}
            arrLength={categoryInView.length - 1}
          >
            <Image
              imageAlt={imageInModal.description}
              imageClass="gallery-image-modal-image"
              imageSrc={imageInModal.fluid}
              objectFit="contain"
            />
          </ImageModal>
        ) : null}
        <div className="gallery-content-container">
          <GalleryCategoriesList
            clicked={changeCategoryInViewWithNavHandler}
            categoryInView={data.allContentfulCategoryList.edges}
            presentCategoryName={categoryName}
          />
          <div className="gallery-pictures">
            {!categoryInView ? (
              <h3>Loadinggg</h3>
            ) : (
              categoryInView.map(image => (
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
      </section>
    </Layout>
  )
}

export default Gallery
