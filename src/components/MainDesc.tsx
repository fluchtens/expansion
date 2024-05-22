"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./MainDesc.module.scss";

export const MainDesc = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: -150 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <h1>
        Nous vous accompagnons
        <br />
        dans votre <span>expansion digitale</span>
      </h1>
      <p>
        Le programme Digital Booster d’Expansion est{" "}
        <span>l’atout digital des petites, moyennes et grandes entreprises</span> qui souhaitent
        développer ou confirmer leur présence en ligne.
      </p>
      <button>
        <Image src="./rocket_icon.svg" alt="rocket_icon.svg" width={17.48} height={18.36} />
        Faites le test sans plus tarder
      </button>
    </div>
  );
};
