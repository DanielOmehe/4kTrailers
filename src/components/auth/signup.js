import { Formik } from 'formik'

const MovieFlixSignUpForm =({tabkey})=>{
    return(
        <Formik initialValue={{ fullName: '', email: '', password: '' }}>{
            (handleSubmit, handleChange, handleBlur, handleFocus, values, errors, touched) => (
            <form className='movie-flix-register'>
                <div className='movie-flix-register-fields'>
                    <label htmlFor='fullName'>Fullname</label>
                    <input type='text' name='fullName' placeholder='Full name' />
                </div>
                <div className='movie-flix-register-fields'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' placeholder='Example@email.com' />
                </div>
                <div className='movie-flix-register-fields'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' placeholder='Password' />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        )}</Formik>
    )
}

export default MovieFlixSignUpForm