import React from 'react'
import Image from 'next/image'
import styles from './styleTeknologi.module.css'
import iconTeknologi from "@/assets/images/icon-teknologi.png"
import CardTeknologi from './CardTeknologi'

export default function indexTeknologi() {
    return (
        <div className={`${styles.containerDisplay} container`}>
            <h1 className={`${styles.iniH1} d-inline-block`}>
                <Image src={iconTeknologi} width={100} height={100} className={`${styles.imageiconTeknologi}`} />
                Teknologi
            </h1>
            <h1 className={`${styles.iniH1copy} d-inline-block`}>
                Tampilkan Semua
            </h1>
            <CardTeknologi />
        </div>
    )
}
