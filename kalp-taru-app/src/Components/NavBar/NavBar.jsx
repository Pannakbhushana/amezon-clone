import React from 'react'
import styles from "./NavBar.module.css"
import {TriangleDownIcon} from '@chakra-ui/icons'
import DrawerComponent from './DrawerComponent';
import AddressModal from './AddressModal';
import InputBox from './InputBox';
import {Menu,MenuButton,MenuList,MenuItem,Portal,Center} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
const links=[
  {to:"/", title:"Home"},
  {to:"/bestsellers", title:"Best Sellers"},
  {to:"/mobiles", title:"Mobiles"},
  {to:"/todaysdeals", title:"Today's Deals"},
  {to:"/coustomerservice", title:"Coustomer Service"},
  {to:"/electronics", title:"Electronics"},
  {to:"/prime", title:"Prime"},
  {to:"/fashion", title:"Fashion"},
  {to:"/pay", title:"Pay"},
  {to:"/homeandkitchen", title:"Home & Kitchen"},
]
  
  return (
   
    <div className={styles.container} >
      <div className={styles.childOne}>

        <div className={styles.logoStyles}>
          <img style={{width:"100%",height:"100%"}} src='./kalpTaru.png' alt='' />
        </div>

        <div className={styles.logoStyles} >
            <AddressModal/>
        </div>
        <InputBox />

        <Center className={styles.EN} >
        <Menu>
            <MenuButton>EN <TriangleDownIcon/></MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem>Menu 1</MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem>Open Closed Tab</MenuItem>
                        <MenuItem>Open File</MenuItem>
                    </MenuList>
                </Portal>
        </Menu>
        </Center>

        <div className={styles.EN} style={{width:"10%",height:"80%"}} ><p>Sign In</p><h6>Account & List</h6></div>
        <div className={styles.EN} style={{width:"5%",height:"80%"}} ><p>Returns<br/>&Order</p></div>
        <div className={styles.cart} ><Center><p>Cart</p></Center></div>
        
      </div>

      <div className={styles.childTwo} > 

            <DrawerComponent/>
            {links.map((el)=><NavLink className={({isActive})=>{
              return isActive ? styles.activeStyle : styles.defaultStyle
            }} key={el.to} to={el.to} >{el.title}</NavLink>)}
        
      </div>
    </div>

  )
}

export default NavBar
