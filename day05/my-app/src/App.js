import React, { useState, useEffect } from 'react';

const App = () => {
    // State for fetching data from an API
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Effect for fetching data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // State for mouse position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Effect for mouse movement subscription
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
            console.log(`Mouse Position: X: ${event.clientX}, Y: ${event.clientY}`);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Effect for updating document title
    useEffect(() => {
        document.title = "Document Title Updated";

        // Cleanup function (optional)
        return () => {
            document.title = "React App"; // Reset title on unmount
        };
    }, []);

    return (
        <div>
            <h1>React App with useEffect</h1>
            
            {/* Display fetched data */}
            <h2>Fetched Data</h2>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}

            {/* Display mouse position */}
            <h2>Mouse Tracker</h2>
            <p>Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>
    );
};

export default App;
