const button_types_classes = {
	google: 'google-sign-in',
	inverted: 'inverted',
};

import './button.scss';

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${button_types_classes[buttonType]}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default Button;
