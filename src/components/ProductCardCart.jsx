import { useContext } from "react";
import { Card, Col, Button, Text, Row, Avatar } from "@nextui-org/react";
import CartContext from "../context/CartContext";
import { trash } from "../assets/images.js";
import PropTypes from "prop-types";
import { HeaderCardProducts } from "../helpers/HeaderCardProducts";
import { ProductImage } from "../helpers/ProductImage";

export const ProductCardCart = ({ product }) => {
  const { imageUrl, productName, price, listPrice, productId } = product;

  const {
    removeFromCart,
    addToCartQuantity,
    removeFromCartQuantity,
    getProductQuantity,
  } = useContext(CartContext);

  return (
    <div className="cardContainerCart">
      <Card
        isHoverable
        variant="bordered"
        css={{
          w: "100%",
          background: "#FAFAFC",
          margin: "0",
          padding: "0",
        }}
      >
        <HeaderCardProducts product={product} />
        <Card.Body css={{ p: "0.3rem" }}>
          <Row
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProductImage imageUrl={imageUrl} />
            <Col
              css={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
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
                size={10}
                color="#9d9696"
              >
                {productName}
              </Text>

              <Button.Group color="" bordered size="xs">
                <Button onPress={() => removeFromCartQuantity(productId)}>
                  -
                </Button>
                <Button>{getProductQuantity(productId)}</Button>
                <Button onPress={() => addToCartQuantity(productId)}>+</Button>
              </Button.Group>
            </Col>
            <Col>
              <Text
                css={{
                  color: "inherit",
                  textAlign: "center",
                  padding: "0",
                  margin: "0.2rem",
                  textDecoration: "line-through",
                }}
                size={12}
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
                size={14}
                color="#9d9696"
              >
                {`por $${price}`}
              </Text>
              <Button
                auto
                onPress={() => removeFromCart(productId)}
                icon={<Avatar squared size="xs" src={trash} pointer />}
                css={{
                  backgroundColor: "transparent",
                  borderRadius: "0",
                  margin: "0 0.5rem auto auto",
                }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

ProductCardCart.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    listPrice: PropTypes.number,
    productId: PropTypes.number.isRequired,
  }).isRequired,
};
