'use client'

import React, { FormEvent, FormEventHandler, useState } from 'react'

const Signup = () => {
    const [inputText, setInputText] = useState('');

    const handleSignupForm = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className='h-screen w-full bg-white flex items-center justify-center'>
            <form onSubmit={handleSignupForm}>
                <div
                    className="flex flex-col items-start justify-start sm:p-8 sm:border border-black text-xl md:text-2xl rounded-lg">
                    <label className='my-4'>Name:</label>
                    <input type="name"
                        // value="name"
                        placeholder='Enter your name'
                        className='p-2 rounded-md border border-1'
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <label className='my-4'>Email:</label>
                    <input type="email"
                        // value="email"
                        placeholder='Enter your email'
                        className='p-2 rounded-md border border-1 '
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <label className='my-4'>Password:</label>
                    <span className='text-xs'>* Password minimum 8 character</span>
                    <input type="password"
                        // value="password"
                        placeholder='Enter your password'
                        className='p-2 rounded-md border border-1 '
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button
                        type='submit'
                        className="w-full bg-blue-600 p-2 rounded-md mt-4 text-white font-bold text-2xl">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;