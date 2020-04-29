import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  max-width: 800px;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
