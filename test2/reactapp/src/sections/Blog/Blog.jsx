import './Blog.css'
import { BlogCard, Button, Heading } from '../../components';
import { blogs } from '../../Data';



const Blog = () => {
    let blog = blogs.map(bg => <BlogCard key={bg.id} title={bg.title} img={bg.img} desc={bg.desc}  />)
  return (

        <section className='blog container' id='blog'>
            <Heading title="blog" />

            <div className="row mt-n5">
                    
                    {blog}

            </div>

            <Button text="view more" />
            


        </section>
    
  )
}

export default Blog