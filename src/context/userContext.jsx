import { createContext, useState } from 'react';

// User Object we want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	// Object that we will pass as the context value
	const value = {
		currentUser,
		setCurrentUser,
	};
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
