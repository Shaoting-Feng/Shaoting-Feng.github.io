import React from 'react';
import PropTypes from 'prop-types';

import Awds from './Experience/Awds';

const Awards = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards</h3>
    </div>
    {data.map((job) => (
      <Awds data={job} key={`${job.name}-${job.year}`} />
    ))}
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      year: PropTypes.string,
      place: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
