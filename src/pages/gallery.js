import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"
import Image from "../components/Image/Image"

const Gallery = () => {
  const [categoriesArray, setCategoriesArray] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      allContentfulCategoryList(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
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
      }
    }
  `)

  useEffect(() => {
    setCategoriesArray(data.allContentfulCategoryList.edges)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout footerColor="black" footerDisplay="block" linkColor="black">
      <SEO title="Catar photography | Gallery" />
      <section className="gallery__home">
        <h2 className="section-header">Gallery</h2>
        <div className="gallery__home-content">
          {categoriesArray === null ? (
            <h3>Loadinggg</h3>
          ) : (
            categoriesArray.map(category => (
              <Link
                to={`/gallery/${category.node.categoryName}`}
                className="gallery__home-content-cont"
                key={category.node.id}
                state={{ catName: category.node.categoryName }}
              >
                <div className="gallery__home-content-categoryName">
                  <p className="gallery__home-content-categoryName-name">
                    {category.node.categoryName}
                  </p>
                </div>
                <div className="gallery__home-content-categoryImage">
                  <Image
                    imageAlt={category.node.categoryImage.description}
                    imageClass="gallery__home-content-categoryImage-image"
                    imageSrc={category.node.categoryImage.fluid}
                  />
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Gallery
