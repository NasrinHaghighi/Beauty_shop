/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useRef , useEffect}from 'react'
import { useRouter } from 'next/router';
import styles from './Sidebar.module.css'
import Image from 'next/image';
import closeIcon from '../../public/images/Group 345.png'
import sidebarIcon from '../../public/images/Group 27.png'
import { handelCloseSidebar } from '../../redux/action/banner';
import {sidebarData} from './SidebarData'
import Submenu from './Submenu';
import { handelOpenSidebar } from '../../redux/action/banner';
import { useSelector , useDispatch } from 'react-redux'


const Sidebar = () =>{
  
  const router = useRouter();
  
 

    const ref = useRef();

    const sidebarIsOpen = useSelector(state=>state.sidebarIsOpen)
    const dispatch =useDispatch()
 

//if  sidebar is open and clicked tag is not ref dispatch close sidebar//
     useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (sidebarIsOpen &&  !ref.current.contains(e.target)) {
            dispatch(handelCloseSidebar())
          }
        };
    
        document.addEventListener("mousedown", checkIfClickedOutside);
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside);
        };
      }, [sidebarIsOpen]);


    return (
        <>
<div className={styles.wrapper} ref={ref}>
        {/*bar icon **conditional render  to show icon just in th eindex page*/}
        {router.pathname == '/' ?  <div className={styles.sidebarIcon} onClick={()=>dispatch(handelOpenSidebar())}><Image alt="img" src={sidebarIcon}/></div> : null}

         {/*sidebar page*/}
      <div className={sidebarIsOpen ? styles.sidebarOpen: styles.sidebar}>
               <div className={styles.header}>
                   <div className={styles.closeIcon} onClick={()=>dispatch(handelCloseSidebar())}>
                    
               <Image alt="img" src={closeIcon}/>
               </div>
                <span>منو</span>
               </div>
                <ul className={styles.menu}>
{sidebarData.map((item,index)=>{
    return(<Submenu key={index} item={item}/>)
})}
           </ul> 
           <button className={styles.button}>ورود/ ثبت نام</button>
           </div>
           </div>
      
        </>
    )
}

export default Sidebar
