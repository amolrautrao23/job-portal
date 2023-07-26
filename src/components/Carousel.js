import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import { useSelector } from 'react-redux';
import CarouselItem from './CarouselItem';

const Carousel = () => {
  // accessing bannar data from store 
  const state = useSelector(state => state.banner)
  const [data, setData] = useState([])
  useEffect(() => setData(state.data), [state])

  return (
    <>
      <OwlCarousel className='owl-theme'
        loop margin={10}
        nav
        autoplay
        items={1}
        // navText={[<BsArrowRight />, <BsArrowRight />]}>
        // navText={[<BiRightArrowAlt  />, <BiRightArrowAlt />]}
        //   navText={ ['<span aria-label="Previous">⬅️</span>','<span aria-label="Next">➡️</span>']}
        navText={['<span>⬅️</span>', '<span >➡️</span>']}


      >
        {/* // navText={["Prev", "next"]}> */}

        {
          state.isLoading ?
            <h3>Loading...</h3>
            : state.isError ?
              <h4 className='text-danger'>Something went wrong!</h4>
              : data && data.map(elem => <CarouselItem elem={elem} key={elem.id} />)

        }
      </OwlCarousel>
    </>
  )
}

export default Carousel
