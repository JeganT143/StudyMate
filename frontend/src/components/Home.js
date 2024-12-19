import React, { useEffect, useState } from 'react';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/home/')
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <div>
            <h2>{message}</h2>
            <p>Explore the best courses with expert instructors.</p>
            <button>Get Started</button>
        </div>
    );
};

export default Home;
