import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
  const entryDescriptions = entry.getIn(["data", "descriptions"]);
  const descriptions = entryDescriptions ? entryDescriptions.toJS() : [];

  const entryMembers = entry.getIn(["data", "members"]);
  const members = entryMembers ? entryMembers.toJS() : [];

  const entryCorporate = entry.getIn(["data", "corporate"]);
  const corporate = entryCorporate ? entryCorporate.toJS() : [];

  return (
    <AboutPageTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
      heading={entry.getIn(["data", "heading"])}
      descriptions={descriptions}
      theme1={entry.getIn(["data", "theme1"])}
      theme2={entry.getIn(["data", "theme2"])}
      members={members}
      corporate={corporate}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
