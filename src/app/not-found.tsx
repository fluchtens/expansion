import { NotFoundTitle } from "@/components/NotFoundTitle";
import styles from "./not-found.module.scss";

export default async function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <NotFoundTitle />
      </div>
    </main>
  );
}
