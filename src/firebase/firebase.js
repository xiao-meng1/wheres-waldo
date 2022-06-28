import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  orderBy,
  addDoc,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJq58SHe_5G16tXb1RjSfqGlCSTcrAyHc',
  authDomain: 'whereswaldo-a4a4a.firebaseapp.com',
  projectId: 'whereswaldo-a4a4a',
  storageBucket: 'whereswaldo-a4a4a.appspot.com',
  messagingSenderId: '887062179868',
  appId: '1:887062179868:web:0e35b83db2eeda5f4a2fd9',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addUserTimeResult = async (name, time) => {
  addDoc(collection(db, 'userTimeResults'), {
    name,
    time,
  });
};

const getUserTimeResults = async () => {
  const q = query(collection(db, 'userTimeResults'), orderBy('time', 'asc'));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    time: doc.data().time,
  }));

  return data;
};

export { addUserTimeResult, getUserTimeResults };
