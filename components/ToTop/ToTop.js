/* eslint-disable jsx-a11y/alt-text */
import React , {useState, useEffect}from 'react'
import Image from 'next/image'
import totopIcon from '../../public/images/Group 112.png'
import Pagination from './Pagination'
import styles from './ToTop.module.css'

const ToTop=()=> {
    const scrollTotop=()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
          });
    }
  return (
    <div className={styles.conatiner}>
        <button onClick={scrollTotop}><Image src={totopIcon}/></button>
        <Pagination />
    </div>
  )
}

export default ToTop