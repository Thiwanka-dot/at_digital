import { useState } from "react";
import style from './nav.module.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <img src={Logo} alt="logo" className={style.logo} />
            <button className={style.toggleBtn} onClick={toggleMenu} aria-label="Toggle menu">
                ☰
            </button>
            <ul className={style.navLinks}>
                <li><Link to="#">SERVICES</Link></li>
                <li><Link to="#">ABOUT US</Link></li>
                <li><Link to="#">CONTACT US</Link></li>
                <li><Link to="#">CAREERS</Link></li>
            </ul>
            <div className={`${style.menu} ${menuOpen ? style.show : ""}`}>
                <button className={style.closeBtn} onClick={closeMenu}>✕</button>
                <ul>
                    <li><Link to="#" onClick={closeMenu}>HOME</Link></li>
                    <li><Link to="#" onClick={closeMenu}>SERVICES</Link></li>
                    <li><Link to="#" onClick={closeMenu}>ABOUT US</Link></li>
                    <li><Link to="#" onClick={closeMenu}>CONTACT US</Link></li>
                    <li><Link to="#" onClick={closeMenu}>CAREERS</Link></li>
                </ul>
            </div>
        </nav>
    );
}
