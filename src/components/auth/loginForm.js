import { Formik } from "formik";
import { LoginSchema } from "./schema";
import { Link } from "react-router-dom";

const LoginForm = () => {
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
			}}
			validationSchema={LoginSchema}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<form onSubmit={handleSubmit} className="auth-user-form">
					<input
						type="email"
						name="email"
						placeholder="example@email.com"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					<p className="error-text">
						{errors.email && touched.email && errors.email}
					</p>
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					<p className="error-text">
						{errors.password && touched.password && errors.password}
					</p>
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
					<p>
						Don't have an account. <Link to={"/sign-up"}>Sign up</Link>
					</p>
				</form>
			)}
		</Formik>
	);
};

export default LoginForm;
