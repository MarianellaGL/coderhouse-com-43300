import { useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow((prev) => !prev)
    }

    return (
        <>
            <nav>
                <div className="navbar">
                    <button className="navbar-toggle" onMouseEnter={toggleMenu} >
                        Bienvenidos
                    </button>
                    <ul className={`navbar-menu ${show ? 'show' : ''}`}>
                        <li
                            className={`navbar-item ${show ? 'active' : ''}`}
                        >
                            PRODUCTS
                        </li>
                        <li className={`navbar-item ${show ? 'active' : ''}`}>
                            ELEMENTS
                        </li>
                        <li className={`navbar-item ${show ? 'active' : ''}`}>
                            PURCHASE
                        </li>
                    </ul>

                </div>
            </nav>
        </>);
}

export default Navbar;