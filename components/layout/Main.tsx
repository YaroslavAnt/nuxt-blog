import React from 'react';
import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 5rem 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
`;

const Main: React.FC = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
