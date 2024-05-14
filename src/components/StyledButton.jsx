import { Button } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const StyledButton = ({ label, primaryColor, secondaryColor, width, onClick }) => {
  const { hovered, ref } = useHover();
  return (
    <>
      <Button
        className="styled-button"
        ref={ref}
        variant="outline"
        color={hovered ? secondaryColor : primaryColor}
        bg={secondaryColor}
        w={{base: "20rem", md: width}}
        h={"4rem"}
        rightSection={
          <HiOutlineArrowLongRight size={40} style={{ marginLeft: "0.8rem" }} />
        }
        radius={0}
        fz={"1rem"}
        style={{
          letterSpacing: "0.1rem",
          wordSpacing: "0.2rem",
          border: `1px solid ${primaryColor}`,
          boxShadow: hovered
            ? `inset ${width} 0 0 0 ${primaryColor}`
            : `inset 0 0 0 0 ${primaryColor}`,
          transition: "ease 0.25s",
        }}
        onClick={onClick}
      >
        {label}
      </Button>
    </>
  );
};

export default StyledButton;
