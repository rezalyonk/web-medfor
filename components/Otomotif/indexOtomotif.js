import React from 'react'
import Image from 'next/image'
import styles from './styleOtomotif.module.css'
import iconOtomotif from "@/assets/images/icon-otomotif.png"
import CardOtomotif from './CardOtomotif'

export default function indexOtomotif() {
    return (
        <div className={`${styles.containerDisplay} container`}>
            <h1 className={`${styles.iniH1} d-inline-block`}>
                <Image src={iconOtomotif} width={100} height={100} className={`${styles.imageiconOtomotif}`} />
                Otomotif
            </h1>
            <h1 className={`${styles.iniH1copy} d-inline-block`}>
                Tampilkan Semua
            </h1>
            <CardOtomotif />
        </div>
    )
}
