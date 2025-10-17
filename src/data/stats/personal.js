import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
    const birthTime = new Date('2002-07-13T21:00:00+08:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 15,
    link: 'https://www.google.com/maps/d/u/0/edit?mid=1qzVHVP5kRz-UYEzCw91U03a1Q575hj0&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Foster City, CA',
  },
  // {
  //   key: 'hiking',
  //   label: 'Hiking',
  //   value: 'Check out my profile on AllTrails',
  //   link: 'https://www.alltrails.com/en/members/shaoting-feng?utm_campaign=mobile-iphone&sh=idkjan',
  // },
];

export default data;
