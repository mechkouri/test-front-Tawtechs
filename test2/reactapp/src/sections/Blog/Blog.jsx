import '../Blog/Blog.css'
import Heading from './../../components/Heading/Heading';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import Button from '../../components/Button/Button';


const Blog = () => {
  return (

        <section className='blog container' id='blog'>
            <Heading title="blog" />

            <div className="row mt-n5">
                    <div className="col-md-6 col-lg-4 mt-5 wow "  >
                        <div className="blog-grid">
                            <div className="blog-grid-img position-relative"><img alt="img" src={blog1} /></div>
                            <div className="blog-grid-text p-4">
                                <h3 className="h5 mb-3"><a href="#!">How to Get Into Digital Marketing.</a></h3>
                                <p className="display-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mt-5 wow "  >
                        <div className="blog-grid">
                            <div className="blog-grid-img position-relative"><img alt="img" src={blog2} /></div>
                            <div className="blog-grid-text p-4">
                                <h3 className="h5 mb-3"><a href="#!">Business tool for your customer</a></h3>
                                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mt-5 wow "  >
                        <div className="blog-grid">
                            <div className="blog-grid-img position-relative"><img alt="img" src={blog3} /></div>
                            <div className="blog-grid-text p-4">
                                <h3 className="h5 mb-3"><a href="#!">The 12 Best Online UX Design Courses in 2024</a></h3>
                                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                            </div>
                        </div>
                    </div>

            </div>

            <Button text="view more" />
            


        </section>
    
  )
}

export default Blog