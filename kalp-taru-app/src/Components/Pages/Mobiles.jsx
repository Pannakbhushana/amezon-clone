import React from 'react'
import { Card,CardBody, CardFooter, Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {Image,} from '@chakra-ui/react';




const MobileData=[

  {id:"1a",
   name:"iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage",
   price:15000,
   brand:"ViVo",
   img:"https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg"
  },
  {id:"5gi",
name:"OnePlus Nord CE 2 Lite 5G (Black Dusk, 8GB RAM, 128GB Storage",
price:"2000",
brand:"OnePlus",
img:"https://m.media-amazon.com/images/I/41mDAtPMDKL._SX300_SY300_QL70_FMwebp_.jpg"
},
 
  {id:"3fj",
  name:"Redmi A1 (Light Green, 2GB RAM 32GB ROM",
  price:6799,
  brand:"RedMe",
  img:"https://m.media-amazon.com/images/I/81UmTnrBDSL._SX679_.jpg"
},


{id:"6hrt",
name:"OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage)",
price:"28999",
brand:"OnePlus",
img:"https://m.media-amazon.com/images/I/41iEc0hf6TL._SX300_SY300_QL70_FMwebp_.jpg"
},
{id:"2esd",
name:"realme narzo 50A (Oxygen Blue , 4GB RAM + 64 GB Storage) ",
price:13999,
brand:"RealMe",
img:"https://m.media-amazon.com/images/I/51HxyNz4TnL._SX300_SY300_QL70_FMwebp_.jpg"
},
{id:"7gww",
name:"OnePlus 10T 5G (Jade Green, 8GB RAM, 128GB Storage)",
price:"2000",
brand:"OnePlus",
img:"https://m.media-amazon.com/images/I/71flXufDnbL._SX679_.jpg"
},
{id:"8haa",
name:"Xiaomi 12 Pro | 5G (Noir Black, 8GB RAM, 256GB Storage) ",
price:"28999",
brand:"Xiaomi",
img:"https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg"
},
{id:"4fz",
name:"Redmi 10A (Charcoal Black, 4GB RAM, 64GB Storage",
price:"7000",
brand:"RedMe",
img:"https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg"
},
{id:"1ac",
name:"iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage",
price:15000,
brand:"ViVo",
img:"https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg"
},
{id:"5gy",
name:"OnePlus Nord CE 2 Lite 5G (Black Dusk, 8GB RAM, 128GB Storage",
price:"2000",
brand:"OnePlus",
img:"https://m.media-amazon.com/images/I/41mDAtPMDKL._SX300_SY300_QL70_FMwebp_.jpg"
},

{id:"3fn",
name:"Redmi A1 (Light Green, 2GB RAM 32GB ROM",
price:6799,
brand:"RedMe",
img:"https://m.media-amazon.com/images/I/81UmTnrBDSL._SX679_.jpg"
},
{id:"6hq",
name:"OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage)",
price:"28999",
brand:"OnePlus",
img:"https://m.media-amazon.com/images/I/41iEc0hf6TL._SX300_SY300_QL70_FMwebp_.jpg"
},
{id:"2ew",
name:"realme narzo 50A (Oxygen Blue , 4GB RAM + 64 GB Storage) ",
price:13999,
brand:"RealMe",
img:"https://m.media-amazon.com/images/I/51HxyNz4TnL._SX300_SY300_QL70_FMwebp_.jpg"
},
{id:"7gr",
name:"OnePlus 10T 5G (Jade Green, 8GB RAM, 128GB Storage)",
price:"2000",
brand:"OnePlus",
img:"https://m.media-amazon.com/images/I/71flXufDnbL._SX679_.jpg"
},
{id:"8hf",
name:"Xiaomi 12 Pro | 5G (Noir Black, 8GB RAM, 256GB Storage) ",
price:"28999",
brand:"Xiaomi",
img:"https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg"
},


]

const handleClick=(el)=>{
  const res=JSON.parse(localStorage.getItem("cart"));
  res.push(el);
  localStorage.setItem("cart",JSON.stringify(res));
}


function Mobiles() {
  
  return <div  >
   
    <Grid templateColumns={{base:'repeat(1,1fr)',
                  base:'repeat(1,1fr)',
                  sm:'repeat(1,1fr)',
                  md:'repeat(2,1fr)',
                  lg:'repeat(4,1fr)'
                  }} 
                  gap={20}    
                  >
                   
  {MobileData.map((el)=>
        <GridItem key={el.id} style={{margin:"auto"}}  >
        <Card maxW='sm'>
   <CardBody>
    <Link to={`/mobiles/${el.id}`} >
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

export default Mobiles;
