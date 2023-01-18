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
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default DrawerComponent
