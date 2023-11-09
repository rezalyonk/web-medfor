import React from 'react'
import Image from 'next/image'
import styles from './styleArtikelTerbaru.module.css'
import iconArticlenews from "@/assets/images/icon-artikel-news.png"
import CardArtikelTerbaru from './CardArtikelTerbaru'

export default function ArtikelTerbaru() {
    return (
        <div className={`${styles.containerDisplay} container`}>
            <h1 className={`${styles.iniH1} d-inline-block`}>
                <Image src={iconArticlenews} width={100} height={100} className={`${styles.imageiconArticlenews}`} alt={`gambar`} />
                Artikel Terbaru
            </h1>
            <h1 className={`${styles.iniH1copy} d-inline-block`}>
                Tampilkan Semua
            </h1>
            <CardArtikelTerbaru />
        </div>
    )
}
