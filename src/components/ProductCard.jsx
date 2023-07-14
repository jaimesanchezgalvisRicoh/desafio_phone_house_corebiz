import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import useImageAvailability from "../hooks/useImageAvailability";
import defaultImage from "../assets/defaultImage.png";

// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {

  // eslint-disable-next-line react/prop-types
  const { id, imageUrl, productName, stars, price, listPrice } = product;
  // console.log(id, imageUrl, productName, stars, price, listPrice);
  const isImageAvailable = useImageAvailability(imageUrl);

  const discount = Math.floor(((listPrice - price) / listPrice) * 100);
  return (
    <Card css={{ w: "100%" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          {(discount > 0 && (
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="red"
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
        }}
      >
        <Col>
          <Text
            css={{ color: "inherit" }}
            size={12}
            weight="bold"
            transform="uppercase"
          >
            {productName}
          </Text>
        </Col>
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
