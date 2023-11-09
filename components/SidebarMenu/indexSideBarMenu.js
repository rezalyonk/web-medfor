import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import styles from './styleSideBarMenu.module.css'
import iconHamburgerMenu from '@/assets/images/icon-hamburger-menu.png'
import iconPopkulturNews from "@/assets/images/icon-pop-kultur.png"
import iconTeknologi from "@/assets/images/icon-teknologi.png"
import iconGaming from "@/assets/images/icon-gaming.png"
import iconOtomotif from "@/assets/images/icon-otomotif.png"
import iconMedia from "@/assets/images/icon-media.png"
import iconKreatiformasi from "@/assets/images/icon-kreatiformasi.png"
import iconvirtunix from "@/assets/images/icon-virtunix.png"
import logoMedfor from '@/assets/images/logo-medfor-normal-reguler.png'
import iconclose from "@/assets/images/icon-close.png"

export default function indexSideBarMenu() {
    return (
        <div className={`${styles.containerDisplay} container`}>
            <button type="button" className={`${styles.iniButton} btn`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <Image src={iconHamburgerMenu} width={100} height={100} className={`${styles.imageIconHamburgerMenu}`} />
            </button>


            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                    <Image src={logoMedfor} width={1920} height={1920} className={`${styles.imageLogoMedfor}`} />
                    <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <Image src={iconclose} width={1920} height={1920} className={`${styles.imageiconclose}`} />
                    </button>
                </div>
                <div className={`${styles.canvasBody} offcanvas-body`}>
                    <li className={`${styles.bagiaLi}`}>
                        <Image src={iconPopkulturNews} width={100} height={100} className={`${styles.imageLi}`} />
                        Pop Kultur
                    </li>
                    <li className={`${styles.bagiaLi}`}>
                        <Image src={iconTeknologi} width={100} height={100} className={`${styles.imageLi}`} />
                        Teknologi
                    </li>
                    <li className={`${styles.bagiaLi}`}>
                        <Image src={iconGaming} width={100} height={100} className={`${styles.imageLi}`} />
                        Gaming
                    </li>
                    <li className={`${styles.bagiaLi}`}>
                        <Image src={iconOtomotif} width={100} height={100} className={`${styles.imageLi}`} />
                        Otomotif
                    </li>
                    <li className={`${styles.bagiaLi}`}>
                        <Image src={iconMedia} width={100} height={100} className={`${styles.imageLi}`} />
                        Media
                    </li>
                    <hr />
                    <hr />
                    <div className={`${styles.bagian1} container-fluid text-center`}>
                        <p>Tentang Kami</p>
                        <p>Pedoman Media Siber</p>
                        <p>Kode Etik Jurnalistik</p>
                        <hr />
                        <hr />
                        <p>Project Kami</p>
                    </div>

                    <li className={`${styles.bagiaLi}`}>
                        <Image src={iconKreatiformasi} width={100} height={100} className={`${styles.imageLi1}`} />
                        Kreatiformasi
                    </li>
                    <li className={`${styles.bagiaLi}`}>
                        <Image src={iconvirtunix} width={100} height={100} className={`${styles.imageLi2}`} />
                        Virtunix
                    </li>
                </div>
            </div>







            {/* ini bagian Script */}
            <Script src="./script.js" />
        </div>
    )
}
