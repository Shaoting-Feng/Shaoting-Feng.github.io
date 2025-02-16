import React from 'react';
import PropTypes from 'prop-types';

import Pubs from './Experience/Pubs';

const Publications = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((job) => (
      <Pubs data={job} key={`${job.name}`} />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      pub: PropTypes.string,
      people: PropTypes.string,
      code_url: PropTypes.string,
      slides_url: PropTypes.string,
      pdf_url: PropTypes.arrayOf(PropTypes.string),
      video_url: PropTypes.string,
    }),
  ),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
