import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Paper, Button } from '@material-ui/core';
import { FormInterface } from '../../types';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const inputBase = css`
  margin: 10px 0;
  padding: 20px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #aaa;
  width: 300px;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;

  ::placeholder {
    font-size: 1rem;
    color: #aaa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
  }
`;

const StyledInput = styled.input`
  ${inputBase}
`;

const StyledArea = styled.textarea`
  ${inputBase};
  resize: none;
  height: 200px;
`;

const Form = ({ onSubmit }: FormInterface) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <Paper elevation={3}>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          name="title"
          placeholder="Title"
        />
        <StyledArea
          value={body}
          onChange={({ target }) => setBody(target.value)}
          name="body"
          placeholder="Description"
        />
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Paper>
  );
};

export default Form;
