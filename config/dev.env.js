'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://localhost/api"',
  FIREBASE:  `
  {
    apiKey: "AIzaSyB8PthQVcXILdk398_PcpBb6lOJ18obofE",
    authDomain: "to-do-app-876b4.firebaseapp.com",
    databaseURL: "https://to-do-app-876b4.firebaseio.com",
    projectId: "to-do-app-876b4",
    storageBucket: "to-do-app-876b4.appspot.com",
    messagingSenderId: "600361348663"
  }
  `

})
