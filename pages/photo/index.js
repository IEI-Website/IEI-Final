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
        <Carousel width={'1150px'}  >
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
      </Center>
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
        <Carousel width={'1150px'} showThumbs={false}>
          <div>
            <img src="/photos/awards9.jpeg" alt="image1" />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src="/photos/awards10.jpeg" alt="image2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src="/photos/awards11.jpeg" alt="image3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src="/photos/awards12.jpeg" alt="image4" />
            <p className="legend">Image 4</p>
          </div>
          <div>
            <img src="/photos/awards13.jpeg" alt="image1" />
            <p className="legend">Image 5</p>
          </div>
          <div>
            <img src="/photos/awards14.jpeg" alt="image2" />
            <p className="legend">Image 6</p>
          </div>
          <div>
            <img src="/photos/awards15.jpeg" alt="image3" />
            <p className="legend">Image 7</p>
          </div>
          <div>
            <img src="/photos/awards16.jpeg" alt="image4" />
            <p className="legend">Image 8</p>
          </div>
          <div>
            <img src="/photos/awards17.jpeg" alt="image3" />
            <p className="legend">Image 9</p>
          </div>
          <div>
            <img src="/photos/awards18.jpeg" alt="image4" />
            <p className="legend">Image 10</p>
          </div>
          <div>
            <img src="/photos/awards19.jpeg" alt="image1" />
            <p className="legend">Image 11</p>
          </div>
          <div>
            <img src="/photos/awards20.jpeg" alt="image2" />
            <p className="legend">Image 12</p>
          </div>
          <div>
            <img src="/photos/awards21.jpeg" alt="image3" />
            <p className="legend">Image 13</p>
          </div>
          <div>
            <img src="/photos/awards22.jpeg" alt="image4" />
            <p className="legend">Image 14</p>
          </div>
          <div>
            <img src="/photos/awards23.jpeg" alt="image1" />
            <p className="legend">Image 15</p>
          </div>
          <div>
            <img src="/photos/awards24.jpeg" alt="image2" />
            <p className="legend">Image 16</p>
          </div>
          <div>
            <img src="/photos/awards25.jpeg" alt="image3" />
            <p className="legend">Image 17</p>
          </div>
          <div>
            <img src="/photos/awards26.jpeg" alt="image4" />
            <p className="legend">Image 18</p>
          </div>
          <div>
            <img src="/photos/awards27.jpeg" alt="image3" />
            <p className="legend">Image 19</p>
          </div>
          <div>
            <img src="/photos/awards28.jpeg" alt="image4" />
            <p className="legend">Image 20</p>
          </div>
          <div>
            <img src="/photos/awards29.jpeg" alt="image1" />
            <p className="legend">Image 21</p>
          </div>
          <div>
            <img src="/photos/awards30.jpeg" alt="image2" />
            <p className="legend">Image 22</p>
          </div>
          <div>
            <img src="/photos/awards31.jpeg" alt="image3" />
            <p className="legend">Image 23</p>
          </div>
          <div>
            <img src="/photos/awards32.jpeg" alt="image4" />
            <p className="legend">Image 24</p>
          </div>
          <div>
            <img src="/photos/awards33.jpeg" alt="image1" />
            <p className="legend">Image 25</p>
          </div>
          <div>
            <img src="/photos/awards34.jpeg" alt="image2" />
            <p className="legend">Image 26</p>
          </div>
          <div>
            <img src="/photos/awards35.jpeg" alt="image3" />
            <p className="legend">Image 27</p>
          </div>
          <div>
            <img src="/photos/awards36.jpeg" alt="image4" />
            <p className="legend">Image 28</p>
          </div>
          <div>
            <img src="/photos/awards37.jpeg" alt="image3" />
            <p className="legend">Image 29</p>
          </div>
          <div>
            <img src="/photos/awards38.jpeg" alt="image4" />
            <p className="legend">Image 30</p>
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
