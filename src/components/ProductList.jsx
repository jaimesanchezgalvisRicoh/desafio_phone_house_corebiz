import { Container, Text } from "@nextui-org/react";
import Slider from "react-slick";
import { ProductCard } from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

// eslint-disable-next-line react/prop-types
export const ProductList = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const windowWidth = useResponsiveLayout();

  return (
    <Container
      justify="center"
      css={{
        width: "100%",
        maxWidth: "1024px",
        margin: "0 auto",
        padding: "0",
      }}
    >
      {(windowWidth > 769 && (
        <Text
          size={16}
          weight="bold"
          css={{
            margin: "0.5rem",
            padding: "1rem",
            textDecoration: "underline",
          }}
        >
          Más Vendidos
        </Text>
      )) ||
        null}
      <Slider {...settings}>
        {/* eslint-disable-next-line react/prop-types */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </Container>
  );
};
