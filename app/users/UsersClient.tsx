// app/users/UsersClient.tsx

'use client'; // Pastikan ini di bagian atas

import { useRouter } from 'next/navigation';
import styles from '../styles/Users.module.css';

interface UserProps {
  dataUsers: Array<any>;
}

export default function UsersClient({ dataUsers }: UserProps) {
  const router = useRouter();

  return (
    <div>
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
