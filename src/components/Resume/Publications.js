import React from 'react';
import PropTypes from 'prop-types';

import Pubs from './Experience/Pubs';

const Publications = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Selected Publications</h3>
      <div
        style={{
          marginTop: '-0.5em',
          marginBottom: '1em',
          color: '#555',
          fontSize: '0.95em',
        }}
      >
        For a complete list of publications, please visit my{' '}
        <a
          href="https://scholar.google.com/citations?user=HJ3InCAAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0366d6',
            textDecoration: 'none',
          }}
        >
          Google Scholar profile
        </a>
        .
      </div>
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
      pdf_url: PropTypes.string,
      video_url: PropTypes.string,
    }),
  ),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
