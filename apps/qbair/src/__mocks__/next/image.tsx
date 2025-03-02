import React from 'react';

// Jest was complaining about fill!

// __mocks__/next/image.js
export default function MockImage({ fill, onLoadingComplete, ...otherProps }: { fill?: boolean; [attr: string]: any }) {
  const { src, alt, ...rest } = otherProps;
  return <img src={src} alt={alt} {...rest} />;
}
