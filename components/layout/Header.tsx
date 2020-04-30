import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Typography, Button } from '@material-ui/core';

export const StyledHeader = styled.header`
  left: 0px;
  bottom: 0px;
  box-sizing: border-box;
  height: 80px;
  border-top: 1px solid #eeeff4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 0 3rem;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <Typography variant="h3">Blog App</Typography>
        </a>
      </Link>
      <Link href="/posts/new">
        <a>
          <Button variant="contained" color="primary">
            New Post
          </Button>
        </a>
      </Link>
    </StyledHeader>
  );
};

export default Header;
