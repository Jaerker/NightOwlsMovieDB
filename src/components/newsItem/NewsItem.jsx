import { useState } from 'react';
import './newsItem.css';

function NewsItem() {
    const newsItems = [
        {
            image: 'https://i0.wp.com/housefulofnicholes.com/wp-content/uploads/2018/07/AntManAndTheWasp3.jpg?resize=1688%2C2500',
            title: 'Michael Douglas Wishes His ‘Ant-Man’ Character Had Been Killed Off in a “Fantastic Way” in ‘Quantumania’',
            text: 'Michael Douglas had a request for Ant-Man and the Wasp: Quantumania: He wanted his character to die. The Oscar-winning actor stopped by The View on Thursday to promote his new Apple TV+ series, Franklin. During the conversation, he was asked about his comments to The Hollywood Reporter about wanting his character in the Ant-Man franchise, […]',
            date: '12 HOURS AGO',
            author: 'BY CHRISTY PIÑA'
        },
        {
            image: 'https://media.gettyimages.com/id/1706546181/photo/front-row-paris-fashion-week-womenswear-spring-summer-2024.jpg?s=612x612&w=gi&k=20&c=bpppg9OfSY2n9K7fySx3d7rzGvNOHecZEvwv0Vg56RU=',
            title: 'Pamela Anderson to Star Opposite Liam Neeson in ‘Naked Gun’ Remake',
            text: 'Pamela Anderson is dressing up for Naked Gun. The actor has signed on to star opposite Liam Neeson in Paramount Pictures’ untitled remake of Naked Gun, based on the crime spoof comedies that were released in the late 1980s and early 1990s. Akiva Schaffer is directing the comedy, which has a script by Dan Gregor, […]',
            date: '16 HOURS AGO',
            author: 'BY BORYS KIT'
        },
        {
            image: 'https://preview.redd.it/official-new-poster-for-deadpool-and-wolverine-v0-txne73o16iic1.jpeg?auto=webp&s=a5ea467688369b1433fa21b8e30cdb46bf1abecd',
            title: '‘Deadpool & Wolverine’ Plotting (Bleeped) In-Theater Spot Asking People to Silence Cellphones',
            text: 'The spot began with Deadpool telling Wolverine about his theories for Secret Wars, a reference to Marvel Studios’ upcoming crossover movie, Avengers: Secret Wars. But every time Deadpool began to say what he’d heard will happen in the movie, a cellphone rang and interrupted him. […]',
            date: '1 DAY AGO',
            author: 'BY PAMELA MCCLINTOCK, AARON COUCH'
        },
        {
            image: 'https://media-api.xogrp.com/images/fb14ff39-2c2a-4d2e-8678-b742db7cd0f2~rs_768.h-cr_34.0.2284.3000',
            title: 'Emma Stone in Talks to Star in Husband Dave McCary’s Untitled Universal Film',
            text: 'Emma Stone and husband Dave McCary are in talks to work together on an untitled Universal project, with Stone as the star and McCary as the director. Young Rock supervising producers Patrick Kang and Michael Levin wrote the original spec screenplay for the film. However, details about the project are being kept under wraps for […]',
            date: 'APR 12, 2024 11:51 AM',
            author: 'BY CHRISTY PIÑA'
        }
    ];
    
    const [isFlipped, setIsFlipped] = useState(Array(newsItems.length).fill(false));
    const [activeIndex, setActiveIndex] = useState(0);

    // Flippes card on click to show image/ text
    const handleClick = (index) => {
        setIsFlipped(isFlipped.map((item, idx) => idx === index ? !item : item));
    };

    // Handling navigation between news cards 
    // by checking index of a current card
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : newsItems.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex < newsItems.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <>
            <h1 className="news-header">Movie news</h1>
            <div className="news">
            <button onClick={handlePrev} className="previous-btn">Prev</button>
            {newsItems.map((item, index) => (
                <div 
                    key={index} 
                    className={`news-item ${index === activeIndex ? 'active' : ''}`} 
                    onClick={() => handleClick(index)} 
                    style={{ backgroundImage: isFlipped[index] ? `url(${item.image})` : `none` }}
                    aria-label={isFlipped[index] ? item.title : ''}>
                    {!isFlipped[index] && (
                        <>
                            <h2 className="news-heading">{item.title}</h2>
                            <p className="news-text">{item.text}</p>
                            <p className="news-date">{item.date}</p>
                            <p className="news-author">{item.author}</p>
                        </>
                    )}
                </div>
            ))}
            <button onClick={handleNext} className="next-btn">Next</button>
        </div>
        </>
    )
}

export default NewsItem