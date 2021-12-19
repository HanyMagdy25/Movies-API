import React,{useState , useEffect} from 'react';
import Movies from '../../movies/Movies';


const Top = () => {

    //const top-rated movies = "https://api.themoviedb.org/3/movie/top_rated?api_key=974253bce4d1b963fbb17879f0e9414c" 
    const [moviees, setmoviees] = useState([]);

    useEffect(()=>{
        const getTopMovies = async () =>{
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=974253bce4d1b963fbb17879f0e9414c`);
            const data = await response.json();
            setmoviees(data.results);
            console.log(data.results);
        }
        getTopMovies()
    } ,[]);
    return (
        <div className='movies'>
            {moviees.map(moviee => (
                <Movies 
                key= {moviee.id}
                title= {moviee.title}
                image= {`https://image.tmdb.org/t/p/w500${moviee.poster_path}`}
                year = {moviee.release_date.substring(0, 4)}
                rate = {moviee.vote_average}
                />
            ))}
        </div>
    )
}

export default Top
