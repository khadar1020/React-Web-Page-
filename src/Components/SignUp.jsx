import { Container, VStack, Heading, Input, Button, Text, Avatar } from '@chakra-ui/react'
import { React } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (<Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
      <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>
        <Heading textAlign={'center'}>VIDEO HUB</Heading>
        <Avatar alignSelf="center"></Avatar>
        <Input type={'text'} placeholder='Name' required focusBorderColor='purple.500'/>
        <Input type={'email'} placeholder='Email' required focusBorderColor='purple.500'/>
        <Input type={'password'} placeholder='Password' required focusBorderColor='purple.500'/>
        <Button variant={'link'} alignSelf={'flex-end'}>
          <Link to={'/forgetpassword'}>Forget Password</Link>
        </Button>
        <Button colorScheme='purple' type='submit'>Sign Up</Button>
        <Text textAlign={'right'}>Already Signed Up? {''}
          <Button variant={'link'} colorScheme='purple'>
            <Link to={'/login'}>Login In</Link>
          </Button>
        </Text>
      </VStack>
    </form>
  </Container>
  )
}

export default SignUp
