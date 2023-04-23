import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Flex,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

// Replace test data with your own
const features = Array.apply(null, Array(9)).map(function (x, i) {
    return {
        id: i,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
    };
});

export default function Roadmap() {
    return (
        <Box p={4} my="40px">
            <Flex align="center" justify={"center"} mb="20px">
                <Text
                    w="10px"
                    bgColor="brand.purple"
                    h="10px"
                    borderRadius="50%"
                    data-aos="fade-left"
                    data-aos-duration="500"
                ></Text>
                <Text
                    fontSize="14px"
                    fontWeight="700"
                    px="5px"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Our Roadmap
                </Text>
                <Text
                    data-aos="fade-right"
                    data-aos-duration="500"
                    w="10px"
                    bgColor="brand.purple"
                    h="10px"
                    borderRadius="50%"
                ></Text>
            </Flex>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                <Text
                    fontWeight="600"
                    fontSize={["28px", "36px", "48px"]}
                    textAlign="center"
                    mx="auto"
                    maxWidth="700px"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    SUIHEROES{" "}
                    <Text as="span" color="brand.purple">
                        Project Plan
                    </Text>
                </Text>
            </Stack>

            <Container maxW={"6xl"} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    {fig.map((feature, i) => (
                        <Flex
                            key={i}
                            align={"center"}
                            gap="20px"
                            cursor={"pointer"}
                            data-aos="flip"
                            data-aos-duration="1000"
                        >
                            <Box
                                color={"brand.purple"}
                                border="1px"
                                py="5px"
                                px="30px"
                            >
                                <Text
                                    fontSize="40px"
                                    fontWeight="900"
                                    id="textStrock"
                                    //     _hover={{ bgColor: "brand.purple" }}
                                >
                                    {/* {icon} */}
                                    {i + 1}
                                </Text>
                            </Box>
                            <VStack align={"start"}>
                                <Text fontWeight={600}>{feature.main}</Text>
                                <Text fontSize={"14px"} color="whiteAlpha.600">
                                    {" "}
                                    {feature.details}{" "}
                                </Text>
                            </VStack>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

const fig = [
    {
        main: "Build a strong community",
        details: "Our first mission is to build a strong SUI HEROES Community.",
    },
    {
        main: "Launch Socials",
        details: "Launching of our website and Discord.",
    },
    {
        main: "NFT mint",
        details: "SUI HEROES NFT mint on BLUEMOVE Marketplace and Launchpad . ",
    },
    {
        main: "SECONDARY MARKETS",
        details: "Listing and features on BLUEMOVE NFT marketplaces. ",
    },
    {
        main: "SUI HEROES TOKEN IDO & Airdrop",
        details:
            "Conduct a TOKEN IDO sale on a Launchpad & Airdrop of SUI HEROES token to all SUI HEROES NFT holders.",
    },
    {
        main: "SUIHEROES TOKEN DEX LISTING",
        details: "Listing of SuiHeroes Token ($SHS) on a DEX.",
    },
    {
        main: " SuperCharged Staking ",
        details: "Stake your NFT and Tokens to earn SuperCharged rewards",
    },
    {
        main: "CoinFlip ",
        details:
            "Throw a coin, your luck, your money!! (Platform fees of 3.5% will be taken from a winning CoinFlip)",
    },
    {
        main: " 3D SUI HEROES ",
        details:
            "Launch of 3D SUI HEROES, this will be airdropped to original SUI HEROES NFT holders.",
    },
    {
        main: "SUI HEROES Marketplace",
        details:
            "Platform where users can sell and purchase 3D HEROES, assets, and accessories.",
    },
    {
        main: " SUI HEROES DAO",
        details: "Creation of the community SUI HEROES DAO.",
    },
    {
        main: "SUI HEROES Web 3.0 Lottery",
        details: "Opening of our first SUI HEROES Web 3.0 Lottery.",
    },
];
