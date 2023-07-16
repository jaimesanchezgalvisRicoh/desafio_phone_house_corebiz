import { Grid, Image, Text } from "@nextui-org/react";
import { corebizBlack, vtexBlack, correo, contacto } from "../assets/images.js";
import { CustomButton } from "../helpers/CustomButton.jsx";

import "../styles/components/footer.css";

export const Footer = () => {
  return (
    <Grid.Container
      gap={2}
      justify="space-between"
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
            lineHeight: "2rem",
          }}
        >
          Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
          Alphavile SP <br />
          brasil@corebiz.ag <br />
          +55 11 3090 1039
        </Text>
      </Grid>
      <Grid
        xs={12}
        md={3}
        css={{
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <CustomButton icon={correo} label="CONTÁCTANOS" />
        <CustomButton icon={contacto} label="HABLA CON UN CONSULTOR" />
      </Grid>
      <Grid
        xs={12}
        md={3}
        css={{
          padding: "1rem 2rem",
        }}
      >
        <Image src={corebizBlack} />
        <Image src={vtexBlack} />
      </Grid>
    </Grid.Container>
  );
};
