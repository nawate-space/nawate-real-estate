import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/Layout";
import Features from "../components/Features";
import ImageSwiper from "../components/ImageSwiper";
import BlogRoll from "../components/BlogRoll";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import logo from "../img/logo-1-1.jpg";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Logo>
      <img src={logo} alt="Nawatespace-Logo" />
    </Logo>
    <ImageSwiper
      gridItems={intro.blurbs}
      style={{ position: "relative", zIndex: "10" }}
    ></ImageSwiper>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <div className="content">
                <Link className="title" to="/about">
                  About
                </Link>
                <br />
                <br />
                <div className="column is-12 has-text-centered social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Logo = styled.div`
  position: absolute;
  z-index: 20;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    top: 20vh;
        left: 0;
        width: 100vw;
        height: 20vh;
  `}

  ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
    top: 20vh;
        left: 40vw;
        width: 300px;
        height: 80px;
  `}
`;

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
