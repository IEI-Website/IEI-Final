import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Center,
  GridItem,
  Select,
  Checkbox,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';

import { Viewer, ProgressBar } from '@react-pdf-viewer/core';
import { ViewIcon } from '@chakra-ui/icons';
import { jsPDF } from "jspdf";
import $, { merge } from "jquery";
import AwardCategories from './AwardCategories';


// const FormData = require('form-data');

const Details = () => {
  // var pdf_file;
  const [pdfFile,setPdfFile] = useState(null);
  const [fieldsPdf, setFieldsPdf] = useState(null);
  const [pdfUrl,setPdfUrl] = useState(null);
  const [fieldsUrl, setFieldsUrl] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const [checkVal, setCheckVal] = useState(Boolean(false));


  async function send(){
    var formData = new FormData();
    formData.append('userDoc', fieldsPdf);
    formData.append('userDoc',pdfFile);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }

   
  fetch('http://localhost:3000/mergepdf', {
    method: 'POST',
    body: formData
 })
 .then(resp => resp.json())
 .then(data => {
    if (data.errors) {
       alert(data.errors)
    }
    else {
      alert("Form submitted !!! ");
       console.log(data)
    }
 })

  }
  const secondaryTextColor = 'black';

  const handleChange = async (e) => {
    e.preventDefault()
    var pdf_file = e.target.files[0];
    setPdfFile(pdf_file);
    setPdfUrl(URL.createObjectURL(pdf_file))
    var doc =  jsPDF();
    var name = $('#name').val();
    var sem = $('#sem').val();
    var dept = $('#department').val();
    var insti = $('#institute').val();
    var award = $('#Category').val();
    var role = $('#SelectOptions').find('#applicant-role').val();
    doc.text(20,20, 'Name : '+name);
    doc.text(20,30,'Semester : '+sem);
    doc.text(20,40,'Department : '+dept);
    doc.text(20,50,'Institute : '+insti);
    doc.text(20,60,'Award Category : '+award);
    if (!(typeof role ==='undefined')){
    doc.text(20,70,'Applicant Role : '+role);
    }
    var blobPDF =  new Blob([ doc.output('blob',{filename:'userDetails.pdf'}) ], { type : 'application/pdf'});
    var blobUrl = URL.createObjectURL(blobPDF);
    setFieldsPdf(blobPDF);
    setFieldsUrl(blobUrl);
  }
  const checkBoxChange = (e) =>{
    e.preventDefault();
    setCheckVal(!checkVal);
  }


  return (
    <Box >
       <Center backgroundColor="whiteAlpha.800" padding="10px" spacing={10} alignItems="center" >
      <form id='registration-form' >
      <SimpleGrid boxShadow="dark-lg" borderColor="black" borderEnd="ActiveBorder" spacing="10px" padding="50px" border="2px" columns={1} rowGap={6} >
        <GridItem>
        <Heading textColor={secondaryTextColor} size="2xl">Registration Form</Heading>
        <Text textColor={secondaryTextColor}>Please make sure you upload all the necessary Documents before submitting the form.</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel textColor={secondaryTextColor}>Name</FormLabel>
            <Input id="name" placeholder="ABC" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel textColor={secondaryTextColor}>Department Name</FormLabel>
            <Input id='department' placeholder="Computer" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel textColor={secondaryTextColor} >Institute Name</FormLabel>
            <Input id='institute' placeholder="FCRIT"/>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl >
            <FormLabel textColor={secondaryTextColor} >Semester</FormLabel>
            <Input id='sem' placeholder="6" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <AwardCategories />
        </GridItem>
        
        <GridItem id="SelectOptions" colSpan={2}>
          
        </GridItem>
        
         <GridItem colSpan={1}>
           <FormControl isRequired>
          <FormLabel>Upload all documents as a single pdf here</FormLabel>
          <input accept="application/pdf" type="file" id="userDoc" onChange={handleChange} />
          <br></br>
          <Button mt="5" mb="5" size="lg" onClick={() => {
            if(pdfUrl === null) {
              toast({
                title: 'PDF has not been uploaded yet!',
                description: "Please upload PDF for Preview",
                status: 'info',
                duration: 3000,
                isClosable: true,
              })
            } else {
              onOpen()
            }
            }} >
            Preview&nbsp;&nbsp;<ViewIcon />
          </Button>
          </FormControl>
          <br></br>
          <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>PDF Document Preview</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <iframe src={pdfUrl} width="500px" height="700px" />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

        <GridItem colSpan={2}>
          <FormControl isRequired>
          <Checkbox onChange={checkBoxChange} >I have checked all the details. I confirm that the details are true and I have uploaded all the documents.</Checkbox>
          </FormControl>
        </GridItem>

          <br></br>
          <Button mt="5" type='submit' mb="5" bgColor="green.500"  onClick={send} size="lg" >
            Submit
          </Button>
         </GridItem>
         <br/> 
      </SimpleGrid>
      </form>
    </Center>
    </Box>
  );
};

export default Details;