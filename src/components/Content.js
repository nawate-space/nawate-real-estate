import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
  <Honbun className={className}>{content}</Honbun>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;

const Honbun = styled.div`
  margin-bottom: 5rem;
  font-family: A1 Gothic R;
`;
