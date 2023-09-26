import { Formik } from 'formik'

const MovieFlixSignUpForm =({tabkey})=>{
    return(
        <Formik initialValue={{ fullName: '', email: '', password: '' }}>{
            (handleSubmit, handleChange, handleBlur, handleFocus, values, errors, touched) => (
            <form>
                <div className='movie-flix-form-fields'>
                    <label htmlFor='userName'>Fullname</label>
                    <input type='text' name='userName' placeholder='Username' />
                </div>
                <div className='movie-flix-form-fields'>
                    <label htmlFor='userName'>Email</label>
                    <input type='text' name='userName' placeholder='Username' />
                </div>
                <div className='movie-flix-form-fields'>
                    <label htmlFor='userName'>Password</label>
                    <input type='text' name='userName' placeholder='Username' />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        )}</Formik>
    )
}

export default MovieFlixSignUpForm