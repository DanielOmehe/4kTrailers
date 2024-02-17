import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
	userName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Username is Required!!!"),
	email: Yup.string().email("Email is invalid. Please enter a valid email").required("Email is required. Please enter your email!"),
	password: Yup.string()
		.min(8, "Password must be atleast 8 characters long")
		.required("Password cannot be empty"),
});

export const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email("Enter a valid email")
		.required("Email is required. Please enter your email!"),
	password: Yup.string()
		.min(8, "Password must be atleast 8 characters long")
		.required("Password cannot be empty"),
});