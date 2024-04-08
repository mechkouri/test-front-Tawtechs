import { useState } from 'react';
import Heading from '../../components/Heading/Heading'
import '../Works/Works.css'
import { projectsData } from '../../Data';

const Works = () => {

    const [selectedCategory, setSelectedCategory] = useState("*");

    const filterProjects = (category) => {
        setSelectedCategory(category);
    };
    
    const filterButtons = [
        { label: "All", category: "*" },
        { label: "SLLIDESHOW", category: "SLLIDESHOW" },
        { label: "VIDEO", category: "VIDEO" },
        { label: "IMAGE", category: "IMAGE" },
    ];
    
    const filteredProjects =
        selectedCategory === "*"
        ? projectsData
        : projectsData.filter((project) => project.category === selectedCategory);

return (
    <>
        <section className='work container ' id='works'>
            <Heading title="my works" />

            <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
        <div
            className="row g-5 mb-5 align-items-center wow fadeInUp"
            data-wow-delay="0.1s"
        >
            
            <div className="d-flex justify-content-center align-items-center g-2 w-100">
            <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                {filterButtons.map((button, index) => (
                <li
                    key={index}
                    onClick={() => filterProjects(button.category)}
                    className={`mx-3 ${
                    selectedCategory === button.category ? "active" : ""
                    }`}
                    data-filter={`.${button.category.toLowerCase()}`}
                >
                    {button.label}
                </li>
                ))}
            </ul>
            </div>
        </div>
        <div
            className="row g-4 portfolio-container wow fadeInUp"
            data-wow-delay="0.1s"
        >
            {filteredProjects.map((project) => (
            <div
                key={project.id}
                className={`col-lg-4 col-md-6 portfolio-item ${
                project.id % 2 === 0 ? "second" : "first"
                }`}
            >
                <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src={project.imageSrc} alt="" />
                
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>

        </section>
    </>
  )
}

export default Works