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

  
  export default function BestSellersSinglePage() {
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
               {data.title}
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
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              {/* <MdLocalShipping /> */}
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }





// className={styles.singlePageContainer}