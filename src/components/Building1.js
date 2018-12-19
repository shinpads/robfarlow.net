import React, { Component } from 'react';

import Building1Svg from '../../public/building1.svg';

const Building1 = ({
  color,
  scale
}) => {
  return (
    <div style={{ transform: `scale(${scale})` }}>
      <object data={Building1Svg} type="image/svg+xml">
        <img src={Building1Svg} />
      </object>
    </div>
  );
};

export default Building1;
