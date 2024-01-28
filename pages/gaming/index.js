import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import iconGaming from "@/assets/images/icon-gaming.png";
import Navbar from "@/components/Navbars/indexNavbar";
import Footers from "@/components/Footers/Footers";
import CardGaming from "./indexCardGaming";

export default function index() {
  return (
    <>
      <Navbar />
      <div className={`${styles.containerDisplay} container`}>
        <h1 className={`${styles.iniH1} d-inline-block`}>
          <Image
            src={iconGaming}
            width={100}
            height={100}
            className={`${styles.imageiconGaming}`}
            alt={`iconGaming`}
            priority={true}
          />
          Gaming
        </h1>
        <h1 className={`${styles.iniH1copy} d-inline-block`}>
          Tampilkan Semua
        </h1>
        <CardGaming />
      </div>
      <Footers />
      {/* <h1>ini tampilan gaming news</h1> */}
    </>
  );
}
