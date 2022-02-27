import React from 'react'

function GifGridItem({ id, title, url }) {


  return (

    <div class="card ">
      <div class="card-image animate__animated animate__fadeInDown">
        <figure class="image is-4by3">
          <img src={url} alt={title} />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{title}</p>
            <p class="subtitle is-6">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GifGridItem