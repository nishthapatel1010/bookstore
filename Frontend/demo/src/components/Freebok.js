import React from 'react'
import list from "../list/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
const Freebok = () => {
    const freedata=list.filter((data)=>data.category==="free");
    console.log(freedata)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
        <h1 className='font-semibold text-2xl font-bold'>Free offered Courses</h1>
        <p className='pt-1 text-s pb-2'>Unlock endless learning opportunities with our guide to top free online courses. Boost your skills, advance your career, and learn for free!</p>
    </div>
    <div className='p-4 '> <Slider {...settings}>
         {
            freedata.map((item)=>(
                <Card item={item} key={item.id} />
            ))
         }
        </Slider>
   
    </div>
    </div>
    </>
  )
}

export default Freebok