import { useContext } from "react";
import { Card, Col, Button, Text, Row, Avatar } from "@nextui-org/react";
import useImageAvailability from "../hooks/useImageAvailability";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout.jsx";
import { defaultImage } from "../assets/images.js";
import CartContext from "../context/CartContext";
import trash from "../assets/icons/trash.png";

// eslint-disable-next-line react/prop-types
export const ProductCardCart = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { imageUrl, productName, price, listPrice, productId } = product;
  const isImageAvailable = useImageAvailability(imageUrl);

  const discount = Math.floor(((listPrice - price) / listPrice) * 100);
  const windowWidth = useResponsiveLayout();

  const {
    removeFromCart,
    addToCartQuantity,
    removeFromCartQuantity,
    getProductQuantity,
  } = useContext(CartContext);

  console.log("getProductQuantity", getProductQuantity);

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
          // height: windowWidth > 768 ? "21rem" : "18rem",
        }}
      >
        {(discount > 0 && (
          <Card.Header
            css={{
              padding: "0",
              width: "fit-content",
              margin: "0 0 0 auto",
              backgroundColor: "#F8475F",
              minHeight: windowWidth > 768 ? "2.5rem" : "1.5rem",
            }}
          >
            <Col>
              <Text
                size={windowWidth > 768 ? 14 : 10}
                weight="bold"
                transform="uppercase"
                color="white"
                css={{ margin: "0.5rem" }}
              >
                {discount}% OFF
              </Text>
            </Col>
          </Card.Header>
        )) ||
          null}
        <Card.Body css={{ p: "0.3rem" }}>
          <Row
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Image
              src={isImageAvailable ? imageUrl : defaultImage}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />

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
