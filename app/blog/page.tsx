import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";
import BlogClient from "./BlogClient";

export default async function BlogPage(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
 
  return (
    <Layout pageTitle="Blog Page">
      <BlogClient dataBlog={dataBlog} />
    </Layout>
  )
}