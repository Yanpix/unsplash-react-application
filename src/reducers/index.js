import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
} from '../actions/action-types';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const updateList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return {
        data: [],
        loading: true,
        error: null,
      };

    case FETCH_PHOTOS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_PHOTOS_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default updateList;