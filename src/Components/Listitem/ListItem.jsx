import React, { useState } from 'react'
import "./ListItem.scss"

export default function ListItem({index}) {
  const [isHovered, setIsHovered]= useState(false)
  const trailer= "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcSexB58DD4WEmdn2jB_mU3PoW0s3NB-x3IbmQ";
  return (
    <div className='listItem'
    style={{left: isHovered && index * 225-50 + index *2.5}} 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
      <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQSnpMqmsi5f-eRKRfOZ-0sz3bqayoVJHBBwxR__w96hI3iqrLAlQca17pZx_-lNPTsOv12DpbnN6GywwBDOC06oonx5lisMXULWwNywctuz_Jn4tH4EIbcFHOofQJ0dpx7z7o5ho0HtfDulSquyV_lCF7CQ.jpg?r=d1b" alt="thomas" />
{isHovered && (
    <>
    <video src={trailer} autoPlay= {true} loop/>
    <div className="itemInfo">
      <div className="icons">
      <i className="bi bi-play-fill"></i>
      <i className="bi bi-plus-lg"></i>
      <i classname="bi bi-hand-thumbs-up"></i>
      <i className="bi bi-hand-thumbs-down"></i>
      </div>
      <div className="itemInfoTop"></div>
      <span>1 hour 14 minutes</span>
      <span className='limit'> +16</span>
      <span> 2013</span>
    </div>
    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. .</div>
    <div className="genre">Action</div>
    
    </>
  )}
  </div>
  )
}
