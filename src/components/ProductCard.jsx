import { Card, Col, Button, Text } from "@nextui-org/react";
import useImageAvailability from "../hooks/useImageAvailability";
import defaultImage from "../assets/defaultImage.png";
import StarRatingComponent from "react-star-rating-component";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout.jsx";

// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { imageUrl, productName, stars, price, listPrice } = product;
  const isImageAvailable = useImageAvailability(imageUrl);

  const discount = Math.floor(((listPrice - price) / listPrice) * 100);
  const windowWidth = useResponsiveLayout();

  return (
    <div className="cardContainer">
      <Card
        isHoverable
        css={{
          w: "100%",
          background: "#FAFAFC",
          margin: "0",
          padding: "0",
        }}
      >
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
            {(discount > 0 && (
              <Text
                size={windowWidth > 768 ? 14 : 10}
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
            padding: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            minHeight: "8rem",
            width: "100%",
          }}
        >
          <Col
            css={{
              display: "flex",
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
                padding: "0",
                margin: "0",
              }}
              size={windowWidth > 768 ? 14 : 10}
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
            size={windowWidth > 768 ? "sm" : "xs"}
            css={{
              backgroundColor: "black",
              borderRadius: "0.2rem",
              margin: "0.5rem auto 1rem auto",
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
    </div>
  );
};
