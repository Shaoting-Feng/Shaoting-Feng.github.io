import React from 'react';

const LastUpdated = () => {
  const buildDate = process.env.REACT_APP_BUILD_DATE || 'Unknown';

  return (
    <div className="copyright">
      Last updated: {buildDate}
    </div>
  );
};

export default LastUpdated;
