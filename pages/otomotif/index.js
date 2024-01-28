import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import iconOtomotif from "@/assets/images/icon-otomotif.png";
import Navbar from "@/components/Navbars/indexNavbar";
import Footers from "@/components/Footers/Footers";
import CardOtomotif from "./indexCardOtomotif";

export default function index() {
  return (
    <>
      <Navbar />
      <div className={`${styles.containerDisplay} container`}>
        <h1 className={`${styles.iniH1} d-inline-block`}>
          <Image
            src={iconOtomotif}
            width={100}
            height={100}
            className={`${styles.imageiconOtomotif}`}
            alt="..."
            priority={true}
          />
          Otomotif
        </h1>
        <h1 className={`${styles.iniH1copy} d-inline-block`}>
          Tampilkan Semua
        </h1>
        <CardOtomotif />
      </div>
      <Footers />
      {/* <h1>ini tampilan otomotif</h1> */}
    </>
  );
}
