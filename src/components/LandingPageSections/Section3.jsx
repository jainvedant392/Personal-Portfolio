import { Box, Center, Divider, Flex, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "../StyledButton";

const Section3 = () => {
  return (
    <>
      <Center
        w={"100vw"}
        h={{ base: "", md: "100vh" }}
        py={{ base: "6rem", md: "" }}
        bg={"#4831d4"}
      >
        <Box h={"65%"} w={{ base: "85%", md: "100%", lg: "80%" }} px={{ base: "1.5rem", md: "" }}>
          <Flex
            w={"100%"}
            h={"100%"}
            align="center"
            gap={{ base: "3rem", md: "" }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              w={{ base: "100%", md: "50%" }}
              direction="column"
              align="center"
            >
              <Flex
                direction={"column"}
                align={{ base: "center", md: "flex-start" }}
              >
                <Text
                  c={"#ccf381"}
                  fw={700}
                  fz={{ base: "3rem", lg: "3.5rem" }}
                  mb={"1.5rem"}
                  style={{ lineHeight: "1.2" }}
                >
                  I build, design
                  <br />& collaborate.
                </Text>
                <Text
                  c={"#ffffff"}
                  fz={{ base: "1.2rem", lg: "1.4rem" }}
                  mb={{base: "2.5rem", md: "4rem"}}
                  style={{
                    lineHeight: "1.4",
                    wordSpacing: "0.2rem",
                    letterSpacing: "0.1rem",
                  }}
                >
                  Web Apps, Open
                  <br />
                  source and experimentals.
                </Text>
                <Link to={"/work"}>
                  <StyledButton
                    label={"SEE MY WORK"}
                    primaryColor={"#ccf381"}
                    secondaryColor={"#4831d4"}
                    width={"24rem"}
                  />
                </Link>
              </Flex>
            </Flex>
            <Divider color="#ccf381" orientation="vertical" />
            <Flex w={"50%"} direction="column" align="center">
              <Flex
                direction={"column"}
                align={{ base: "center", md: "flex-start" }}
              >
                <Text
                  c={"#ccf381"}
                  fw={700}
                  fz={{ base: "3rem", lg: "3.5rem" }}
                  mb={"1.5rem"}
                  style={{ lineHeight: "1.2" }}
                >
                  I try to write,
                  <br />
                  sometimes!
                </Text>
                <Text
                  c={"#ffffff"}
                  fz={{ base: "1.2rem", lg: "1.4rem" }}
                  mb={{base: "2.5rem", md: "4rem"}}
                  style={{
                    lineHeight: "1.4",
                    wordSpacing: "0.2rem",
                    letterSpacing: "0.1rem",
                  }}
                >
                  About dev, learning,
                  <br />
                  sometimes experiences.
                </Text>
                <Link to={"/shelf"}>
                  <StyledButton
                    label={"READ MY ARTICLES"}
                    primaryColor={"#ccf381"}
                    secondaryColor={"#4831d4"}
                    width={"24rem"}
                  />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default Section3;
