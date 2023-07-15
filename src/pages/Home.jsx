import { Container, Loading } from "@nextui-org/react";
import { NavbarComponent } from "../components/NavbarComponent";
import { ProductList } from "../components/ProductList";
import { useProductData } from "../api/fetchProductData";
import { Slider } from "../components/Slider";
import "../styles/pages/home.css";
import { NewsletterForm } from "../components/NewsletterForm";
import { Footer } from "../components/Footer";

export const Home = () => {
  const { data, isLoading, error } = useProductData();
  console.log(error);

  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "center",
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
      {!isLoading ? data ? <ProductList products={data} /> : null : <Loading />}
      <NewsletterForm />
      <Footer />
    </Container>
  );
};
