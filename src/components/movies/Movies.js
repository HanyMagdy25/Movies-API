import React from 'react';
// import { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
import './Movies.css';
const Movies = ({title , image,year ,rate}) => {
    // const {addMovieToWatchlist,watchlist} = useContext(GlobalContext);
    // let storedMovie = watchlist.find(o => o.id === movie.id);
    // const watchlistDisabled = storedMovie ? true : false ; 

    return (
        <div className='media'>
            <img className='poster' src={image} alt={title}/>
            <p className='title'>{title}</p>
            <span className='type'>
                Rate: {rate}
                <button className="add" >add</button>
                <span className='year'>Year: {year}</span>
            </span>
            

        </div>
    )
}

export default Movies
