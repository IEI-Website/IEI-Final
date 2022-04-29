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
      <Text  fontSize="2xl" >
      Teaching Faculty <br/>
      </Text>
      Entry level:<br/>
    -Minimum 5 years of  teaching experience excluding probation<br/>

    (Please provide data for last three years)<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Span of your teaching experience, with domain  expertise <br/>
      -	Laboratory development <br/>
      -Content/course development on any platform <br/>
      -Courses conducted as a resource person, under STTP etc . <br/>
      -	Number of BE/ME/PhDs guided <br/>
      -Any other awards received previously<br/>
      -Well documented and supported effort for reaching out to students especially in pandemic period, and innovative content delivery during online teaching, will carry considerable weightage. <br/>
      -Any other achievement <br/>
      Kindly provide supporting documents for each point <br/>

      </Text>
     
      <Footer/>
        </div>
    );
};

export default academicExcellence;