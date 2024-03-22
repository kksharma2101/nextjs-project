import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { Boxes } from './ui/background-boxes'

const achievementList = [
    {
        "quote": "The web is like a canvas, and web development is the art of painting on it.",
        "author": "John Doe",
        "title": "Front-end Developer"
    },
    {
        "quote": "Coding is not just about what you make, but what you make possible.",
        "author": "Jane Smith",
        "title": "Full-stack Developer"
    },
    {
        "quote": "Web development is not just about writing code; it's about solving problems.",
        "author": "David Johnson",
        "title": "Web Developer"
    },
    {
        "quote": "In web development, every problem has a solution, and every solution opens a new door.",
        "author": "Emily Brown",
        "title": "UI/UX Designer"
    },
    {
        "quote": "The beauty of web development lies in its endless possibilities and constant evolution.",
        "author": "Michael Clark",
        "title": "Web Development Instructor"
    }
]



export const OurAchievements = () => {
    return (
        <div className="h-[30rem] mt-2 items-center justify-center relative overflow-hidden">
            <Boxes />
            <h2 className="text-3xl mt-10 font-bold text-center text-white z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center mt-16 w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={achievementList}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}
