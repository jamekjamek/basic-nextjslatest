import Layout from "../../components/Layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  params: {
    id: string;
  }
}

async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers: User[] = await res.json();
  
  return dataUsers.map((user) => ({
    id: `${user.id}`,
  }));
}

export default async function UserDetail({ params }: UserDetailProps) {
  const user = await fetchUser(params.id);
  
  return (
    <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}