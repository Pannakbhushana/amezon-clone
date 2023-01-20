import React from 'react'
import styles from "./NavBar.module.css"
import {TriangleDownIcon,HamburgerIcon} from '@chakra-ui/icons'
import DrawerComponent from './DrawerComponent';
import AddressModal from './AddressModal';
import InputBox from './InputBox';
import {Menu,MenuButton,MenuList,MenuItem,Portal,Center} from '@chakra-ui/react'
import { NavLink,Link } from 'react-router-dom';
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'


const NavBar = () => {
  const [value, setValue] = React.useState('1')
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
        <Link to="/" > <img style={{width:"100%",height:"100%"}} src='./kalp.png' alt='' /></Link>
        </div>

        <div className={styles.selectYourAddress} >
            <AddressModal/>
        </div>
        <InputBox />

        <Center className={styles.EN} >
        <Menu>
            <MenuButton>EN <TriangleDownIcon/></MenuButton>
                <Portal>
                    <MenuList>
                    <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='column' padding="15px"  >
                      <Radio value='1'>Engligh-EN</Radio>
                      <hr/>
                      <Radio value='2'>Hindi-HI</Radio>
                      <Radio value='3'>Marathi-MA</Radio>
                      <Radio value='4'>Tamil-TA</Radio>
                      <Radio value='5'>Telgu-TE</Radio>
                      <Radio value='6'>Kannad-KA</Radio>
                      <Radio value='8'>Malyalam-ML</Radio>
                      <Radio value='9'>Panjabi-PN</Radio>
                    </Stack>
                    </RadioGroup>
                    </MenuList>
                </Portal>
        </Menu>
        </Center>

        <div className={styles.EN} style={{width:"10%",height:"80%"}} ><Link to="/login" ><p>Sign In</p><h6>Account & List</h6></Link></div>
        <div className={styles.EN} style={{width:"5%",height:"80%"}} ><p>Returns<br/>&Order</p></div>
        <div className={styles.cart} ><Center><Link to="/cart" ><p>Cart</p></Link></Center></div>

        <div className={styles.menuBar} >
          <Center>
          <Menu>
            <MenuButton>Menu</MenuButton>
                <Portal>
                    <MenuList>
                    {links.map((el)=><MenuItem><Link key={el.to} to={el.to} >{el.title}</Link></MenuItem>)}
                    </MenuList>
                </Portal>
          </Menu>
          </Center>
        </div>
      </div>

      <div className={styles.childTwo} > 

            <DrawerComponent/>
            {links.map((el,i)=><NavLink key={i} className={({isActive})=>{
              return isActive ? styles.activeStyle : styles.defaultStyle
            }} to={el.to} >{el.title}</NavLink>)}
        
      </div>
    </div>

  )
}

export default NavBar
