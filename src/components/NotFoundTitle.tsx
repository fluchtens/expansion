"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from "./NotFoundTitle.module.scss";

export const NotFoundTitle = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -150 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <h1 ref={titleRef} className={styles.title}>
      PAGE NON TROUVÉE
    </h1>
  );
};
