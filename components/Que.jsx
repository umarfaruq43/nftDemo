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

const Que = () => {
    return (
        <Accordion>
            {faq.map((item, i) => {
                return (
                    <AccordionItem
                        mb="20px"
                        key={i}
                        border="none"
                        px={["10px", null, "20px"]}
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
        que: "Lorem ipsum dolor, sit amet?",
        ans: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, saepe fugit quod dignissimos sapiente sunt voluptatum mollitia explicabo tenetur similique quisquam ipsam debitis distinctio doloremque. Ipsa nam error atque.",
    },
    {
        que: "Lorem ipsum dolor, sit amet?",
        ans: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, saepe fugit quod dignissimos sapiente sunt voluptatum mollitia explicabo tenetur similique quisquam ipsam debitis distinctio doloremque. Ipsa nam error atque.",
    },

    {
        que: "Lorem ipsum dolor, sit amet?",
        ans: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, saepe fugit quod dignissimos sapiente sunt voluptatum mollitia explicabo tenetur similique quisquam ipsam debitis distinctio doloremque. Ipsa nam error atque.",
    },

    {
        que: "Lorem ipsum dolor, sit amet?",
        ans: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, saepe fugit quod dignissimos sapiente sunt voluptatum mollitia explicabo tenetur similique quisquam ipsam debitis distinctio doloremque. Ipsa nam error atque.",
    },
];
