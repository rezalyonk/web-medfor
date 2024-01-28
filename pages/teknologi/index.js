import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import iconTeknologi from "@/assets/images/icon-teknologi.png";
import Navbar from "@/components/Navbars/indexNavbar";
import Footers from "@/components/Footers/Footers";
import CardTeknologi from "./indexCardTeknologi";

export default function indexPagesTekno() {
  return (
    <>
      <Navbar />
      <div className={`${styles.containerDisplay} container`}>
        <h1 className={`${styles.iniH1} d-inline-block`}>
          <Image
            src={iconTeknologi}
            width={100}
            height={100}
            className={`${styles.imageiconTeknologi}`}
            alt="icon-tekno"
            priority={true}
          />
          Teknologi
        </h1>
        <h1 className={`${styles.iniH1copy} d-inline-block`}>
          Tampilkan Semua
        </h1>
        <CardTeknologi />
      </div>
      <Footers />
    </>
  );
}
