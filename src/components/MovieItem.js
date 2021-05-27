import React from 'react'

const MovieItem = ( props ) => {

    const { id, title, nota, resumen, fechaEstreno, poster, backdrop } = props.movie;

    return (
        <div className='movieItem bg-white p-3'>
            <img className='u-max-full-width rounded-xl' src={poster} alt={title}/>
            <h5>{title}</h5>
            <small className='nota bg-yellow-400 p-3 rounded-full font-bold text-2xl'>{nota}</small>
            <p className='-ml-2'>📅 {fechaEstreno}</p>
            <p className='descripcion mb-2'>{resumen.substr(0,80) + '...'}</p>            
        </div>
    )
}

export default MovieItem
