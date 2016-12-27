import * as firebase from 'firebase'
import config from './firebase.config'
   
// * Config your firebase config acces here!
// var config = {
//       apiKey: '<your-api-key>',
//       authDomain: '<your-auth-domain>',
//       databaseURL: '<your-database-url>',
//       storageBucket: '<your-storage-bucket>'
//     }

firebase.initializeApp(config)

const nameRef = firebase.database().ref().child('counter')

export default nameRef 