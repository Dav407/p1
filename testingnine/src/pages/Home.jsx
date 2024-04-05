import React from 'react'
import Navbar from '../component/Navbar'

export const Home = () => {
  const img1 = 'https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/computing.jpg'
  const img2 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/3355072/1.jpg?5389'
  const img3 ='https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Phones-Tablet/300_400_copy_4.jpg'
  const img4 ='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/0283522/1.jpg?4357'
  const img5 ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/8886462/1.jpg?6623'
  

  return (
    <div>
        <Navbar />
        <div className='d-flex flex-wrap gap-2 m-left'>
  <Main image ={img1} name='hp-book' description='Super-computer' price={600} />
<Main image ={img2} name='Infinix 32' description='The PHONE' price={100} />
<Main image ={img3} name='Nice hook' description='Hot-Gadgets' price={600} />
<Main image ={img4} name='Better-Foot' description='Shoe for your feet' price={600} />
<Main image ={img5} name='Good-Foot' description='Shoe for your feet' price={600} />
</div>

        <h1>Home</h1>
    </div>
  )
}
