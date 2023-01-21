import React from 'react'
import { Card,CardBody, CardFooter, Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import {Image,} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const electronicsData=[
  {
    id:"70yasdf",
    name:"OnePlus Nord Buds True Wireless in Ear Earbuds ",
    img:"https://m.media-amazon.com/images/I/514NPRZ1AQL._SX522_.jpg",
    price:2399
  },
  {
    id:"71ygfd",
    name:"CrossBeats Newly launched Spectra max Super Retina",
    img:"https://m.media-amazon.com/images/I/61eFriTFbGL._SX522_.jpg",
    price:3999
  },
  {
    id:"72yfer",
    name:"Tukzer Tempered Glass Screen Protector for Apple iPad 11 inch",
    img:"https://m.media-amazon.com/images/I/71BGFJ2CwmL._SX679_.jpg",
    price:800
  },
  {
    id:"73yasd",
    name:"Derwent Black Book Hard Back Sketch Book with Black Paper (A4 Portrait)",
    img:"https://m.media-amazon.com/images/I/81moO-w7osL._SX522_.jpg",
    price:650
  },
  {
    id:"74yfrt",
    name:"Portronics AUTO 12 in-Car Bluetooth Receiver for Handsfree Calling",
    img:"https://m.media-amazon.com/images/I/51Ioc0bbHqL._SX522_.jpg",
    price:515
  },
  {
    id:"75yssx",
    name:"D-Link DIR-615 Wi-fi Ethernet-N300 Single_band 300Mbps Router, Mobile App Support, Router ",
    img:"https://m.media-amazon.com/images/I/51B-8XSoCOL._SX679_.jpg",
    price:999
  },
  {
    id:"76yser",
    name:"Infinity (JBL Fuze Pint, Wireless Ultra Portable Mini Speaker with Mic",
    img:"https://m.media-amazon.com/images/I/71K6mroOBJL._SX522_.jpg",
    price:799
  },
  {
    id:"77yytr",
    name:"Amazon Basics Magic Slate 15-inch LCD Writing Tablet with Stylus Pen, for Drawing",
    img:"https://m.media-amazon.com/images/I/61my9wXQO2L._SX522_.jpg",
    price:899
  },
  {
    id:"70yfre",
    name:"OnePlus Nord Buds True Wireless in Ear Earbuds ",
    img:"https://m.media-amazon.com/images/I/514NPRZ1AQL._SX522_.jpg",
    price:2399
  },
  {
    id:"71ywe",
    name:"CrossBeats Newly launched Spectra max Super Retina",
    img:"https://m.media-amazon.com/images/I/61eFriTFbGL._SX522_.jpg",
    price:3999
  },
  {
    id:"72yyr",
    name:"Tukzer Tempered Glass Screen Protector for Apple iPad 11 inch",
    img:"https://m.media-amazon.com/images/I/71BGFJ2CwmL._SX679_.jpg",
    price:800
  },
  {
    id:"73yrt",
    name:"Derwent Black Book Hard Back Sketch Book with Black Paper (A4 Portrait)",
    img:"https://m.media-amazon.com/images/I/81moO-w7osL._SX522_.jpg",
    price:650
  },
]

function Electronics() {

  const handleClick=(el)=>{
    const res=JSON.parse(localStorage.getItem("cart"));
    res.push(el);
    localStorage.setItem("cart",JSON.stringify(res));
  }

  return<div  >
    <div style={{height:"50px"}} ></div>
   
  <Grid templateColumns={{base:'repeat(1,1fr)',
                base:'repeat(1,1fr)',
                sm:'repeat(1,1fr)',
                md:'repeat(2,1fr)',
                lg:'repeat(4,1fr)'
                }} 
                gap={20}
                
                >
                 
{electronicsData.map((el)=>
    
      <GridItem key={el.id} style={{margin:"auto"}}  >
      <Card maxW='sm'>
 <CardBody>
 <Link to={`/electronics/${el.id}`} >
 <Image
  style={{width:"100%",height:"200px"}}
    src={el.img}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
 </Link>
  <Stack mt='6' spacing='3'>
    <Heading size='md'>{el.brand}</Heading>
    <Text>
     {el.name}
    </Text>
    <Text color='blue.600' fontSize='2xl'>
     Rs. {el.price}
    </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
  <ButtonGroup spacing='2'>
    <Button variant='solid' colorScheme='blue'
    onClick={()=>{
      alert("Order placed successfully")
    }}
    >
      Buy now
    </Button>
    <Button variant='ghost' colorScheme='blue' onClick={()=>{
      handleClick(el)
    }} >
      Add to cart
    </Button>
  </ButtonGroup>
</CardFooter>
      </Card>
      </GridItem>
    )}
    
     </Grid>

    <div style={{marginTop:"3%"}} >
    <Button>Prev</Button>
     <Button disabled >1/1</Button>
     <Button>Next</Button>
    </div>


     <div style={{height:"100px"}} ></div>
  
</div>
}

export default Electronics;

