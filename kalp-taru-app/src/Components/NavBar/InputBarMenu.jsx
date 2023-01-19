import React from 'react'
import {Menu, MenuButton,MenuList,MenuItem} from '@chakra-ui/react'

const InputBarMenu = () => {
  return (
    <>
      <Menu>
  <MenuButton>Open menu</MenuButton>
  <Portal>
    <MenuList>
      <MenuItem>Menu 1</MenuItem>
      <MenuItem>New Window</MenuItem>
      <MenuItem>Open Closed Tab</MenuItem>
      <MenuItem>Open File</MenuItem>
    </MenuList>
  </Portal>
</Menu>
    </>
  )
}

export default InputBarMenu
