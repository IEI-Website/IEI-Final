import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const academicExcellence = () => {
  return (
    <div>
      <Header /><NavBa />


      <Text fontSize="xl" color="black" marginStart={"350"}>
        <Text fontSize="2xl" fontWeight="bold">
          Head of the Department <br />
        </Text>
        Entry Level criteria: <br />
        -Should be currently serving as HOD  <br />
        -Should be Professor <br />
        (Please provide data for last three years)<br />
        <br /><br />
        <Text fontSize="3xl" fontWeight="bold">
          Document to be uploaded as a single .pdf
        </Text>
        -Positions held in professional bodies/ Officiating bodies -Whether department is NBA (National Board of Accreditation) accredited in your tenure as HOD. <br />
        -Contribution/s in R&D,Research Funding , Lab development undertaken for the department <br />
        -Special contribution/s in academics, how did the department function efficiently <br />
        -Any leadership programs attended/ presented and their implementation at the department level. <br />
        -Any new schemes implemented in the department to motivate faculty as well as students to improve the quality of academics <br />
        -Any other achievement as a HOD<br />
      </Text>

      <Footer />
    </div>
  );
};

export default academicExcellence;