import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // ! for response and width . able to customize width
    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };
    return (
        <header className="nav-header">
            {/* nav logo section */}
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">
                    Koolio.io Task
                </NavLink>

                <div
                    className={`nav__menu ${showMenu ? "show-menu" : ""}`}
                    id="nav-menu"
                >
                    {/* nav list from here */}
                    <ul className="nav__lists">

                        {/* these lists are static now */}
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                News
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                Favorite
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                Location
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link nav__cta">
                                Get Started
                            </NavLink>
                        </li>
                    </ul>
                    {/* responsive close  button */}
                    <section className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </section>
                </div>
                {/* open button of nav */}
                <section className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </section>
            </nav>
        </header>
    );
};

export default Navbar;