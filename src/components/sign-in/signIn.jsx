import { useState, useContext } from 'react';
import './signin.scss';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { UserContext } from '../../context/userContext';

const formFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignInForm = () => {
	const { setCurrentUser } = useContext(UserContext);

	const [formData, setFormData] = useState(formFields);
	const { email, password } = formData;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		try {
			const { user } = await signInUserWithEmailAndPassword(email, password);
			setFormData(formFields);
			setCurrentUser(user);
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Unable to login, incorrect password');
					break;
				case 'auth/user-not-found':
					alert('Unable to login, user not found');
					break;
				default:
					alert('Please create account');
			}
		}
	};

	const signInWithGoogle = async () => {
		const response = await signInWithGooglePopup();
		const { user } = response;
		await createUserDocumentFromAuth(user);
	};

	return (
		<div className='sign-up-container'>
			<h2>Have an account?</h2>
			<span>Sign in with Google or your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					name='email'
					onChange={handleChange}
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					name='password'
					onChange={handleChange}
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit' buttonType=''>
						Sign In
					</Button>
					<Button type='button' onClick={signInWithGoogle} buttonType='google'>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
