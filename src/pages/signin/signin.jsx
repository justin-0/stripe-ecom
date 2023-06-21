import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

import SignUpForm from '../../components/sign-up/signUp';

const Signin = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		const { user } = response;
		// eslint-disable-next-line no-unused-vars
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In with Google</button>
			<SignUpForm />
		</div>
	);
};

export default Signin;
