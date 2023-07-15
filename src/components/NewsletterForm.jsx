import { useState } from "react";
import { Button, Container, Input, Text } from "@nextui-org/react";
import "../styles/components/newsletterForm.css";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

export const NewsletterForm = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const windowWidth = useResponsiveLayout();

  return (
    <Container
      css={{
        padding: "0",
        background: "#f2f2f2",
        width: "100%",
        maxWidth: "94rem",
        margin: "1.5rem auto",
      }}
    >
      <Text
        size={windowWidth > 768 ? 18 : 18}
        weight="bold"
        transform="uppercase"
        css={{
          textAlign: "center",
          padding: "0.5rem 2rem",
          margin: "0.5rem 0",
        }}
      >
        ¡Únete a nuestros novedades y promociones!
      </Text>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          bordered
          placeholder="Ingresa tu nombre"
          color="default"
          css={{ width: "85%" }}
        />
        <Input
          type="email"
          id="correo"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
          bordered
          placeholder="Ingresa tu mail"
          color="default"
          css={{ width: "85%" }}
        />

        <Button
          type="submit"
          css={{
            width: "100%",
            margin: "auto",
            maxW: "85%",
            background: "black",
            borderRadius: "0.3rem",
          }}
        >
          Suscribirme
        </Button>
      </form>
    </Container>
  );
};
