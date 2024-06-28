import React,{ useState } from 'react'
import "./Popup.css"

function Popup() {
    const [popup, setPopup] = useState(false);

    const togglePopup = () =>{
        setPopup(!popup)
    }
    
    return (
        <>
            <button onClick={togglePopup} className='btn-modal'>
                Open
            </button>
            
            {popup && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content text-black'>
                        <h2>Popup</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla doloribus obcaecati, repudiandae deserunt accusantium recusandae officiis neque cumque, atque, ab accusamus officia non debitis et dolor delectus ea quo illo!</p>
                        <button className='close-modal bg-white' onClick={togglePopup}>CLOSE</button>
                    </div>
                </div>)}
        </>
  )
}

export default Popup