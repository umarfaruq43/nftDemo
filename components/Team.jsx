import {
    Box,
    Flex,
    Icon,
    Image,
    Link,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { BsLinkedin, BsStars } from "react-icons/bs";
// import ScreenWidth from "../../Layout/ScreenWidth";
import ScreenSize from "../Layout/ScreenSize";

const Team = () => {
    return (
        <Box
            py={["64px", null, "50px"]}
            //     py="64px"
            bgImage="/bg.png"
            bgPos={"center"}
            bgAttachment="fixed"
            bgSize={"cover"}
        >
            <ScreenSize
                maxW={"5xl"}
                // pt={["42px", null, "84px"]}
                pb={["42px", null, "84px"]}
            >
                <Box>
                    <Text
                        fontSize={["2xl", null, "4xl"]}
                        color="brand.purple"
                        fontWeight={"700"}
                        mt="20px"
                        textAlign={"center"}
                        // data-aos="fade-up"
                        // data-aos-duration="1000"
                    >
                        Trusted Suiheroes Team
                    </Text>

                    {/* Teams Profile */}
                    <SimpleGrid minChildWidth="250px" gap="32px" mt="32px">
                        {profile.map(({ user, href, image, position }, i) => {
                            return (
                                <ProfileCard
                                    key={i}
                                    user={user}
                                    href={href}
                                    image={image}
                                    position={position}
                                />
                            );
                        })}
                    </SimpleGrid>
                </Box>
            </ScreenSize>
        </Box>
    );
};

export default Team;

const ProfileCard = ({ user, href, image, position }) => {
    return (
        <Box
            mx={["auto", null, "0"]}
            border="1px"
            borderColor={"brand.purple"}
            as={Box}
            _hover={{ textDecor: "none" }}
            minW="232px"
            borderRadius="7px"
            overflow={"hidden"}
            maxW="350px"
            w="100%"
            shadow="0px 6px 12px rgba(24, 39, 75, 0.12)"
        >
            <Image
                src={image}
                alt={`${user} Name`}
                objectFit="cover"
                w="100%"
                maxH={"250px"}
                h="100%"
            />
            <Flex
                px="20px"
                pb="32px"
                pt="20px"
                justify="space-between"
                align="center"
            >
                <Box>
                    <Text fontSize="20px" fontWeight={"500"}>
                        {user}
                    </Text>
                    <Text
                        fontSize="16px"
                        color="brand.purple"
                        fontWeight={"400"}
                    >
                        {" "}
                        {position}{" "}
                    </Text>
                </Box>
                <Flex p="8px" shadow="0px 2px 6px rgba(24, 39, 75, 0.07)">
                    <Icon as={BsStars} w="24px" h="24px" color="brand.purple" />
                </Flex>
            </Flex>
        </Box>
    );
};

const profile = [
    {
        user: "Asinto Lome",
        href: "#",
        image: "/images/team3.jpeg",

        position: "Project Founder",
    },
    {
        user: "Opilotera Toni",
        href: "#",
        image: "/images/team2.jpeg",
        position: "Co-Founder",
    },
    {
        user: "Emmanuel Peter",
        href: "#",
        image: "/images/team1.jpeg",

        position: "Project Artist",
    },
    {
        user: "UllastheMod",
        href: "#",
        image: "/images/team4.jpeg",
        position: "Community Moderator",
    },
];
