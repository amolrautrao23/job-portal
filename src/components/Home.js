import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../img/img1.jpg"
import "../css/home.css"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import JobOpening from './JobOpening';
import { useSelector } from 'react-redux';
import CarouselItem from './CarouselItem';

const Home = () => {
  // accessing bannar data from store 
  const state = useSelector(state => state.banner)
  const [data, setData] = useState([])
  useEffect(() => setData(state), [state])

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="carousel">
                <OwlCarousel className='owl-theme'
                  loop margin={10} 
                  nav
                  autoplay
                  items={1}
                  // navText={[<BsArrowRight />, <BsArrowRight />]}>
                  navText={["Prev", "next"]}>

                  {
                   data.length > 0 &&data.map((elem,i) => <CarouselItem elem={elem} key={i} />)

                  }
                  <div className='item'>
                    <div className="overlay"></div>
                    <img className="img" src={img1} />
                    <div className="carousel-text">
                      <h3>Sample heading 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus.</p>
                    </div>
                  </div>
                </OwlCarousel>
                <JobOpening />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
