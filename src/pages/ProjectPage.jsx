import { Carousel } from "@mantine/carousel";
import { Box, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { Helmet } from "react-helmet-async";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Footer from "../components/Footer";
import MenuButton from "../components/Menu";
import Title from "../components/Title";
import projects from "../utils/projects.json";

const ProjectPage = ({ project_id }) => {
  const largerThanMd = useMediaQuery("(min-width: 992px)");

  return (
    <>
      <Helmet>
        <title>{`${projects[project_id].project_name} - Vedant's work`}</title>
        <meta name="description" content="" />
      </Helmet>
      <Title position={"absolute"} />
      <MenuButton position={"absolute"} />
      <Box
        w={"100vw"}
        bg={"#f5f4fc"}
        pt={{ base: "12rem", md: "15rem" }}
        pb={{ base: "7rem", md: "10rem" }}
        px={{ base: "7%", xl: "" }}
      >
        <Stack align="center" c={"#474747"}>
          <Text
            fw={600}
            fz={{ base: "1.6rem", md: "2rem" }}
            mb={{ base: "1rem", md: "3rem" }}
          >
            {projects[project_id].project_name}
          </Text>
          <Text
            display={{ base: "block", sm: "none" }}
            fz={"1.2rem"}
            w={"80%"}
            mb={"1.5rem"}
            style={{ textAlign: "center" }}
          >
            Please view in Tablet or Desktop for project images carousel.
          </Text>
          {projects[project_id].project_images.length > 0 && (
            <Carousel
              display={{ base: "none", sm: "block" }}
              withIndicators
              loop
              dragFree
              height={{ base: "", xl: 750 }}
              w={{ base: "", xl: 1400 }}
              mb={{ base: "3rem", md: "5rem" }}
              slideGap={"xl"}
              nextControlIcon={
                <GrLinkNext
                  style={{ color: "#ffffff" }}
                  size={largerThanMd ? 20 : 17}
                />
              }
              previousControlIcon={
                <GrLinkPrevious
                  style={{ color: "#ffffff" }}
                  size={largerThanMd ? 20 : 17}
                />
              }
              controlSize={largerThanMd ? 50 : 35}
              classNames={{ indicator: "indicator", control: "control" }}
            >
              {projects[project_id].project_images.map((image, index) => {
                return (
                  <Carousel.Slide key={index}>
                    <Image
                      src={image}
                      alt={`${projects[project_id].project_name}${index}`}
                      loading="lazy"
                    />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          )}
          <Box w={{ base: "80%", lg: "60%" }}>
            <Text
              td={"underline"}
              fz={{ base: "1.3rem", md: "1.5rem" }}
              fw={500}
              mb={"lg"}
            >
              Description:
            </Text>
            {projects[project_id].project_description.map((text, index) => {
              if (text === "") return <br />;
              return (
                <Text key={index} fz={{ base: "1rem", md: "1.1rem" }}>
                  {text}
                </Text>
              );
            })}
          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default ProjectPage;
