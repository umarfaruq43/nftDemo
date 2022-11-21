import { Box, Image, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import Marque from "./Marque";

const Collection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <Box
	id="collection"
            py="64px"
            bgImage="/bg.png"
            bgPos={"center"}
            bgAttachment="fixed"
            bgSize={"cover"}
        >
            <Text
                fontSize={["20px", null, "40px"]}
                fontWeight="600"
                textAlign="center"
		letterSpacing="3px"
            >
                Our C<Text as="span" borderBottom="4px" borderColor="brand.purple">ollec</Text>tions
            </Text>

            <Box pt="24px">
                <Marque dir="forward" />
                {/* ******************************************************* */}
                <Marque dir="backward" />
            </Box>
        </Box>
    );
};

export default Collection;

