import firebase from 'firebase';
import config from './firebase.config';

let fire = firebase.initializeApp(config);
export default fire;
