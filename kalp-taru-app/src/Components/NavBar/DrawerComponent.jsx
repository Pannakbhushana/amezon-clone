import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack,
    RadioGroup,
    Radio,
    useDisclosure,
    Button,
    
  } from '@chakra-ui/react';
  import styles from "./NavBar.module.css";

const DrawerComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  return (
    <div className={styles.defaultStyle} >
       <RadioGroup defaultValue={placement} onChange={setPlacement}>
       
      </RadioGroup>
      <Button colorScheme='none' onClick={onOpen}>
       <HamburgerIcon/> All
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Trending</DrawerHeader>
          <DrawerBody>
            
            <p>Best Sellers</p>
            <p>New Releases</p>
            <p>Movers and Shakers</p>
            
          </DrawerBody>

        <DrawerHeader borderTopWidth='1px'>Digigtal Content And Devices</DrawerHeader>
        <DrawerBody>
            <p>Echo & Alexa</p>
            <p>Fire TV</p>
            <p>Kindle E-Readers & eBook</p>
            <p>Audible Audiobook</p>
            <p>Kalp Video</p>
            <p>Kalp Music</p>
            <br/>
            <br/>
            </DrawerBody>
        <DrawerHeader borderTopWidth='1px'>Shop By category</DrawerHeader>
        <DrawerBody>
              <p>Mobile, Computer</p>
              <p>TV, Appliances Electronics</p>
              <p>Men's Fashion</p>
              <br/>
              </DrawerBody>
        <DrawerHeader borderTopWidth='1px'>Program & Fetures</DrawerHeader>
          <DrawerBody>
            <p>Gift Cards & Mobile Recharge</p>
            <p>Flight Tickets</p>
            <p>#FoundltOneKalptaru</p>
            <p>Clearance Store</p>
            <br/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default DrawerComponent
