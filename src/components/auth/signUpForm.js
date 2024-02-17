import { Formik } from "formik";
import { SignUpSchema } from "./schema";
import { Link } from "react-router-dom";

const SignUpForm = () => {
	return (
		<Formik
			initialValues={{ userName: "", email: "", password: "" }}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
			}}
			validationSchema={SignUpSchema}
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
						type="text"
						name="userName"
                        placeholder="Username"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.userName}
					/>
					<p className="error-text">
						{errors.userName && touched.userName && errors.userName}
					</p>
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
                        placeholder="Password"
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
						Already have an account. <Link to={"/login"}>Login</Link>
					</p>
				</form>
			)}
		</Formik>
	);
};

export default SignUpForm;
