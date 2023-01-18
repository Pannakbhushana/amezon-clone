import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,useDisclosure,Button,Center} from '@chakra-ui/react';

const AddressModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center style={{width:"100%", height:"100%", textDecoration:"none", borderRadius:"0px" }} onClick={onOpen}><h4>Select your address</h4>
          </Center>

              <Modal isOpen={isOpen} onClose={onClose}   >
                <ModalOverlay />
              <ModalContent   >

                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton width="50px" style={{marginLeft:"80%"}}/>
                <ModalBody>

                  </ModalBody>

                  

            </ModalContent>
            </Modal>
    </>
  )
}

export default AddressModal
