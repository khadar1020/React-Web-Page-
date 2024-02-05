import { Container, VStack, Stack, HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return <Container maxW={"Container.xl"} h={'100vh'} p={'16'}>
   
    <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
      <AiOutlineCloudUpload size={'10vmax'} />

      <form>
        <HStack>
          <Input required type="file" css={{
            "&::file-selector-button":{
              border: "none",
              width: "calc(100% + 36px)",
              height: "100%",
              color: 'purple',
              backgroundColor: 'white',
              marginLeft: '-18px',
              cursor: 'pointer'
            }
          }} />
          <Button colorScheme='purple' type='submit'>Upload</Button>
        </HStack>
      </form>
    </VStack>

  </Container>
}

export default Upload
