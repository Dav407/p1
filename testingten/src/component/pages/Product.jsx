import React from 'react'
import Navbar from '../Navbar'
import Cards from '../Cards'

const Product = () => {
  const imgone = 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
  const imgtwo = 'https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600'
  const imgthree = 'https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?auto=compress&cs=tinysrgb&w=600'
  const imgfour ='https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600'
  const imgfive ='https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=600'
  const imgsix ='https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600'
  // const img
  // const img
  // const img
  return (

    <>
      <Navbar />
        <div className=' d-flex flex-wrap gap-3'>
        <Cards image ={imgone} name='Nikki' description='Good for your legs' price={600}/>
      <Cards image ={imgtwo} name='Adams' description='Made for you' price={600}/>
      <Cards image ={imgthree} name='Gucci' description='you like' price={600}/>
      <Cards image ={imgfour} name='dummy' description='dummy description' price={600}/>
      <Cards image ={imgfive} name='dummy' description='dummy description' price={600}/>
        </div>
      <div className=' d-flex flex-wrap gap-3'>
      <Cards image ={imgsix} name='dummy' description='dummy description' price={600}/>
      <Cards image ={imgsix} name='dummy' description='dummy description' price={600}/>
      <Cards image ={imgsix} name='dummy' description='dummy description' price={600}/>
      <Cards image ={imgsix} name='dummy' description='dummy description' price={600}/>
      <Cards image ={imgsix} name='dummy' description='dummy description' price={600}/>
      </div>
      </>
  )
}

export default Product