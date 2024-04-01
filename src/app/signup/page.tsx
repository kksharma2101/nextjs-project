'use client'

import React, { FormEvent, FormEventHandler, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [buttonDesabled, setButtonDesabled] = useState(false);

    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.DOMAIN!}/api/users/signup`, user)
            console.log("user signup successfully", res);
            router.push("/login")
            setLoading(false)

        } catch (error: any) {
            console.log(error)
        }
    }

    const [inputText, setInputText] = useState('');

    const handleSignupForm = (e: FormEvent) => {
        e.preventDefault()
        onSignup()
    }

    return (
        <div className='h-screen w-full bg-white flex items-center justify-center'>
            <form onSubmit={handleSignupForm}>
                <div
                    className="flex flex-col items-start justify-start sm:p-6 sm:border border-black text-xl md:text-2xl rounded-lg">
                    <label className='my-2'>Name:</label>
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