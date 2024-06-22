'use client'; // Pastikan ini di bagian atas

import styles from "../styles/Users.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

export default function BlogClient({ dataBlog }: BlogProps) {
  return (
    <div>
      {dataBlog.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}
