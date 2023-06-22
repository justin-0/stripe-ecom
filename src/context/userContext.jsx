import { createContext, useState, useEffect } from 'react';
import {
	onAuthChangedListener,
	createUserDocumentFromAuth,
} from '../utils/firebase/firebase';

// User Object we want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	// Object that we will pass as the context value
	const value = {
		currentUser,
		setCurrentUser,
	};

	// On mount we want to listen for a change in the auth status
	useEffect(() => {
		const unsubscribe = onAuthChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
