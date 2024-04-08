import './BlogCard.css'

const BlogCard = ({img, title, desc}) => {
    return (
        <div className="col-md-6 col-lg-4 mt-5 wow "  >
                            <div className="blog-grid">
                                <div className="blog-grid-img position-relative"><img alt="img" src={img} /></div>
                                <div className="blog-grid-text p-4">
                                    <h3 className="h5 mb-3"><a href="#!">{title}</a></h3>
                                    <p className="display-30">{desc}</p>
                                </div>
            </div>
        </div>
    )
}

export default BlogCard