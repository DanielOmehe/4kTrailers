import { Formik } from 'formik';

const RustedRageLoginForm =({tabkey})=>{
    return(
        <Formik initialValue={{ userName: '', password: '' }}>{
            (handleSubmit, handleChange, handleBlur, handleFocus, values, errors, touched) => (
            <form className='rusted-rage-login'>
                <div className='rusted-rage-login-fields'>
                    <label htmlFor='userName'>Username</label>
                    <input type='text' name='userName' placeholder='Username' />
                </div>
                <div className='rusted-rage-login-fields'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='Password' />
                </div>
                <button type='submit'>Login</button>
            </form>
        )}</Formik>
    )
}

export default RustedRageLoginForm