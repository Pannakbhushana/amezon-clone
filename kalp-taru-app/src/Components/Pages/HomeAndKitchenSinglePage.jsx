import React from 'react'
import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';

  const products=[
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
  

  
  export default function HomeAndKitchenSinglePage() {
    const [loading, setLoading]=useState(false);
    const [data, setData]=useState({});
   
    const params=useParams();
    
    useEffect(()=>{
     
      updateData()
      
    },[])

    const updateData=()=>{
      
      let newData=products.filter((el)=>el.id==params.id)
      setData(newData[0])
    }

    const handleClick=(data)=>{
      let arr= JSON.parse(localStorage.getItem("cart")) || [];
      arr.push(data);
      localStorage.setItem("cart",JSON.stringify(arr));
      alert("Item added to cart")
    }
    
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                data.img
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {data.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Rs.{data.price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
            onClick={()=>{
              handleClick (data)
            }}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>

            <Button
            onClick={()=>{
              alert("Order placed successfully")
            }}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Buy Now
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              {/* <MdLocalShipping /> */}
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }





