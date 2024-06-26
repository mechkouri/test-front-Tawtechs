import './Header.css'
import logo from "../../assets/images/logo.png"
import { FaBars } from "react-icons/fa";


const Header = () => {
	return (
    <>
<header className="header" id="navbar-custom">
	<nav className="navbar navbar-expand-lg bg-light">

		<div className="container-fluid">
			<a className="navbar-brand" href="#"><img className="logo" src={logo} alt="" /></a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<FaBars color="#56aff6" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
				<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">Home</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="#about">about</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="#services">service</a>
				</li><li className="nav-item">
				<a className="nav-link" href="#works">works</a>
				</li><li className="nav-item">
				<a className="nav-link" href="#testimony">testimonial</a>
				</li><li className="nav-item">
				<a className="nav-link" href="#blog">blog</a>
				</li><li className="nav-item">
				<a className="nav-link" href="#contact">contact</a>
				</li>
			</ul>
			</div>
		</div>
	</nav>

</header>
    </>
)
}

export default Header