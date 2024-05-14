import { Stack } from "@mantine/core";
import React from "react";
import { PiDiamondFill, PiSquareBold } from "react-icons/pi";
import { Link } from "react-scroll";
import { useGeneralStore } from "../store/generalStore";

const Checkpoints = ({ sections, position }) => {
  const { activeSection, setActiveSection } = useGeneralStore();
  const color1Sections = ["section1", "section2", "section4"];

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <>
      <Stack
        pos={position}
        right={{base: "", lg: 40, xl: 80}}
        top={400}
        gap={4}
        display={{ base: "none", lg: "flex" }}
      >
        {sections.map((section, index) => {
          return (
            <Link
              className={`bullet ${
                activeSection === section.id ? "active" : ""
              }`}
              key={index}
              to={section.id}
              spy={true}
              smooth={"easeInOutQuart"}
              duration={300}
              activeClass="active"
              onSetActive={handleSetActive}
            >
              {activeSection === section.id ? (
                <PiSquareBold
                  size={15}
                  cursor={"pointer"}
                  color={
                    color1Sections.includes(activeSection)
                      ? "#4831d4"
                      : "#ccf381"
                  }
                />
              ) : (
                <PiDiamondFill
                  size={15}
                  cursor={"pointer"}
                  color={
                    color1Sections.includes(activeSection)
                      ? "#4831d4"
                      : "#ccf381"
                  }
                />
              )}
            </Link>
          );
        })}
      </Stack>
    </>
  );
};

export default Checkpoints;
