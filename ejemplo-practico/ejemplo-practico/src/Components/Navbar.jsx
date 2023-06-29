import { useState } from "react";
import Carrito from "./Carrito";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-4">
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2" onClick={toggleMenu}
                    >
                        <span className={`block h-0.5 w-8 bg-gray-600 ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                        <span className={`block h-0.5 w-8 bg-gray-600 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 w-8 bg-gray-600 ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                    </div>

                    <div>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                        >
                        </div>
                        <ul className={`${isMenuOpen ? 'block' : 'hidden'} flex flex-col items-center justify-between min-h-[250px]"`}>
                            <li className="border-b border-gray-400 my-2 uppercase">
                                <a href="/about">Acerca de </a>
                            </li>
                            <li className="border-b border-gray-400 my-2 uppercase">
                                <a href="/portfolio">Portfolio </a>
                            </li>
                            <li className="border-b border-gray-400 my-2 uppercase">
                                <a href="/contact">Contacto </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                    <li>
                        <a href="/about">Acerca de</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/contact">Contacto</a>
                    </li>
                </ul>

            </nav>
            <div className="flex justify-end">
                <Carrito />
            </div>
        </div>
    );
};

export default Navbar;