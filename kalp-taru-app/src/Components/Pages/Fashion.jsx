import React from 'react'
import { Card,CardBody, CardFooter, Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import {Image,} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const FashiionData=[
  {
    id:"50z3",
    name:"Lymio Dresses for Women Regular Multi Color Square Neck Half Sleeve Polyester",
    img:"https://m.media-amazon.com/images/I/61XdzIyV6hL._UY741_.jpg",
    price:569
  },
  {
    id:"51z2",
    name:"Lymio Dresses for Women || Western Dresses for Women",
    img:"https://m.media-amazon.com/images/I/7178zfQwb5L._UY741_.jpg",
    price:399
  },
  {
    id:"55zert",
    name:"Ben Martin Men's Slim Fit Denim Jeans",
    img:"https://m.media-amazon.com/images/I/613ybn1m+EL._UY879_.jpg",
    price:699
  },
  {
    id:"52zcda",
    name:"SIGHTBOMB High Turtle Neck Fullsleeve Ribbed Tops for Women",
    img:"https://m.media-amazon.com/images/I/61LFJ3ynPpL._UY741_.jpg",
    price:399
  },
  {
    id:"53zcs",
    name:"J B Fashion Tops for Women | Tops for Women Tops for Women Stylish | top for Girls ",
    img:"https://m.media-amazon.com/images/I/81Qelj0EE2L._UY741_.jpg",
    price:379
  },
  {
    id:"54zytr",
    name:"Ben Martin Men's Relaxed Jeans",
    img:"https://m.media-amazon.com/images/I/616xchp1ECL._UY741_.jpg",
    price:698
  },
  {
    id:"50zrty",
    name:"Lymio Dresses for Women Regular Multi Color Square Neck Half Sleeve Polyester",
    img:"https://m.media-amazon.com/images/I/61XdzIyV6hL._UY741_.jpg",
    price:569
  },
  {
    id:"51zyt",
    name:"Lymio Dresses for Women || Western Dresses for Women",
    img:"https://m.media-amazon.com/images/I/7178zfQwb5L._UY741_.jpg",
    price:399
  },
  {
    id:"55zt",
    name:"Ben Martin Men's Slim Fit Denim Jeans",
    img:"https://m.media-amazon.com/images/I/613ybn1m+EL._UY879_.jpg",
    price:699
  },
  {
    id:"52ze",
    name:"SIGHTBOMB High Turtle Neck Fullsleeve Ribbed Tops for Women",
    img:"https://m.media-amazon.com/images/I/61LFJ3ynPpL._UY741_.jpg",
    price:399
  },
  {
    id:"53za",
    name:"J B Fashion Tops for Women | Tops for Women Tops for Women Stylish | top for Girls ",
    img:"https://m.media-amazon.com/images/I/81Qelj0EE2L._UY741_.jpg",
    price:379
  },
 
]



function Fashion() {

  const handleClick=(el)=>{
    const res=JSON.parse(localStorage.getItem("cart"));
    res.push(el);
    localStorage.setItem("cart",JSON.stringify(res));
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
               
{FashiionData.map((el)=>
  
      <GridItem key={el.id} style={{margin:"auto"}}  >
            <Card maxW='sm'>
            <CardBody>
                <Link to={`/fashion/${el.id}`} >
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


export default Fashion;
