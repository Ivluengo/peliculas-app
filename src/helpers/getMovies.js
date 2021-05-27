const getMovies = async ( query ) => {
    const API_KEY = '594939a196832017634a0d7b0271311b';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query || 'matrix'}`;
    console.log(query);
    const resp = await fetch(url);
    const data = await resp.json();


    const movies = data.results.map( movie => {
        return {
            id: movie.id,
            title: movie.title,
            nota: movie.vote_average,
            resumen: movie.overview,
            fechaEstreno: movie.release_date,
            poster: movie.poster_path 
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : null,
            backdrop: movie.backdrop_path 
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : null
        }
    } );

    console.log(movies);    
    return movies;
}

export default getMovies;