import React from 'react'
import { Link } from 'react-router-dom';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,useDisclosure,Button,Center} from '@chakra-ui/react';
import styles from "./NavBar.module.css";

const AddressModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center style={{width:"100%", height:"100%", textDecoration:"none", borderRadius:"0px" }} onClick={onOpen}><h4>Select your address</h4>
          </Center>

              <Modal isOpen={isOpen} onClose={onClose}   >
                <ModalOverlay />
              <ModalContent   >

                <ModalHeader>Choose your location</ModalHeader>
                <ModalCloseButton width="50px" style={{marginLeft:"80%"}}/>
                <ModalBody>
                    <hr/>
                    <p>Select a delivery location to see product availability and delivery options</p>
                    <br/>
                    <div className={styles.addressModal} ><Link to="/login" >Sign In to see your address</Link></div>
                    <br/>
                    
                    <hr/>
                    <p>or enter an Indian pin code</p>

                    <div style={{width:"80%", margin:"auto" }} >
                      <input style={{border:"1px solid gray"}} />
                      <button style={{border:"1px solid gray",marginLeft:"15px", borderRadius:"5px", padding:"5px"}}>Apply</button>
                    </div>
                    <br/>
                  </ModalBody>

                  

            </ModalContent>
            </Modal>
    </>
  )
}

export default AddressModal
