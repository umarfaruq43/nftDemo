import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
} from "@chakra-ui/react";

import ScreenSize from "../Layout/ScreenSize";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Box
            bgImage="/bg.png"
            backgroundPosition="center"
            bgSize="cover"
            bgAttachment={"fixed"}
        >
            <ScreenSize
                maxW={"5xl"}
                pt={["42px", null, "84px"]}
                pb={["42px", null, "84px"]}
            >
                <Flex
                    gap={10}
                    //     mb="64px"
                    flexDir={["column", null, "row"]}
                    id="about"
                >
                    <Flex w={["100%", null, "50%"]} justify="center">
                        <Image
                            rounded={"md"}
                            alt={"feature image"}
                            src="/images/user/mixed.jpeg"
                            objectFit={"cover"}
                                maxH="450px"
                            h="100%"
                            data-aos="flip-up"
                            data-aos-duration="1000"
                        />
                    </Flex>
                    <Flex
                        justify={"center"}
                        align="center"
                        w={["100%", null, "50%"]}
                    >
                        <Box>
                            <Flex align="center">
                                <Text
                                    w="10px"
                                    bgColor="brand.purple"
                                    h="10px"
                                    borderRadius="50%"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                ></Text>
                                <Text
                                    fontSize="14px"
                                    fontWeight="700"
                                    px="5px"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    WHO WE ARE
                                </Text>
                                <Text
                                    w="10px"
                                    bgColor="brand.purple"
                                    h="10px"
                                    borderRadius="50%"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                ></Text>
                            </Flex>
                            <Heading
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Suiheroes
                                <Text as="span" color="brand.purple">
                                    {" "}
                                    NFT’s
                                </Text>{" "}
                                collection
                            </Heading>
                            <Text
                                color={"brand.dimWhite"}
                                fontSize={"sm"}
                                mt="16px"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Here at Suiheroes, we want to create the leading
                                brand in the Suinetwork ecosystem and we believe
                                that Suinetwork is going to be the backbone of a
                                multi-chain crypto ecosystem.
                            </Text>
                            <Text
                                mt="16px"
                                color={"brand.dimWhite"}
                                fontSize={"sm"}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                We will be a first point of call for all lovers
                                of lotteries in the community, as well as an
                                Suinetwork advocate through collaborations with
                                projects on other chains.
                            </Text>

                            <Text
                                mt="16px"
                                color={"brand.dimWhite"}
                                fontSize={"sm"}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Together with an active community, we strive to
                                always maximize the value for Suiheroes NFT
                                holders.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </ScreenSize>
        </Box>
    );
}
