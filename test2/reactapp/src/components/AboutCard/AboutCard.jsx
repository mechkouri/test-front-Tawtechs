import '../AboutCard/AboutCard.css'
import { FaCamera, FaHatWizard, FaHeadphonesAlt, FaPaintBrush } from 'react-icons/fa'


const AboutCard = ({icon , title, description}) => {

    let iconToRender;
    switch (icon) {
        case 'camera':
        iconToRender = <FaCamera className='about-icon'/> ;
        break;
        case 'headphones':
        iconToRender = <FaHeadphonesAlt className='about-icon'/>;
        break;
        case 'paintbrush':
        iconToRender = <FaPaintBrush className='about-icon'/>;
        break;
        case 'wizard':
        iconToRender = <FaHatWizard className='about-icon'/>;
        break;
        default:
        iconToRender = null; 
    }

    return (
        <>
            <div className="col-12 col-md-6 my-4">
                    <div className="d-flex">
                        <div className="me-4 text-primary ">
                                            {iconToRender} 
                                            </div>
                                            <div>
                                                <h2 className="h4 mb-3">{title}</h2>
                                                <p className="text-secondary mb-0">{description}</p>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default AboutCard