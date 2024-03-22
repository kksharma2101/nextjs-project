import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const courseContent = [
    {
        "title": "HTML Basics",
        "description": "Learn the fundamentals of HTML (Hypertext Markup Language), including the basic structure of an HTML document, commonly used tags, and how to create semantic markup."
    },
    {
        "title": "CSS Styling",
        "description": "Explore the world of CSS (Cascading Style Sheets) and how it's used to style HTML elements. Cover topics such as selectors, properties, inheritance, and the box model."
    },
    {
        "title": "JavaScript Fundamentals",
        "description": "Get started with JavaScript, the programming language of the web. Learn about variables, data types, operators, control structures, functions, and the Document Object Model (DOM)."
    },
    {
        "title": "Responsive Web Design",
        "description": "Discover techniques for creating websites that adapt to various screen sizes and devices. Learn about media queries, flexible layouts, and frameworks like Bootstrap for building responsive designs."
    },
    {
        "title": "Backend Development",
        "description": "Delve into server-side programming languages such as Node.js, Python, and Ruby, and learn how to build the backend logic of web applications. Explore databases, APIs, and server deployment."
    },
    {
        "title": "Version Control with Git",
        "description": "Master the essentials of version control using Git. Learn how to track changes to your codebase, collaborate with others, manage branches, and utilize platforms like GitHub for hosting repositories."
    },
    {
        "title": "Web Performance Optimization",
        "description": "Learn strategies for optimizing the performance of web applications. Cover techniques such as asset minification, caching, lazy loading, and server-side optimizations."
    },
    {
        "title": "Web Security Best Practices",
        "description": "Understand the importance of web security and learn how to protect web applications from common threats. Explore topics like encryption, authentication, input validation, and secure communication."
    }
]


export const WhyChooseMe = () => {
    return (
        <div className='text-white mt-10'>
            <StickyScroll content={courseContent}></StickyScroll>
        </div>
    )
}
