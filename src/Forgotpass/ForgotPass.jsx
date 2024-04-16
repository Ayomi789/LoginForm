import React, { useState } from 'react';
import './ForgotPass.css';

const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        if (email.trim() === '') {
            setMessage('Please enter your email address.');
        } else {
            // Simulate password reset process
            setTimeout(() => {
                setMessage('A password reset process has been initiated. Check your email for further instructions.');
            }, 2000); // Simulate 2 seconds delay
        }
    };

    return (
        <div className='forget-password-container'>
            <form className='formm' onSubmit={handleSubmit}>
                <p className='title'>Forget Password</p>
                <p className='message'>Enter your email to reset your password.</p>

                <label>
                    <input
                        type='email'
                        className='Input'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <button type='submit' className='submmit'>
                    Submit
                </button>

                {message && <p className='success-message'>{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPass;

