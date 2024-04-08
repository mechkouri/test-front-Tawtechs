import '../Heading/Heading.css'

const Heading = ({title}) => {
  return (
    <>
        <div className="title d-flex align-content-center align-items-center justify-content-center">
            <h1 className="mb-3">{title}</h1>
        </div>
    </>
  )
}

export default Heading