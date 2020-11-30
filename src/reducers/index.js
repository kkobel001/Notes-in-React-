/* eslint-disable no-underscore-dangle */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from 'actions';

const initialState = {
  userID: '5ca8f00a097c3394e62f64ab',
  isLoading: false,
};

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
    case ADD_ITEM_SUCCESS:
      return {
        ...state,

        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.data,
        ],
      };

    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[
            action.payload.itemType
          ].filter(
            (item) =>
              item._id !== action.payload.id,
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
