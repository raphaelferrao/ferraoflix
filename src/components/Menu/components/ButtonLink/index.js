import React from 'react';

const ButtonLink = (props) => (
  <a className={props.className} href={props.href}>
    {props.children}
  </a>
);

export default ButtonLink;
