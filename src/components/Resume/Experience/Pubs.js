import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Pubs = ({
  data: {
    name, pub, people, codeUrl, slidesUrl, pdfUrl, videoUrl,
  },
}) => (
  <article className="pubs-container">
    <p>
      <strong>{name}</strong>
    </p>
    <p>
      <Markdown>{people}</Markdown>
    </p>
    <p>
      <em>{pub}</em>
    </p>
    <p>
      {[
        pdfUrl && <a key="pdf" href={pdfUrl}>pdf</a>,
        codeUrl && <a key="code" href={codeUrl}>codes</a>,
        slidesUrl && <a key="slides" href={slidesUrl}>slides</a>,
        videoUrl && <a key="video" href={videoUrl}>video</a>,
      ]
        .filter(Boolean)
        .map((item, index, arr) => (index < arr.length - 1 ? [item, ' | '] : item))}
    </p>
  </article>
);

Pubs.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    pub: PropTypes.string,
    people: PropTypes.string,
    codeUrl: PropTypes.string,
    slidesUrl: PropTypes.string,
    pdfUrl: PropTypes.arrayOf(PropTypes.string),
    videoUrl: PropTypes.string,
  }).isRequired,
};

export default Pubs;
