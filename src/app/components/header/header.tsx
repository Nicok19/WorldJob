import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        // Cierra el menú si está abierto cuando el tamaño de la ventana cambia
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__logo}>
                    <Image src="/worldjob-logo.png" alt="logo" width={142} height={52} />
                </div>
                <div 
                    className={`${styles.header__hamburger} ${isMenuOpen ? styles.menu__open : ""}`} 
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <span className={styles.close__icon}>✕</span> // Ícono de cruz para cerrar
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
                            <Link href="#about">About Us</Link>
                        </li>
                        <li>
                            <Link href="#data">Data</Link>
                        </li>
                        <li>
                            <Link href="#solutions">Solutions</Link>
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
