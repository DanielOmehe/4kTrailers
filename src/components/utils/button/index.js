import './index.scss'
const Button = ({ children, click, name }) => {
	return <button className={name} onClick={click}>{children}</button>;
};

export default Button