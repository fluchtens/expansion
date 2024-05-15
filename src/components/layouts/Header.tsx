"use server";

import Link from "next/link";
import styles from "./Header.module.scss";

interface NavLinkProps {
  href: string;
  name: string;
}

export const NavLink = async ({ href, name }: NavLinkProps) => (
  <li>
    <Link href={href} className={styles.link}>
      {name}
    </Link>
  </li>
);

export const Header = async () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/logo.svg" alt="logo.svg" />
          <ul className={styles.ul}>
            <NavLink href="/" name="Bienvenue" />
            <NavLink href="/metiers" name="Nos métiers" />
            <NavLink href="/methodologie" name="Notre méthodologie" />
            <NavLink href="/agence" name="L'agence" />
            <NavLink href="/blog" name="Blog" />
          </ul>
        </div>
        <div className={styles.right}>
          <Link href="/contact" className={styles.contact}>
            Contact
          </Link>
          <button>Prendre un rendez-vous</button>
        </div>
      </div>
    </header>
  );
};
