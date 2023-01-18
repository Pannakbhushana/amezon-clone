import React from 'react'
import styles from "./NavBar.module.css"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'



const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
   
    <div className={styles.container} >
      <div className={styles.childOne}>

        <div></div>

        <div  >
        <Button onClick={onOpen}>Open Modal</Button>

              <Modal isOpen={isOpen} onClose={onClose} style={{marginTop:"100px",background:"gray"}}  >
                <ModalOverlay />
              <ModalContent style={{marginTop:"13%", marginLeft:"35%" ,background:"gray",width:"30%",height:"300px"}}   >

                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton width="50px" style={{marginLeft:"80%"}}/>
                <ModalBody>

                  </ModalBody>

                  

            </ModalContent>
            </Modal>
        </div>
        
      </div>

      <div className={styles.childTwo}></div>
    </div>

      

   
      
   
     
   
  )
}

export default NavBar
