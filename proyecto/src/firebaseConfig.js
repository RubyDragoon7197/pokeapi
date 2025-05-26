import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
apiKey: "AIzaSyBR9gSUb9sb2moDymmhZC8kWQthse4LYbw",
  authDomain: "pokeapi2-b5fb4.firebaseapp.com",
  projectId: "pokeapi2-b5fb4",
  storageBucket: "pokeapi2-b5fb4.firebasestorage.app",
  messagingSenderId: "1063700689319",
  appId: "1:1063700689319:web:afe7d6602d0e45c5d74682"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };