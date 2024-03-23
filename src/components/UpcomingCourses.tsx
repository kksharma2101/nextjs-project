import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

const project =
    [
        {
            "title": "HTML Basics",
            "description": "Learn the fundamentals of HTML (Hypertext Markup Language) including tags, elements, attributes, and document structure.",
            "link": ""
        },
        {
            "title": "JavaScript Essentials",
            "description": "Master the basics of JavaScript, a programming language used to add interactivity and dynamic behavior to web pages.",
            "link": ""
        },
        {
            "title": "Responsive Web Design",
            "description": "Discover techniques for designing websites that adapt gracefully to various screen sizes and devices using CSS media queries and flexible layouts.",
            "link": ""
        },
        {
            "title": "Frontend Frameworks",
            "description": "Dive into popular frontend frameworks such as React.js, Vue.js, or Angular to streamline development and build powerful user interfaces.",
            "link": ""
        },
        {
            "title": "Backend Development",
            "description": "Learn backend technologies like Node.js, Django, or Ruby on Rails to build server-side logic, manage databases, and handle user authentication.",
            "link": ""
        },
    ]


export const UpcomingCourses = () => {
    return (
        <div className="p-12 mt-1 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Engeenering Journey</p>
                </div>
                <HoverEffect items={project} />
            </div>
        </div>
    )
}
