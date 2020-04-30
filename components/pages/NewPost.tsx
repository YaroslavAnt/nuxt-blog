import React from 'react';

import Container from '../layout/Container';
import Form from '../common/Form';
import Header from '../layout/Header';
import Main from '../layout/Main';
import SimpleDialog from '../common/SimpleDialog';
import { NewPostPageInterface } from '../../types';

const NewPage = ({ handleSubmit, handleClose, message }: NewPostPageInterface) => {
  return (
    <Container>
      <Header />
      <Main>
        <Form onSubmit={handleSubmit} />
      </Main>
      <SimpleDialog onClose={handleClose} open={Boolean(message)} message={message} />
    </Container>
  );
};

export default NewPage;
