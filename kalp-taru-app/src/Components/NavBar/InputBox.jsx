import React from 'react'
import { SearchIcon,TriangleDownIcon} from '@chakra-ui/icons'
import {Menu,MenuButton,MenuList,MenuItem,Portal,Center} from '@chakra-ui/react'
import styles from "./NavBar.module.css";

const InputBox = () => {
  return (
    <div className={styles.inputParentDiv} >
        
        <Center className={styles.inputAllMenu}  >
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

        <div className={styles.searchButtonParentDiv} >
            <button className={styles.searchButton} ><SearchIcon/></button></div>

      </div>
  )
}

export default InputBox
//