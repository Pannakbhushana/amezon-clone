import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react'
import styles from "./BestSellers.module.css";

const products=[
  {
   "id":1,
   "img":"https://m.media-amazon.com/images/I/51DIC6jreyL.jpg",
   "title":"GREATEST GHAZAL HITS (MP3 FORMAT)",
   "price":99
  },
  {
    "id":2,
    "img":"https://m.media-amazon.com/images/I/71Aqnnj5LcL._SX522_.jpg",
    "title":"The Road Wherever",
    "price":199
   },
   {
    "id":3,
    "img":"https://m.media-amazon.com/images/I/81Ip7r0VzbL._SY550_.jpg",
    "title":"History of Western Classic",
    "price":396
   },
   {
    "id":4,
    "img":"https://m.media-amazon.com/images/I/81z5ZWv7rFL._SX466_.jpg",
    "title":"Romantic 80's",
    "price":198
   },
   {
    "id":5,
    "img":"https://m.media-amazon.com/images/I/81WtBMyGKqL._SX569_.jpg",
    "title":"",
    "price":299
   },
   {
    "id":7,
    "img":"https://m.media-amazon.com/images/I/51QDOVhcvrL._SY355_.jpg",
    "title":"Gilberto",
    "price":399
   },
   {
    "id":8,
    "img":"https://m.media-amazon.com/images/I/81arRAS15JL._SX522_.jpg",
    "title":"Music Card: Bhangra Beats-Punjabi Party Songs - 320 kbps MP3 Audio (4 GB)",
    "price":599
   },
   {
    "id":9,
    "img":"https://m.media-amazon.com/images/I/51Fm12m9HqL._SY355_.jpg",
    "title":"Beautiful Dreams",
    "price":888
   },
   {
    "id":10,
    "img":"https://m.media-amazon.com/images/I/71v4yJx7OHL._SX425_.jpg",
    "title":"Shree Satyanarayan Vrat Katha",
    "price":150
   },
   {
    "id":11,
    "img":"https://m.media-amazon.com/images/I/41PGPBJzdeL.jpg",
    "title":"Lakshmi Pooja - With Complete Pooja Vidhi and Aarti",
    "price":299
   },
   {
    "id":12,
    "img":"https://m.media-amazon.com/images/I/81IRPfcYbIL._SX466_.jpg",
    "title":"The Originals - Hits of Mukesh",
    "price":199
   },
   {
    "id":13,
    "img":"https://m.media-amazon.com/images/I/81-8F8mjR5L._SX466_.jpg",
    "title":"Mere Dil Main Aaj Kya Hai - Kishore Kumar",
    "price":199
   },
   {
    "id":14,
    "img":"https://m.media-amazon.com/images/I/51qKRgYtcaL.jpg",
    "title":"A Platinum Collections - R.D. Burman",
    "price":599
   },
   {
    "id":15,
    "img":"https://m.media-amazon.com/images/I/61GQUtqKIpS._SX425_.jpg",
    "title":"Callas Multipurpose Foldable Laptop Table with Cup Holder ",
    "price":599
   },
   {
    "id":16,
    "img":"https://m.media-amazon.com/images/I/71kSLhL3NDL._SX466_.jpg",
    "title":"Roll over image to zoom in HP 680 Original Ink Advantage Cartridge (Black)",
    "price":852
   },
   {
    "id":17,
    "img":"https://m.media-amazon.com/images/I/91LukV6zdTL._SX425_.jpg",
    "title":"JK Copier Paper - A4, 75 GSM, 1 Ream, 500 Sheets",
    "price":340
   },
   {
    "id":18,
    "img":"https://m.media-amazon.com/images/I/51Rvl7DuOUL._SX425_.jpg",
    "title":"",
    "price":99
   },
   {
    "id":19,
    "img":"https://m.media-amazon.com/images/I/51Rvl7DuOUL._SX425_.jpg",
    "title":"MI Xiaomi Wireless Home Security Camera 2i 2022 Edition",
    "price":2699
   },
   {
    "id":20,
    "img":"https://m.media-amazon.com/images/I/81wJ+F7qehL._SX425_.jpg",
    "title":"K Easy Copier Paper | A4 Size",
    "price":330
   },
   {
    "id":21,
    "img":"https://m.media-amazon.com/images/I/51DIC6jreyL.jpg",
    "title":"GREATEST GHAZAL HITS (MP3 FORMAT)",
    "price":99
   },
   {
     "id":22,
     "img":"https://m.media-amazon.com/images/I/71Aqnnj5LcL._SX522_.jpg",
     "title":"The Road Wherever",
     "price":199
    },
    {
     "id":23,
     "img":"https://m.media-amazon.com/images/I/81Ip7r0VzbL._SY550_.jpg",
     "title":"History of Western Classic",
     "price":396
    },
    {
     "id":24,
     "img":"https://m.media-amazon.com/images/I/81z5ZWv7rFL._SX466_.jpg",
     "title":"Romantic 80's",
     "price":198
    },
    {
     "id":25,
     "img":"https://m.media-amazon.com/images/I/81WtBMyGKqL._SX569_.jpg",
     "title":"",
     "price":299
    },
    {
     "id":27,
     "img":"https://m.media-amazon.com/images/I/51QDOVhcvrL._SY355_.jpg",
     "title":"Gilberto",
     "price":399
    },
    {
     "id":28,
     "img":"https://m.media-amazon.com/images/I/81arRAS15JL._SX522_.jpg",
     "title":"Music Card: Bhangra Beats-Punjabi Party Songs - 320 kbps MP3 Audio (4 GB)",
     "price":599
    },
    {
     "id":29,
     "img":"https://m.media-amazon.com/images/I/51Fm12m9HqL._SY355_.jpg",
     "title":"Beautiful Dreams",
     "price":888
    },
    {
     "id":30,
     "img":"https://m.media-amazon.com/images/I/71v4yJx7OHL._SX425_.jpg",
     "title":"Shree Satyanarayan Vrat Katha",
     "price":150
    },
    {
     "id":31,
     "img":"https://m.media-amazon.com/images/I/41PGPBJzdeL.jpg",
     "title":"Lakshmi Pooja - With Complete Pooja Vidhi and Aarti",
     "price":299
    },
    {
     "id":32,
     "img":"https://m.media-amazon.com/images/I/81IRPfcYbIL._SX466_.jpg",
     "title":"The Originals - Hits of Mukesh",
     "price":199
    },
    {
     "id":133,
     "img":"https://m.media-amazon.com/images/I/81-8F8mjR5L._SX466_.jpg",
     "title":"Mere Dil Main Aaj Kya Hai - Kishore Kumar",
     "price":199
    },
    {
     "id":134,
     "img":"https://m.media-amazon.com/images/I/51qKRgYtcaL.jpg",
     "title":"A Platinum Collections - R.D. Burman",
     "price":599
    },
    {
     "id":153,
     "img":"https://m.media-amazon.com/images/I/61GQUtqKIpS._SX425_.jpg",
     "title":"Callas Multipurpose Foldable Laptop Table with Cup Holder ",
     "price":599
    },
    {
     "id":136,
     "img":"https://m.media-amazon.com/images/I/71kSLhL3NDL._SX466_.jpg",
     "title":"Roll over image to zoom in HP 680 Original Ink Advantage Cartridge (Black)",
     "price":852
    },
    {
     "id":137,
     "img":"https://m.media-amazon.com/images/I/91LukV6zdTL._SX425_.jpg",
     "title":"JK Copier Paper - A4, 75 GSM, 1 Ream, 500 Sheets",
     "price":340
    },
    {
     "id":183,
     "img":"https://m.media-amazon.com/images/I/51Rvl7DuOUL._SX425_.jpg",
     "title":"",
     "price":99
    },
    {
     "id":193,
     "img":"https://m.media-amazon.com/images/I/51Rvl7DuOUL._SX425_.jpg",
     "title":"MI Xiaomi Wireless Home Security Camera 2i 2022 Edition",
     "price":2699
    },
    {
     "id":230,
     "img":"https://m.media-amazon.com/images/I/81wJ+F7qehL._SX425_.jpg",
     "title":"K Easy Copier Paper | A4 Size",
     "price":330
    }
]

