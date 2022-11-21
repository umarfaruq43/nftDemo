import { ReactElement, useEffect } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { SiProgress } from "react-icons/si";
import ScreenSize from "../Layout/ScreenSize";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = ({ title, text, icon, i }) => {

	  useEffect(() => {
          AOS.init();
      }, []);
    return (
        <Stack
            border="1px"
            borderColor="brand.purple"
            bgColor="brand.deepBlue"
            px={["35px", null, "40px"]}
            py={["50px", null, "60px"]}
            borderRadius="15px"
            className="feature_box"
            bgImage="/bg.png"
            bgPos="center"
            bgAttachment={"fixed"}
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Flex
                w={"80px"}
                h={"80px"}
                align={"center"}
                justify={"center"}
                color={"brand.purple"}
                rounded={"full"}
                bg={"rgba(255, 255, 255, 0.07)"}
                mb={"30px"}
                border="4px"
                borderColor={"rgba(255, 255, 255, 0.06)"}
                className="feature"
            >
                {/* {icon} */}
                <Text fontSize="40px" fontWeight="900" id="textStrock">
                    {i}
                </Text>
            </Flex>
            <Text fontWeight={600} fontSize={["22px"]} mb="24px">
                {title}
            </Text>
            <Text color={"brand.dimWhite"} fontSize="15px" lineHeight={"22px"}>
                {text}
            </Text>
        </Stack>
    );
};

export default function Roadmap() {
    return (
        <ScreenSize p={4} py="84px">
            <Box mb="30px" id="roadmap">
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
                        OUR ROADMAP
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

                <Text
                    fontWeight="600"
                    fontSize={["28px", "36px", "48px"]}
                    textAlign="center"
                    mx="auto"
                    maxWidth="700px"
                    mb="20"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Starklabs Strategy And Project{" "}
                    <Text as="span" color="brand.purple">
                        Plan
                    </Text>{" "}
                </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"Lorem, ipsum  "}
                    i="1"
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero?`}
                />
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"Lorem, ipsum  "}
                    i="2"
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero?`}
                />
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={" Lorem, ipsum  "}
                    i="3"
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero?`}
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={" Lorem, ipsum  "}
                    i="4"
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero?`}
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"   Lorem, ipsum  "}
                    i="5"
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero?`}
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"  Lorem, ipsum  "}
                    i="6"
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero?`}
                />{" "}
            </SimpleGrid>
        </ScreenSize>
    );
}
