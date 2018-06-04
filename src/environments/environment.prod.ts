const apiImgUrl = 'https://image.tmdb.org/t/p/';

export const environment = {
  production: true,
  apiUrl: `https://api.themoviedb.org/3`,
  apiKey: 'API_HERE',
  apiLanguage: 'pt-BR',
  apiRegion: 'BR',
  imgSizesUrl: {
    w500: `${apiImgUrl}w500/`,
    w780: `${apiImgUrl}w780/`
  }
};
