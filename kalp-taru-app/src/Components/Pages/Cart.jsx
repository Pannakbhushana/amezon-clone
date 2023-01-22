import React from 'react'
import { useState,useEffect } from 'react'
import styles from "./BestSellers.module.css";

const Cart = () => {
  const [data, setData]=useState([]);
  const [totalPrice, setTotalPrice]=useState(0);

  useEffect(()=>{
    getDataFromLocalStorage()
  },[])

  const getDataFromLocalStorage=()=>{
    const cartData=JSON.parse(localStorage.getItem("cart"))||[];

    setData(cartData);
  let temp=0;
  for(let i=0; i<cartData.length; i++){
    temp+= cartData[i].price
  }
  setTotalPrice(temp)
  }


  const handleRemove=(id)=>{
    console.log(id)
      let newData=data.filter((el)=>{
        return el.id !==id 
      })
    localStorage.setItem("cart",JSON.stringify(newData))
    getDataFromLocalStorage()
  }
 

  return data.length===0 ? <div style={{height:"700px"}} ><h1 style={{fontSize:"25px",fontWeight:"bold",marginTop:"5%"}} >No Item Added</h1></div> : (
    < >

   <div style={{fontSize:"20px",fontWeight:"bold"}} >
      <h1>Total Items:{"   "}{data.length} </h1>
      <h1>Total Price: Rs. {"  "}{totalPrice}</h1>
   </div>

      {data?.map((el)=><div key={el.id} className={styles.cartCards} >
        <img src={el.img} alt={el.title} style={{width:"30%",height:"80%"}} />
       <div className={styles.cartChild} >
       <h2 style={{fontSize:"20px",fontWeight:"bold"}}>description:{el.title}</h2>
        <p>price:{el.price}</p>
        <button className={styles.btn} onClick={()=>{
          alert("Your Order is Placed Successfully !")
        }} >Buy</button>

        <button onClick={()=>{
            handleRemove(el.id)
        }} style={{marginLeft:"5%"}} >Remove</button>
       </div>
      </div>)}
      <div style={{height:"100px"}} ></div>
    </>
  )
}

export default Cart
