import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Pres = ({
  data: {
    name, pre1, loc1, pre2, loc2,
  },
}) => (
  <article className="pubs-container">
    <p>
      <strong>{name}</strong>
    </p>
    <p style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Markdown style={{ marginBottom: '-2em' }}>{pre1}</Markdown>
      <em>{loc1}</em>
    </p>
    <p style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Markdown style={{ marginBottom: '-2em' }}>{pre2}</Markdown>
      <em>{loc2}</em>
    </p>
    <br />
  </article>
);

Pres.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    pre1: PropTypes.string,
    loc1: PropTypes.string,
    pre2: PropTypes.string,
    loc2: PropTypes.string,
  }).isRequired,
};

export default Pres;
