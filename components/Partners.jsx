// import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsBoxArrowDown } from "react-icons/bs";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import ScreenSize from "../Layout/ScreenSize";
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";

const Partners = () => {
    return (
        <Box
            py="64px"
            bgImage="bg.png"
            bgAttachment={"fixed"}
            //     bgColor="brand.purple"
            bgSize="cover"
        >
            <ScreenSize>
                <Box mb="30px" id="roadmap">
                    <Flex align="center" justify={"center"} mb="20px">
                        <Text
                            w="10px"
                            bgColor="brand.purple"
                            h="10px"
                            borderRadius="50%"
                            data-aos="fade-left"
                            data-aos-duration="500"
                        ></Text>
                        <Text
                            fontSize="14px"
                            fontWeight="700"
                            px="5px"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            OUR PARTNER
                        </Text>
                        <Text
                            data-aos="fade-right"
                            data-aos-duration="500"
                            w="10px"
                            bgColor="brand.purple"
                            h="10px"
                            borderRadius="50%"
                        ></Text>
                    </Flex>

                    <Text
                        fontWeight="600"
                        fontSize={["28px", "36px", "48px"]}
                        textAlign="center"
                        mx="auto"
                        maxWidth="700px"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        SUIHEROES PARTNERS{" "}
                        <Text as="span" color="brand.purple">
                            {/* Benefits */}
                        </Text>
                    </Text>

                    <Text
                        mb="20"
                        textAlign={"center"}
                        fontSize="15px"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {/* Suiheroes NFT serves as your membership card to access
                        shared profits!! */}
                    </Text>
                </Box>
                <Stack direction={{ base: "column-reverse", md: "row" }}>
                    <Flex
                        // p={8}
                        flex={1}
                        align={"center"}
                        justify={"center"}
                        w={["100%", null, "50%"]}
                    >
                        <Box>
                            <Text fontWeight={"700"} fontSize="20px">
                                Disclaimer :
                            </Text>
                            <Text fontSize={"14px"}>
                                The information shared on this site is not
                                all-encompassing or comprehensive and is not in
                                any way intended to create or implicitly
                                implement any element of a contractual
                                relationship. Instead, the main goal of the site
                                is to provide relevant information to potential
                                users so that they can thoroughly analyze the
                                project and make the right decisions.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex w={["100%", null, "50%"]}>
                        <Box>
                            <Image
                                alt={"Login Image"}
                                objectFit={"cover"}
                                src={"images/partnerMix.png"}
                            />
                        </Box>
                    </Flex>
                </Stack>
            </ScreenSize>
        </Box>
    );
};

export default Partners;
