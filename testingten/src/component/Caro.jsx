import React from 'react'

const Caro = () => {
      const imgdic = 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'

  return (
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src={imgdic}  alt="..." style={{height: '500px', width: '1200px'}} />
    </div>
    <div class="carousel-item" >
      <img src={imgdic}  alt="..."  style={{height: '500px', width: '1200px'}} />
    </div>
    <div class="carousel-item" >
      <img  src={imgdic} alt="..."  style={{height: '500px', width: '1200px', marginLeft: '60px', marginRight: '30pc'}} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Caro