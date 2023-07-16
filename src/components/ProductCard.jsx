import { useContext } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Card, Col, Button, Text } from "@nextui-org/react";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout.jsx";
import CartContext from "../context/CartContext";
import PropTypes from "prop-types";
import { HeaderCardProducts } from "../helpers/HeaderCardProducts";
import { ProductImage } from "../helpers/ProductImage";

export const ProductCard = ({ product }) => {
  const { imageUrl, productName, stars, price, listPrice, productId } = product;

  const windowWidth = useResponsiveLayout();

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = { productName, stars, price, listPrice, productId };
    addToCart(item);
  };

  return (
    <div className="cardContainer">
      <Card
        isHoverable
        variant="bordered"
        css={{
          w: "100%",
          background: "#FAFAFC",
          margin: "0",
          padding: "0",
          height: windowWidth > 768 ? "21rem" : "18rem",
        }}
      >
        <HeaderCardProducts product={product} />
        <Card.Body css={{ p: 0 }}>
          <ProductImage imageUrl={imageUrl} />
        </Card.Body>
        <Card.Footer
          css={{
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
            padding: "0.5rem 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "fit-content",
            minHeight: windowWidth > 768 ? "8rem" : "6.5rem",
            width: "100%",
          }}
        >
          <Col
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
              margin: "0",
            }}
          >
            <Text
              css={{
                color: "inherit",
                textAlign: "center",
                padding: "0 0.5rem",
                margin: "0",
              }}
              size={windowWidth > 768 ? 14 : 10}
              color="#9d9696"
            >
              {productName}
            </Text>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={stars}
              starColor={"#F8475F"}
            />
            <Text
              css={{
                color: "inherit",
                textAlign: "center",
                padding: "0",
                margin: "0.2rem",
                textDecoration: "line-through",
              }}
              size={11}
              color="#9d9696"
            >
              {listPrice}
            </Text>
            <Text
              css={{
                color: "inherit",
                textAlign: "center",
                margin: "0",
                fontWeight: "bold",
              }}
              size={windowWidth > 768 ? 14 : 12}
              color="#9d9696"
            >
              {`por $${price}`}
            </Text>
          </Col>
          <Button
            size={windowWidth > 768 ? "sm" : "xs"}
            onPress={handleAddToCart}
            css={{
              backgroundColor: "black",
              borderRadius: "0.2rem",
              margin: "0.5rem auto",
            }}
          >
            COMPRAR
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes?.string,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    listPrice: PropTypes?.number,
    productId: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
};
