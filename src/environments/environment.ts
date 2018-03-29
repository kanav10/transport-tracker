// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  MAPBOX_API_KEY: 'pk.eyJ1Ijoia2FuYXZtYWxpazEwIiwiYSI6ImNqZmJrMDl0dTJ2NzIzM3BlanV5NmJpcjQifQ.DJnq4rBtCtm5-FQm_mlflQ',
  firebase: {
      apiKey: 'AIzaSyAH5w6VTn-POUl1hQNdfNEuhlT8Gq-_zSo',
      authDomain: 'bus-tracker-b8f9d.firebaseapp.com',
      databaseURL: 'https://bus-tracker-b8f9d.firebaseio.com',
      projectId: 'bus-tracker-b8f9d',
      storageBucket: '',
      messagingSenderId: '324202968430'
    // firebase.initializeApp(config);
  }
};
