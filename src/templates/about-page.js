import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import media from "styled-media-query";

import TopImage from "../img/NAWATE-PROJECT-TOP-s.jpg";
import ViewMoreImage from "../img/ViewMore.svg";
import LogoImage from "../img/NAWATELogo.svg";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  heading,
  descriptions,
  theme1,
  theme2,
  members,
  corporate,
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
              <h3 className="is-size-5">{heading}</h3>
              <br />
              <br />
              <div className="columns">
                <div className="column">
                  <Top>
                    <img src={TopImage} alt="Nawatespace-top" />
                  </Top>
                </div>
                <div className="column">
                  <Top>
                    <img src={TopImage} alt="Nawatespace-top" />
                  </Top>
                </div>
              </div>
              <div>
                {descriptions.map((description) => (
                  <Honbun>{description.text}</Honbun>
                ))}
              </div>
              <h3 className="is-size-4 has-text-weight-bold">{theme1}</h3>
              <LogoArea className="columns">
                <div className="column">
                  <Logo>
                    <img src={LogoImage} alt="Nawatespace-top" />
                  </Logo>
                </div>
                <div className="column">
                  <Logo>
                    <img src={LogoImage} alt="Nawatespace-top" />
                  </Logo>
                </div>
                <div className="column">
                  <Logo>
                    <img src={LogoImage} alt="Nawatespace-top" />
                  </Logo>
                </div>
              </LogoArea>
              <ViewMore to="/">
                <img src={ViewMoreImage} alt="To-What-NAWATE"></img>
              </ViewMore>
              <h3 className="is-size-4 has-text-weight-bold">{theme2}</h3>
              <LogoArea className="columns">
                <div className="column">
                  <Logo>
                    <img src={LogoImage} alt="Nawatespace-top" />
                  </Logo>
                </div>
                <div className="column">
                  <Logo>
                    <img src={LogoImage} alt="Nawatespace-top" />
                  </Logo>
                </div>
                <div className="column">
                  <Logo>
                    <img src={LogoImage} alt="Nawatespace-top" />
                  </Logo>
                </div>
              </LogoArea>
              <ViewMore to="/">
                <img src={ViewMoreImage} alt="To-Footprints-NAWATE"></img>
              </ViewMore>
              <h3 className="is-size-4 has-text-weight-bold">
                PROJECTメンバー
              </h3>
              <MemberArea className="columns is-multiline">
                {members.map((member) => (
                  <div className="column">
                    <MemberIcon
                      style={{
                        backgroundImage: `url(${
                          !!member.image.childImageSharp
                            ? member.image.childImageSharp.fluid.src
                            : member.image
                        })`,
                        backgroundSize: "contain",
                      }}
                    ></MemberIcon>
                    <p>{member.name}</p>
                  </div>
                ))}
              </MemberArea>

              <HorizontalLine />
              <CorporateArea>
                <h3 className="is-size-4 has-text-weight-bold">会社概要</h3>
                <br />
                <br />
                {corporate.map((item) => (
                  <div className="columns">
                    <div className="column">
                      <p>{item.title}</p>
                    </div>
                    <div className="column">
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </CorporateArea>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Top = styled.div`
  margin: auto;
  display: inline-block;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 90vw;
        height: 10vh;
  `} ${media.greaterThan("medium")`
    /* screen width is greater than 1170px (large) */
        width: 500px;
        height: 200px;
  `};
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
  display: block;
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
  display: block;
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
  margin-top: 6rem;
  margin-bottom: 2rem;
  display: block;
  width: 80vw;
  height: 2px;
  background-color: #c4c4c4;
`;

const CorporateArea = styled.div`
  margin: auto;
  display: block;
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  heading: PropTypes.string,
  descriptions: PropTypes.array,
  theme1: PropTypes.string,
  theme2: PropTypes.string,
  members: PropTypes.array,
  corporate: PropTypes.array,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Navbar />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        descriptions={post.frontmatter.descriptions}
        content={post.html}
        theme1={post.frontmatter.theme1}
        theme2={post.frontmatter.theme2}
        members={post.frontmatter.members}
        corporate={post.frontmatter.corporate}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        descriptions {
          text
        }
        theme1
        theme2
        members {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
        }
        corporate {
          title
          body
        }
      }
    }
  }
`;
