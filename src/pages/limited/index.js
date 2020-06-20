import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

const LimitedPage = () => (
  <Layout>
    <Navbar />
    <section className="section">
      <Helmet title="限定コンテンツ" />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">限定コンテンツ</h1>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default LimitedPage;
