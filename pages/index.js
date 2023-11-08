import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbars/indexNavbar";
import Carousels from "@/components/Carousels/Carousels";
import Footers from "@/components/Footers/Footers";
import ArtikelTerbaru from "@/components/ArtikelTerbaru/indexArtikelTerbaru";
import PopKultur from "@/components/PopKultur/indexPopKultur";
import Teknologi from "@/components/Teknologi/indexTeknologi";
import Gaming from "@/components/Gaming/indexGaming";
import Otomotif from "@/components/Otomotif/indexOtomotif";
import Media from "@/components/Media/indexMedia";

export default function Home() {
  return (
    <>
      <Head>
        <title> Media Formasi </title>
      </Head>
      <Navbar />
      <Carousels />
      <ArtikelTerbaru />
      <PopKultur />
      <Teknologi />
      <Gaming />
      <Otomotif />
      <Media />
      <Footers />
    </>
  );
}
