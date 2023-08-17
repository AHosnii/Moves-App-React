import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './moviesComp/Movies.css'
const Actors = () => {
    const [actors, setMovies] = useState([]);

    useEffect(() => {
        // Fetch data from JSON server 
        axios.get('http://localhost:3005/actors')
        .then(response => {
            setMovies(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);



    return (
        <>

            <div className="box-container py-3">
                {actors.map(actor => (
                    <div key={actor.id} className="box">
                        <img className='' src={actor.img} alt="" />
                        <h2 className='title'>{actor.moviesName}</h2>
                    </div>
                    ))}
            </div>
                
        </>
    );
};

export default Actors;