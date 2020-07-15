import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Navbar from "../../components/Navbar";

export default class ArchiveIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <section className="section">
          <div className="container">
            <h2 className="title is-size-3 has-text-centered has-text-weight-bold is-bold-light">
              Archive
            </h2>
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
