import React from 'react'
import "./Watch.scss"

export default function Watch() {
  return (
    <div className='watch'>
        <div className="back">
        <i className="bi bi-arrow-left"></i>
        Home
        </div>
        <video className='video' autoPlay progress controls src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcSexB58DD4WEmdn2jB_mU3PoW0s3NB-x3IbmQ" />
      
    </div>
  )
}
