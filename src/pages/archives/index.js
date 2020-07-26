import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";

import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../../components/Layout";
import ArchiveRoll from "../../components/ArchiveRoll";
import ArchiveSideView from "../../components/ArchiveSideView";
import Navbar from "../../components/Navbar";

const ArchiveIndexPage = ({ data }) => {
  const { allMarkdownRemark: tagGroups } = data;
  console.log(tagGroups);

  return (
    <Layout>
      <Navbar />
      <GridBody>
        <MainDiv className="container">
          <h2 className="title is-size-3 has-text-centered has-text-weight-bold is-bold-light">
            nawateアーカイブ
          </h2>
          <div>
            <h3 className="has-text-centered has-text-weight-bold">about</h3>
            <p className="has-text-centered">nawateアーカイブについて</p>
          </div>
          <div className="content">
            <p className="has-text-centered">nawateアーカイブ一覧</p>
            <ArchiveRoll />
          </div>
        </MainDiv>
        <SideDiv>
          <ArchiveSideView tagGroups={tagGroups}></ArchiveSideView>
        </SideDiv>
      </GridBody>
    </Layout>
  );
};

ArchiveIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      tagGroups: PropTypes.array,
    }),
  }),
};

export default ArchiveIndexPage;

export const pageQuery = graphql`
  query ArchivesIndex {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___archivetags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const GridBody = styled.div`
  display: flex;
  background-color: #ebcfb5;
`;

const MainDiv = styled.div`
  flex: 1 1 80%;
  margin: 10px 10px 10px 10px;
`;

const SideDiv = styled.div`
  flex: 1 1 20%;
  margin: 10px 10px 10px 10px;
`;
