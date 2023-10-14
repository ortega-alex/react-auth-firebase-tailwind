/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { userAuth } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import Alert from './Alert';

export default function Login() {
    const { login, loginWithGoogle, resetPassword } = userAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value });

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSiginn = async () => {
        try {
            await loginWithGoogle();
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async () => {
        if (!user.email) return setError('Please enter your email');
        try {
            console.log(user);
            await resetPassword(user.email);
            setError('We sent you an email with a link to reset your password');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='w-full max-w-xs m-auto'>
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 py-6 pb-9 mb-4'>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Email:
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='email'
                        name='email'
                        placeholder='youremail@company.itd'
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
                        Password:
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='password'
                        name='password'
                        onChange={handleChange}
                        placeholder='######'
                    />
                </div>

                <div className='flex items-center justify-between'>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm'
                    >
                        Login
                    </button>

                    <a
                        href='#!'
                        className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                        onClick={handleResetPassword}
                    >
                        Forgot Password?
                    </a>
                </div>
            </form>

            <p className='my-4 text-sm flex justify-between px-3'>
                Don't have an Account? <Link to='/register'>Register</Link>
            </p>

            <button
                type='button'
                className='bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'
                onClick={handleGoogleSiginn}
            >
                Google Login
            </button>
        </div>
    );
}
