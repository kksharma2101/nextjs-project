'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function VerifyEmailPage() {
    // const router = useRouter();
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifiedToken = async () => {
        try {
            await axios.post("/api/users/verifyemail", { token });
            setVerified(true);
        } catch (error: any) {
            setError(true)
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        // const { query } = router;
        // const urlToken: stirng = query.token;
        setToken(urlToken || "");
    }, [])

    useEffect(() => {
        if (token.length > 0) verifiedToken();
    }, [token])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-4 text-center py-2">

            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "Please go to your email box and click and verify"}</h2>

            {verified ? (
                <div>
                    <Link href="/login" className='text-blue-600 font-bold'>
                        Go to Login
                    </Link>
                </div>
            ) :
                (
                    <div>
                        <h2 className="text-2xl bg-red-500 text-black">Error</h2>

                    </div>
                )}
        </div>
    )
}
