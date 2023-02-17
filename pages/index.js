import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
// import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import WhiteList from "../components/WhiteList";
import Footer from "../components/Footer";
import Join from "../components/Join";
import Collection from "../components/Collection";
import Benefit from "../components/Benefit";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Partners from "../components/Partners";
export default function Home() {
    return (
        <Box>
            <Head>
                <title>SUIHEROES </title>
                <meta
                    name="description"
                    content="A COLLECTION OF 4000 SUIHEROES. Created out of appreciation, these heroes will now live forever on chain!!"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <Box color="brand.white" bgColor="brand.deepBlue">
                <Nav />
                <Hero />
                <About />
                <Benefit />
                <Collection />
                <Roadmap />
                <Team />
                <WhiteList />
                <Partners />
                <Faq />
                <Join />
                <Footer />
            </Box>
        </Box>
    );
}
