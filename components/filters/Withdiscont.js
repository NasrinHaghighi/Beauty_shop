import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup } from '@mui/material';
import {discontChangeHandel} from '../../redux/action/products'

import styles from './Withdiscont.module.css'
const Withdiscont=()=> {

  const dispatch =useDispatch()
  const filterOption= useSelector(state=>state.filterOption)
  const checked1=filterOption.discont
  return <>
  
  <FormGroup className={styles.discont}>
           <FormControlLabel control={<Checkbox 
           checked={checked1}
           onChange={(e)=>dispatch(discontChangeHandel(e))}/>} label='فقط کالا های تخفیف دار'/>
          </FormGroup>
  
  </>;
}

export default Withdiscont;
