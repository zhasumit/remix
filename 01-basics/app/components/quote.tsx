import React from 'react'

interface QuoteProps {
    quote: string;
    author: string;
}

const Quote: React.FC<QuoteProps> = ({ quote, author }) => {
    return (
        <blockquote className='bg-[#0e1e31] rounded-sm my-2 p-2 px-10 leading-snug border-l-8 border-blue-500 flex flex-col'>
            <p className='flex-grow'>{quote}</p>
            <footer className='text-sm italic self-end mt-2'>- {author}</footer>
        </blockquote>
    );
    
};

export default Quote;