import React from 'react';

import Comments from '../common/Comments';
import Container from '../layout/Container';
import Description from '../common/Description';
import Header from '../layout/Header';
import Main from '../layout/Main';
import SimpleDialog from '../common/SimpleDialog';
import Title from '../common/Title';
import { PostPageInterface } from '../../types';

const Post = ({ post, message, handleClose }: PostPageInterface) => {
  const { title, comments, body } = post;

  return (
    <Container>
      <Header />
      <Main>
        <Title>{title}</Title>
        <Description>{body}</Description>
        {title && <Comments comments={comments} />}
      </Main>
      <SimpleDialog onClose={handleClose} open={Boolean(message)} message={message} />
    </Container>
  );
};

export default Post;
