import React from 'react'
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: 'uppercase',
  p: '4',
  size: "4xl"
}

const Home = () => {

  const MyCarousel = () =>{
    return (
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showThumbs={false} showStatus={false}>
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the Future</Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>Future is Gaming</Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming on console</Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Night Life is cool</Heading>
      </Box>
    </Carousel>   
    )
   }

  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW ={'container.x1'} p="16">
        <Heading textTransform={"uppercase"} m={'auto'} py={'2'} w={'fit-content'} borderBottom={'2px solid'}>
          services
        </Heading>

      <Stack h={"full"} p={"4"} alignItems={'center'} direction={['column', 'row']}>
        <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
        <Text letterSpacing={"wideset"} lineHeight={'190%'} p={['4','16']}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi error eum eligendi ipsum eius at adipisci architecto accusamus. Impedit consectetur consequuntur quam minima totam reiciendis itaque id enim repudiandae labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sint itaque, exercitationem blanditiis omnis beatae vel esse eius dignissimos odio alias magnam minima voluptas, quaerat neque possimus quibusdam, voluptates earum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam asperiores voluptates nam cumque inventore autem harum. Ducimus magni molestiae est voluptatem, dicta, fuga mollitia officiis voluptatibus ad iste omnis veritatis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. In error ipsum alias sit eius quo neque nobis aperiam laborum, dolorem ex laboriosam delectus deleniti totam maxime natus. Reiciendis, excepturi quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur harum quis laborum accusantium ducimus, vitae animi debitis aspernatur sit ipsam tempore vel hic recusandae quod, nisi optio fugiat. Tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde voluptate tenetur autem, vitae quos mollitia nisi? Itaque aliquid est impedit. Nisi labore itaque deleniti laudantium molestiae maiores optio eligendi.
        </Text>
      </Stack>

      </Container>
    </Box>
  )
}

export default Home
