import React from 'react'

const Main = (props) => {
  return (
    <>
         <div class="card" style={{width: "15rem"}}>
  <img src= {props.image} style={{height: '200px'}}/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <div style={{height: "100px"}}>
    <p class="card-text">{props.description}</p>
    <p className="card-text">${props.price} </p>
    </div> 
    <div className="mb-4  d-flex justify-content-between mx-1" >
    </div>

    <a href="#" class="btn btn-primary w-100"> Add To Cart</a>
  </div>
</div>
    </>
  )
}

export default Main