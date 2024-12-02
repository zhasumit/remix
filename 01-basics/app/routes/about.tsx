import { Link } from '@remix-run/react';
import React, { useState } from 'react';
import SmallerTitle from '~/components/smalltitle';
import Title from '~/components/title';

// Function to calculate the number of days since a given date
const calculateDaysSince = (date: Date): number => {
    const today = new Date();
    const timeDifference = today.getTime() - date.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
};

const About: React.FC = () => {
    const birthDate = new Date('2000-07-24');
    const daysSinceBirth = calculateDaysSince(birthDate);
    const [gotoUserManual, setGotoUserManual] = useState(false);

    return (
        <div className="mt-20 font-light text-gray-200 tracking-tight leading-relaxed text-lg mb-28">
            <Title first="About" second="Me" />
            <SmallerTitle heading="Hey, I'm Sumit 👋🏼" />
            <p>
                Born {daysSinceBirth} days ago, I’ve had the privilege of exploring a diverse range of tech stacks and cultivating a variety of interests. Currently, my focus is on attracting demand for my services and making meaningful connections in the tech world.
            </p>
            <p>
                I operate at the intersection of Front-End Development, Data Science, and Back-End Development. This unique blend allows me to tackle complex problems, create impactful products, and experiment with innovative ideas. When I’m not immersed in a project, you can often find me diving into new codebases or learning about emerging technologies.
            </p>

            <p>
                If you’d like to reach out, I’m most responsive via email, and I enjoy sharing insights and updates on Instagram.
            </p>

            <SmallerTitle heading="PREVIOUSLY" />
            <p>
                Most recently, I completed my <strong>B.Tech degree in Computer Science and Engineering</strong> from <strong>MNNIT-Allahabad</strong>, where I gained hands-on experience with tens of thousands of lines of code across various tech stacks and programming languages.
            </p>
            <p>
                Before that, I completed my secondary and senior secondary education at <strong>DAV Biratnagar</strong>. I was raised in <strong>Ghato, Hazaribagh</strong>, and finished my schooling at <strong>Holy Cross School</strong>.
            </p>
            <p>
                I have worked extensively with machine learning frameworks and libraries such as <strong>React</strong>, <strong>EJS</strong>, <strong>Redux</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. My preferred coding languages are <strong>JavaScript</strong> and <strong>TypeScript</strong>, and I often collaborate with startups on diverse projects.
            </p>

            <SmallerTitle heading="USER MANUAL" />
            <p>
                I’ve put together a <Link
                    to={"/user-manual"}
                    className="underline decoration-[#c58af9] hover:decoration-4 underline-offset-4"
                    onMouseEnter={() => setGotoUserManual(true)}
                    onMouseLeave={() => setGotoUserManual(false)}
                >
                    playbook
                </Link>
                <span
                    className={`inline-block transition-transform duration-200 ${gotoUserManual ? 'transform -translate-y-1 translate-x-1 font-bold' : 'text-[0px]'
                        }`}
                >
                    ↗
                </span> that outlines how to work with me. It includes insights into my strengths, weaknesses, and the principles I strive to uphold in my professional journey.
            </p>

        </div>
    );
};

export default About;