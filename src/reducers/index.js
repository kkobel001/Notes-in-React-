/* eslint-disable no-underscore-dangle */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import {
  ADD_ITEM,
  REMOVE_ITEM,
  AUTH_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from 'actions';

const initialState = {};

const rootReducer = (
  state = initialState,
  // eslint-disable-next-line no-unused-vars
  action,
) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...action.payload.data,
        ],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        unserID: action.payload.data._id,
      };
    case ADD_ITEM:
      return {
        ...state,

        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[
            action.payload.itemType
          ].filter(
            (item) =>
              item.id !== action.payload.id,
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
