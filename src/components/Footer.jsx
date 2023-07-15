import { Button, Grid, Image, Text } from "@nextui-org/react";
import corebizBlack from "../assets/brandLogo/corebizBlack.png";
import vtexBlack from "../assets/brandLogo/vtexBlack.png";
import correo from "../assets/icons/email.png";
import contacto from "../assets/icons/contacto.png";

import "../styles/components/footer.css";

export const Footer = () => {
  return (
    <Grid.Container
      gap={2}
      justify="center"
      css={{
        padding: "0",
        background: "black",
        width: "100%",
        maxWidth: "94rem",
        marginBottom: "0",
      }}
    >
      <Grid
        xs={12}
        md={3}
        css={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text color="white">Ubicación</Text>
        <div className="bar"></div>
        <Text
          color="white"
          css={{
            margin: "0.4rem",
          }}
        >
          Avenida Andrômeda, 2000. Bloco 6 e 8
        </Text>
        <Text
          color="white"
          css={{
            margin: "0.4rem",
          }}
        >
          Alphavile SP
        </Text>
        <Text
          color="white"
          css={{
            margin: "0.4rem",
          }}
        >
          Alphavile SP
        </Text>
        <Text
          color="white"
          css={{
            margin: "0.4rem",
          }}
        >
          +55 11 3090 1039
        </Text>
      </Grid>
      <Grid
        xs={12}
        md={3}
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Button
          type="submit"
          css={{
            width: "100%",
            margin: "auto",
            maxW: "85%",
            background: "white",
            color: "black",
            borderRadius: "0.3rem",
            fontSize: "12px",
            fontWeight: "bold",
          }}
          icon={<Image src={correo} alt="Correo" width={30} height={30} />}
        >
          CONTÁCTANOS
        </Button>
        <Button
          type="submit"
          css={{
            width: "100%",
            margin: "auto",
            maxW: "85%",
            background: "white",
            color: "black",
            borderRadius: "0.3rem",
            fontSize: "12px",
            fontWeight: "bold",
          }}
          icon={<Image src={contacto} alt="contacto" width={30} height={30} />}
        >
          HABLA CON UN CONSULTOR
        </Button>
      </Grid>
      <Grid xs={12} md={3}>
        <Image src={corebizBlack} />
        <Image src={vtexBlack} />
      </Grid>
    </Grid.Container>
  );
};
