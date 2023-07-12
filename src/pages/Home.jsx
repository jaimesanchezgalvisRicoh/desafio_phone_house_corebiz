import { Container } from "@nextui-org/react";
import { NavbarComponent } from "../components/NavbarComponent";

import "../styles/pages/home.css";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        padding: "1rem 0",
        margin: "0 auto",
      }}
    >
      <NavbarComponent />
      <Slider />
    </Container>
  );
};
