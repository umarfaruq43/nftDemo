import { Box, Image, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";

const Marque = ({ dir }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <>
            <div>
                <Carousel
                    containerProps={{
                        style: {
                            width: "100%",
                            justifyContent: "space-between",
                            userSelect: "text",
                            background: "transparent",
                            paddingTop: "40px",
                        },
                    }}
                    easing="linear"
                    itemsToScroll={"1"}
                    activeSlideIndex={activeSlide}
                    onRequestChange={setActiveSlide}
                    infinite="true"
                    itemsToShow={"auto"}
                    speed={1000}
                    autoplayDirection={dir}
                    autoplayDelay="500"
                    autoplay="true"
                    delay="100"
                >
                    {img.map((image, i) => {
                        return (
                            <Box key={i} w="250px" h="auto" px="24px">
                                <Image
                                    src={`images/${image}`}
                                    alt="Hero image"
                                    borderRadius="10px"
                                    objectFit={"cover"}
                                    // maxH="300px"
                                />
                            </Box>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Marque;

const img = [
    "user/user1.jpeg",
    "user/user2.jpeg",
    "user/user3.jpeg",
    "user/user4.jpeg",
    "user/user5.jpeg",
    "user/user6.jpeg",
    "user/user7.jpeg",
    "user/user8.jpeg",
    "user/user9.jpeg",
    "user/user10.jpeg",
    "user/user11.jpeg",
    "user/user12.jpeg",
    "user/user13.jpeg",
    "user/user14.jpeg",
];
