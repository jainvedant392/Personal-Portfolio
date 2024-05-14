import { Box, Center, Stack, Text } from "@mantine/core";
import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import MenuButton from "../components/Menu";
import Title from "../components/Title";

const ShelfPage = () => {
  return (
    <>
      <Helmet>
        <title>Vedant's Shelf</title>
        <meta
          name="description"
          content="Blogs, articles and experiences written by me, Vedant Jain."
        />
      </Helmet>
      <Title position={"absolute"} />
      <MenuButton position={"absolute"} />
      <Box
        w={"100vw"}
        bg={"#f5f4fc"}
        pt={{ base: "12rem", md: "15rem" }}
        pb={{ base: "7rem", md: "10rem" }}
      >
        <Stack align="center" c="#474747">
          <Text fw={600} fz={{ base: "1.6rem", md: "2rem" }}>
            <span style={{ color: "gray" }}>/</span>shelf.
          </Text>
          <Text fz={{ base: "1.1rem", md: "1.2rem" }}>
            Something written by me.
          </Text>
        </Stack>
        <Center w={"100vw"} mt={{ base: "3rem", md: "5rem" }} c={"#474747"}>
          <Text fz={{base: "1.4rem  ", md: "1.8rem"}} fw={500}>
            Coming soon...
          </Text>
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default ShelfPage;
