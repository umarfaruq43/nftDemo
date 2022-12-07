import {
    Box,
    Button,
    Flex,
    Input,
    Text,
    Toast,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const WhiteList = () => {
    const toast = useToast();
    const [address, setAddress] = useState("");
    const [err, setErr] = useState(false);
    const [present, setPresent] = useState(false);
    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (address.length > 1) {
            tokens.map((text) => {
                if (text === address) {
                    setAddress("");
                    setPresent(true);
                }
            });
        }
    };

    return (
        <Box id="whitelist" position="relative" py="64px">
            <Box mb="30px" id="roadmap">
                <Flex justify="center" mb="20px">
                    <Flex align="center">
                        <Text
                            w="10px"
                            bgColor="brand.purple"
                            h="10px"
                            borderRadius="50%"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        ></Text>
                        <Text
                            fontSize="14px"
                            fontWeight="700"
                            px="5px"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            OUR WHITELIST
                        </Text>
                        <Text
                            w="10px"
                            bgColor="brand.purple"
                            h="10px"
                            borderRadius="50%"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        ></Text>
                    </Flex>
                </Flex>

                <Text
                    fontWeight="600"
                    fontSize={["28px"]}
                    textAlign="center"
                    mx="auto"
                    maxWidth="700px"
                    mb="10"
                >
                    <Text as="span" color="brand.purple">
                        SUIHEROES
                    </Text>{" "}
                    Whitelist Checker{" "}
                </Text>
            </Box>

            <Box
                bgColor="transparent"
                border="1px"
                borderColor="brand.purple"
                pt={["45px", null, "45px"]}
                maxW="700px"
                mx="auto"
                px={["16px", null, "42px"]}
                borderRadius="17px"
            >
                <form onSubmit={handleSubmit}>
                    <Flex gap="18px" flexDir={["column", null, "column"]}>
                        <Text>
                            {present
                                ? " 🔥🔥🔥 Conratulation your Address is part of the whiteList"
                                : ""}

                            {err
                                ? " 😢😢😢 Sorry your Address is not part of the whiteList"
                                : ""}
                        </Text>
                        <Input
                            type="text"
                            id=""
                            placeholder="Write your ERC-20 address to check your wallet
                            status"
                            //     _placeholder={}
                            borderColor="brand.purple"
                            border="1px solid "
                            value={address}
                            onChange={handleAddress}
                        />

                        <Button
                            onClick={handleSubmit}
                            bgColor="brand.purple"
                            fontSize={["12px", null, "16px"]}
                            _active={{
                                bgColor: "brand.purple",
                            }}
                            _hover={{
                                bgColor: "brand.purple",
                            }}
                            minW="100px"
                            type="submit"
                        >
                            {address.length == 0
                                ? "Please enter your wallet address"
                                : ""}

                            {address.length > 0
                                ? "Click to check your wallet address Status"
                                : ""}
                        </Button>
                        <Text pb="30px" fontSize="12px" fontWeight="400">
                            * Last update time: 2022 November 11 17:00 UTC
                        </Text>
                    </Flex>
                </form>
            </Box>
        </Box>
    );
};

export default WhiteList;

const tokens = ["123", "1234", "12345"];
