import { Box } from "@mantine/core";
import React from "react";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet-async";
import Checkpoints from "../components/Checkpoints";
import Section1 from "../components/LandingPageSections/Section1";
import Section2 from "../components/LandingPageSections/Section2";
import Section3 from "../components/LandingPageSections/Section3";
import Section4 from "../components/LandingPageSections/Section4";
import Section5 from "../components/LandingPageSections/Section5";
import MenuButton from "../components/Menu";
import Title from "../components/Title";

const LandingPage = () => {
  const sections = [
    { id: "section1", label: "Section 1" },
    { id: "section2", label: "Section 2" },
    { id: "section3", label: "Section 3" },
    { id: "section4", label: "Section 4" },
    { id: "section5", label: "Section 5" },
  ];

  return (
    <>
      <Box>
        <Helmet>
          <title>Vedant Jain</title>
          <meta
            name="description"
            content="This is my portfolio website, Vedant Jain, build with Reactjs and Mantine UI. A full stack developer and open source enthusiast. Pursuing B.Tech in Computer Science and Engineering from Indian Institute of Information Technology, Jabalpur. "
          />
        </Helmet>
        <Title position={"fixed"} />
        <MenuButton position={"fixed"} />
        <Checkpoints sections={sections} position={"fixed"} />
        <Element name="section1" id="section1">
          <Section1 />
        </Element>
        <Element name="section2" id="section2">
          <Section2 />
        </Element>
        <Element name="section3" id="section3">
          <Section3 />
        </Element>
        <Element name="section4" id="section4">
          <Section4 />
        </Element>
        <Element name="section5" id="section5">
          <Section5 />
        </Element>
      </Box>
    </>
  );
};

export default LandingPage;
