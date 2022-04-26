import Head from 'next/head'
import Image from 'next/image'
import {Center, Heading, SimpleGrid} from "@chakra-ui/react";
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
      <Center  fontSize="3xl" color="white">
        <Image src="/iei.png"width={300} height={300} />
        <Image src="/fcritlogo.png"width={300} height={300} />
      </Center>
      <br/>
      <Center fontSize="4xl" color="white">
        Awards for academic excellence
      </Center>
      <Center>
        <Heading>
          Photo Gallery
        </Heading>
      </Center>
      <br/><br/><br/>
      <SimpleGrid columns={3}  spacingX='40px' spacingY='20px'>
      <Card personName={"K K Varkhedkar"} image="/photos/KK-varkhedkar.jpeg" designation="Lorem" /> 
      <Card personName={"Mr Kamble"} image="/photos/kamble.jpeg" designation="Lorem" /> 
      <Card personName={"Godbole"} image="/photos/godbole.jpeg" designation="Lorem" /> 
      <Card personName={"Dr Nimkar"} image="/photos/nimkar.jpeg" designation="Lorem" /> 
      <Card personName={"Mr Sanjay"} image="/photos/sanjay.jpeg" designation="Lorem" /> 
      <Card personName={"Fr saturnino Almeida"} image="/photos/Fr.jpeg" designation="Lorem" /> 
      <Card personName={"Dr S M  Khot"} image="/photos/sm-khot.jpeg" designation="Lorem" /> 
      <Card personName={"Dr Nilaj Deshmukh"} image="/photos/dr-nilaj-deshmukh.jpeg" designation="Lorem" /> 
      <Card personName={"Dr Bindu S"} image="/photos/Bindu.jpeg" designation="Lorem" /> 
      <Card personName={"Dr Milind Shah"} image="/photos/milind-shah.jpeg" designation="Lorem" /> 
      <Card personName={"Dr Lata Ragha"} image="/photos/lata.jpeg" designation="Lorem" /> 
      <Card personName={"Dr Sushil Thale"} image="/photos/sushil.jpeg" designation="Lorem" /> 
      </SimpleGrid>



    <Footer/>
    </div>

  )
}
