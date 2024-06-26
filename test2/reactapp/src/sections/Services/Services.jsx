import { services } from '../../Data'
import { Heading, Servicecard } from '../../components'
import './Services.css'

const Services = () => {
    let servicescard = services.map(service => <Servicecard key={service.id} icon={service.icon} title={service.title} description={service.description} /> )
  return (
    <>
        <section className=" mb-3 services " id='services'>
            <div className="container">
            <Heading title="my services" />
    <div className="row pt-5  service-wrapper" >
        {servicescard}
    </div>
    </div>
</section>
    </>
  )
}

export default Services