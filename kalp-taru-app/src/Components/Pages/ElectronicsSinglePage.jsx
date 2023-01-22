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
  

  
  export default function ElectronicsSinglePage() {
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





