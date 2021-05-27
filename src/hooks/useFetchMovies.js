import { useState, useEffect } from 'react';
import getMovies from './../helpers/getMovies';

const useFetchMovies = ( searchMovieText ) => {
    const [datosFetch, setDatosFetch] = useState({
        data: [],
        loading: true
    })

    useEffect(()=> {   
        if(datosFetch.data[0]) {
            setDatosFetch({
                data: [],
                loading: true
            })
        } 
        getMovies(searchMovieText)
        .then( (movies) => {
            setTimeout(()=>{
                setDatosFetch({
                    data: movies,
                    loading: false
                }) 
            }, 500)
        } );
        
    }, [searchMovieText]);  



    return datosFetch;
}

export { useFetchMovies };