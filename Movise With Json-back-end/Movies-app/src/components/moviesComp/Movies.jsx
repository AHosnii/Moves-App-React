
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css'
const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch data from JSON server
        axios.get('http://localhost:3005/movies')
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
                {movies.map(movie => (
                    <div key={movie.id} className="box">
                        <img className='' src={movie.img} alt="" />
                        <h2 className='title'>{movie.moviesName}</h2>
                    </div>
                    ))}
            </div>
                
        </>
    );
};

export default Movies;