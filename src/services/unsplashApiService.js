import UNSPLASH_ACCESS_ID from '../access';

class UnsplashApiService {
  getPhotos = () => {
    return fetch(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_ACCESS_ID}`).then(resp => resp.json());
  };
}

export default new UnsplashApiService();