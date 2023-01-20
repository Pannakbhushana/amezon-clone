import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react'
import styles from "./BestSellers.module.css";

const BestSellers = () => {
  const [data, setData]=useState([]);
 const [totalPage, setTotalPage]=useState(1);
 const [loading, setLoading]=useState(false);
 const [page, setPage]=useState(1);

  useEffect(()=>{
    getData()
    getDataAndUpdate(page)
  },[page])

  const getData=async()=>{
   try {
    const responce=await fetch(`http://localhost:3000/products`)
    const res=await responce.json();
    setTotalPage(Math.ceil(res.length/10))
   } catch (error) {
    console.log(error)
   }
   
  }

  const getDataAndUpdate=async(page)=>{
    setLoading(true)
    try {
      const responce=await fetch(`http://localhost:3000/products?_page=${page}&_limit=10`)
    const res=await responce.json();
    setLoading(false)
    setData(res)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return loading ? <div style={{height:"1200px"}} ><h1 style={{fontSize:"30px"}}>Loading...</h1></div> : (
    <div style={{background:"#e3e6e6"}} >

          <Grid templateColumns={{base:'repeat(1,1fr)',
                  base:'repeat(1,1fr)',
                  sm:'repeat(1,1fr)',
                  md:'repeat(2,1fr)',
                  lg:'repeat(4,1fr)'
                  }} 
                  gap={6}>
                     
                      {data.map((el)=> <Link key={el.id} to={`/bestsellers/${el.id}`} >
                        <GridItem  className={styles.card} >
                        <img src={el.img} alt={el.title} style={{width:"100%",height:"70%"}} />
                        <h2 style={{fontWeight:"bold"}} >{el.title}</h2>
                        <p> Price : Rs.{el.price}</p>
                        <button style={{background:"tomato",padding:"3px",borderRadius:"5px",color:"white"}} >Add To Cart</button>
                      </GridItem>
                      </Link>)}         
          </Grid>

        <div className={styles.btnParent} >
          <button className={styles.btn} disabled={page===1} onClick={()=>{
              setPage(page-1)
              }} >Prev</button>

            <button  className={styles.btn} >{page}/{totalPage}</button>

            <button className={styles.btn} disabled={page===totalPage} onClick={()=>{
                 setPage(page+1)
              }}   >Next</button>
      </div>

      


    </div>
  )
}

export default BestSellers


