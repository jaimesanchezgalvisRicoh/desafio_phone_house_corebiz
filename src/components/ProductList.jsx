import { Container, Text } from "@nextui-org/react";
import Slider from "react-slick";
import { ProductCard } from "./ProductCard";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PropTypes from "prop-types";

export const ProductList = ({ products }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
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
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </Slider>
    </Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
