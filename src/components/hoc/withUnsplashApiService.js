import React from 'react';
import unsplashApiService from '../../services/unsplashApiService';

const withUnsplashApiService = () => (WrappedComponent) => {
  return (props) => {
    return (
      <WrappedComponent {...props} unsplashApiService={unsplashApiService}/>
    );
  };
};

export default withUnsplashApiService;
