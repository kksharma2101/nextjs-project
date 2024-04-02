"use client";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        setLoading(true)
        await axios.post("/api/users/login", { user })
        router.push("/")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-2 py-2">
            <h1 className='text-white'>{loading ? "Processing" : "Login Page"}</h1>
            <hr />
            {/* <label htmlFor="email">email</label> */}
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
                onClick={onLogin}
                className="p-2 text-white border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-gray-600">Login</button>
            <Link href="/signup" className='text-white'>Visit on signup</Link>
        </div>
    )
}
