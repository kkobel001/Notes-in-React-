/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import axios from 'axios';

export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};
export const addItem = (
  itemType,
  itemContent,
) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substar(2, 9)}`;
  return {
    type: 'ADD_ITEM',

    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticate = (
  username,
  password,
) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post(
      'http://localhost:9000/api/user/login',
      {
        username,
        password,
      },
    )
    .then((payload) => {
      console.log(payload);
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};
