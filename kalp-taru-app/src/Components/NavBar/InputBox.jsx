import React from 'react'
import { SearchIcon,TriangleDownIcon} from '@chakra-ui/icons'
import {Menu,MenuButton,MenuList,MenuItem,Portal,Center} from '@chakra-ui/react'
import styles from "./NavBar.module.css";

const deals=['All Category','Alexa Skill','Device','Fashion','Pharmacy','Appliance','App & Game','Baby','Beauty','Books',
'Car & Mterbick','Clothing & Accessories','Collectibles','Computer & Accessories','Electronics','Furniture','Garden','Gift Cards'
]

const InputBox = () => {
  return (
    <div className={styles.inputParentDiv} >
        
        <Center className={styles.inputAllMenu}  >
        <Menu  >
            <MenuButton> Deals <TriangleDownIcon/></MenuButton>
                <Portal  >
                   
                    <MenuList  >
                        {deals.map((el,i)=><MenuItem key={i} >{el}</MenuItem>)}
                        
                    </MenuList>
                    
                    
                </Portal>
        </Menu>
        </Center >

        <div className={styles.inputPerent} >
              <input  className={styles.inputBoxStyle} placeholder='' />
        </div>

        <div className={styles.searchButtonParentDiv} >
            <button className={styles.searchButton} ><SearchIcon/></button></div>

      </div>
  )
}

export default InputBox
//