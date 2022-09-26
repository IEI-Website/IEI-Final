import Head from 'next/head'
import Image from 'next/image'
import { Center, HStack, Box, Divider, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from './Card';
import NavBa from '../components/Navba';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Photo Gallery- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
      </Head>
      <Header /><NavBa />
      <Center fontSize="6xl" fontWeight="bold" color="white">
        Photo Gallery
      </Center>

      <Center>
        <Heading fontSize="50" fontFamily="fantasy">
          Photo Gallery
        </Heading>
      </Center>

      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading >
            2019 award ceremony
          </Heading>
        </Center>
        <Box backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <br />
      <br />
      <Center>
        <Carousel width={'1150px'} showThumbs={false} autoPlay={true} interval={'5000'} >
          <div>
            <img src="/photos/awards1.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards2.jpeg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards3.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards4.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards5.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards6.jpeg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards7.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards8.jpeg" alt="image4" />

          </div>
        </Carousel>
      </Center>
      <br />
      <br />
      <br />
      <br />

      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading >
            IEI 2022 Awardees
          </Heading>
        </Center>
        <Box backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <Center>
        <Carousel width={'1150px'} showThumbs={false} autoPlay={true} interval={'5000'}>
          <div>
            <img src="/photos/awards2022-1.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-2.jpg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards2022-3.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-4.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-5.jpg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards2022-6.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-7.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-8.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-9.jpg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards2022-10.jpg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards2022-11.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-12.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-13.jpg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards2022-14.jpg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards2022-15.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-16.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-17.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-18.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-19.jpg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards2022-20.jpg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards2022-21.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-22.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-23.jpg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards2022-24.jpg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards2022-25.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-26.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-27.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-28.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-29.jpg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards2022-30.jpg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards2022-31.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-32.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-33.jpg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards2022-34.jpg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards2022-35.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-36.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-37.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-38.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-39.jpg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards2022-40.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-41.jpg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards2022-42.jpg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards2022-43.jpg" alt="image4" />
          </div>
        </Carousel>
      </Center>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading >
            IEI 2021 Awardees
          </Heading>
        </Center>
        <Box backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <br />
      <br />
      <Center>
        <Carousel width={'1150px'} showThumbs={false} autoPlay={true} interval={'5000'}>
          <div>
            <img src="/photos/awards9.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards10.jpeg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards11.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards12.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards13.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards14.jpeg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards15.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards16.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards17.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards18.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards19.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards20.jpeg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards21.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards22.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards23.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards24.jpeg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards25.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards26.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards27.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards28.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards29.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards30.jpeg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards31.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards32.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards33.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/photos/awards34.jpeg" alt="image2" />

          </div>
          <div>
            <img src="/photos/awards35.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards36.jpeg" alt="image4" />

          </div>
          <div>
            <img src="/photos/awards37.jpeg" alt="image3" />

          </div>
          <div>
            <img src="/photos/awards38.jpeg" alt="image4" />

          </div>
        </Carousel>
      </Center>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>

  )
}
