import React from "react";
import { Link,VStack,Center, Box, Flex, Text, Button,Heading, Stack, HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import Logos from "./Logos";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
// const prop={
  // marginStart:"100", fontSize:"2xl", fontWeight:"bold", color="black", align:"center"
// }
  return (
    <NavBarContainer {...props}>
      <Flex w="full">
      <Logo w="15%"/>
      {/* <Text fontWeight={"bold"}><p align="center" >IEI</p></Text> */}
        <Box w="70%" alignItems="center">
        <Heading marginStart={"100"} fontSize={"3xl"} fontWeight={"bold"} color="black" align={"center"}> The Institution of Engineers (India) </Heading>
        <Text marginStart={"100"} fontSize={"2xl"} fontWeight={"bold"} color="blueviolet"  align={"center"}> Belapur Local Centre </Text>
        {/* <Text marginStart={"100"}fontSize={"2xl"}  color="black" align={"center"}> Plot No 106, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614</Text>
        <Text fontSize="xl" textColor="black">Email : belapurlc@ieindia.org / Contact : +022-27579935</Text>
        <Text fontSize="xl" textColor="black">Website : http://ieiblc.org/</Text>
        <Text marginStart={"100"}fontWeight={"bold"} color="black" align={"center"}> ---------------------------------------------------------------------------------------------------------</Text> */}
        <Text marginStart={"100"} fontSize={"2xl"} fontWeight={"bold"} color="black" align={"center"}>And</Text>
        <Text marginStart={"100"} fontSize={"2xl"} fontWeight={"bold"} color="black" align={"center"}>Agnel Charities'
Fr. C. Rodrigues Institute of Technology</Text>
        <Text marginStart={"100"} fontSize={"2xl"} fontWeight={"bold"} color="black" align={"center"}>Jointly Presents</Text>
        <Heading color="blue.400" marginStart={"100"} fontSize="5xl" fontWeight="extrabold" align="center">IEI BLC - FCRIT EXCELLENCE AWARDS</Heading>
        </Box>
      <Logos w="15%"/>
      </Flex>
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};




const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bgImg={["bck.jpg"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
