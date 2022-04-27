import Head from 'next/head'
import Image from 'next/image'
import {Center,Flex,Text,HStack,VStack,Box} from "@chakra-ui/react";
import VideoBackground from "../pages/components/VideoBackground";
import Header from "../pages/components/Header";
import Footer from './components/Footer';
import HCarousel from './components/HCarousel';
import VCarousel from './components/VCarousel';
import NavBa from './components/Navba';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
export default function Home() {
  return (
    <div>
      <Head>
        <title>IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <div>
        <Header/>
        <NavBa />
      </div>
     <br/>
     <Flex>
     <Flex width={"50%"}>
        <Carousel >
          <div>
              <img src="/1.jpg" alt="image1"/>
                <p className="legend">Image 1</p>
          </div>
          <div>
            <img src="/2.jpg" alt="image2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src="/3.jpg" alt="image3"/>
                <p className="legend">Image 3</p>
          </div>
          <div>
            <img src="/4.jpg" alt="image4"/>
            <p className="legend">Image 4</p>
          </div>
        </Carousel>
        </Flex>
        <Flex color={"white"}> .</Flex>
      <Flex width={"50%"} >
      
      <Box width={"100%"} height={"450px"} boxShadow='outline' p='6' rounded='md'>
        <Text bgColor={"gray"}>Updates</Text>
        <Text>Conference will open soon for paper submission. Please stay tune. </Text>  
      </Box>
      
      </Flex>
      </Flex>
      <Center  fontSize="5xl" fontWeight="bold" color="black">
        Welcome To IEI-BLC FCRIT Awards
      </Center>
      <br/>
      <Center  fontSize="3xl" color="black">
        <Image src="/fcritlogo.png"width={200} height={200} />
        <Image src="/iei.png"width={200} height={200} />
      </Center>
      <br/>
      <Center fontSize="4xl" color="black">
        Awards for academic and research excellence
      </Center>
      <br/><br/><br/>
      <VStack spacing='30px'>
      <HStack spacing='30px'>
        <div>
        <Box boxShadow='outline' p='6' marginLeft={6} marginRight={12} rounded='md'>
      <Center  fontSize="3xl" fontWeight="bold" color="black">
      About IEI-BLC FCRIT Awards 
      </Center>
      </Box>
      <br/>
      <Text marginStart={"50"} fontSize="2xl">
      It is with great pleasure that Fr. C. Rodrigues Institute of Technology in
      collaboration with The Institute of Engineers, India – Belapur Local Centre is
      announcing the IEI BLC – FCRIT Excellence Awards – 2022. The objective of
      the award ceremony is to recognize and appreciate the excellence of
      Academicians and Industry professionals in their respective domains. We are
      glad to inform that IEI BLC – FCRIT Excellence Awards organized in the
      years 2019 and 2021 received overwhelming responses and have been very
      successful. 
      </Text><br/>
      </div>
      <div>
      <Box boxShadow='outline' p='6' rounded='md' marginRight={6}>
      <Center  fontSize="3xl" fontWeight="bold" color="black">
        About The Institution of Engineers (India)  
      </Center>
      </Box>
      <br/>
      <Text marginStart={"50"} fontSize="2xl">
      The Institution of Engineers (India) [IEI] is the largest multidisciplinary
      professional body of engineers, established in 1920 with its Headquarters
      located in Kolkata and incorporated under Royal Charter on 9th September,
      1935 by the then His Majesty of King George V. The Royal Charter endowed
      the Institution with the responsibility to promote the general advancement of
      engineering amongst its members and persons attached to the Institution. After
      Independence, the Institution is a “Body Corporate” protected under Article
      372 of the Constitution of India
      </Text><br/>
      </div>
      </HStack>
      <HStack spacing='30px'>
        <div>
        <Box boxShadow='outline' p='6' rounded='md' marginLeft={6}>
        <Center  fontSize="3xl" fontWeight="bold" color="black">
        About IEI-Belapur Local Center
      </Center>
      </Box>
      <br/>
      <Text marginStart={"50"} fontSize="2xl">
      The Council of IEI set up Belapur Local Centre (BLC) in May 1994. Ever
      since its inception, BLC is vibrant with active participation from its office
      bearers and ever-increasing members. BLC is situated in a 1000 Sq. Meters plot
      in Sector 15, Central Business District (CBD), close to Belapur Railway Station
      in Navi Mumbai. BLC Building was designed by the reputed architects, M/s.
      Shashi Prabhu & Associates and M/s. Sopan Parbhu Architect. It consists of
      stilt with 5 floors at estimated cost of Rs.100 lakhs (as of 1994). At present,
      IEIBLC has 3687 members comprising of engineers from 15 Divisions.

      </Text>
      <br/>
        </div>
        
        <div>
        <Box boxShadow='outline' p='6' rounded='md' marginLeft={10} marginRight={6}>
        <Center  fontSize="3xl" fontWeight="bold" color="black">
      About FCRIT 
      </Center>
      </Box>
      <br/>
      <Text marginStart={"50"} fontSize="2xl">
      FCRIT was established in 1994, named after late Rev. Fr. Conceicao
      Rodrigues. FCRIT persistently seeks and adopts innovative methods to
      improve the quality of education on a consistent basis. The global standards set
      at FCRIT in the field of teaching spurs the students in relentless pursuit of
      excellence. Though its reputation rests mainly on the high quality, value-based
      technical education that it imparts, it has to its credit a verdant, well-maintained
      Campus and extensive facilities. Its location in the vicinity of the holy places of
      various religious denominations underscores its secular credentials and its
      philosophy of "Vasudhaiva Kuttumbakam". The college prides on being one of
      few that has accreditation for all five branches.
      </Text>
      <br/>
        </div>
      </HStack>
      </VStack>
      <br/>
      
      <Footer/>
    </div>
  )
}