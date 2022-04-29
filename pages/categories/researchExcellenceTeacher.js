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

            <Text fontSize="xl" color="black" marginStart={""}>
                <Text fontSize="2xl" fontWeight="bold" color="black" marginStart={"350"}>
                    Teaching Faculty <br />
                </Text>
                <Text fontWeight="normal" color="black" marginStart={"350"}>
                    Entry Level Criteria:<br />
                    ●	Faculty should be Doctorate in his/her discipline <br />
                    ●	The research carried out must be at the affiliated Institute and should not be the PhD research <br />
                    ●	This award is NOT for the overall career research but is for particular research that has been recently completed or on the verge of completion. <br />
                    (Please provide data for last three years)<br /> <br /></Text>

                <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"350"}>
                    Document to be uploaded as a single .pdf
                </Text>
                <Text fontWeight="normal" fontSize="xl" color="black" marginStart={"350"}>
                    1. Research Narration document* (Limit 200 words)<br />
                    2. A PPT comprising of Research work concisely ( Max of 10 slides)<br />
                    3. Publications  <br />
                    (A pdf file consisting List of publications including Link and front page of journal papers).<br />
                    4. Photographs for innovative laboratory set-ups developed if any <br />
                    5. Patents filed documents if any <br />
                    6.Conference paper presentation certificates if any <br />
                    7. Research and consultancy project details if any <br />
                    8.  Any other achievement (prizes, award received) <br />
                    9. Research promotion activities if any (Endorsement letter by HOD) <br /></Text>
            </Text>
            <br />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default researchExcellence;