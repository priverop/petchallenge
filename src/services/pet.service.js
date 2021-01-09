import firebase from 'firebase';
import config from '../config/config';

firebase.initializeApp(config);

const serviceName = 'pets';
const database = firebase.database();

// METHODS

const getAll = () => database.ref(serviceName);

const get = petId => getAll().child(petId);

const addLike = petId => {
  const currentDate = new Date();
  const likesRef = getAll().child(petId).child('likes');
  return likesRef.push({ created_at: currentDate.getDate() });
};

export { getAll, get, addLike };
