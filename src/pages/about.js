import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"
import Image from "../components/Image/Image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        aboutImage {
          description
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)
  return (
    <Layout footerColor="black" footerDisplay="block" linkColor="black">
      <SEO title="Catar photography | About" />
      <section className="about">
        <h2 className="section-header">About Me</h2>
        <div className="about__cont">
          <div className="about__image">
            <Image
              imageAlt={data.contentfulAbout.aboutImage.description}
              imageClass="about__image-image"
              imageSrc={data.contentfulAbout.aboutImage.fluid}
            />
          </div>
          <div className="about__text">
            <p className="about__text-text">
              I am Ayomikun Owolabi, Catar. My love for Art was born at age ten,
              when capturing moments was done with crayon and paper and from "My
              Book of Bible Stories"- a must have for kids then. As technology
              permeated the boundaries of Nigeria, I not only recreated
              pictures, I began to capture moments through pictures.
            </p>
            <p className="about__text-text">
              I started with an IPhone 6 and my first model, Mariam, who turned
              out to become my biggest fan and the catalyst behind the creation
              of catar_photography, my Instagram photography page. Many people
              don't believe my pictures are products of a phone maybe they never
              will.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
