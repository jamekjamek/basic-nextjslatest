import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import style from "./Layout.module.css";
import Head from "next/head";


interface LayoutProps{
  children:ReactNode;
  pageTitle:string;
}

export default function Layout(props: LayoutProps) {
  const {children,pageTitle} = props;
  return (
    <>
      <Head>
        <title>NextJs Basic |{''} {pageTitle}</title>
        <meta name='description' content='Website Next Js Basic' />
      </Head>
      <div className={style.container}>
        <Header/>
        <div className={style.content}>{children}</div>
        <Footer/>
      </div>
    </>
  )
}