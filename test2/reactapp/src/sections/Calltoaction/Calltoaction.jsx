import Button from '../../components/Button/Button'
import Heading from '../../components/Heading/Heading'
import '../Calltoaction/Calltoaction.css'

const Calltoaction = () => {
  return (
    <section className='calltoaction' id='calltoaction'>
        <div className="container">
            <Heading title="i am available for freelancer" />
            <Button text="Hire me" />
        </div>
    </section>
  )
}

export default Calltoaction