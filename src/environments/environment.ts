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
    w500: `${apiImgUrl}w500/`,
    w780: `${apiImgUrl}w780/`
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
