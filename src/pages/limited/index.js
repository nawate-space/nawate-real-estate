import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import media from "styled-media-query";
import LimitedLogo from "../../img/LimitedLogo.png";
import instagram from "../../img/social/instagram.svg";

const LimitedPage = () => (
  <Layout>
    <Helmet>
      <script
        type="text/javascript"
        src="https://cdn.iframe.ly/embed.js"
        charset="utf-8"
      />
    </Helmet>
    <Navbar />
    <section className="section">
      <Helmet title="LimitedContents" />
      <div className="container content">
        <StyledLogo>
          <img src={LimitedLogo}></img>
        </StyledLogo>
        <br />
        <br />
        <Honbun className="has-text-centered">
          ー お便り募集のテーマ ー<br />
          あなたの周りの、半径100m以内にある最近の朝の風景を教えてください。
        </Honbun>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/844161601&color=%2382d1c7&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/kapo-ritmo"
            title="kapo-ritmo"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            kapo-ritmo
          </a>
          ·
          <a
            href="https://soundcloud.com/kapo-ritmo/present"
            title="present(by NAWATE PROJECT)"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            present(by NAWATE PROJECT)
          </a>
        </div>
        <HonbunDiv>
          <Honbun>
            BGM / present ( by NAWATE PROJECT ) <br />
            とりいくぐるや4丁目を舞台に、音楽をつくりました。
            <br />
            このごろの奉還町の朝の音を贈ります。ぜひ作業中のBGMとして聴いてみてください。
          </Honbun>
          <HonbunTyuSyaku>
            SoundCloudのアプリをお持ちでない方は、Listen in
            browserを選択してください。
          </HonbunTyuSyaku>
          <Honbun>
            <br />
            音楽: Kapo-ritmo, 岩本象一
            <br /> 録音, 編集: Kapo <br />
            協力: nawate staff
          </Honbun>
        </HonbunDiv>
        <HonbunDiv className="columns">
          <Honbun>企画: NAWATE PROJECT</Honbun>
          <a
            title="instagram"
            href="https://www.instagram.com/nawate_project/"
            target="_blank"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{
                width: "1em",
                height: "1em",
                marginLeft: "1em",
                pointer: "cursor",
              }}
            />
          </a>
        </HonbunDiv>
      </div>
    </section>
  </Layout>
);

const StyledLogo = styled.div`
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

const Honbun = styled.p`
  font-family: A1 Gothic R;
  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
      font-size: 0.8rem;
`} ${media.greaterThan("medium")`
  /* screen width is greater than 1170px (large) */
      
`};
`;

const HonbunTyuSyaku = styled.p`
  font-family: A1 Gothic R;
  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
      font-size: 0.6rem;
`} ${media.greaterThan("medium")`
  /* screen width is greater than 1170px (large) */
  font-size: 0.8rem;
`};
`;

const HonbunDiv = styled.div`
  margin: auto;
  display: inline-block;
`;

export default LimitedPage;
