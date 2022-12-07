import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, {
    Navigation,
    Autoplay,
    Pagination,
    EffectCoverflow,
} from "swiper";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";

SwiperCore.use([Navigation, Autoplay, Pagination, EffectCoverflow]);

const ThreedScroll = () => {
    return (
        <Box maxWidth="" mx="auto" id="mint" style={{ zIndex: "300" }}>
            <Box display={["block", "block", "block"]}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    modules={[]}
                    speed={1500}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 5,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    style={{ maxWidth: "1000px" }}
                >
                    {img.map((image, i) => {
                        return (
                            <SwiperSlide key={i} style={{ zIndex: "300" }}>
                                <Image
                                    src={`/images/${image}`}
                                    alt="Hero image"
                                    borderRadius="10px"
                                    objectFit={"cover"}
                                    // maxH="300px"
                                    zIndex="base"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>

            {/* <Box mt="22px" px="16px">
                <Flex
                    gap={["16px", null, "32px"]}
                    justify="center"
                    flexDir={["column", null, "row"]}
                    pt="25px"
                >
                    <Button
                        as="a"
                        href="#join"
                        px={["2.6rem"]}
                        py="25px"
                        // style={{ padding: "0.8rem 2.6rem" }}
                        display="flex"
			w="fit-content"
                        borderRadius="30px"
                        bgColor={"brand.green"}
			mx="auto"
                        color="#171923"
			fontWeight="500"
			fontSize="16px"
                        _hover={{ color: "#fff", bgColor: "#2c313d" }}
                    >
                        Mint Now
                        <Text as="span" pl="15px" fontSize="25px">
                            {" "}
                            <FiChevronsRight />{" "}
                        </Text>
                    </Button>
                </Flex>
            </Box> */}
        </Box>
    );
};

export default ThreedScroll;

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
