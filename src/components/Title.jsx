import { Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGeneralStore } from "../store/generalStore";
import { useMediaQuery } from "@mantine/hooks";

const Title = ({ position }) => {
  const { activeSection } = useGeneralStore();
  const [isLandingPage, setIsLandingPage] = useState(null);
  const location = useLocation();
  const largetThanLg = useMediaQuery("(min-width: 0px)");
  const smallerThanXl = useMediaQuery("(max-width: 1500px)");

  useEffect(() => {
    if (location.pathname === "/") {
      setIsLandingPage(true);
    } else setIsLandingPage(false);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const color1Sections = ["section1", "section3", "section5"];

  return (
    <>
      <Link to={"/"} onClick={scrollToTop}>
        <Text
          c={{
            base: isLandingPage ? "#ccf381" : "#4831d4",
            md:
              color1Sections.includes(activeSection) &&
              location.pathname === "/"
                ? "#ccf381"
                : "#4831d4",
          }}
          fz={{ base: "2rem", md: "2.5rem" }}
          fw={600}
          style={{ letterSpacing: "-0.2rem" }}
          mt={{ base: "2rem", md: "6vh" }}
          ml={{ base: "2.5rem", md: "5vw" }}
          pos={{ base: "absolute", lg: position }}
        >
          {largetThanLg && smallerThanXl ? "VJ" : "Vedant Jain"}
        </Text>
      </Link>
    </>
  );
};

export default Title;
