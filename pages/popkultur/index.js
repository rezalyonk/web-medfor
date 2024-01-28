import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import CardPopKultur from "./indexCards";
import iconPopkulturNews from "@/assets/images/icon-pop-kultur.png";
import Navbar from "@/components/Navbars/indexNavbar";
import Footers from "@/components/Footers/Footers";

export default function index() {
  return (
    <>
      <Navbar />
      <div className={`${styles.containerDisplay} container`}>
        <h1 className={`${styles.iniH1} d-inline-block`}>
          <Image
            src={iconPopkulturNews}
            width={100}
            height={100}
            className={`${styles.imageiconPopkulturNews}`}
            alt="Icon Pop Kultur"
            priority={true}
          />
          Pop Kultur
        </h1>
        <h1 className={`${styles.iniH1copy} d-inline-block`}>
          Tampilkan Semua
        </h1>
        <CardPopKultur />
      </div>
      <Footers />
      {/* <h1>ini halaman pop kultur</h1> */}
    </>
  );
}
