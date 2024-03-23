'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const courseData = [
    {
        "id": 1,
        "title": "Guitar Fundamentals",
        "slug": "guitar-fundamentals",
        "description": "Learn the basics of playing guitar with our comprehensive beginner's course.",
        "price": 99.99,
        "instructor": "John Doe",
        "isFeatured": true,
        "image": "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "title": "Piano for Beginners",
        "slug": "piano-for-beginners",
        "description": "Start your musical journey with foundational piano skills taught by expert instructors.",
        "price": 109.99,
        "instructor": "Jane Smith",
        "isFeatured": false,
        "image": "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=1024x1024&w=is&k=20&c=YdGWQdXQYg-G1H89Q12soaleNQEKH9JpihwvrLdFHeA="
    },
    {
        "id": 3,
        "title": "Advanced Vocal Techniques",
        "slug": "advanced-vocal-techniques",
        "description": "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
        "price": 119.99,
        "instructor": "Emily Johnson",
        "isFeatured": true,
        "image": "https://media.istockphoto.com/id/1432919532/photo/business-man-working-and-analysis-stock-graph-with-using-ai.jpg?s=1024x1024&w=is&k=20&c=s4R-gJLQdALODHxcvRzAI9B8R2zsI23fVAy1XDcXMaY="
    },
    {
        "id": 4,
        "title": "Drumming Mastery",
        "slug": "drumming-mastery",
        "description": "Master the drums with our comprehensive course covering all skill levels.",
        "price": 129.99,
        "instructor": "Mike Brown",
        "isFeatured": false,
        "image": "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 5,
        "title": "Jazz Improvisation",
        "slug": "jazz-improvisation",
        "description": "Learn the art of jazz improvisation with this course designed for all levels.",
        "price": 139.99,
        "instructor": "Chris Davis",
        "isFeatured": false,
        "image": ""
    },
    {
        "id": 6,
        "title": "Music Production Fundamentals",
        "slug": "music-production-fundamentals",
        "description": "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
        "price": 149.99,
        "instructor": "Alex Wilson",
        "isFeatured": true,
        "image": ""
    },
    {
        "id": 7,
        "title": "Songwriting Essentials",
        "slug": "songwriting-essentials",
        "description": "Learn the essentials of songwriting to express your musical creativity.",
        "price": 159.99,
        "instructor": "Samantha Miller",
        "isFeatured": false,
        "image": ""
    },
    {
        "id": 8,
        "title": "Electronic Music Production",
        "slug": "electronic-music-production",
        "description": "Create compelling electronic music with our course designed for beginners to advanced users.",
        "price": 169.99,
        "instructor": "Luke Harris",
        "isFeatured": true,
        "image": ""
    },
    {
        "id": 9,
        "title": "Classical Music History",
        "slug": "classical-music-history",
        "description": "Explore the rich history of classical music from its origins to the present day.",
        "price": 179.99,
        "instructor": "Grace Lee",
        "isFeatured": false,
        "image": ""
    },
    {
        "id": 10,
        "title": "Blues Guitar Techniques",
        "slug": "blues-guitar-techniques",
        "description": "Discover the techniques of blues guitar to add soul and depth to your playing.",
        "price": 189.99,
        "instructor": "Ethan Moore",
        "isFeatured": true,
        "image": ""
    }

];


const page = () => {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All courses ({courseData.length})</h1>
            <div className="flex flex-wrap justify-center">
                {courseData.map((course) => (
                    <CardContainer className="inter-var m-4" key={course.id}>
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={course.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={course.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default page