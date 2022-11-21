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
                                    src={image}
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
    "https://media.discordapp.net/attachments/1009914411223363604/1018243472676888757/1.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1019277903231455253/Skeletor.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1020047906524385381/no_name_skelly.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1021477670237773854/fourth.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1027284890384863373/seventh.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1025109910393995264/sixth.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1021863929871339611/sneak1.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1018884681032282122/KDL.png",
];