const BestSellers = () => {
  const [data, setData]=useState([]);
 const [totalPage, setTotalPage]=useState(1);
 const [loading, setLoading]=useState(false);
 const [page, setPage]=useState(1);

  useEffect(()=>{
    // getData()
    // getDataAndUpdate(page)
    setData(products)
  },[page])

  const handleClick=(el)=>{
    let cartData=JSON.parse(localStorage.getItem("cart"));
    cartData.push(el);
    localStorage.setItem("cart",JSON.stringify(cartData));
    alert("Item added to cart")
  }

  // const getData=async()=>{
  //  try {
  //   const responce=await fetch(`http://localhost:3000/products`)
  //   const res=await responce.json();
  //   setTotalPage(Math.ceil(res.length/10))
  //  } catch (error) {
  //   console.log(error)
  //  }
   
  // }

  // const getDataAndUpdate=async(page)=>{
  //   setLoading(true)
  //   try {
  //     const responce=await fetch(`http://localhost:3000/products?_page=${page}&_limit=10`)
  //   const res=await responce.json();
  //   setLoading(false)
  //   setData(res)
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // }
  return loading ? <div style={{height:"1200px"}} ><h1 style={{fontSize:"30px"}}>Loading...</h1></div> : (
    <div style={{background:"#e3e6e6"}} >

          <Grid templateColumns={{base:'repeat(1,1fr)',
                  base:'repeat(1,1fr)',
                  sm:'repeat(1,1fr)',
                  md:'repeat(2,1fr)',
                  lg:'repeat(4,1fr)'
                  }} 
                  gap={6}>
                     
                      {data.map((el)=> 
                        <GridItem  className={styles.card} key={el.id} >

                       <Link to={`/bestsellers/${el.id}`} > 
                       <img src={el.img} alt={el.title} style={{width:"100%",height:"70%"}} />
                       </Link>

                        <h2 style={{fontWeight:"bold"}} >{el.title}</h2>
                        <p> Price : Rs.{el.price}</p>
                        <button  
                        onClick={()=>handleClick(el)}
                        style={{
                          background:"tomato",
                          padding:"3px",
                          borderRadius:"5px",
                          color:"white"}} >Add To Cart</button>
                      </GridItem>
                      )}         
          </Grid>

        <div className={styles.btnParent} >
          <button className={styles.btn} disabled={page===1} onClick={()=>{
              setPage(page-1)
              }} >Prev</button>

            <button  className={styles.btn} >{page}/{totalPage}</button>

            <button className={styles.btn} disabled={page===totalPage} onClick={()=>{
                 setPage(page+10)
              }}   >Next</button>
      </div>

      


    </div>
  )
}

export default BestSellers


