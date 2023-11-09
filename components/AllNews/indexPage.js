import React from 'react'
import style from './indexPage.module.css'
import Card from '@/components/AllNews/Card/indexPage.js'

export default function indexPage() {
  return (
    <div className={`${style.containerDisplay} container-fluid`}>
      <h1>Ini Halaman All News Loh!!</h1>
      <Card />
    </div>
  )
}
