import { Center } from "@mantine/core";
import Lottie from "lottie-react";
import React from "react";
import LottieAnimation from "../../public/LottieAnimation.json";

const Preloader = () => {
  return (
    <>
      <Center w={"100vw"} h={"100vh"}>
        <Lottie
          animationData={LottieAnimation}
          style={{ width: 400, height: 400 }}
        />
      </Center>
    </>
  );
};

export default Preloader;
