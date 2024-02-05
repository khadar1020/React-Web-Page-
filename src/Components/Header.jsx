import React from 'react'
import { Drawer,DrawerBody, DrawerHeader, DrawerOverlay, DrawerCloseButton, Button, useDisclosure, DrawerContent, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi"

const Header = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();


  return (
    <>
      <Button pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} zIndex={'overlay'}>
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}> 
      
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                <Link to={"/"}>Home</Link>
              </Button>
              <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                <Link to={"/videos?category-free"}>Free Videos</Link>
              </Button>
              <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                <Link to={"/Upload"}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack pos={'absolute'} left={'10'} bottom={'10'}>
              <Button colorScheme={'purple'}>
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'outline'}>
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
