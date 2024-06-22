// app/users/page.tsx

import Layout from '../components/Layout';
import UsersClient from './UsersClient';

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return (
    <Layout pageTitle="User Page">
      <UsersClient dataUsers={dataUsers} />
    </Layout>
  );
}
