import React, { Component } from 'react';

import Building1Svg from '../../public/building1.svg';
import Building2Svg from '../../public/building2.svg';
import SunSvg from '../../public/sun.svg';
import CloudSvg from '../../public/cloud.svg';

export const Building1 = ({
  color,
  scale,
  style = {},
}) => {
  style.transform = `scale(${scale})`;
  style.position = 'fixed';
  return (
    <div style={style}>
      <object data={Building1Svg} type="image/svg+xml">
        <img src={Building1Svg} />
      </object>
    </div>
  );
};

export const Building2 = ({
  color,
  scale,
  style = {},
}) => {
  style.transform = `scale(${scale})`;
  style.position = 'fixed';
  return (
    <div style={style}>
      <object data={Building2Svg} type="image/svg+xml">
        <img src={Building2Svg} />
      </object>
    </div>
  );
};

export const Sun = ({
  color,
  scale,
  style = {},
}) => {

  style.height = 'fit-content';
  style.transform = `scale(${scale})`;
  style.width = 'fit-content';
  style.position = 'fixed';

  return (
    <div style={style}>
      <div style={{ width: 'fit-content', height: 'fit-content' }} className="sun">
        <object data={SunSvg} type="image/svg+xml">
          <img src={SunSvg} />
        </object>
      </div>
    </div>
  );
};

export const Cloud = ({
  color,
  scale,
  style = {},
}) => {

  style.height = 100 * scale + 'px';
  style.width = 100 * scale + 'px';
  style.position = 'fixed';

  return (
    <div style={style}>
      <div style={{ width: 'fit-content', height: 'fit-content' }} className="cloud">
        <object style={{ width: '100%', height: '100%' }} data={CloudSvg} type="image/svg+xml">
          <img src={CloudSvg} />
        </object>
      </div>
    </div>
  );
};
