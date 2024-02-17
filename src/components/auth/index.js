import "./index.scss";
import RustedRageNavBar from "../utils/navbar";
import RustedRageFooter from "../utils/footer";
import { useNavigate } from "react-router";
import Button from "../utils/button";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";

// const supabase = createClient(
// 	"https://<project>.supabase.co",
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZWlidmZkeGhwZ3ZjbW11cHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNzQ3NTMsImV4cCI6MjAyMjg1MDc1M30.SK3LKkQqW1chlExl_cd6sQ-z5N9IM_ijN0SzBKZgGNA"
// );

const AuthUser = ({ name }) => {
	const navigate = useNavigate();
	// const signUpNewUser = async () => {
	// 	const { data, error } = await supabase.auth.signUp({
	// 		email: "example@email.com",
	// 		password: "example-password",
	// 		options: {
	// 			emailRedirectTo: "https://example.com/welcome",
	// 		},
	// 	});
	// };
	// async function signInWithEmail() {
	// 	const { data, error } = await supabase.auth.signInWithPassword({
	// 		email: "example@email.com",
	// 		password: "example-password",
	// 	});
	// }

	return (
		<>
			<RustedRageNavBar />
			<main className="auth-user-page">
				<Button click={() => navigate("/")} name={"back-to-home"}>
					Back to home
				</Button>
				<section className="auth-user-form-container">
					<h1>{name}</h1>
					<>{name === "Login" ? <LoginForm /> : <SignUpForm />}</>
				</section>
			</main>
			<RustedRageFooter />
		</>
	);
};

export default AuthUser;
