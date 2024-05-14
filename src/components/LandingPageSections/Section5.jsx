import { Center, Divider, Flex, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import {
  RxFigmaLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { Link } from "react-router-dom";

const Section5 = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Center
        w={"100vw"}
        h={{ base: "", md: "100vh" }}
        py={{ base: "6rem", md: "" }}
        bg={"#3d155f"}
        c={"#ccf381"}
      >
        <Stack w={"70%"}>
          <Text
            c={"#cbc9e2"}
            fz={{ base: "1.2rem", md: "1.5rem" }}
            fw={300}
            style={{ letterSpacing: "0.3rem" }}
          >
            SAY HELLO
          </Text>
          <Flex
            gap={{ base: "2rem", sm: "8rem", md: "14rem" }}
            mb={{ base: "3rem", sm: "4rem", md: "8rem" }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link
              to="mailto:jainvedant392@gmail.com"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text fz={{ base: "1.2rem", md: "1.3rem" }}>
                jainvedant392@gmail.com
              </Text>
            </Link>
            <Stack gap={"1.5rem"}>
              <Link to={"/"} className="Link">
                <Text fz={{ base: "1.2rem", md: "1.3rem" }}>Home</Text>
              </Link>
              <Link to={"/work"} className="Link">
                <Text fz={{ base: "1.2rem", md: "1.3rem" }}>My Work</Text>
              </Link>
              <Link to={"/shelf"} className="Link">
                <Text fz={{ base: "1.2rem", md: "1.3rem" }}>My Shelf</Text>
              </Link>
              <Text fz={{ base: "1.2rem", md: "1.3rem" }}>My Résumé</Text>
            </Stack>
          </Flex>
          <Divider color={"#ccf381"} mb={"3rem"} />
          <Flex
            justify={"space-between"}
            align={"center"}
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "2rem", sm: "" }}
          >
            <Text fz={{ base: "1.2rem", md: "1.3rem" }}>
              &copy; Vedant Jain {year}
            </Text>
            <Flex gap={"3rem"}>
              <Link
                target="_blank"
                to={"https://github.com/jainvedant392"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxGithubLogo size={"1.6rem"} />
              </Link>
              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/vedant-jain-4733a4250/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxLinkedinLogo size={"1.6rem"} />
              </Link>
              <Link
                target="_blank"
                to={"https://www.instagram.com/jainvedant392/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxInstagramLogo size={"1.6rem"} />
              </Link>
              <Link
                target="_blank"
                to={
                  "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1244729446714384970"
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxFigmaLogo size={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Center>
    </>
  );
};

export default Section5;

// Breakpoint	Viewport width	Value in px
// base	        36em	          576px
// sm	        48em	          768px
// md	        62em	          992px
// lg	        75em	          1200px
// xl	        88em	          1408px
