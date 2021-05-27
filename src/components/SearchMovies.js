import React, { useState } from 'react';

const SearchMovies = ( props ) => {
    const { setSearchMovieText } = props;
    const [inputText, setInputText] = useState('');

    const handleSearchMovie = (e) => {
        e.preventDefault();
        if (inputText.trim().length > 2) {
            setSearchMovieText(inputText);
        }
        setInputText('');
    }
    
    const handleInputChange = (e) => {
        setInputText(e.target.value);       
    }
   
        
    return (
        <form onSubmit={(e)=>handleSearchMovie(e)}  >
            <input 
                onChange={ (e)=> handleInputChange(e) }
                value={inputText}
                className='mr-4'
                type='text'
                placeholder='Película...'
                ></input>
                <button>Buscar</button>
        </form>
    )
}

export default SearchMovies;
