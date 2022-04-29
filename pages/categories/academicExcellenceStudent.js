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
      Students <br/>
      </Text>
      Entry Level criteria:<br/>
      -Students who are in final year in 2022 or passed out in A.Y 2020- 21<br/>
         <br/>
      <Text fontSize="3xl"  fontWeight="bold">
      Document to be uploaded as a single .pdf  
      </Text>
      -Results of all the semesters <br/>
      -Institute ranks <br/>
      -Scholarships received if any <br/>
      -Details of study circles/ talks/ presentations made on  technical topics and technical content delivered ,courses completed beyond academics<br/>
      -Any other academic achievements.<br/>

      </Text>
      
      <Footer/>
        </div>
    );
};

export default academicExcellence;