import React from 'react'

const CarouselItem = ({elem}) => {
    return (
        <>
            <div className='item'>
                <div className="overlay"></div>
                <img className="img" src={elem.image } />
                <div className="carousel-text">
                    <h3>{elem.title}</h3>
                    <p>{elem.description}</p>
                </div>
            </div>
        </>
    )
}

export default CarouselItem
