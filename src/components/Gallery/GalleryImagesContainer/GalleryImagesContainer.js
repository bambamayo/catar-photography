import React from "react"
import Image from "../../Image/Image"
import { useStaticQuery, graphql } from "gatsby"

const GalleryImagesContainer = props => {
  const data = useStaticQuery(graphql`
    query {
      imageUse: file(relativePath: { eq: "review-use.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(props.location)
  return (
    <div className="gallery-images-container">
      <figure>
        <Image
          imageSrc={data.imageUse.childImageSharp.fluid}
          imageAlt="food on a plate"
          imageClass="gallery-image"
        />
        <figcaption>Fashion</figcaption>
      </figure>
      <figure>
        <Image
          imageSrc={data.imageUse.childImageSharp.fluid}
          imageAlt="food on a plate"
          imageClass="gallery-image"
        />
        <figcaption>documentation</figcaption>
      </figure>
      <figure>
        <Image
          imageSrc={data.imageUse.childImageSharp.fluid}
          imageAlt="food on a plate"
          imageClass="gallery-image"
        />
        <figcaption>nature</figcaption>
      </figure>
      <figure>
        <Image
          imageSrc={data.imageUse.childImageSharp.fluid}
          imageAlt="food on a plate"
          imageClass="gallery-image"
        />
        <figcaption>light</figcaption>
      </figure>
      <figure>
        <Image
          imageSrc={data.imageUse.childImageSharp.fluid}
          imageAlt="food on a plate"
          imageClass="gallery-image"
        />
        <figcaption>studio</figcaption>
      </figure>
      <figure>
        <Image
          imageSrc={data.imageUse.childImageSharp.fluid}
          imageAlt="food on a plate"
          imageClass="gallery-image"
        />
        <figcaption>portrait</figcaption>
      </figure>
    </div>
  )
}

export default GalleryImagesContainer
