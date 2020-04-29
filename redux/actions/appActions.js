import apiClient from "../../api/apiClient";

export const SET_POST = "SET_POST";
export const SET_POSTS = "SET_POSTS";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const SET_MESSAGE = "SET_MESSAGE";
export const RESET_MESSAGE = "RESET_MESSAGE";

//-----------------------------------------
export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data: fetchedPosts } = await apiClient.get("/");
      setPosts(fetchedPosts);
    } catch (error) {
      dispatch({ SET_MESSAGE, payload: "Fail to fetch posts" });
    }
  };
};
