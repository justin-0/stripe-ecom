// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB3ybEhjlntyUm8R3d4rNxWEMLw4jd0lfM',
	authDomain: 'ecom-store-b7e3b.firebaseapp.com',
	projectId: 'ecom-store-b7e3b',
	storageBucket: 'ecom-store-b7e3b.appspot.com',
	messagingSenderId: '502510380634',
	appId: '1:502510380634:web:57fc7fa865ba2eb5795a63',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
