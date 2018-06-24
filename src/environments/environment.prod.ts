const apiImgUrl = 'https://image.tmdb.org/t/p/';

export const environment = {
  production: true,
  apiUrl: `https://api.themoviedb.org/3`,
  apiKey: 'API_HERE',
  apiLanguage: 'pt-BR',
  apiRegion: 'BR',
  imgSizesUrl: {
    backdrop_sizes: {
      w300: `${apiImgUrl}w300`,
      w780: `${apiImgUrl}w780`,
      w1280: `${apiImgUrl}w1280`
    },
    logo_sizes: {
      w45: `${apiImgUrl}w45`,
      w92: `${apiImgUrl}w92`,
      w154: `${apiImgUrl}w154`,
      w185: `${apiImgUrl}w185`,
      w300: `${apiImgUrl}w300`,
      w500: `${apiImgUrl}w500`
    },
    poster_sizes: {
      w92: `${apiImgUrl}w92`,
      w154: `${apiImgUrl}w154`,
      w185: `${apiImgUrl}w185`,
      w342: `${apiImgUrl}w342`,
      w780: `${apiImgUrl}w780`,
      w500: `${apiImgUrl}w500`
    },
    profile_sizes: {
      w45: `${apiImgUrl}w45`,
      w185: `${apiImgUrl}w185`,
      h632: `${apiImgUrl}w632`
    },
    still_sizes: {
      w92: `${apiImgUrl}w92`,
      w185: `${apiImgUrl}w185`,
      w185: `${apiImgUrl}w185`
    }
  }
};
