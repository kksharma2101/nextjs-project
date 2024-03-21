import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'
// import { BackgroundGradient } from './ui/backgroun-gradient'

export const FeaturedCourses = () => {
    return (
        <div className='bg-gray-900 py-12'>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-5 text-2xl leading-8 font-bold tracking-wider text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className=""></div>
            <div className="mt-20 text-center">
                <Button
                    borderRadius="1.75rem"
                    className=" dark:bg-black text-white dark:text-white  dark:border-slate-900"
                >
                    <Link href={"/courses"}
                    >
                        View All courses
                    </Link>
                </Button>
            </div>
        </div>
    )
}
