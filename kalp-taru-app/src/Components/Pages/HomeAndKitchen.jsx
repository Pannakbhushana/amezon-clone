import React from 'react'
import { Card,CardBody, CardFooter, Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import {Image,} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomeAndKitchenData=[
  {
    id:"100xz",
    name:"Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) ",
    img:"https://m.media-amazon.com/images/I/51DGcy8eBCL._SX679_.jpg",
    price:499
  },
  {
    id:"101xz",
    name:"StyleHouse Lint Remover for Woolen Clothes, Electric Lint Remover,",
    img:"https://m.media-amazon.com/images/I/71SaXp5qZvL._SX679_.jpg",
    price:590
  },
  {
    id:"103xz",
    name:"Bajaj RHX-2 800-Watt Room Heater (White)",
    img:"https://m.media-amazon.com/images/I/718COOybK0L._SX679_.jpg",
    price:999
  },
  {
    id:"1004xz",
    name:"rident Feather Tales Bed",
    img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/Premium/PC/Header.jpg",
    price:10959
  },
  {
    id:"1006xz",
    name:"rident Feather Tales Bed Sheet Set with 2 Pillow Covers,",
    img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/Premium/PC/Header.jpg",
    price:6999
  },
  {
    id:"1007xz",
    name:"Bombay Dyeing 140 TC 100% ",
    img:"https://m.media-amazon.com/images/I/711d79rVpZL._SY679_.jpg",
    price:799
  },
  {
    id:"100gfxz",
    name:"Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) ",
    img:"https://m.media-amazon.com/images/I/51DGcy8eBCL._SX679_.jpg",
    price:499
  },
  {
    id:"101hjxz",
    name:"StyleHouse Lint Remover for Woolen Clothes, Electric Lint Remover,",
    img:"https://m.media-amazon.com/images/I/71SaXp5qZvL._SX679_.jpg",
    price:590
  },
  {
    id:"103dtxz",
    name:"Bajaj RHX-2 800-Watt Room Heater (White)",
    img:"https://m.media-amazon.com/images/I/718COOybK0L._SX679_.jpg",
    price:999
  },
  {
    id:"10eg04xz",
    name:"rident Feather Tales Bed",
    img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/Premium/PC/Header.jpg",
    price:10959
  },
  {
    id:"100sd6xz",
    name:"rident Feather Tales Bed Sheet Set with 2 Pillow Covers,",
    img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/Premium/PC/Header.jpg",
    price:6999
  },
  {
    id:"100hs7xz",
    name:"Bombay Dyeing 140 TC 100% ",
    img:"https://m.media-amazon.com/images/I/711d79rVpZL._SY679_.jpg",
    price:799
  }
]




function HomeAndKitchen() {
  const handleClick=(el)=>{
    const res=JSON.parse(localStorage.getItem("cart"));
    res.push(el);
    localStorage.setItem("cart",JSON.stringify(res));
    alert("Item added to cart")
  }

  return <div>
  <div style={{height:"50px"}} ></div>
 
<Grid templateColumns={{base:'repeat(1,1fr)',
              base:'repeat(1,1fr)',
              sm:'repeat(1,1fr)',
              md:'repeat(2,1fr)',
              lg:'repeat(4,1fr)'
              }} 
              gap={20}
              
              >
               
{HomeAndKitchenData.map((el)=>
  
      <GridItem key={el.id} style={{margin:"auto"}}  >
            <Card maxW='sm'>
            <CardBody>
                <Link to={`/homeandkitchen/${el.id}`} >
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

export default HomeAndKitchen;
