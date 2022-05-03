import Head from 'next/head'
import Image from 'next/image'
import {Box,Heading} from "@chakra-ui/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from './UserDetails.js';
import NavBa from '../components/Navba';
export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Payment Details- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet"></link>
      <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
      </Head>
      <Header/>
      <NavBa/>
      <br/><br/><br/>
      <Box height={'30%'} padding={'200'}>
        <Heading>
          Payment Details
        </Heading>
      </Box>
    <Footer/>
    </div>

  )
}
