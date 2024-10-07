import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        // Configurar el ancho del viewport al montarse el componente
        setViewportWidth(window.innerWidth);

        const handleResize = () => {
            const newWidth = window.innerWidth;
            setViewportWidth(newWidth);

            // Cerrar el menú si el viewport es mayor a 768px
            if (newWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        // Agregar el listener de resize
        window.addEventListener("resize", handleResize);
        
        // Limpiar el listener al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen]); // Asegúrate de incluir isMenuOpen en las dependencias

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Cerrar el menú al hacer clic en un link
    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    // Función para desplazar hacia arriba
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__logo} onClick={scrollToTop}>
                    <Image src="/worldjob-logo.png" alt="logo" width={142} height={52} />
                </div>
                <div 
                    className={`${styles.header__hamburger} ${isMenuOpen ? styles.menu__open : ""}`} 
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <span className={styles.close__icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                                <path d="M19.5 6.5l-1.4-1.4-6.1 6.1-6.1-6.1L5.5 6.5 11.6 12 5.5 17.5l1.4 1.4 6.1-6.1 6.1 6.1 1.4-1.4-6.1-6.1z"/>
                            </svg>
                        </span>
                    ) : (
                        <>
                            <span className={styles.hamburger__line}></span>
                            <span className={styles.hamburger__line}></span>
                            <span className={styles.hamburger__line}></span>
                        </>
                    )}
                </div>
                <nav className={`${styles.header__menu} ${isMenuOpen ? styles.menu__open : ""}`}>
                    <ul>
                        <li>
                            <Link href="#about" onClick={handleLinkClick}>About Us</Link>
                        </li>
                        <li>
                            <Link href="#data" onClick={handleLinkClick}>Data</Link>
                        </li>
                        <li>
                            <Link href="#solutions" onClick={handleLinkClick}>Solutions</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.header__platforms}>
                    <h2 className={styles.header__title}>Available in</h2>
                    <div className={styles.platforms__img}>
                        <Image src="/ios.png" alt="app store" width={50} height={50} />
                        <Image src="/playstore.png" alt="google play" width={50} height={50} />
                    </div>
                </div>
            </div>
        </header>
    );
}

