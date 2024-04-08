import '../Contact/Contact.css'
import Heading from './../../components/Heading/Heading';

const Contact = () => {
    return (
    <section className='contact container' id='contact'>
        <Heading title="contact" />
        <div className=" d-flex justify-content-center align-items-center w-100">
                    <form className='contactform'>
                <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form4Example1" className="form-control" placeholder='Name' />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form4Example2" className="form-control" placeholder='Email address' />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <textarea className="form-control" id="form4Example3" rows="4" placeholder='Message'></textarea>
                </div>

                        <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4 formbtn">SEND MESSAGE</button>
                    </form>
        </div>
    </section>
  )
}

export default Contact