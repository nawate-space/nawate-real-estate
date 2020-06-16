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
import MemberIconImage from "../img/MemberIcon.svg";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
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
              <h3 className="is-size-5">
                小さな場所や出来事を、点々と積み重ねていくことで
                <br />
                まちと人の関係を紡いでいく
              </h3>
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
              <Honbun>
                まちにある、忘れられた余白をみつけ、場所性を生かしながら、あたらしい活動を生み出す
              </Honbun>
              <Honbun>
                人と場所、人と人との接点を生み出すような時間の流れをつくりつづける
              </Honbun>
              <Honbun>
                暮らしのなかの、生きる楽しみや経験する時間を共有できる場所をつくる
              </Honbun>
              <h3 className="is-size-4 has-text-weight-bold">
                NAWATE PROJECTとは？
              </h3>
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
              <h3 className="is-size-4 has-text-weight-bold">PROJECTの変遷</h3>
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
              <p>何か文章入れる？</p>
              <MemberArea className="columns">
                <div className="column">
                  <MemberIcon>
                    <img src={MemberIconImage} alt="Nawatespace-top" />
                  </MemberIcon>
                  <p>石井 信 / Shin Ishii</p>
                </div>
                <div className="column">
                  <MemberIcon>
                    <img src={MemberIconImage} alt="Nawatespace-top" />
                  </MemberIcon>
                  <p>成田海波 / Minami Narita</p>
                </div>
                <div className="column">
                  <MemberIcon>
                    <img src={MemberIconImage} alt="Nawatespace-top" />
                  </MemberIcon>
                  <p>片岡八重子 / Yaeko Kataoka</p>
                </div>
              </MemberArea>
              <MemberArea className="columns">
                <div className="column">
                  <MemberIcon>
                    <img src={MemberIconImage} alt="Nawatespace-top" />
                  </MemberIcon>
                  <p>原 明子 / Akiko Hara</p>
                </div>
                <div className="column">
                  <MemberIcon>
                    <img src={MemberIconImage} alt="Nawatespace-top" />
                  </MemberIcon>
                  <p>谷 勇気 / Yuki Tani</p>
                </div>
                <div className="column">
                  <MemberIcon>
                    <img src={MemberIconImage} alt="Nawatespace-top" />
                  </MemberIcon>
                  <p>佐々木 恵梨 /Eri Sasaki</p>
                </div>
              </MemberArea>
              <HorizontalLine />
              <CorporateArea>
                <h3 className="is-size-4 has-text-weight-bold">会社概要</h3>
                <br />
                <br />
                <div className="columns">
                  <div className="column">
                    <p>会社名</p>
                  </div>
                  <div className="column">
                    <p>合同会社さんさんごご</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <p>設立年</p>
                  </div>
                  <div className="column">
                    <p>2015年10月1日</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <p>所在地</p>
                  </div>
                  <div className="column">
                    <p>〒700-0026 岡山市北区奉還町4-7-15</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <p>事業内容</p>
                  </div>
                  <div className="column">
                    <p>あああああああ</p>
                  </div>
                </div>
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Navbar />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      }
    }
  }
`;
