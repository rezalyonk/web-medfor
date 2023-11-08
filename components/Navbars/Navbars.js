import React from 'react'
import Image from 'next/image'
import styles from './Navbars.module.css'
import logoMedfor from '@/assets/images/logo-medfor-normal-reguler.png'
import SideBarMenu from '../SidebarMenu/indexSideBarMenu'

export default function Navbars() {
  return (
    <div className={`${styles.containerDisplay} container-fluid`}>
      {/* <h1>ini bagian Navbars</h1> */}
      <nav className="navbar row">
        <div className={`col-1`}>
          <SideBarMenu />
        </div>
        <div className="col">
          <a className="navbar-brand" href="#">
            <Image src={logoMedfor} width={1920} height={1920} className={`${styles.imageLogoMedfor}`} />
          </a>
        </div>
      </nav>

    </div>
  )
}
