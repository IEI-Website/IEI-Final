import Head from 'next/head'
import Image from 'next/image'
import {Center, Box, Divider, Heading, SimpleGrid} from "@chakra-ui/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from './Card';

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Registration- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
      </Head>
      <Header/>
      <Center  fontSize="6xl" fontWeight="bold" color="white">
        Registration
      </Center>
      <br/>
      <br/>
      <Center fontSize="4xl" color="white">
        Awards for academic excellence
      </Center>
      <Center>
        <Heading fontSize="50" fontFamily="fantasy">
          Photo Gallery
        </Heading>
      </Center>
      <SimpleGrid padding="250" columns={3}  spacingX='40px' spacingY='20px'>
      <Card personName={"Mr. K K Varkhedkar"} image="/photos/KK-varkhedkar.jpeg"  /> 
      <Card personName={"Mr. Kamble"} image="/photos/kamble.jpeg"/> 
      <Card personName={"Mr. Godbole"} image="/photos/godbole.jpeg" /> 
      <Card personName={"Dr. Nimkar"} image="/photos/nimkar.jpeg"  /> 
      <Card personName={"Mr. Sanjay"} image="/photos/sanjay.jpeg"  /> 
      <Divider color="blackAlpha.400" />
      <Card personName={"Fr. Saturnino Almeida"} image="/photos/Fr.jpeg"  /> 
      <Card personName={"Dr. S M  Khot"} image="/photos/sm-khot.jpeg"   /> 
      <Card personName={"Dr. Nilaj Deshmukh"} image="/photos/dr-nilaj-deshmukh.jpeg"   /> 
      <Card personName={"Dr. Bindu S"} image="/photos/Bindu.jpeg"   /> 
      <Card personName={"Dr. Milind Shah"} image="/photos/milind-shah.jpeg"   /> 
      <Card personName={"Dr. Lata Ragha"} image="/photos/lata.jpeg"   /> 
      <Card personName={"Dr. Sushil Thale"} image="/photos/sushil.jpeg"   /> 
      </SimpleGrid>

    <Footer/>
    </div>

  )
}
