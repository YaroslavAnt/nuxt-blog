import React from 'react';
import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const CardsGrid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default CardsGrid;
