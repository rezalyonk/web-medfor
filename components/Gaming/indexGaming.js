import React from 'react'
import Image from 'next/image'
import styles from './styleGaming.module.css'
import iconGaming from "@/assets/images/icon-gaming.png"
import CardGaming from './CardGaming'

export default function indexGaming() {
    return (
        <div className={`${styles.containerDisplay} container`}>
            <h1 className={`${styles.iniH1} d-inline-block`}>
                <Image src={iconGaming} width={100} height={100} className={`${styles.imageiconGaming}`} />
                Gaming
            </h1>
            <h1 className={`${styles.iniH1copy} d-inline-block`}>
                Tampilkan Semua
            </h1>
            <CardGaming />
        </div>
    )
}
