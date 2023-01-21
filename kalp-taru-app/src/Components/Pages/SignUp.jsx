import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
 
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignUp() {
  const initState={
    firstName:"",
    lastName:"",
    email:"",
    password:""
  }
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText]=useState(initState);
  const {Login}=useContext(AuthContext)

  const handleSubmit=()=>{

   const loginArr=JSON.parse(localStorage.getItem("loginData"))||[];
   loginArr.push(text);
   localStorage.setItem("loginData",JSON.stringify(loginArr));
   Login()
   setText(initState);
   alert(`hello ${text.firstName}... SignUp successfull `)
  
  }

  const handleChange=(e)=>{
    const {name, value}=e.target;
    setText({...text,[name]:value})
  }


  return  (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>

                  <Input type="text"
                  name="firstName"
                  value={text.firstName}
                  onChange={handleChange}
                  />

                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>

                  <Input type="text"
                  name="lastName"
                  value={text.lastName}
                  onChange={handleChange}
                  />

                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>

              <Input type="email"
              name="email"
              value={text.email}
              onChange={handleChange}
              />

            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>

                <Input type={showPassword ? 'text' : 'password'}
                name="password"
                value={text.password}
                onChange={handleChange}
                />

                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>

              <Button
              onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>

            </Stack>
            <Stack pt={6}>
       
              <Text align={'center'}>
               
                Already a user? <Link style={{color:"blue"}}  to="/userlogin" >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
