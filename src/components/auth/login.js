import { Formik, ErrorMessage } from 'formik';

const MovieFlixLoginForm =({tabkey})=>{
    return(
        <Formik initialValue={{ userName: '', password: '' }}>{
            (handleSubmit, handleChange, handleBlur, handleFocus, values, errors, touched) => (
            <form className='movie-flix-login'>
                <div className='movie-flix-login-fields'>
                    <label htmlFor='userName'>Username</label>
                    <input type='text' name='userName' placeholder='Username' />
                </div>
                <div className='movie-flix-login-fields'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='Password' />
                </div>
                <button type='submit'>Login</button>
            </form>
        )}</Formik>
    )
}

export default MovieFlixLoginForm