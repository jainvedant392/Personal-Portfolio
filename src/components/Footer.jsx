import { Center, Divider, Flex, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import {
  RxFigmaLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Center
        w={"100vw"}
        h={{ base: "", md: "35rem" }}
        py={{ base: "6rem", md: "" }}
        bg={"#3d155f"}
        c={"#ccf381"}
      >
        <Stack w={"70%"}>
          <Text
            c={"#cbc9e2"}
            fz={"1.2rem"}
            fw={300}
            style={{ letterSpacing: "0.3rem" }}
          >
            SAY HELLO
          </Text>
          <Flex
            gap={{ base: "2rem", sm: "8rem", md: "14rem" }}
            mb={{ base: "3rem", sm: "4rem", md: "7rem" }}
            direction={{ base: "column", sm: "row" }}
          >
            <Stack gap={"1.2rem"}>
              <Link
                to="mailto:jainvedant392@gmail.com"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Text fz={"1.2rem"} fw={"300"}>
                  jainvedant392@gmail.com
                </Text>
              </Link>
            </Stack>
            <Stack gap={"1.2rem"}>
              <Link to={"/"} className="Link">
                <Text fz={"1.2rem"} fw={"300"} style={{ cursor: "pointer" }}>
                  Home
                </Text>
              </Link>
              <Link to={"/work"} className="Link">
                <Text fz={"1.2rem"} fw={"300"} style={{ cursor: "pointer" }}>
                  My Work
                </Text>
              </Link>
              <Link to={"/shelf"} className="Link">
                <Text fz={"1.2rem"} fw={"300"} style={{ cursor: "pointer" }}>
                  My Shelf
                </Text>
              </Link>
              <Text fz={"1.2rem"} fw={"300"}>
                My Résumé
              </Text>
            </Stack>
          </Flex>
          <Divider color={"#ccf381"} mb={"2rem"} />
          <Flex
            justify={"space-between"}
            align={"center"}
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "2rem", sm: "" }}
          >
            <Text fz={"1.2rem"} fw={"300"}>
              &copy; Vedant Jain {year}
            </Text>
            <Flex gap={"2.5rem"}>
              <Link
                target="_blank"
                to={"https://github.com/jainvedant392"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxGithubLogo size={"1.5rem"} />
              </Link>
              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/vedant-jain-4733a4250/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxLinkedinLogo size={"1.5rem"} />
              </Link>
              <Link
                target="_blank"
                to={"https://www.instagram.com/jainvedant392/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxInstagramLogo size={"1.5rem"} />
              </Link>
              <Link
                target="_blank"
                to={
                  "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1244729446714384970"
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxFigmaLogo size={"1.5rem"} />
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Center>
    </>
  );
};

export default Footer;
