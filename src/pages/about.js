import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"
import Image from "../components/Image/Image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "use.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
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
              imageAlt="will change later"
              imageClass="about__image-image"
              imageSrc={data.file.childImageSharp.fluid}
            />
          </div>
          <div className="about__text">
            <p className="about__text-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolor illo labore. Ipsum, earum explicabo dolore, dignissimos
              dolor perspiciatis ex quas, molestias hic ullam commodi quae odio!
              Amet, officiis praesentium!Tempore incidunt maxime, beatae
              delectus soluta natus eaque nesciunt voluptatum rem quam suscipit
              repellat blanditiis id nam dolorem, earum consequatur. Natus
              consectetur saepe nisi modi ipsam laboriosam voluptatem! Ad,
              excepturi.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
