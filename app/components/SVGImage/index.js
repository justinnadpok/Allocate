// @flow

import React from 'react';

type Props = {
  src: any, // should be Object, but Flow for some reason thinks this is a string
  width?: number,
  height?: number,
  size?: number,
  className?: string,
}

const SVGImage = ({ src, width, height, size, className }: Props) => (
  <svg
    className={className}
    width={width || size}
    height={height || size}
    viewBox={src.viewBox}
  >
    <use xlinkHref={`#${src.id}`} />
  </svg>
);

SVGImage.defaultProps = {
  width: '100%',
  height: '100%',
};

export default SVGImage;
