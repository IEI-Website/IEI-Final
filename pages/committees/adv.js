import Head from 'next/head'
import Image from 'next/image'
import {Center,Text} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';
export default function Homie() {
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
      Advisory Committee</pre>
      </Center>
       <br/>
      <Text marginStart={"200"}color="black">
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. M. B. Dagaonkar                         Rev. Fr. Saturnino Almeida          </pre></Text> 
      <pre>Past Council Member, IEI and Past Chairman IEI MSC                Regional Superior and Managing Director, ATEC, Vashi.                      </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Cdr. Dr. Bhaskar Bhandarkar                 Dr. S. M. Khot         </pre></Text> 
      <pre>IEI Council Member                                                Principal, FCRIT Vashi                      </pre> 
      <br/>
      <Text fontWeight={"bold"}  fontSize="2xl"><pre fontWeight="bold">Er. Vijay C. Kamble                         Dr. Milind Shah           </pre></Text> 
      <pre>Hon. Secretary IEI MSC                                            Dean (Academics) and Head, EXTC Engg. Dept.<br/>                                                                  FCRIT Vashi.                     </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Kishanrao M. Godbole                    Dr. Lata Ragha           </pre></Text> 
      <pre>Chairman, IEI BLC                                                 Dean (P.G. Studies) and Head, Comp. Engg. Dept.,<br/>                                                                  FCRIT Vashi                     </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. Sanjay R. Bagul                         Dr. Bindu S.          </pre></Text> 
      <pre>Hon. Secretary, IEI BLC                                           Dean (Student Affairs) and Head, Elect. Engg. Dept.,<br/> FCRIT Vashi..                      </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Er. Keshav K. Verkhedkar                    Dr. Sushil Thale        </pre></Text> 
      <pre>Imm. Past Chairman, IEI BLC.                                      Dean (R &D), FCRIT Vashi.                       </pre> 
      <br/>
      <Text fontWeight={"bold"} fontSize="2xl"><pre fontWeight="bold">Dr. Samir C. Nimkar  </pre></Text> 
      <pre>Imm. Past Hon. Secretary, IEI BLC  </pre> 

      

      </Text>
      <br/>
      <br/>
      
      <br/>
      
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}