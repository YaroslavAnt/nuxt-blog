import {
  SET_POST,
  SET_POSTS,
  SET_MESSAGE,
  RESET_MESSAGE,
} from "../actions/appActions";

const initialState = {
  post: {},
  posts: [],
  message: "",
};

const reducer = (state = initialState, action = null) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, post: action.payload };

    case SET_POSTS:
      return { ...state, posts: action.payload };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case RESET_MESSAGE:
      return { ...state, message: "" };

    default:
      return { ...state };
  }
};

export default reducer;
