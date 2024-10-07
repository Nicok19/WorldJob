import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  const footerRows = [
    {
      title: "Company",
      items: [
        { name: "About us", link: "/about-us" },
        { name: "Blog", link: "/blog" },
        { name: "Press", link: "/press" },
        { name: "Careers", link: "/careers" },
        { name: "Partners", link: "/partners" },
        { name: "Terms of Service", link: "/terms-of-service" },
      ]
    },
    {
      title: "More Links",
      items: [
        { name: "Product", link: "/product" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Testimonials", link: "/testimonials" },
        { name: "Clients", link: "/clients" },
        { name: "Contact Us", link: "/contact-us" }
      ]
    },
    {
      title: "Useful Links",
      items: [
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Testimonials", link: "/testimonials" },
        { name: "Clients", link: "/clients" },
        { name: "Contact Us", link: "/contact-us" },
        { name: "Terms & Conditions", link: "/terms-and-conditions" },
      ]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={`${styles.footer__row} ${styles.footer__logo}`}>
            <Image src="/worldjob-logo.png" alt="logo" width={253} height={63} />
            <h3 className={styles.footer__rights}>© All rights reserved</h3>
          </div>
          {footerRows.map((row, index) => (
            <div className={`${styles.footer__row}`} key={index}>
              <h3 className={`${styles.footer__title}`}>{row.title}</h3>
              <ul className={`${styles.footer__list}`}>
                {row.items.map((item, idx) => (
                  <li className={`${styles.footer__item}`} key={idx}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.footer__author}>This website was made by Nicolás Bertinat.</p>
      </div>
    </footer>
  );
}


