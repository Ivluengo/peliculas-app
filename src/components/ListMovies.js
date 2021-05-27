import React /*, { useEffect, useState }*/ from 'react'
// import getMovies from '../helpers/getMovies'
import { useFetchMovies } from '../hooks/useFetchMovies';
import MovieItem from './MovieItem';

const ListMovies = ( {searchMovieText} ) => {
    // useEffect(()=> {       
    //     getMovies(searchMovieText)
    //     .then( (movies) => {
    //         setAllMovies(movies)
    //     } );
        
    // }, [searchMovieText]);  
    
    const {data, loading} = useFetchMovies(searchMovieText);

    return (
        <>
            <h1>{searchMovieText}</h1>

            <div className='movieGrid grid gap-8'>
                { loading && <h3>Loading...</h3> }
                {data.map( movie => {
                    if(movie.poster) {
                       return <MovieItem key={movie.id} movie={movie} />
                    }
    } )}
            </div>
            
        </>
    )
}

export default ListMovies
