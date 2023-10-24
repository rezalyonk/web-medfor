import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Navbars from "@/components/Navbars/Navbars";
import Carousels from "@/components/Carousels/Carousels";

export default function Home() {
  return (
    <>
      <Head>
        <title> Media Formasi </title>
      </Head>
      <Navbars />
      <Carousels />

    </>
  );
}
