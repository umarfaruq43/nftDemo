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

export default function About() {
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
                            src="/about.jpg"
                            objectFit={"cover"}
                            //     maxH="550px"
                            h="100%"
                        />
                    </Flex>
                    <Flex justify={"center"} align="center" w={["100%", null, "50%"]}>
                        <Box >
                            <Flex align="center">
                                <Text
                                    w="10px"
                                    bgColor="brand.purple"
                                    h="10px"
                                    borderRadius="50%"
                                ></Text>
                                <Text fontSize="14px" fontWeight="700" px="5px">
                                    WHO WE ARE
                                </Text>
                                <Text
                                    w="10px"
                                    bgColor="brand.purple"
                                    h="10px"
                                    borderRadius="50%"
                                ></Text>
                            </Flex>
                            <Heading>
                                Demo/Sample{" "}
                                <Text as="span" color="brand.purple">
                                    {" "}
                                    NFT’s
                                </Text>{" "}
                                collection
                            </Heading>
                            <Text color={"brand.dimWhite"} fontSize={"sm"} mt="16px">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Neque, autem? Dolorem, unde
                                adipisci quam explicabo impedit fugiat
                                distinctio repudiandae sunt!
                            </Text>
                            <Text mt="16px" color={"brand.dimWhite"} fontSize={"sm"}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officiis cupiditate in vero.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </ScreenSize>
        </Box>
    );
}
