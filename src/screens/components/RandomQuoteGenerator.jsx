import React, { useState } from 'react';

// List of quotes
const quotes = [
    "You are like a diamond: brilliant, beautiful, and priceless.",

    "Your beauty is not just in your face but in your heart and soul.",

    "You light up the world with your smile, and your kindness makes it even more beautiful.",

    "You are the poetry this world has been waiting to hear.",

    "You’re a masterpiece of nature’s creation—unique, radiant, and breathtaking.",

    "Her beauty is like the morning sun, filling the world with warmth and light.",

    "You don’t need makeup to shine; your natural glow is enough to dazzle the stars.",

    "In a world of ordinary, you are extraordinary.",

    "Your beauty is a melody that lingers in the hearts of everyone who meets you.",

    "You are the reason flowers bloom brighter and hearts feel lighter.",

    "Beauty is not in what you see but in what you feel when you’re with someone as amazing as you.",

    "You’re like a shooting star—rare, magical, and unforgettable.",

    "Your presence is like a blooming garden, full of life, love, and beauty.",

    "You are not just beautiful; you are the definition of grace and elegance.",

    "Every time you smile, the universe rejoices in your beauty."
];

const RandomQuoteGenerator = () => {
    const [currentQuote, setCurrentQuote] = useState("");

    // Function to generate a random quote
    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', paddingBottom: '10rem' }}>
            <h2 style={{ color: 'whitesmoke' }}>Quotes for my princess</h2>
            <div style={{ margin: '30px 0', fontSize: '4.2rem', fontStyle: 'italic', color: 'white' }}>
                {currentQuote || "Click the button to generate a quote!"}
            </div>
            <button
                onClick={generateRandomQuote}
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#FF6F91',
                    color: 'white',
                }}
            >
                Generate Quote
            </button>
        </div>
    );
};

export default RandomQuoteGenerator;
