import styles from "./page.module.scss";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
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
            <img src="./rocket_icon.svg" alt="rocket_icon.svg" />
            Faites le test sans plus tarder
          </button>
        </div>
      </div>
    </main>
  );
}
