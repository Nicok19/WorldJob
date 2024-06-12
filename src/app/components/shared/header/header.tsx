import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { LogIn } from "../../../../../styles/Button__Login";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Image src="/worldjob-logo.png" alt="logo" width={142} height={52} />
            </div>
            <nav className={styles.header__menu}>
                <ul>

                    <li>
                        <Link href="/solutions">Solutions</Link>
                        <div className={styles.header__submenu}>
                            <ul>
                                <li>
                                    <Image src="/iconChat.png" alt="Chat" width={40} height={40} />
                                    <div>
                                        <Link href="/solutions/submenu1">Chat</Link>
                                        <p className={styles.submenu__description}>Chat with compatriots</p>
                                    </div>
                                </li>

                                
                                <li>
                                    <Image src="/icon-Communities.png" alt="Communities" width={40} height={40} />
                                    <div>
                                        <Link href="/solutions/submenu2">Communities</Link>
                                        <p className={styles.submenu__description}>Get compatriots in other countrys</p>
                                    </div>
                                </li>



                                <li>
                                    <Image src="/icon-work-and-study.png" alt="Work and Study" width={40} height={40} />
                                    <div>
                                        <Link href="/solutions/submenu3">Work and Study</Link>
                                        <p className={styles.submenu__description}>Apply for jobs and scholarships in a new country from your country </p>
                                    </div>
                                </li>



                                <li>
                                    <Image src="/icon-mentoring.png" alt="Mentoring" width={40} height={40} />
                                    <div>
                                        <Link href="/solutions/submenu3">Mentoring</Link>
                                        <p className={styles.submenu__description}>We help you in your legal procedures </p>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/prices">Prices</Link></li>
                    <li><Link href="/references">References</Link></li>
                </ul>
            </nav>
            <LogIn>Log In</LogIn>
        </header>
    );
}

