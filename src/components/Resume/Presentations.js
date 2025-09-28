import React from 'react';
import PropTypes from 'prop-types';

import Pres from './Experience/Pres';

const Presentations = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="presentations" />
    <div className="title">
      <h3>Presentations</h3>
    </div>
    {data.map((job) => (
      <Pres data={job} key={`${job.name}`} />
    ))}
  </div>
);

Presentations.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      pre1: PropTypes.string,
      loc1: PropTypes.string,
      pre2: PropTypes.string,
      loc2: PropTypes.string,
    }),
  ),
};

Presentations.defaultProps = {
  data: [],
};

export default Presentations;
