import React from "react";
import Image from "next/image";
import iconmail from "@/assets/images/icon-mail.png";
import styles from "@/components/Footers/Footers.module.css";
import iconmedfor from "@/assets/images/logo-medfor-tidak-ada-tulisan.png";

export default function Footers() {
  return (
    <div>
      {/* Container */}
      <div className={`${styles.containers} container-fluid`}>
        <div className="row row-cols-4">
          <div className="col">
            <h6 className="text-center">Jelajahi</h6>
            <ul className={`${styles.ul1}`}>
              <li>Dari MedForians</li>
              <li>Forum</li>
              <li>Podcast</li>
              <li>Nihongo Addict</li>
              <li>Kreatiformasi</li>
              <li>Virtunix</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="text-center">Rekan Kami</h6>
            <ul className={`${styles.ul2}`}>
              <li>Ada Apa Dengan Gaming</li>
              <li>Aku Bahasa</li>
              <li>The Unique History</li>
              <li>Korigengi</li>
              <li>Animenyus</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="text-center">Follow Social Media</h6>
          </div>
          <div className={`${styles.divnewslatter}`}>
            <h6>Newslatter</h6>
            <input type="email" placeholder="Email" />
            <button type="button" className="btn btn-dark my-3">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
      {/* Batas Container */}
      {/* Trademark Media Formasi */}
      <div className={`${styles.containers2} container-fluid`}>
        <div className={`${styles.containers2} row`}>
          <div className="col">
            <h6 className={`${styles.h6judul}`}>
              <Image
                src={iconmedfor}
                width={50}
                height={50}
                className={`${styles.h5image}`}
                alt={`iconmedfor`}
                priority={true}
              />
              PT TRIKARYA FORMASI BASODARA
            </h6>
          </div>
          <div className="col">
            <h6 className={`${styles.h6medFortrade} text-uppercase`}>
              <Image
                src={iconmedfor}
                width={50}
                height={50}
                className={`${styles.h5image}`}
                alt={`iconmedfor`}
                priority={true}
              />
              media formasi &trade;
            </h6>
          </div>
        </div>
      </div>
      {/* Batas Trademark Media Formasi */}
    </div>
  );
}
