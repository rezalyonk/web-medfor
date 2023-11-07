import React from 'react'
import Image from 'next/image'
import styles from './styleMedia.module.css'
import iconMedia from "@/assets/images/icon-media.png"
import CardMedia from './CardMedia'

export default function indexMedia() {
    return (
        <div className={`${styles.containerDisplay} container`}>
            <h1 className={`${styles.iniH1} d-inline-block`}>
                <Image src={iconMedia} width={100} height={100} className={`${styles.imageiconMedia}`} />
                Media
            </h1>
            <h1 className={`${styles.iniH1copy} d-inline-block`}>
                Tampilkan Semua
            </h1>
            <CardMedia />
        </div>
    )
}
