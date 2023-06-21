import SignUpForm from '../../components/sign-up/signUp';
import SignInForm from '../../components/sign-in/signIn';
import './auth.scss';

const Authentication = () => {
	return (
		<div className='auth-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
