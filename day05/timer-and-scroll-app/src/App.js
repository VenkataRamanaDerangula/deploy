import React, { useState, useEffect } from 'react';

const App = () => {
    // State for timer
    const [seconds, setSeconds] = useState(0);

    // Effect for subscribing to a timer
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000); // Increment seconds every second

        // Cleanup function to clear timer
        return () => {
            clearInterval(timer);
        };
    }, []);

    // State for scroll position
    const [scrollY, setScrollY] = useState(0);

    // Effect for subscribing to scroll event
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '200vh', padding: '20px' }}>
            <h1>Timer: {seconds} seconds</h1>
            <h2>Scroll Position: {scrollY}px</h2>
            <p>Scroll down to see the effect of the scroll event.</p>
        </div>
    );
};

export default App;
