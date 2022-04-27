import Head from 'next/head'
import Image from 'next/image'
import {Center, FormControl, FormLabel, Input, VStack, Button} from "@chakra-ui/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from './UserDetails.js';
export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Registration- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet"></link>
      <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
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
      <br/><br/><br/>
      <FormControl >
          <Details id="details" />
      </FormControl>    
    <Footer/>
    </div>

  )
}
