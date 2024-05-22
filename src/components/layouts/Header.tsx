"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "../ui/NavLink";
import styles from "./Header.module.scss";

export const Header = () => {
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const closeNavMenu = () => {
    setNavMenu(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navMenuRef.current) {
        if (!navMenuRef.current.contains(e.target as Node)) {
          closeNavMenu();
        }
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.primary} ref={navMenuRef}>
          <Link href="/" className={styles.mainLink}>
            <img src="/logo.svg" alt="logo.svg" />
          </Link>
          <button className={styles.navBtn} onClick={toggleNavMenu}>
            <AiOutlineMenu className={styles.navBtnIcon} />
          </button>
          <ul className={`${navMenu ? styles.navListMenu : styles.navList}`}>
            <NavLink href="/" name="Bienvenue" callback={closeNavMenu} />
            <NavLink href="/metiers" name="Nos métiers" callback={closeNavMenu} />
            <NavLink href="/methodologie" name="Notre méthodologie" callback={closeNavMenu} />
            <NavLink href="/agence" name="L'agence" callback={closeNavMenu} />
            <NavLink href="/blog" name="Blog" callback={closeNavMenu} />
          </ul>
        </div>
        <div className={styles.secondary}>
          <Link href="/contact" className={styles.contact}>
            Contact
          </Link>
          <button>Prendre un rendez-vous</button>
        </div>
      </div>
    </header>
  );
};
