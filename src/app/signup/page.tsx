'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Signup() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: ""
    });
    const [buttonDisabled, setButtonDesabled] = useState(false);

    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true)
            const res = await axios.post('/api/users/signup', user);
            if (!res) {
                console.log("User is not signup, try again")
            }
            // console.log("user signup successfully", res.data);
            router.push("/verifyemail")

        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        if ((user.username, user.email, user.password).length > 0) {
            console.log("All field is mandatory")
            setButtonDesabled(false)
        } else {
            setButtonDesabled(true)
        }
    }, [user])

    // const handleSignupForm = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     onSignup()
    // }

    return (
        <div className="flex flex-col items-center justify-center gap-4 min-h-screen py-2">
            <h1 className='text-white'>{loading ? "Processing" : "Signup"}</h1>
            <hr />
            <input
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
            />
            <input
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <input
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
                onClick={onSignup}
                className="p-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
            <Link href="/login" className='text-white'>Visit login page</Link>
        </div>
    )
}