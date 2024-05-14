import { Box, Center, Flex, Text } from "@mantine/core";
import React from "react";

export default function Section2() {
  return (
    <>
      <Center
        h={{ base: "", md: "100vh" }}
        w={"100vw"}
        py={{ base: "6rem", md: "" }}
        c={"#4831d4"}
        bg={"#F9F9F9"}
      >
        <Box h={{ base: "", lg: "25rem" }} w={{ base: "85%", lg: "70%" }}>
          <Flex
            justify={"space-between"}
            h={"100%"}
            gap={{ base: "3rem", md: "" }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex direction={"column"} w={{ base: "", md: "45%" }}>
              <Text fz={{ base: "3rem", lg: "4rem" }} mb={"1rem"} fw={700}>
                Engineering
              </Text>
              <Text fz={"1rem"} c={"#3d155f"}>
                In building full-stack web applications with JavaScript and
                Python, I'm equipped with just the right tools, and can
                absolutely function independently of them to deliver fast.
                Polishing my backend skills is what I'm doing currently.
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              w={{ base: "", md: "45%" }}
              justify={{ base: "", lg: "flex-end" }}
            >
              <Text fz={{ base: "3rem", lg: "4rem" }} mb={"1rem"} fw={700}>
                Design
              </Text>
              <Text fz={"1rem"} c={"#3d155f"}>
                I'm definitely not a typical designer, fine-tuning pixels on an
                illustrator screen, but my obsession with playing with frontend
                and animations, ¯\_(ツ)_/¯, always makes me getting my hands
                dirty with the designing part of my personal as well as
                collaborative projects.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  );
}
