import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const academicExcellence = () => {
    return (
        <div>
          <Header/><NavBa />
            
      <Text  fontSize="xl" color="black" marginStart={"350"}>
      <Text  fontSize="2xl" fontWeight="bold">
      Principal/Director <br/>
      </Text><br/>
      Entry Level criteria: <br/>
    -Principals of Engineering colleges affiliated to AICTE <br/>
    Institute should have minimum five branches and at least 300 students <br/>
    (Please provide data for last three years)<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      <br/>
      - Principal <br/>
      -Positions held currently apart from your affiliated Institute <br/> 
      -Contribution in process development at university level  <br/>
      -Contribution in academic curriculum development  <br/>
      -Innovative methods pioneered by you for keeping the research culture vibrant in your Institute <br/>
      -Any new schemes introduced by you in your Institute to motivate faculty growth  <br/>
      -Whether Institute  is NAAC accredited during your tenure as Principal. <br/>
      -Efforts to facilitate faculty during online teaching of pandemic period <br/>
      -Any new techniques adapted by you to keep the interaction with students fruitful  <br/>
      -Any other achievements. <br/>
  
      </Text>
      
      <Footer/>
        </div>
    );
};

export default academicExcellence;