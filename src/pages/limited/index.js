import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

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
        <div className="columns">
          <div
            className="column has-text-centered"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              LimitedContents
            </h1>
          </div>
        </div>
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
      </div>
    </section>
  </Layout>
);

export default LimitedPage;
