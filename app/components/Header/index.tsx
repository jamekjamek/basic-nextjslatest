import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}><Link href="/" passHref>Home</Link></li>
          <li className={styles.item}><Link href="/blog" passHref>Blog</Link></li>
          <li className={styles.item}><Link href="/users" passHref>Users</Link></li>
        </ul>
      </header>
  )
}
