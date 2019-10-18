import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
} from './action-types';


const dataRequested = () => {
  return {
    type: FETCH_PHOTOS_REQUEST,
  };
};

const dataLoaded = (newData) => {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload: newData,
  };
};

const dataError = (error) => {
  return {
    type: FETCH_PHOTOS_FAILURE,
    payload: error,
  };
};

const fetchData = (unsplashApiService) => () => (dispatch) => {
  dispatch(dataRequested());
  unsplashApiService
    .getPhotos()
    .then((data) => {
      if (data.errors) {
        throw new Error(data.errors);
      } else {
        dispatch(dataLoaded(data));
      }
    })
    .catch((error) => dispatch(dataError(error)));
};

export default fetchData;