import React from 'react';
import './Movies.css';
const Movies = ({title , image,year ,rate}) => {
    return (
        <div className='media'>
            <img className='poster' src={image} alt={title}/>
            <p className='title'>{title}</p>
            <span className='type'>
                Rate: {rate}
                <span className='year'>Year: {year}</span>
            </span>
            

        </div>
    )
}

export default Movies
