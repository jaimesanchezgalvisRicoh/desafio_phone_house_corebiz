import { useState } from "react";
import { useMutation } from "react-query";
import { Button, Container, Input, Text } from "@nextui-org/react";
import Swal from "sweetalert2";
import { postNewsletterSubscription } from "../api/postNewsletterSubscription";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

import "../styles/components/newsletterForm.css";

export const NewsletterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useMutation((formData) =>
    postNewsletterSubscription(formData.name, formData.email)
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name) {
      Swal.fire("¡Error!", "Ingresa tu nombre.", "error");
      return;
    }

    if (!email) {
      Swal.fire("¡Error!", "Ingresa tu correo.", "error");
      return;
    }

    try {
      await mutation.mutateAsync({ name, email });

      Swal.fire(
        "¡Suscripción exitosa!",
        "Te has registrado correctamente",
        "success"
      );
    } catch (error) {
      console.error(error);
      Swal.fire("¡Error!", "Hubo un error en la suscripción.", "error");
    }

    setName("");
    setEmail("");
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
          aria-label="nombre"
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          bordered
          placeholder="Ingresa tu nombre"
          color="default"
          css={{ width: "85%", margin: "0.5rem auto" }}
        />
        <Input
          aria-label="email"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          bordered
          placeholder="Ingresa tu mail"
          color="default"
          css={{ width: "85%", margin: "0.5rem auto" }}
        />

        <Button
          aria-label="suscribirme"
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
