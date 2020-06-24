import React from "react";
import PropTypes from "prop-types";
import { ProjectArchivePageTemplate } from "../../templates/project-archive-page";

const ProjectArchivePagePreview = ({ entry, widgetFor }) => {
  const entryProjects = entry.getIn(["data", "allProjects", "projects"]);
  const projects = entryProjects ? entryProjects.toJS() : [];
  return (
    <ProjectArchivePageTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
      allProjects={{
        heading: entry.getIn(["data", "allProjects", "heading"]),
        description: entry.getIn(["data", "allProjects", "description"]),
        projects: projects,
      }}
    />
  );
};

ProjectArchivePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProjectArchivePagePreview;
