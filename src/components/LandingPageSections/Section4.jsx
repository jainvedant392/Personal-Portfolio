import emailjs from "@emailjs/browser";
import { Box, Center, Flex, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import StyledButton from "../StyledButton";

const Section4 = () => {
  const [mailDetails, setMailDetails] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const user_name_ref = useRef(null);
  const user_email_ref = useRef(null);
  const message_ref = useRef(null);

  const exclamationIcon = <FaCircleExclamation color="red" size={"lg"} />;
  const checkIcon = <FaCheckCircle color="green" size={"lg"} />;

  const validateEmail = (user_email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(user_email).toLowerCase());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMailDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!mailDetails.user_name) {
      newErrors.user_name = "name";
    }
    if (!mailDetails.user_email) {
      newErrors.user_email = "email address";
    }
    if (!mailDetails.message) {
      newErrors.message = "message.";
    }
    if (mailDetails.user_email && !validateEmail(mailDetails.user_email)) {
      newErrors.user_email = "Please enter a valid email address.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const templateParams = {
        from_name: mailDetails.user_name,
        from_email: mailDetails.user_email,
        to_name: "Vedant Jain",
        message: mailDetails.message,
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setMailDetails({
            user_name: "",
            user_email: "",
            message: "",
          });
          notifications.show({
            title: "Email sent successfully!",
            message: "Thanks! I will respond to you at the earliest.",
            color: "white",
            icon: checkIcon,
            style: { border: "2px solid green" },
          });
        })
        .catch((error) => {
          console.error("Email failed to send!", error);
        });
      console.log(mailDetails);
      setMailDetails({
        user_name: "",
        user_email: "",
        message: "",
      });
      user_name_ref.current.value = "";
      user_email_ref.current.value = "";
      message_ref.current.value = "";
    } else {
      const errorMessages = Object.values(newErrors).join(", ");
      notifications.show({
        title: "Incomplete Mail Details",
        message: `Please enter your ${errorMessages}.`,
        color: "white",
        icon: exclamationIcon,
        style: { border: "2px solid red" },
      });
    }
  };

  return (
    <>
      <Center
        h={{ base: "", md: "100vh" }}
        w={"100vw"}
        py={{ base: "6rem", md: "" }}
        px={{ base: "1.5rem", md: "" }}
        c={"#4831d4"}
        bg={"#F9F9F9"}
      >
        <Stack align="center" w={{ base: "100%", md: "75%", lg: "48%" }}>
          <Text fw={600} fz={{ base: "2.5rem", lg: "3.2rem" }} style={{textAlign: "center", lineHeight: 1.4}}>
            Send Me a Message!
          </Text>
          <Text
            c={"#3d155f"}
            fz={{ base: "1.2rem", lg: "1.5rem" }}
            style={{
              lineHeight: "1.4",
              textAlign: "center",
              wordSpacing: "0.1rem",
              letterSpacing: "0.1rem",
            }}
          >
            Have a question, liked my work, any proposal, or <br /> just a
            friendly hello? Please go Ahead.
          </Text>
          <Flex
            w={{ base: "85%", md: "100%" }}
            justify={{base: "", md: "space-between"}}
            direction={{base: "column", md: "row"}}
            gap={{base: "1.5rem", md: ""}}
            mt={{base: "4rem", md: "4.5rem"}}
          >
            <Box w={{ base: "100%", md: "45%" }}>
              <label htmlFor="user_name" className="input_label">
                Your Name
              </label>
              <br />
              <input
                ref={user_name_ref}
                className="input"
                id="user_name"
                type="text"
                placeholder="Enter your name"
                name="user_name"
                value={mailDetails.user_name}
                onChange={handleChange}
              />
            </Box>
            <Box w={{ base: "100%", md: "45%" }}>
              <label htmlFor="user_email" className="input_label">
                Email Address
              </label>
              <br />
              <input
                ref={user_email_ref}
                className="input"
                id="user_email"
                type="email"
                placeholder="Enter your email address"
                name="user_email"
                value={mailDetails.user_email}
                onChange={handleChange}
              />
            </Box>
          </Flex>
          <Box
            w={{ base: "85% ", md: "100%" }}
            mt={{base: "1rem", md: "1.5rem"}}
            mb={{ base: "3.5rem", md: "5rem" }}
          >
            <label htmlFor="message" className="input_label">
              Your Message
            </label>
            <br />
            <input
              ref={message_ref}
              className="input message"
              name="message"
              id="message"
              type="text"
              placeholder="Please enter the message"
              value={mailDetails.message}
              onChange={handleChange}
            />
          </Box>
          <StyledButton
            label={"SHOOT"}
            primaryColor={"#4831d4"}
            secondaryColor={"#F9F9F9"}
            width={"22rem"}
            onClick={handleSubmit}
          />
        </Stack>
      </Center>
    </>
  );
};

export default Section4;
