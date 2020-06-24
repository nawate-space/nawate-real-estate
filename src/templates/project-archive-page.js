import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import media from "styled-media-query";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import TopImage from "../img/NAWATE-PROJECT-TOP-s.jpg";
import ViewMoreImage from "../img/ViewMore.svg";
import LogoImage from "../img/NAWATELogo.svg";
import MemberIconImage from "../img/MemberIcon.svg";

export const ProjectArchivePageTemplate = ({
  title,
  content,
  contentComponent,
  allProjects,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="section">
              <h2 className="title is-size-3  has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <br />
              <br />
              <PageContent className="content" content={content} />
              <br />
              <br />
              {allProjects.projects.map((item) => (
                <div>
                  <ProjectLogo
                    style={{
                      backgroundImage: `url(${
                        !!item.image.childImageSharp
                          ? item.image.childImageSharp.fluid.src
                          : item.image
                      })`,
                      backgroundSize: "contain",
                    }}
                  >
                    {item.new ? (
                      <NewBlock>
                        <p>new</p>
                      </NewBlock>
                    ) : (
                      <NumberBlock>
                        <img
                          src={LogoImage}
                          style={{
                            width: "2rem",
                            height: "2rem",
                            marginRight: "0.5rem",
                          }}
                        ></img>
                        <p className="is-size-3 has-text-weight-bold">
                          {item.text}
                        </p>
                      </NumberBlock>
                    )}
                  </ProjectLogo>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectLogo = styled.div`
  margin: auto;
  display: inline-block;
  position: relative;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 90vw;
        height: 10vh;
  `} ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
        width: 800px;
        height: 200px;
  `};
`;

const NewBlock = styled.div`
  position: absolute;
  background-color: #000000;
  color: #ffffff;
  left: 1rem;
  width: 2rem;
  height: 5rem;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  align-items: center;
`;

const NumberBlock = styled.div`
  position: absolute;
  display: flex;
  bottom: 1rem;
  width: 5rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  margin: auto;
  display: inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 90vw;
        height: 10vh;
  `} ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
        width: 50px;
        height: 50px;
  `};
`;

const LogoArea = styled.div`
  margin: auto;
  display: inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 90vw;
        height: 10vh;
  `} ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
        width: 300px;
        height: 80px;
  `};
`;

const Honbun = styled.p`
  margin-bottom: 5rem;
  font-family: A1 Gothic R;
`;

const ViewMore = styled(Link)`
  margin: auto;
  display: inline-block;
  cursor: pointer;
  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
      width: 50vw;
      height: 10vh;
`} ${media.greaterThan("medium")`
  /* screen width is greater than 1170px (large) */
      width: 250px;
      height: 200px;
`};
`;

const MemberIcon = styled.div`
  margin: auto;
  display: inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 90vw;
        height: 10vh;
  `} ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
        width: 130px;
        height: 130px;
  `};
`;

const MemberArea = styled.div`
  margin: auto;
  display: inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 90vw;
        height: 10vh;
  `} ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
        width: 600px;
        height: 300px;
  `};
`;

const HorizontalLine = styled.div`
  margin-bottom: 2rem;
  display: inline-block;
  width: 80vw;
  height: 2px;
  background-color: #c4c4c4;
`;

const CorporateArea = styled.div`
  margin: auto;
  display: inline-block;
  text-align: left;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 90vw;
        height: 10vh;
  `} ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
        width: 600px;
        height: 300px;
  `};
`;

ProjectArchivePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  allProjects: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    projects: PropTypes.array,
  }),
};

const ProjectArchivePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Navbar />
      <ProjectArchivePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        allProjects={post.frontmatter.allProjects}
      />
    </Layout>
  );
};

ProjectArchivePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectArchivePage;

export const projectArchivePageQuery = graphql`
  query ProjectArchivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        allProjects {
          heading
          description
          projects {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            new
          }
        }
      }
    }
  }
`;
