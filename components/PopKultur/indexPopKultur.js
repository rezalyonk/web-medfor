import React from 'react'
import Image from 'next/image'
import styles from './stylePopKultur.module.css'
import CardPopKultur from './CardPopKultur'
import iconPopkulturNews from "@/assets/images/icon-pop-kultur.png"

export default function indexPopKultur() {
    return (
        <div className={`${styles.containerDisplay} container`}>
            <h1 className={`${styles.iniH1} d-inline-block`}>
                <Image src={iconPopkulturNews} width={100} height={100} className={`${styles.imageiconPopkulturNews}`} />
                Pop Kultur
            </h1>
            <h1 className={`${styles.iniH1copy} d-inline-block`}>
                Tampilkan Semua
            </h1>
            {/* <CardPopKultur /> */}
        </div>
    )
}
