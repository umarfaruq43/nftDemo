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
            pb="45px"
        >
            <Box maxW="700px" mx="auto" textAlign={"center"} pt="30px">
                <Text
                    fontSize={["18px"]}
                    fontWeight={"500"}
                    textTransform="uppercase"
                    style={{ letterSpacing: "3px" }}
                >
                    Welcome to
                </Text>

                <Text
                    mt={["10px", null, "16px"]}
                    fontSize={["22px", null, "40px"]}
                    textTransform="uppercase"
                    fontWeight={"600"}
                >
                    The Starklabs NFT
                </Text>

                <Text
                    mt={["10px", null, "16px"]}
                    fontSize={["12px", null, "14px"]}
                    mb={["20px", null, "20px"]}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti sit neque rerum beatae itaque quam! Sapiente.
                </Text>
            </Box>

            <ThreedScroll />
        </Box>
    );
};

export default Hero;
