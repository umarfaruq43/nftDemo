import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsBoxArrowDown } from "react-icons/bs";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import ScreenSize from "../Layout/ScreenSize";

const Join = () => {
    return (
        <Box
            py="64px"
            bgImage="bg.png"
            bgAttachment={"fixed"}
            bgColor="brand.purple"
            bgSize="cover"
        >
            <ScreenSize>
                <Box textAlign="center">
                    <Text fontSize={["22px", null, "52px"]} fontWeight="900">
                        {"🤙"}
                        <br />
                        Join Our community
                    </Text>

                    <Flex
                        gap={["16px", null, "32px"]}
                        justify="center"
                        flexDir={["column", null, "row"]}
                        mt="64px"
                    >
                        <Button
                            as="a"
                            href="https://twitter.com/Suiheroes_io?t=TR0vVGY4Kbnr-e6dNbNPsA&s=09"
                            px={["18px"]}
                            py="25px"
                            display="flex"
                            borderRadius="30px"
                            bgColor={"brand.deepBlue"}
                            border="2px"
                            color="brand.white"
                            borderColor="brand.deepBlue"
                            _hover={{
                                color: "#fff",
                                bgColor: "transparent",
                                border: "2px",
                                borderColor: "brand.white",
                            }}
                        >
                            <Text as="span" pr="15px" fontSize="25px">
                                {" "}
                                <FaTwitter />{" "}
                            </Text>
                            Follow our Twiter
                        </Button>
                        <Button
                            _hover={{
                                color: "brand.white",
                                bgColor: "brand.deepBlue",
                                border: "2px",
                                borderColor: "brand.deepBlue",
                            }}
                            as="a"
                            href="http://discord.gg/eAGH6JPZVD"
                            px={["18px"]}
                            py="25px"
                            display="flex"
                            borderRadius="30px"
                            bgColor="transparent"
                            className="fade"
                            border="2px"
                            borderColor="brand.white"
                            color=""
                        >
                            <Text as="span" pr="15px" fontSize="25px">
                                {" "}
                                <FaDiscord />{" "}
                            </Text>
                            Join our Discord
                        </Button>
                    </Flex>
                </Box>

                {/* <Box>
                    <Box>
                        <Box>
                            <span>
                                <Image src="/star_6.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_3.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_1.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_7.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_4.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_2.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_5.svg" alt="" />
                            </span>
                        </Box>
                    </Box>
                </Box> */}
            </ScreenSize>
        </Box>
    );
};

export default Join;
