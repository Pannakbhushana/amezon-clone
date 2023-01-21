import React from 'react'
import { Card,CardBody, CardFooter, Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import {Image,} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const TodaysDealsData=[
 
   {
     id:288,
     img:"https://m.media-amazon.com/images/I/71Aqnnj5LcL._SX522_.jpg",
     name:"The Road Wherever",
     price:199
    },
    {id:"5gn",
    name:"OnePlus Nord CE 2 Lite 5G (Black Dusk, 8GB RAM, 128GB Storage",
    price:"2000",
    img:"https://m.media-amazon.com/images/I/41mDAtPMDKL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
     id:388,
     img:"https://m.media-amazon.com/images/I/81Ip7r0VzbL._SY550_.jpg",
     name:"History of Western Classic",
     price:396
    },
    {id:"3fn",
    name:"Redmi A1 (Light Green, 2GB RAM 32GB ROM",
    brand:"RedMe",
    img:"https://m.media-amazon.com/images/I/81UmTnrBDSL._SX679_.jpg"
  },
  {id:"4fn",
  name:"Redmi 10A (Charcoal Black, 4GB RAM, 64GB Storage",
  price:"7000",
  img:"https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg"
  },
    {
     id:588,
     img:"https://m.media-amazon.com/images/I/81WtBMyGKqL._SX569_.jpg",
     name:"",
     price:299
    },  
   
    {id:"1an",
    name:"iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage",
    price:15000,
    
    img:"https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg"
   },
 
  
   {
    id:488,
    img:"https://m.media-amazon.com/images/I/81z5ZWv7rFL._SX466_.jpg",
    name:"Romantic 80's",
    price:198
   },
  
   {id:"2en",
   name:"realme narzo 50A (Oxygen Blue , 4GB RAM + 64 GB Storage) ",
   price:13999,
   img:"https://m.media-amazon.com/images/I/51HxyNz4TnL._SX300_SY300_QL70_FMwebp_.jpg"
   },

 {
  id:188,
  img:"https://m.media-amazon.com/images/I/51DIC6jreyL.jpg",
  name:"GREATEST GHAZAL HITS (MP3 FORMAT)",
  price:99
 },
]

const handleClick=(el)=>{
  const res=JSON.parse(localStorage.getItem("cart"));
  res.push(el);
  localStorage.setItem("cart",JSON.stringify(res));
}


function TodaysDeals() {
  return  <div  >
   
  <Grid templateColumns={{base:'repeat(1,1fr)',
                base:'repeat(1,1fr)',
                sm:'repeat(1,1fr)',
                md:'repeat(2,1fr)',
                lg:'repeat(4,1fr)'
                }} 
                gap={20} 
                >
                 
{TodaysDealsData.map((el)=>
    
      <GridItem key={el.id} style={{margin:"auto"}}  >
      <Card maxW='sm'>
        <CardBody>
            <Link to={`/todaysdeals/${el.id}`} >
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
               <Text color='blue.600' fontSize='2xl'>Rs. {el.price}</Text>
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

export default TodaysDeals;
