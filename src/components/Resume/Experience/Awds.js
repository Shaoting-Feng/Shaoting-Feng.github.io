import React from 'react';
import PropTypes from 'prop-types';

const Awds = ({
  data: {
    name, year, place, description,
  },
}) => (
  <article className="pubs-container">
    <p>
      <strong>{name}</strong>
    </p>
    <p>
      {place} · {year}
    </p>
    <p>
      {description}
    </p>
    <br />
  </article>
);

Awds.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.string,
    place: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Awds;
