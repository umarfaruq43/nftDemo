import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Icon,
    Text,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Que = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Accordion>
            {faq.map((item, i) => {
                return (
                    <AccordionItem
                        mb="20px"
                        key={i}
                        border="none"
                        px={["10px", null, "20px"]}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {({ isExpanded }) => (
                            <>
                                <Text>
                                    <AccordionButton
                                        bgColor={"rgba(250, 250, 250, 0.09)"}
                                        py="16px"
                                        _focus={{ bgColor: "brand.purple" }}
                                        color="#fff"
                                        _active={{ bgColor: "brand.purple" }}
                                        borderRadius="3px"
                                    >
                                        <Box
                                            flex="1"
                                            textAlign="left"
                                            fontSize={["14px", null, "16px"]}
                                            fontWeight="900"
                                        >
                                            {item.que}
                                        </Box>
                                        {isExpanded ? (
                                            <Icon
                                                as={AiOutlineMinus}
                                                fontSize="20px"
                                            />
                                        ) : (
                                            <Icon
                                                as={AiOutlinePlus}
                                                fontSize="20px"
                                            />
                                        )}
                                    </AccordionButton>
                                </Text>
                                <AccordionPanel
                                    pb={4}
                                    color="rgba(255, 255, 255, 0.7)"
                                    fontSize="15px"
                                >
                                    {item.ans}
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default Que;

const faq = [
    {
        que: "When is the minting date?",
        ans: "As the Suinetwork mainnet is not live yet, we can't determine the mint date. At the moment we're testing and preparing our SuiHeroes. The exact date is yet to be announced so follow our latest announcements on Discord, Twitter and Telegram.",
    },
    {
        que: " What is the minting price?",
        ans: "We want to have Suiheroes accessible to everyone. The currency of our project will be $SUI tokens, so the price will be adjusted to the value of $SUI when it reaches the public.",
    },

    {
        que: "  Will there be secondary markets?",
        ans: "Yes, we are in contact with BLUEMOVE NFT marketplaces on the Suinetwork chain to be listed right after our mint.",
    },

    {
        que: " Will there be a presale?",
        ans: "Yes, we desire to ensure that active community members are rewarded that's why we are going to provide a presale mint for whitelisted users.",
    },
];
