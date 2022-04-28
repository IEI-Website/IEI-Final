import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image'
export default function Logos(props) {
  return (
    <Box {...props}>
      <Image src="/fcritlogo.png" width="150px" height="150px"/>
    </Box>
  );
}
