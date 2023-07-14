import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import useImageAvailability from "../hooks/useImageAvailability";
import defaultImage from "../assets/defaultImage.png";
import StarRatingComponent from "react-star-rating-component";

// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { id, imageUrl, productName, stars, price, listPrice } = product;
  const isImageAvailable = useImageAvailability(imageUrl);

  console.log("listPrice", listPrice);
  console.log("price", price);

  const discount = Math.floor(((listPrice - price) / listPrice) * 100);
  return (
    <Card isHoverable css={{ w: "100%", background: "#FAFAFC" }}>
      <Card.Header
        css={{
          padding: "0",
          width: "fit-content",
          margin: "0 0 0 auto",
          backgroundColor: "#F8475F",
          minHeight: "2.5rem",
        }}
      >
        <Col>
          {(discount > 0 && (
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="white"
              css={{ margin: "0.5rem" }}
            >
              {discount}% OFF
            </Text>
          )) ||
            null}
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={isImageAvailable ? imageUrl : defaultImage}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        css={{
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minHeight: "8rem",
        }}
      >
        <Col>
          <Text
            css={{
              color: "inherit",
              textAlign: "center",
              padding: "0",
              margin: "0",
            }}
            size={13}
            color="#9d9696"
          >
            {productName}
          </Text>
        </Col>
        <Col
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
          }}
        >
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={stars}
            starColor={"#F8475F"}
            // emptyStarColor={"#FAFAFC"}
          />
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
            size={11}
            color="#9d9696"
          >
            {listPrice}
          </Text>
        </Col>
        <Col>
          <Text
            css={{
              color: "inherit",
              textAlign: "center",
              margin: "0",
              fontWeight: "bold",
            }}
            size={16}
            color="#9d9696"
          >
            {`por $${price}`}
          </Text>
        </Col>
        <Button
          css={{
            width: "80%",
            display: "block",
            backgroundColor: "black",
            borderRadius: "0.5rem",
          }}
        >
          COMPRAR
        </Button>

        {/* <Col>
          <Row>
            <Col>
              <Text color="#000" size={12}>
                Available soon.
              </Text>
              <Text color="#000" size={12}>
                Get notified.
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button flat auto rounded color="secondary">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Notify Me
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Col> */}
      </Card.Footer>
    </Card>
  );
};
