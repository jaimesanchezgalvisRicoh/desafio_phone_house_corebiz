import Slider from "react-slick";
import { ProductCard } from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@nextui-org/react";
import { useWindowSize } from "@react-hook/window-size";

// eslint-disable-next-line react/prop-types
export const ProductList = ({ products }) => {
  const [widthD] = useWindowSize();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: widthD > 768 ? 4 : 2,
    slidesToScroll: 1,
  };

  return (
    <Grid.Container justify="center">
      <Slider {...settings}>
        {/* eslint-disable-next-line react/prop-types */}
        {products.map((product) => (
          <Grid
            key={product.id}
            css={{
              padding: "0.5rem",
            }}
          >
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Slider>
    </Grid.Container>
  );
};
