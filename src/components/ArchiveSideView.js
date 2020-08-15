import React from "react";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";

import styled from "styled-components";
import media from "styled-media-query";

const ArchiveSideView = ({ tagGroups }) => (
  <div>
    <p>ロゴ</p>
    <NoColorLink to="/archives" className="is-size-4">
      About
    </NoColorLink>
    <br />
    <p className="is-size-4">Category</p>
    <br />
    <ul className="taglist">
      {tagGroups.group.map((tag) => (
        <li key={tag.fieldValue}>
          <NoColorLink to={`/archivetags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </NoColorLink>
        </li>
      ))}
    </ul>
  </div>
);

export default ArchiveSideView;

const NoColorLink = styled(Link)`
  color: inherit;
`;
