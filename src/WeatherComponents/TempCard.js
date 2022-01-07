import React from 'react'

export const TempCard = ({highest,lowest,sunrise,sunset,clouds,humidity,wind}) => {
    return (
        <div className='tempCard'>
            <div className="container1">
           <span className='tempUpFont block'>{Math.floor(highest-273)}&#176;</span>
           <span className='tempDownFont'>High</span>
           </div> 
           <div className="container2">
           <span className='tempUpFont block'>{Math.floor(lowest-273)}&#176;</span>
           <span className='tempDownFont'>Low</span>
           </div>
           <div className="container3">
               <span className='tempUpFont block'>{wind}</span>
               <span className='tempDownFont'>Wind</span>
           </div>
           <div className="container4">
                <span className='tempUpFont block'>{humidity}</span>
               <span className='tempDownFont'>Rain</span>
           </div>
           <div className="container5">
                <span className='tempUpFont block'>{sunrise}</span>
               <span className='tempDownFont'>Sunrise</span>
           </div>
           <div className="container6">
                <span className='tempUpFont block'>{sunset}</span>
               <span className='tempDownFont'>Sunset</span>
           </div>
        </div>
    )
}
