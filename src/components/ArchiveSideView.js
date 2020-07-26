import React from "react";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";

import styled from "styled-components";
import media from "styled-media-query";

const ArchiveSideView = ({ tagGroups }) => (
  <div>
    <p>ロゴ</p>
    <Link to="/archives">About</Link>
    <br />
    <p>Category</p>
    <br />
    <ul className="taglist">
      {tagGroups.group.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/archivetags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ArchiveSideView;
