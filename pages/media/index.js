import React from "react";
import Navbar from "@/components/Navbars/indexNavbar";
import Footers from "@/components/Footers/Footers";
import Image from "next/image";
import styles from "./index.module.css";
import iconMedia from "@/assets/images/icon-media.png";
import CardMedia from "./indexCardMedia";

export default function index() {
  return (
    <>
      <Navbar />
      <div className={`${styles.containerDisplay} container`}>
        <h1 className={`${styles.iniH1} d-inline-block`}>
          <Image
            src={iconMedia}
            width={100}
            height={100}
            className={`${styles.imageiconMedia}`}
            alt="..."
            priority={true}
          />
          Media
        </h1>
        <h1 className={`${styles.iniH1copy} d-inline-block`}>
          Tampilkan Semua
        </h1>
        <CardMedia />
      </div>

      <Footers />
      {/* <h1>ini halaman media</h1> */}
    </>
  );
}
