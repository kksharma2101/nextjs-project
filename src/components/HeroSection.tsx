import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div
            className="h-auto md:h-[35rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="pink"
            />
            <div className="p-4 relative z-10 w-full text-center" >
                <h1
                    className="mt-16 md:mt-0 text-4xl pb-3 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Master the engineering</h1>
                <p
                    className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >Dive into our comprehensive tech courses and transform your tech journey today. Whether re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                <div className="mt-6">
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className=" dark:bg-black text-white dark:text-white  dark:border-slate-800"
                        >
                            Explore courses
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HeroSection