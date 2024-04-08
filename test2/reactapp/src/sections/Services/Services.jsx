import { services } from '../../Data'
import Heading from '../../components/Heading/Heading'
import Servicecard from '../../components/Servicecard/Servicecard'
import '../Services/Services.css'

const Services = () => {
    let servicescard = services.map(service => <Servicecard key={service.id} icon={service.icon} title={service.title} description={service.description} /> )
  return (
    <>
        <section className=" mb-3 services ">
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