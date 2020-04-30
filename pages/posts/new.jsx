import React from 'react';

import { connect } from 'react-redux';
import { fetchPosts, setMessage } from '../../redux/actions/appActions';
import NewPost from '../../components/pages/NewPost';
import apiClient from '../../api/apiClient';

const NewPostHoc = ({ dispatchFetchPosts, dispatchSetMessage, message }) => {
  const handleSubmit = async (title, body) => {
    try {
      const response = await apiClient.post('/', { title, body });
      dispatchSetMessage('New post added successfully');
      dispatchFetchPosts();
    } catch (error) {
      dispatchSetMessage('Fail to add new post');
    }
  };

  const handleClose = () => {
    dispatchSetMessage('');
  };

  return <NewPost message={message} handleClose={handleClose} handleSubmit={handleSubmit} />;
};

const mapStateToProps = (state) => ({
  message: state.app.message,
});

const MapDispatchToProps = (dispatch) => ({
  dispatchFetchPosts: () => dispatch(fetchPosts()),
  dispatchSetMessage: (message) => dispatch(setMessage(message)),
});

export default connect(mapStateToProps, MapDispatchToProps)(NewPostHoc);
