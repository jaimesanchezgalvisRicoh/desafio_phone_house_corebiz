import { Container } from "@nextui-org/react";
import { NavbarComponent } from "../components/NavbarComponent";

import "../styles/pages/home.css";

export const Home = () => {
  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        padding: "0",
        margin: "0 auto",
      }}
    >
      <NavbarComponent />
    </Container>
  );
};
