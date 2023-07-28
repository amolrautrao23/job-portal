import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import { useSelector } from 'react-redux';
import CarouselItem from './CarouselItem';




const Carousel = () => {
  // accessing bannar data from store 
  const state = useSelector(state => state.banner)
  const [data, setData] = useState([])
  useEffect(() => setData(state.data), [state])
  let slidesToShow=1;
  const PrevBtn=props=>
  {
    const {className,onClick,currentSlide}=props;
    return currentSlide !==0 && <div className={className} onClick={onClick} ><BsArrowLeft  style={{"color":"#fff",fontSize:"20px"}}/></div>
  }
  const NextBtn=props=>
  {
    const {className,onClick,currentSlide,slideCount}=props;
    return currentSlide!== slideCount - slidesToShow && <div className={className} onClick={onClick} ><BsArrowRight style={{"color":"#fff",fontSize:"20px"}}/></div> 
     
  }
  return (
    <>
     
        <Slider className='carousel'
        // autoplay
        dots
        // infinite={false}
        dotsClass='slick-dots dots'
        prevArrow={<PrevBtn/>}
        nextArrow={<NextBtn/>}
        initialSlide={2}
        slidesToShow={slidesToShow}
        >
          {
             state.isLoading ?
             <h3>Loading...</h3>
             : state.isError ?
               <h4 className='text-danger'>Something went wrong!</h4>
               : data && data.map(elem => <CarouselItem elem={elem} key={elem._id} />)
 
          }
        </Slider>

    </>
  )
}

export default Carousel
