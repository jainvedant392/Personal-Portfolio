import { Box, Card, Center, Grid, Image, Stack, Text } from "@mantine/core";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MenuButton from "../components/Menu";
import Title from "../components/Title";
import works from "../utils/works.json";

const WorkPage = () => {
  return (
    <>
      <Helmet>
        <title>Vedant's Work</title>
        <meta
          name="description"
          content="Project and works done by me, Vedant Jain."
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
            <span style={{ color: "gray" }}>/</span>work.
          </Text>
          <Text fz={{ base: "1.1rem", md: "1.2rem" }}>
            {"Which I have done(Or trying to do!)"}
          </Text>
        </Stack>
        <Center w={"100%"} mt={"5rem"} px={{base: "15%"}}>
          <Grid gutter={25}>
            {works.map((work, index) => {
              return (
                <Grid.Col
                  span={{ base: 12, sm: 6, md: 4 }}
                  key={index}
                >
                  <Card
                    className="project_card"
                    radius={"sm"}
                    withBorder
                    key={index}
                  >
                    <Card.Section>
                      <Link to={work.image_link} className="Link">
                        <Image
                          h={180}
                          src={work.card_image}
                          alt={work.title}
                          loading="lazy"
                          style={{ cursor: "pointer" }}
                        />
                      </Link>
                    </Card.Section>
                    <Card.Section px={"2rem"} py={"1.7rem"} bg={"#f7f7f7"}>
                      <Text fw={600} fz="1.3rem" c={"#474747"}>
                        {work.title}
                      </Text>
                      <Link
                        to={work.url}
                        target="_blank"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Text fz={"1.1rem"} c={"#4831d4"} fw={400}>
                          {work.url_text}
                        </Text>
                      </Link>
                    </Card.Section>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default WorkPage;
