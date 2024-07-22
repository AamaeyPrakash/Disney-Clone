import React, { useState } from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HorizontalMovieCard({ movie }) {
    const [popup, setPopup] = useState(false);

    const handleClick = () => {
        setPopup(!popup);
    }

    const togglePopup = () => {
        setPopup(!popup);
    }

    return (
        <>
            {popup && (
                <div className='w-[1920px] h-[1920px] top-0 fixed'>
                    <div className='w-[1920px] h-[1920px] fixed bg-[#313131] bg-opacity-75'></div>
                    
                    <div className='absolute bg-[#f1f1f1] px-[14px] py-[28px] rounded max-w-[600px] min-w-[300px] text-black'>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <img src={IMAGE_BASE_URL + movie.backdrop_path}></img>
                        <button className='absolute px-[5px] py-[7px] bg-white' onClick={togglePopup}>CLOSE</button>
                    </div>
                </div>
            )}
            <div className='hover:scale-110 transition-all duration-150 ease-in' onClick={handleClick}>
                <img src={IMAGE_BASE_URL + movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer' />
                <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
            </div>
        </>
    )
}

export default HorizontalMovieCard;
