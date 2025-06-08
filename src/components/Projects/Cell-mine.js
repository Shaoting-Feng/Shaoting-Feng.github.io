import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Function to go to the previous image
  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };

  // Function to go to the next image
  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>
            <a href={data.link}>{data.title}</a>
          </h3>
          {data.subtitle && (
            <h3 className="published">
              <a href={data.link}>{data.subtitle}</a>
            </h3>
          )}
          {data.date && (
            <time className="published">
              {dayjs(data.date).format('MMMM, YYYY')}
            </time>
          )}
        </header>
        <div
          className="image-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '100%',
            height: '15em',
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <a href={data.link} className="image">
              <img
                src={`${process.env.PUBLIC_URL}${data.images[currentImage]}`}
                alt={data.title}
                style={{
                  maxHeight: '12em',
                  maxWidth: '95%',
                  width: 'auto',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </a>
          </div>
          <div
            className="image-navigation"
            style={{
              marginTop: 'auto',
              display: 'flex',
            }}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrevImage}
              className="nav-button"
            >
              Previous
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNextImage}
              className="nav-button"
            >
              Next
            </button>
          </div>
        </div>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
