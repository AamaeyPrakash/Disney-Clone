import React,{ useState } from 'react'

function Popup() {
    const [popup, setPopup] = useState(false);

    const togglePopup = () =>{
        setPopup(!popup)
    }
    
    return (
        <>         
            {popup && (
                <div className='w-[1920px] h-[1920px] top-0 fixed'>
                    <div className='w-[1920px] h-[1920px] fixed bg-[#313131] bg-opacity-75'></div>
                    <div className='absolute bg-[#f1f1f1] px-[14px] py-[28px] rounded max-w-[600px] min-w-[300px] text-black'>
                        <h2>Popup</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla doloribus obcaecati, repudiandae deserunt accusantium recusandae officiis neque cumque, atque, ab accusamus officia non debitis et dolor delectus ea quo illo!</p>
                        <button className='absolute px-[5px] py-[7px] bg-white' onClick={togglePopup}>CLOSE</button>
                    </div>
                </div>)}
        </>
  )
}

export default Popup