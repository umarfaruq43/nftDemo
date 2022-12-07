const { extendTheme } = require("@chakra-ui/react");

const colors = {
    brand: {
        white: "#fff",
        deepBlue: "#111418",
        cyan: "#21c996",
        purple: "#3ba0d3",
        dimWhite: "#A4B4C3",
        lightWhite: "#121A23",
        darkBlue: "#272a2f",
    },
};

const theme = extendTheme({ colors });

export default theme;
