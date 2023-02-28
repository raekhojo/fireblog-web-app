import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCoyTNKtlEixb37eaVALuLTWrG0MX7vmio',
  authDomain: 'fieblog-39581.firebaseapp.com',
  projectId: 'fieblog-39581',
  storageBucket: 'fieblog-39581.appspot.com',
  messagingSenderId: '970272474560',
  appId: '1:970272474560:web:8e33ef0c6ec5f017093425'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
