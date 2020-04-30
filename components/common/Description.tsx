import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.p`
  text-align: center;
  margin: 1rem 0;
  line-height: 1.2;
  font-size: 3rem;
  max-width: 800px;
  color: #777;

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

const Description: React.FC = ({ children }) => <StyledDescription>{children}</StyledDescription>;

export default Description;
