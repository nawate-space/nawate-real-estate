import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ArchiveSideView from "../components/ArchiveSideView";
import Content, { HTMLContent } from "../components/Content";

import styled from "styled-components";
import media from "styled-media-query";

export const ArchivePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  youtube,
  era,
  color,
  howlong,
  tagGroups,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      {helmet || ""}
      <GridBody>
        <MainDiv className="container content">
          <div>
            <div>{youtube || ""}</div>
            <div>
              <p>title</p>
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
            </div>
            <DetailDiv className="has-text-weight-bold">
              <p>
                {era} / {color} / {howlong}
              </p>
            </DetailDiv>
            <DescriptionDiv>
              <p>{description}</p>
              <br />
              <p>———————————————</p>
            </DescriptionDiv>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </MainDiv>
        <SideDiv>
          <ArchiveSideView tagGroups={tagGroups}></ArchiveSideView>
        </SideDiv>
      </GridBody>
    </div>
  );
};

ArchivePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  youtube: PropTypes.object,
  era: PropTypes.string,
  color: PropTypes.string,
  howlong: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  tagGroups: PropTypes.array,
};

const ArchivePost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { allMarkdownRemark: tagGroups } = data;

  return (
    <Layout>
      <Navbar />
      <ArchivePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Archive">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.archivetags}
        title={post.frontmatter.title}
        youtube={
          <iframe
            width="560"
            height="315"
            src={`${post.frontmatter.youtube}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
        era={post.frontmatter.era}
        color={post.frontmatter.color}
        howlong={post.frontmatter.howlong}
        tagGroups={tagGroups}
      />
    </Layout>
  );
};

ArchivePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.object,
  }),
};

export default ArchivePost;

export const pageQuery = graphql`
  query ArchivePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        youtube
        era
        color
        howlong
        title
        description
        archivetags
      }
    }
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
  background-color: #faf0e6;
`;

const MainDiv = styled.div`
  flex: 1 1 80%;
  margin: 2em 2em 0 5em;
  font-family: Yu Mincho;
`;

const SideDiv = styled.div`
  flex: 1 1 20%;
  font-family: Yu Mincho;
`;

const DetailDiv = styled.div`
  font-size: 0.8em;
`;

const DescriptionDiv = styled.div`
  font-size: 0.8em;
  margin: 1em 0 2em 10em;
`;
