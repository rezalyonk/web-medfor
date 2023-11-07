import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Navbars from "@/components/Navbars/Navbars";
import Carousels from "@/components/Carousels/Carousels";
import Footers from "@/components/Footers/Footers";
import ArtikelTerbaru from "@/components/ArtikelTerbaru/indexArtikelTerbaru";
import PopKultur from "@/components/PopKultur/indexPopKultur";

export default function Home() {
  return (
    <>
      <Head>
        <title> Media Formasi </title>
      </Head>
      <Navbars />
      <Carousels />
      <ArtikelTerbaru />
      <PopKultur />
      <Footers />
    </>
  );
}
