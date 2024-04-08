import { FaQuoteLeft } from 'react-icons/fa';
import Heading from '../../components/Heading/Heading';
import '../Testimony/Testimony.css'
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCol,
    MDBRow,
    
    } from "mdb-react-ui-kit";

const Testimony = () => {
  return (
    <>
    <section className='testimony container '>
    <Heading title="testimony" />
    <div className="box-shadow d-flex justify-content-center align-items-center tes-icon">
        <FaQuoteLeft />
    </div>
    <div className="wrapper d-flex justify-content-center align-items-center">
    <MDBRow className="py-5 text-center">
        <MDBCol md="12">
            <MDBCarousel showControls dark>
            
                    <MDBCarouselItem className="active">
                        <p className="lead font-italic mx-4 mx-md-5">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Fugit, error amet numquam iure provident voluptate esse quasi,
                            voluptas nostrum quisquam!"
                        </p>
                <p className="text-muted mb-0 nametext">- Jeo deio, web devloper</p>
            </MDBCarouselItem>
            <MDBCarouselItem>
                <p className="lead font-italic mx-4 mx-md-5">
                    "Neque cupiditate assumenda in maiores repudiandae mollitia
                    adipisci maiores repudiandae mollitia consectetur adipisicing
                    architecto elit sed adipiscing elit."
                </p>

                <p className="text-muted mb-0 nametext">- Teresa May, marketing expert</p>
            </MDBCarouselItem>
            <MDBCarouselItem>
                <p className="lead font-italic mx-4 mx-md-5">
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur est laborum neque
                    cupiditate assumenda in maiores."
                </p>
            
                <p className="text-muted mb-0 nametext">- Kate Allise, manager</p>
            </MDBCarouselItem>
            
        </MDBCarousel>
        </MDBCol>
    </MDBRow>         
    </div>
    </section>
    </>
  )
}

export default Testimony