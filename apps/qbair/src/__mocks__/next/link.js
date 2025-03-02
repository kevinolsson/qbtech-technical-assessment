// __mocks__/next/link.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Link = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
);

export default Link;
