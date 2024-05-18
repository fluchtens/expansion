"use client";

import { HomeContent } from "@/components/ui/HomeContent";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <HomeContent />
      </div>
    </main>
  );
}
