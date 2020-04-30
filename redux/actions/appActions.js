import apiClient from '../../api/apiClient';

export const SET_POST = 'SET_POST';
export const SET_POSTS = 'SET_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const SET_MESSAGE = 'SET_MESSAGE';
export const RESET_MESSAGE = 'RESET_MESSAGE';

//-----------------------------------------
export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const setPost = (post) => ({
  type: SET_POST,
  payload: post,
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data: fetchedPosts } = await apiClient.get('/');
      dispatch(setPosts(fetchedPosts));
    } catch (error) {
      dispatch(setMessage('Fail to fetch posts'));
    }
  };
};

export const fetchPost = (postId) => {
  return async (dispatch) => {
    try {
      const { data: fetchedPost } = await apiClient.get(`/${postId}?_embed=comments`);
      dispatch(setPost(fetchedPost));
    } catch (error) {
      dispatch(setMessage('Fail to fetch post'));
    }
  };
};
