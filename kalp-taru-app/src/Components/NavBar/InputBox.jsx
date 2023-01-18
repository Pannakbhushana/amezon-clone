import React from 'react'
import { SearchIcon,TriangleDownIcon} from '@chakra-ui/icons'
import {Menu,MenuButton,MenuList,MenuItem,Portal,Center} from '@chakra-ui/react'
import styles from "./NavBar.module.css";

const InputBox = () => {
  return (
    <div style={{
        width:"50%",
        height:"70%", 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        borderRadius:"5%",
        }} >
        
        <Center  style={{
            width:"10%",
            height:"100%", 
            // border:"1px solid #f3f3f3",
            background:"#f3f3f3",
            color:"black",
            borderTopLeftRadius:"3px",
            borderBottomLeftRadius:"3px",
            }} >
        <Menu>
            <MenuButton> All <TriangleDownIcon/></MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem>Menu 1</MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem>Open Closed Tab</MenuItem>
                        <MenuItem>Open File</MenuItem>
                    </MenuList>
                </Portal>
        </Menu>
        </Center >

        <div className={styles.inputPerent} >
              <input  className={styles.inputBoxStyle} placeholder='What are you looking for' />
        </div>

        <div  style={{width:"10%",height:"100%"}} >
            <button style={{
                width:"100%",
                height:"100%",
                background:"#febd69",
                borderTopRightRadius:"3px",
                borderBottomRightRadius:"3px"
                }}><SearchIcon/></button></div>

      </div>
  )
}

export default InputBox
//