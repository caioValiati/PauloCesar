import { motion } from "framer-motion"
import { Social } from "../Social/Social"

export function Contact() {

    return (
        <div id="contact" className="contact-container md:pr-0 pr-5 md:w-5/12 my-24">
            <form action="https://formspree.io/f/xwkjwllz" method="POST">
                <h1 className="font-bold text-5xl">Contato.</h1>
                <p className="mt-3 mb-12">Acesse uma das minhas redes. Ou me envie uma mensagem diretamente em <b className="marker">pcvaliati@gmail.com</b></p>
                <input className="bg-main w-full border-solid border-dark-green border-2 rounded placeholder-dark-green placeholder-opacity-60 font-bold border-opacity-25 px-5 py-3 focus:outline-none"  type="email" placeholder="E-mail" name="email" />
                <textarea className="bg-main w-full resize-none border-solid border-dark-green border-2 rounded placeholder-dark-green placeholder-opacity-60 font-bold border-opacity-25 px-5 py-3 focus:outline-none h-48 mt-12 mb-14" placeholder="Mensagem" name="message" />
                <motion.input className="w-1/2 mb-16 bg-dark-green hover:bg-dark-hover rounded py-3 text-main" whileTap={{scale: 1.2}} type="submit" />
            </form>
            <Social />
        </div>
    )
}