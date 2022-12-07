import React, { useEffect } from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Beauty from '../components/beauty/Beauty'
import ReleventProduct from '../components/singleProduct/ReleventProduct';
import SeeMoreBtn from '../components/SeeMoreBtn/SeeMoreBtn'
import { getAllProducts } from '../redux/action/products'
//import { getInitialProducts } from '../redux/action/products'
import { useDispatch , useSelector } from 'react-redux';

//console.log(getInitialProducts)

export default function Home() {

  const dispatch = useDispatch();

//???  empty array    ??//

useEffect(()=>{
      dispatch(getAllProducts())
     
    })

   
    
    
  return (
    <div className={styles.container}>
      <Head>
        <title>BEAUTY SHOP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
         <Banner />
        <ReleventProduct />
        <SeeMoreBtn />
         <Beauty />
      
      </main>

      <footer className={styles.footer}>
      <Footer />
      </footer>
    </div>
  )
}
