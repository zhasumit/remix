import React, { useState } from 'react';
import SmallerTitle from '~/components/smalltitle';
import Title from '~/components/title';

// Importing JSON data
import strengthsData from '~/data/strengths.json';
import weaknessesData from '~/data/weaknesses.json';
import principlesData from '~/data/principles.json';
import quotesData from '~/data/quotes.json';
import Quote from '~/components/quote';

// Import icons 
import overviewgif from "~/../public/gificons/overview.gif"
import thumbsup from "~/../public/gificons/up.gif"
import thumbsdowngif from "~/../public/gificons/down.gif"
import bookmarkgif from "~/../public/gificons/bookmark.gif"
import quotesgif from "~/../public/gificons/quotes.gif"
import sendMessagegif from "~/../public/gificons/send-message.gif"

// Main User Manual component
const UserManual: React.FC = () => {
    const [isHoveredEmail, setIsHoveredEmail] = useState(false);
    const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);

    return (
        <div className="user-manual-container mt-20 mb-28 font-light text-gray-200 tracking-tight leading-relaxed text-lg">
            <Title first='User' second='Manual' />

            <div className='flex items-center gap-2'>
                <img src={overviewgif} className='h-12 -mb-3' />
                <SmallerTitle heading='OVERVIEW' />
            </div>
            <p><span className='highlight'>5-3-1 Enneagram:</span> Investigator, Achiever, and Perfectionist. Remarkably efficient, hard-working and competent. While sometimes self-righteous, pragmatic and tactful enough not to compromise goals by being too inflexible. Can be clever, self-confident, perfectionist. Introverted, Intuitive, Thinking, Judging, and Assertive.</p>

            <div className='flex items-center gap-2'>
                <img src={thumbsup} className='h-12 -mb-3' />
                <SmallerTitle heading='STRENGTHS' />
            </div>
            <ul>
                {strengthsData.map((strength, index) => (
                    <li key={index}>
                        <span className='highlight'>{strength.title}:</span> {strength.description}
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-2'>
                <img src={thumbsdowngif} className='h-12 -mb-3' />
                <SmallerTitle heading='WEAKNESSES' />
            </div>
            <ul>
                {weaknessesData.map((weakness, index) => (
                    <li key={index}>
                        <span className='highlight'>{weakness.title}:</span> {weakness.description}
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-2'>
                <img src={bookmarkgif} className='h-12 -mb-3' />
                <SmallerTitle heading='PRINCIPLES' />
            </div>
            <ul>
                {principlesData.map((principle, index) => (
                    <li key={index}>
                        <span className='highlight'>{principle.title}:</span> {principle.description}
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-2'>
                <img src={quotesgif} className='h-12 -mb-3' />
                <SmallerTitle heading='FAVORITE QUOTES' />
            </div>
            {quotesData.map((quoteObj, index) => (
                <Quote key={index} quote={quoteObj.quote} author={quoteObj.author} />
            ))}

            <div className='flex items-center gap-2'>
                <img src={sendMessagegif} className='h-12 -mb-3 rounded-full' />
                <SmallerTitle heading='GET IN TOUCH' />
            </div>
            <p>
                If you want to get in touch, I'm most responsive over <a
                    href="mailto:sumitjha2057@gmail.com"
                    target="_blank"
                    className="underline decoration-[#c58af9] hover:decoration-4 underline-offset-4"
                    onMouseEnter={() => setIsHoveredEmail(true)}
                    onMouseLeave={() => setIsHoveredEmail(false)}
                >
                    email
                    <span
                        className={`inline-block transition-transform duration-200 ${isHoveredEmail ? 'transform -translate-y-1 translate-x-1 font-bold' : 'text-[0px]'
                            }`}
                    >
                        ↗
                    </span>
                </a> and I tend to be pretty active on <a
                    href="https://www.instagram.com/sumitk.jha/"
                    target="_blank"
                    className="underline decoration-[#c58af9] hover:decoration-4 underline-offset-4"
                    onMouseEnter={() => setIsHoveredInstagram(true)}
                    onMouseLeave={() => setIsHoveredInstagram(false)}
                >
                    instagram
                </a>
                <span
                    className={`inline-block transition-transform duration-200 ${isHoveredInstagram ? 'transform -translate-y-1 translate-x-1 font-bold' : 'text-[0px]'
                        }`}
                >
                    ↗
                </span> as well.
            </p>
        </div>
    );
};

export default UserManual;
