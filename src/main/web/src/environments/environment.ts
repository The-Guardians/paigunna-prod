// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase : {
    apiKey: "AIzaSyAGwr9WxsGbt0jQdllJbQANHcQ7FMj7FpU",
    authDomain: "projectpgn.firebaseapp.com",
    databaseURL: "https://projectpgn.firebaseio.com",
    projectId: "projectpgn",
    storageBucket: "projectpgn.appspot.com",
    messagingSenderId: "471681704144"
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
