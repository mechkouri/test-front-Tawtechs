import '../AboutSection/AboutSection.css'
import aboutimg from '../../assets/images/aboutme.png'
import Heading from '../../components/Heading/Heading'
import AboutCard from '../../components/AboutCard/AboutCard'
import { aboutservices } from '../../Data'



const AboutSection = () => {
    let services = aboutservices.map(service => <AboutCard key={service.id} icon={service.icon} title={service.title} description={service.description} /> )
    return (
    <>
    <section className="py-3 my-6 py-md-5" id='about'>
        <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                <div className="col-12 col-lg-6 col-xl-5 pb-4">
                    <img className="img-fluid rounded aboutimg" loading="lazy" src={aboutimg} alt="About 1" />
                </div>
                    <div className="col-12 col-lg-6 col-xl-7 ">
                        <div className="row justify-content-xl-center">
                            <div className="col-12 col-xl-11">
                                <Heading title="About me" />
                                <div className="row gy-4 gy-md-0 gx-xxl-5X about-services">
                                    {services}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </>
)
}

export default AboutSection