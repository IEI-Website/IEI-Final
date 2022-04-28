import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image'
export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src="/iei.png" width="150px" height="150px"/>
    </Box>
  );
}
