import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const researchExcellence = () => {
    return (
        <div>
            <Header /><NavBa />
            <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
                Research Excellence (National/Regional)
            </Text>
            <br />
            <Text fontSize="xl" color="black" marginStart={"350"}>
                <Text fontSize="2xl" fontWeight="bold">
                    Students <br />
                </Text>
                <Text fontSize="xl" color="black" marginStart={"50"}>
                    -	Students (UG) <br />
                    -	Students (PG)<br />
                    -	Students (PhD)<br />
                </Text>
                <br />
                UG: Third Year and Final Year  in 2022 <br />
                PG: Second year, ME in 2022 <br />
                PhD: Registered scholars preferably on the verge of completion, exceptional PhD work in earlier stage is also welcome. <br /><br />
                <Text fontSize="3xl" fontWeight="bold">
                    Document to be uploaded as a single .pdf
                </Text>
                1. Research Narration document (Limit 200 words)<br />
                2. A PPT comprising of Research work concisely ( Max of 10 slides)<br />
                3. Endorsement letter from HOD<br />
                4. Publications  <br />
                (List of publications including Link and front page of journal papers).<br />
                5. Photographs for innovative laboratory set-ups developed if any <br />
                6. Patents filed documents if any <br />
                7.Conference paper presentation certificates if any <br />
                8.  Any other achievement <br />
                9. Recommendation by Supervisor for PhD Scholar <br />
            </Text>
            <br />
            <br />
            <br />


            <Footer />
        </div>
    );
};

export default researchExcellence;