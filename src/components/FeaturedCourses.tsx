import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/backgroun-gradient'
import data from "@/data/music_courses.json";
import { title } from 'process';

interface courses {
    id: number
    title: string
    provider: string
    duration: string
    level: string
    description: string
}

export const FeaturedCourses = () => {
    return (
        <div className='bg-gray-900 py-12'>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-5 text-2xl leading-8 font-bold tracking-wider text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>

            <div className="mt-10 gap-10 flex items-center justify-center flex-wrap">
                {data?.courses.map((item) => (
                    <BackgroundGradient key={item.id} className='w-64 h-80 m-2 p-2 overflow-hidden'>
                        <div className="text-white space-y-4 ">
                            <h1 className="font-extrabold text-black text-xl">{item.title}</h1>
                            <h2 className="">{item.provider}</h2>
                            <h3 className="">Duration: {item.duration}</h3>
                            <h4 className="">{item.level}</h4>
                            <p className="">{item.description}</p>
                        </div>
                    </BackgroundGradient>
                ))}
            </div>

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
