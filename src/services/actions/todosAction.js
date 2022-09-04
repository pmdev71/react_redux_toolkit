import axios from 'axios';
import {
  GET_API_ERROR,
  GET_API_REQUEST,
  GET_API_SUCCESS,
} from '../constants/todosConstant';

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_API_REQUEST });
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({ type: GET_API_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_API_ERROR, payload: error.message });
  }
};
