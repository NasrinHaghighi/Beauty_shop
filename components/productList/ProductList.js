import React from 'react';
import Product from '../productList/Product';
import ToTop from '../ToTop/ToTop';


import { useSelector } from 'react-redux';


import styles from './ProductList.module.css'
const  ProductList =()=> {
  const filterOption= useSelector(state=>state.filterOption)
  

    const products = useSelector(state=>state.products)

   
  return <>
 
  <div className={styles.container}>



{products.map((item)=>{  return <Product key={item.id} {...item}/>   })}
 
  </div>

  
  <div>
  <ToTop />
</div>
  </>;
}

export default ProductList;
