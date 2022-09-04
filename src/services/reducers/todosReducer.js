import {
  GET_API_ERROR,
  GET_API_REQUEST,
  GET_API_SUCCESS,
} from '../constants/todosConstant';

const INITIAL_STATE = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_API_REQUEST:
      return { ...state, loading: true };
    case GET_API_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case GET_API_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
