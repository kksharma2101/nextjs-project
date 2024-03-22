import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

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
        <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={achievementList}
                direction="right"
                speed="slow"
            />
        </div>
    )
}
