import { Button, Menu } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { FaTeeth, FaTeethOpen } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useGeneralStore } from "../store/generalStore";

const MenuButton = ({ position }) => {
  const [isOpen, setOpen] = useState(false);
  const { activeSection } = useGeneralStore();
  const location = useLocation();
  const largerThanSm = useMediaQuery("(min-width: 576px)");
  const largerThanMd = useMediaQuery("(min-width: 992px)");

  const setOpened = () => {
    setOpen(!isOpen);
  };

  const color1Sections = ["section1", "section2", "section4"];

  return (
    <Menu
      position="left-start"
      offset={largerThanSm ? -85 : -55}
      zIndex={0}
      transitionProps={{ transition: "pop-top-right", duration: 200 }}
      opened={isOpen}
      onChange={setOpened}
      shadow="xs"
    >
      <Menu.Target>
        <Button
          p={0}
          bg={"transparent"}
          top={{ base: "2.5rem", md: "6vh" }}
          right={{ base: "3rem", md: "5vw" }}
          pos={{ base: "absolute", lg: position }}
          style={{
            zIndex: "2",
          }}
        >
          {isOpen ? (
            <FaTeethOpen size={largerThanMd ? 35 : 30} color={"#4831d4"} />
          ) : (
            <FaTeeth
              size={largerThanMd ? 35 : 30}
              color={
                (largerThanMd && color1Sections.includes(activeSection)) ||
                location.pathname !== "/"
                  ? "#4831d4"
                  : "#ccf381"
              }
            />
          )}
        </Button>
      </Menu.Target>

      <Menu.Dropdown
        w={largerThanSm ? "25rem" : "22rem"}
        pos={"fixed"}
        top={largerThanSm ? "1.5rem" : "1.2rem"}
        px={largerThanSm ? "2.5rem" : "1.5rem"}
        pt={largerThanSm ? "6rem" : "5rem"}
        pb={"3rem"}
        style={{ border: "none" }}
      >
        <Link to={"/"} className="Link">
          <Menu.Item>Home</Menu.Item>
        </Link>
        <Link to={"/work"} className="Link">
          <Menu.Item>My Work</Menu.Item>
        </Link>
        <Link to={"/shelf"} className="Link">
          <Menu.Item>My Shelf</Menu.Item>
        </Link>
        <Menu.Item>My Résumé</Menu.Item>

        <Menu.Label mt={{ base: "1rem", sm: "2rem" }}>SAY HELLO</Menu.Label>
        <Link
          to={"mailto:jainvedant392@gmail.com"}
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Menu.Item>jainvedant392@gmail.com</Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuButton;
