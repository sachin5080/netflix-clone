import React from 'react'
import "./Feature.scss"

export default function Feature({type}) {
  return (
    <div className='feature'>
      {type && (
        <div className="category">
          <span>
            {type==='movie' ? 'Movies' : 'Series'}
            <select name="genre" id="genre">
              <option >Genre</option>
<option value="adventure">Adventure</option>
<option value="comdey">Comedy</option>
<option value="crime">Crime</option>
<option value="fantasy">Fantasy</option>
<option value="historical">Historical</option>
<option value="horror">Horror</option>
<option value="romance">Romance</option>
<option value="sci-fi">Sci-fi</option>
<option value="thriller">Thriller</option>
<option value="western">Western</option>
<option value="animation">Animation</option>
<option value="drama">Drama</option>
<option value="documentary">Documentary</option>          
            </select>
          </span>
        </div>
      )}
       <img width="100%" src="http://cdn.shopify.com/s/files/1/0046/3418/1702/articles/Thomas-shelby-Feature_1200x1200.jpg?v=1596836964" alt="peaky" />
<div className="info">
 <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Peaky_Blinders_logo.png" alt="logo" />
<span className="desc">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic quod nemo aliquid aspernatur dolores assumenda doloremque! Expedita at odit nemo quo qui, libero ea fugiat sequi aperiam enim delectus!
</span>
<div className="buttons">
  <button className='play'>
  <i className="bi bi-play-btn"></i>
  <span>Play</span>
  </button>
  <button className='more'>
  <i className="bi bi-info-circle-fill"></i>
  <span>Info</span>
  </button>
</div>
</div>
    </div>
  )
}
