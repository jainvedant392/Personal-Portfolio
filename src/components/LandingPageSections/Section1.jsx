import { Box, Center, Flex, Grid, Image, Text } from "@mantine/core";
import React from "react";
import profile_image from "../../../public/assets/profile.jpg";

const Section1 = () => {
  return (
    <>
      <Grid gutter={0}>
        <Grid.Col
          span={{ base: 12, md: 8 }}
          bg={"#4831d4"}
          pb="6rem"
          pl={{ base: "", md: "4%", lg: "10%", xl: "15%" }}
        >
          <Flex
            w={{ base: "100%", md: "42rem" }}
            mt={{ base: "9rem", md: "12rem" }}
            direction={{ base: "column", md: "" }}
            align={{ base: "center", md: "" }}
          >
            <Flex
              direction={"column"}
              w={{ base: "70%", md: "85%", lg: "90%" }}
            >
              <Text
                c={"#ccf381"}
                fz={{ base: "3rem", md: "3.5rem", lg: "4.3rem" }}
                fw={700}
                mb="2rem"
                style={{ lineHeight: "1.2" }}
              >
                Hi, I'm Vedant Jain.
              </Text>
              <Text c={"#ffffff"} fz={{ base: "1rem", lg: "1.1rem" }}>
                I'm a Full Stack developer from India 🇮🇳, currently pursuing
                Bachelor of Technology in Computer Science and Engineering. I
                like to build and play with web-based products which could help
                people and solve real world issues.
              </Text>
              <Flex
                c={"#ccf381"}
                justify={"space-between"}
                w={{ base: "90%", md: "100%" }}
                mt={{ base: "3rem", md: "4rem" }}
                gap={{ base: "2rem", sm: "" }}
                direction={{ base: "column", sm: "row" }}
              >
                <Box w={{ base: "100%", sm: "14rem", md: "16rem" }}>
                  <Text>
                    Skilled at progressive and robust web frameworks and
                    technologies. Obsessed with frontend and animations :&#41;
                  </Text>
                </Box>
                <Box w={{ base: "100%", sm: "14rem", md: "16rem" }}>
                  <Text>
                    An Open-source enthusiast, actively contributing to various
                    reputed organizations and repositories.
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 4 }}
          py={{ base: "6rem", md: "" }}
          bg={"#ccf381"}
        >
          <Center
            w={"100%"}
            h={"100%"}
          >
            <Image
              src={profile_image}
              height={{ base: 280, md: 300, lg: 330, xl: 350 }}
              w={{ base: 280, md: 300, lg: 330, xl: 350 }}
            />
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Section1;
