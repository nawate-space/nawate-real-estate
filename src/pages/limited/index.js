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
        <BlockCentering
          src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F843010534&show_artwork=true&secret_token=s-hjxi4jXfZu8&omit_script=1"
          allowfullscreen
          allow="encrypted-media"
        ></BlockCentering>
      </div>
    </section>
  </Layout>
);

const BlockCentering = styled.iframe`
  margin: auto;
  display: block;
`;

export default LimitedPage;
