import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';


const announcement = () => { 
    // var pdfUrl = URL.createObjectURL("../../public/Winners of IEI NMLC - FCRIT Excellence Awards_2022.pdf")
    return (
			<iframe src="../../public/Winners of IEI NMLC - FCRIT Excellence Awards_2022.pdf"
   width="800" height="600"/>
    );
}

export default announcement;
