import { useState, useContext } from 'react';
import './signup.scss';
import { UserContext } from '../../context/userContext';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

const formFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formData, setFormData] = useState(formFields);
	const { displayName, email, password, confirmPassword } = formData;

	const { setCurrentUser } = useContext(UserContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match, try again');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			setCurrentUser(user);

			await createUserDocumentFromAuth(
				user,
				// Pass display name otherwise it will be null
				{
					displayName,
				}
			);
			setFormData(formFields);
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('User already exists');
			}
			console.log('user creation with email password failed:', error.message);
		}
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					name='displayName'
					onChange={handleChange}
					value={displayName}
				/>

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

				<FormInput
					label='Confirm Password'
					type='password'
					required
					name='confirmPassword'
					onChange={handleChange}
					value={confirmPassword}
				/>
				<Button type='submit' buttonType=''>
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
