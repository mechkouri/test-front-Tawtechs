import '../Footer/Footer.css'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <>
        <footer className="text-center bg-body-tertiary">
                <div className="container pt-4">
                    <div className="footerlogo d-flex justify-content-center align-items-center ">
                        <img src={logo} alt="logo" />
                    </div>
                    <section className="mb-4 socialmedia">
                            <a
                                className="btn btn-link btn-floating btn-lg text-body m-1"
                                href="#!"
                                >  Facebook </a>
                            
                            
                            <a
                                className="btn btn-link btn-floating btn-lg text-body m-1"
                                href="#!"
                                > Instagram</a>
                                <a
                                className="btn btn-link btn-floating btn-lg text-body m-1"
                                href="#!"
                                > Linkden </a>
                                <a
                                className="btn btn-link btn-floating btn-lg text-body m-1"
                                href="#!"
                                > Twitter </a>
                                <a
                                className="btn btn-link btn-floating btn-lg text-body m-1"
                                href="#!"
                                > dorible </a>

                </section>
  </div>


  <div className="text-center p-3 footer-bottom" >
    © 2024 Copyright | 
    <a className="text-body" href="https://mechkouri.netlify.app/"> Said mechkouri </a>
  </div>
</footer>
    </>
  )
}

export default Footer