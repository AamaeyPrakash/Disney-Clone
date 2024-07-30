import React, { useState } from 'react';
import { HiMiniXMark } from "react-icons/hi2";

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


function MovieCard({movie}) {
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
              <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
                  <div className='relative bg-gray-900 text-white p-6 rounded-lg max-w-[850px] my-20 max-h-[800px] overflow-y-scroll'>
                      <button className='absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2'onClick={togglePopup}><HiMiniXMark className=''/></button>
                      <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} className='h-[450px] object-cover rounded-md mb-4'/>
                      <div className='flex '>
                          <p className='pr-2'>{movie.vote_average}</p>
                          <p className='px-2'>{movie.release_date}</p>
                      </div>
                      <h2 className='text-2xl font-semibold mb-2'>{movie.title}</h2>
                      <p className='text-lg'>{movie.overview}</p>

                  </div>
              </div>
          )}
          
            <img src={IMAGE_BASE_URL+movie.poster_path} onClick={handleClick} className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in' />
          
      </>
    )
  }

export default MovieCard