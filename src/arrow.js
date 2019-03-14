import React from 'react';
import styled from 'styled-components';

export default function Arrow(props) {
  return (
    <SVG
      {...props}
      viewBox="0 0 24 24"
      className={props.expanded ? 'expanded' : null}
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </SVG>
  );
}

const SVG = styled.svg`
  width: 24px;
  &.expanded {
    transform: scaleY(-1);
  }
`;
