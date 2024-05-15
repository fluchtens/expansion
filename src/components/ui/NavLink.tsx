"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.scss";

interface NavLinkProps {
  href: string;
  name: string;
}

export const NavLink = ({ href, name }: NavLinkProps) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <li>
      <Link href={href} className={`${styles.link} ${isActive ? styles.active : styles.inactive}`}>
        {name}
      </Link>
    </li>
  );
};
