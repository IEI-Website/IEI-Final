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
      <Text  fontSize="2xl" fontWeight="bold"color="black" >
      Institute <br/>
      </Text><br/>
      <Text color="black" fontWeight="normal">
      Entry level criteria<br/>
The nomination can be filed by Dean Academics or Principal of the AICTE affiliated Institute. <br/>
The Institute should have at least three graduated batches. <br/>
The Institute should have at least five branches with minimum 300 students on roll.<br/>
(Please provide data for last three years) </Text>
<br/><br/>

      <Text fontSize="3xl"  fontWeight="bold" color="black">
      Document to be uploaded as a single .pdf  
      </Text>
      <Text color="black" fontWeight={"normal"}>
      -Ranking under different schemes like NIRF<br/>  
      -NBA status  <br/>
      -NAAC status  <br/>
      -First year passing percentage  <br/>
      -Graduate passing percentage  <br/>
      -Placements status  <br/>
      -Social activities taken up by the Institute  <br/>
      -Contribution to governing offices through projects/ consultancy  <br/>
      -Faculty retention  <br/>
      -Percentage of PhD faculty members. <br/>
      -Alumni contribution towards the development of institute. <br/>
      -Any educational reforms at institute level. <br/>
      -How Library facility/ e-resources were extended to students during pandemic period.<br/>
      -Any faculty/student encouragement policy. <br/>
      -Any other achievements.<br/></Text>

      </Text>
      <Footer/>
        </div>
    );
};

export default academicExcellence;