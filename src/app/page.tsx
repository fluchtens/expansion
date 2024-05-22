"use server";

import { MainDesc } from "@/components/MainDesc";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainDesc />
      </div>
    </main>
  );
}
