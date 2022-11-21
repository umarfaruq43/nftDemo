import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Scroll = () => {
    return (
        <Box className="marquee" minH={["300px", null, "400px"]} h="100%">
            <Flex className="marquee--inner">
                {img.map((text, i) => {
                    return (
                        <Image
                            key={i}
                            src={text}
                            alt="image"
                            className="orb"
                            w={["200px", "300px"]}
                            borderRadius="5px"
                            mx="10px"
                            h={["200px", "300px"]}
                        />
                    );
                })}

                {img.map((text, i) => {
                    return (
                        <Image
                            key={i}
                            src={text}
                            alt="image"
                            className="orb"
                            w={["200px", "300px"]}
                            borderRadius="5px"
                            mx="10px"
                            h={["200px", "300px"]}
                        />
                    );
                })}
            </Flex>
        </Box>
    );
};

export default Scroll;

const img = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "Img5.jpeg",
    "/img4.jpeg",
    "/img6.jpeg",
    "/img7.jpeg",
];
