// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

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
export const db = getFirestore(app);

// Authentication with Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

// Checks the auth instance from the oAuth provider
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Firestore Database Operations

// Add new document to collection
export const createUserDocumentFromAuth = async (
	userAuth,
	// Optional Object to Spread into setDoc Data
	additionalInformation
) => {
	// Reference to Document Object
	const userDocRef = doc(db, 'users', userAuth.uid);

	// Document in Collection - does it exist?
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		try {
			// Create Doc with Reference - Our database, 'users' collection and with key of uid from user
			await setDoc(userDocRef, {
				// Data to go into document from user object received from Google
				displayName,
				email,
				createdAt: new Date(),
				...additionalInformation,
			});
		} catch (error) {
			console.log(error.message, 'error creating user');
		}
	}

	return userDocRef;
};

// Create User in Database with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async (cb) => {
	try {
		await signOut(auth);
	} catch (error) {
		console.log(error.message);
	}
	cb(null);
};
