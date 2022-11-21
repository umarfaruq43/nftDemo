import { Box } from "@chakra-ui/react";
import React from "react";

const ScreenSize = ({ children, ...props }) => {
    return (
        <Box {...props} maxW="1440px" px={["16px", null, "84px"]} mx="auto">
            {children}
        </Box>
    );
};

export default ScreenSize;
