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
      <Carousel height={'20px'} marginRight={"20px"} >
        <div>
          <img src="/photos/awards1.jpeg" alt="image1" />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src="/photos/awards2.jpeg" alt="image2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src="/photos/awards3.jpeg" alt="image3" />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img src="/photos/awards4.jpeg" alt="image4" />
          <p className="legend">Image 4</p>
        </div>
        <div>
          <img src="/photos/awards5.jpeg" alt="image1" />
          <p className="legend">Image 5</p>
        </div>
        <div>
          <img src="/photos/awards6.jpeg" alt="image2" />
          <p className="legend">Image 6</p>
        </div>
        <div>
          <img src="/photos/awards7.jpeg" alt="image3" />
          <p className="legend">Image 7</p>
        </div>
        <div>
          <img src="/photos/awards8.jpeg" alt="image4" />
          <p className="legend">Image 8</p>
        </div>
      </Carousel>
<br/>
<br/>
<br/>

      

      <Footer />
    </div>

  )
}
