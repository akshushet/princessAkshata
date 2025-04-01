import React, { useState, useEffect } from 'react';
import 'css-doodle';

// Example strings; replace with your actual text
const STRINGS = [
    "From the moment I met you, I knew I'd found someone truly special.",
    "Your kindness, beauty, and brilliance brighten my world like nothing else can.",
    "You are the most wonderful person in the entire universe, and I love you endlessly."
];

export default function HeartDoodleWithText() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (currentIndex >= STRINGS.length) return;

        const fadeOutTimer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        const nextStringTimer = setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setIsVisible(true);
        }, 4000);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(nextStringTimer);
        };
    }, [currentIndex]);

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <css-doodle
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1, // ensures doodle stays behind everything
                }}
            >
                <style>
                    {`
                        --color: #51eaea, #fffde1, #ff9d76, #FB3569;

                        @grid: 30x1 / 100vw 100vh / #270f34; 
                        
                        :container {
                            perspective: 30vmin;
                            --deg: @p(-180deg, 180deg);
                        }
                        
                        :after, :before {
                            content: '';
                            background: @p(--color); 
                            @place: @r(100%) @r(100%);
                            @size: @r(6px);
                            @shape: heart;
                        }

                        @place: center;
                        @size: 18vmin; 

                        box-shadow: @m2(0 0 50px @p(--color));
                        background: @m100(
                            radial-gradient(@p(--color) 50%, transparent 0) 
                            @r(-20%, 120%) @r(-20%, 100%) / 1px 1px
                            no-repeat
                        );

                        will-change: transform, opacity;
                        animation: scale-up 12s linear infinite;
                        animation-delay: calc(-12s / @I * @i);

                        @keyframes scale-up {
                            0%, 95.01%, 100% {
                                transform: translateZ(0) rotate(0);
                                opacity: 0;
                            }
                            10% { 
                                opacity: 1; 
                            }
                            95% {
                                transform: translateZ(35vmin) rotateZ(var(--deg));
                            }
                        }
                    `}
                </style>
            </css-doodle>

            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#fff',
                    width: '80%',
                }}
            >
                {currentIndex < STRINGS.length && (
                    <h1 className={isVisible ? 'fade-in' : 'fade-out'}>
                        {STRINGS[currentIndex]}
                    </h1>
                )}
            </div>

            <style>
                {`
                    h1{
                        font-family: "Playwrite AU SA", serif;
                        font-weight: 400;
                    }
                    
                    .fade-in {
                        opacity: 1;
                        transition: opacity 1s ease-in; 
                        font-size: clamp(2rem, 5vw, 3rem); 
                        font-weight: bold;
                    }
                    .fade-out {
                        opacity: 0;
                        transition: opacity 1s ease-out; 
                        font-size: clamp(2rem, 5vw, 3rem); 
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    );
}
