import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Committees- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header/>
      <NavBa />
      <Center  fontSize="5xl" fontWeight="bold" color="black">
      Committees
      </Center><br/>
      <Center  fontSize="3xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Chair, IEI BLC FCRIT Excellence Award</pre>
      </Center><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Dr. Nilaj Deshmukh</pre>
      </Center>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Managing Committee Member, (IEI BLC)</pre>
      </Center>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Dean (Faculty) and Head (Mech),</pre>
      </Center>
      <Center  fontSize="2xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      FCRIT, Vashi</pre>
      </Center>
      <br/>
      <br/>
      <Center  fontSize="3xl" fontWeight="bold" color="black"><pre fontWeight="bold">
      Co-Chair, IEI BLC FCRIT Excellence Award</pre>
      </Center><br/>
      <Center  fontSize="2xl" fontWeight="bold" color="black" ><pre fontWeight="bold">
      Mrs. M. Kiruthika</pre>
      </Center>
      <Center  fontSize="2xl" fontWeight="bold" color="black" ><pre fontWeight="bold">
Associate Professor, Comp. Engg. Dept., FCRIT, Vashi</pre>
      </Center>
      <br/>
      <br/>
      
      
      <br/>
      
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
