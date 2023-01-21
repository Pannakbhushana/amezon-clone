import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

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
  Alert,
} from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function UserLogin() {
  const initState={
    email:"",
    password:""
  }
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText]=useState(initState);
  const { Login, LogOut}=useContext(AuthContext);





  const handleSubmit=()=>{
    Authentication()
        setText(initState)
  }

  const Authentication=()=>{
    let LoginData=JSON.parse(localStorage.getItem("loginData"))||[];
    let count=0;

   
   

    if(LoginData.length===0){
        return alert("user not regestered Sig Up first")
    }
    var name;
    for(let i=0; i<LoginData.length; i++){
        if(LoginData[i].email===text.email && LoginData[i].password===text.password){
            count++;
           name=LoginData[i].firstName;
            break;
        }
    }

    if(count===0){
        alert("Wrong Emai; or Password");
    }
    else{
    
        Login();
        alert(`Welcome back ${name}`);
    }
   
  }

  const handleLogOut=()=>{
    LogOut()
    alert("Log out Successfull")
  }

  const handleChange=(e)=>{
    const {name, value}=e.target;
    setText({...text,[name]:value})
  }
 

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
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
              Log In
              </Button>

              <Button
              onClick={handleLogOut}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Log Out
              </Button>

            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Not a user ?  <Link style={{color:"blue"}} to="/signup" > Click here for Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
