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
  

  
  export default function FashionSinglePage() {
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





