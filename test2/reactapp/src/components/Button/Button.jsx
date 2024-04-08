import '../Button/Button.css'

const Button = ({text}) => {
  return (
    <div className=" d-flex justify-content-center align-items-center buttongb ">
                <button className="btn btn-primary" type="button">{text}</button>
     </div>
  )
}

export default Button