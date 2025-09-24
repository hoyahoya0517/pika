import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/home" className={styles.link}>
        <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1757315769/pika/pika_iijxcr.png" />
      </Link>
    </div>
  );
}
