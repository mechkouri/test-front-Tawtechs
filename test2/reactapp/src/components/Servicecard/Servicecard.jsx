import '../Servicecard/Servicecard.css'

const Servicecard = ({icon, title, description}) => {
  return (
    <>
        <div className="col-lg-4 col-sm-6 mb-30 pb-5">
            <div className="card">
                <div className=" d-flex justify-content-center align-items-center box-shadow bg-white rounded-circle mx-auto text-center iconservice" ><i className={"fa " + icon +" fa-2x head-icon"}></i></div>
                <div className="card-body text-center">
                    <h3 className="card-title pt-1">{title}</h3>
                    <p className="card-text text-sm">{description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Servicecard