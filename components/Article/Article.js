import React from 'react'
import Image from 'next/image'
import styles from './Article.module.css'
import Cards from '../Cards/Cards'
import iconArticlenews from "@/assets/images/icon-artikel-news.png"

export default function Article() {
    return (
        <div className={`${styles.articleContainers} container`}>
            <h1 className={`${styles.Artikelh1} d-inline-block`}>
                <Image src={iconArticlenews} width={100} height={100} className={`${styles.imageiconArticlenews}`} />
                Artikel Terbaru
            </h1>
            <h1 className={`${styles.Artikelh2} d-inline-block`}>
                Tampilkan Semua
            </h1>
            <Cards />
        </div>
    )
}
