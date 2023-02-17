import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

import ThreedScroll from "../components/ThreedScroll";

const Hero = () => {
    return (
        <Box
            bgColor="brand.purple"
            bgImage="/bg.png"
            bgSize="cover"
            bgPosition="center"
            bgAttachment="fixed"
            pb="45px"
        >
            <Box maxW="700px" mx="auto" textAlign={"center"} pt="30px">
                <Text
                    fontSize={["18px"]}
                    fontWeight={"500"}
                    textTransform="uppercase"
                    style={{ letterSpacing: "3px" }}
                >
                    S U I H E R O E S
                </Text>

                <Text
                    mt={["10px", null, "16px"]}
                    fontSize={["22px", null, "40px"]}
                    textTransform="uppercase"
                    fontWeight={"600"}
                >
                    A COLLECTION OF 4000 SUIHEROES
                </Text>

                <Text
                    mt={["10px", null, "16px"]}
                    fontSize={["12px", null, "16px"]}
                    mb={["20px", null, "20px"]}
                    px="20px"
                >
                    Created out of appreciation, these heroes will now live
                    forever on chain!!
                </Text>
            </Box>

            <ThreedScroll />
        </Box>
    );
};

export default Hero;
