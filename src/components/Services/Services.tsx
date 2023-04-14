import { motion } from "framer-motion"

export function Services() {
    const services = [
        {
            icon: "paint",
            title: "Pintura",
            desc: "Ofereço um serviço personalizado para garantir um resultado impecável e com atenção aos detalhes da sua pintura."
        },
        {
            icon: "tools",
            title: "Concertos gerais",
            desc: "Ofereço uma ampla gama de serviços gerais para ajudar você a manter sua casa ou escritório em ótimo estado de funcionamento."
        },
        {
            icon: "grass",
            title: "Corte de grama",
            desc: "Ofereço um serviço confiável e de alta qualidade para manter seu gramado sempre saudável e com boa aparência."
        },
    ]
    return (
        <motion.div 
            initial={{x: 300}}
            whileInView={{x:0}}
            id="services"
            className="services-container origin-right rounded-l text-main w-full md:py-32 py-16 md:pl-16 md:pr-24 px-12 bg-dark-green"
        >
            <h1 className="lg:text-5xl text-4xl font-bold md:mb-14 mb-8">
                Serviços
            </h1>
            <div className="services flex flex-wrap justify-between">
                    {
                        services.map((service) => {
                            return (
                                <div className="service lg:my-0 my-10 lg:w-1/4 w-full text-dark-green bg-main p-8 rounded">
                                    <img src={`media/icons/${service.icon}.png`} />
                                    <h1 className="lg:text-4xl text-3xl font-bold mb-4">{service.title}</h1>
                                    <p className="text-sm">{service.desc}</p>
                                </div>
                            )
                        })
                    }
            </div>
        </motion.div>
    )
}