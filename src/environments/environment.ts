// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const apiImgUrl = 'https://image.tmdb.org/t/p/';

export const environment = {
  production: false,
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
      w300: `${apiImgUrl}w300`
    }
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
