import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/Layout";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import TopImage from "../img/NAWATE-PROJECT-TOP-s.jpg";

export const IndexPageTemplate = ({ description }) => (
  <Body>
    <section className="section section--gradient">
      <div className="has-text-centered">
        <div className="content">
          <Logo>
            <img src={TopImage} alt="Nawatespace-top-image" />
          </Logo>
          <br />
          <br />
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <NoColorLink to="/about" className="is-size-4">
                VISION
              </NoColorLink>
            </div>
            <div className="column">
              <NoColorLink to="/about" className="is-size-4">
                PROJECT ARCHIVE
              </NoColorLink>
            </div>
            <div className="column">
              <NoColorLink to="/about" className="is-size-4">
                CONTACT
              </NoColorLink>
            </div>
            <div className="column"></div>
          </div>
          <br />
          <br />
          <p className="is-size-5">{description}</p>
          <br />
          <br />
          <div>
            <NoColorLink to="/about" className="is-size-4">
              NEWS
            </NoColorLink>
          </div>
          <br />
          <br />
          <div className="column is-12 has-text-centered social">
            <a title="facebook" href="https://facebook.com" target="_blank">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a
              title="instagram"
              href="https://www.instagram.com/3355_nawate/"
              target="_blank"
            >
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="twitter" href="https://twitter.com" target="_blank">
              <img
                src={twitter}
                alt="Twitter"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </Body>
);

const Logo = styled.div`
  margin: auto;
  display: inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 100vw;
        height: 10vh;
  `} ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
        width: 500px;
        height: 200px;
  `};
`;
const NoColorLink = styled(Link)`
  color: inherit;
`;

const Body = styled.div`
  font-family: A1 Gothic R;
`;

IndexPageTemplate.propTypes = {
  description: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate description={frontmatter.description} />
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
        description
      }
    }
  }
`;
