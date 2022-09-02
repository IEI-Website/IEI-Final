import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
// import pdf from "https://drive.google.com/file/d/1XWjKG4NmQW_aYo6IZabdYeP3wjRfX-FU/view?usp=sharing";

const announcement = () => {
    const stylePdf = {
        position: "fixed",
        top: "0px",
        bottom: "0px",
        right: "0px",
        width: "100%",
        border: "none",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        height: "100%"
    }
    return (
        <>
        <body>
        <iframe  src="https://docs.google.com/document/d/e/2PACX-1vSrhSc5X5t6QwikPekzt6jzF_5hhcW0C8R5R2yYdVt5y4peZpS7wxAf1r0LJtrEFlEfrxnYLX-pv_u-/pub"
  style={stylePdf}/>
</body>
</>
        // <iframe src="../../public/Winners of IEI NMLC - FCRIT Excellence Awards_2022.pdf" />
    );
  }

export default announcement;
