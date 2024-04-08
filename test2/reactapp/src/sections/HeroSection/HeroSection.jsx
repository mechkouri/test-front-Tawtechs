import { FaMouse } from 'react-icons/fa'
import '../HeroSection/HeroSection.css'

const HeroSection = () => {
    return (
    <>
        <section  className=" heroimg p-5  bg-image rounded-3 " >
            <div className="container h-100" > 
                <div className="d-flex justify-content-star align-items-center h-100">
                    <h1 className='ml-4 hero-text'>I am Alice Joseph</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4"><FaMouse color='white' /></div>
            </div>
        </section>
    </>
    )
}

export default HeroSection