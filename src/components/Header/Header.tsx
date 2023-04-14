import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Social } from "../Social/Social";
import { Link } from 'react-scroll'

export function Header() {
  const [menuState, setMenuState] = useState<boolean>(false);

  return (
    <div className="header-container fixed z-50 bg-main w-screen md:h-24 h-16 md:px-20 px-5 py-5 items-center flex justify-between">
      <div className="logo-container h-fit">
        <h1 className="logo font-bold md:text-3xl text-xl">Paulo Cesar.</h1>
      </div>
      <div className="menu-container z-50 transition-all h-fit rounded cursor-pointer ">
        <div
          className="menu-btn"
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          <img className="md:w-9 w-7 -scale-x-100" src="media/icons/menu.png" />
        </div>
      </div>
      <AnimatePresence>
        {menuState && (
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{
              duration: 0.2,
            }}
            className={`menu fixed flex flex-col justify-center items-center right-0 z-40 inset-y-0 md:w-96 w-3/4 h-full bg-menu`}
          >
            <ul className="menu-options w-full mb-48">
                <Link to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={100}
                >
                  <li className="w-full cursor-pointer h-20 hover:bg-dark-green hover:text-main transition-all flex justify-center items-center  font-bold">Início</li>
                </Link>
                <Link to="services"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={100}
                >
                  <li className="w-full cursor-pointer h-20 hover:bg-dark-green hover:text-main transition-all flex justify-center items-center  font-bold">Serviços</li>
                </Link>
                <Link to="contact"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={100}
                >
                  <li className="w-full cursor-pointer h-20 hover:bg-dark-green hover:text-main transition-all flex justify-center items-center  font-bold">Contato</li>
                </Link>
            </ul>
            <Social />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
