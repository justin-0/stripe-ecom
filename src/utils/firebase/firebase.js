// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

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

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Firestore Database Operations

// Add new document to collection
export const createUserDocumentFromAuth = async (userAuthObject) => {
	const { user } = userAuthObject;
	// Reference to Document Object
	const userDocRef = doc(db, 'users', user.uid);

	// Document in Collection - does it exist?
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		try {
			// Create Doc with Reference - Our database, 'users' collection and with key of uid from user
			await setDoc(userDocRef, {
				// Data to go into document from user object received from Google
				name: user.displayName,
				email: user.email,
				createdAt: new Date(),
			});
		} catch (error) {
			console.log(error.message, 'error creating user');
		}
	}

	return userDocRef;
};
