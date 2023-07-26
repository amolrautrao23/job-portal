import "../css/home.css"
import JobOpening from './JobOpening';
import Carousel from './Carousel';

const Home = () => {
 
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="carousel">
                <Carousel/>
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
