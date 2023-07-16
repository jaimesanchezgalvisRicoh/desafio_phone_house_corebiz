import { Card, Col, Text } from "@nextui-org/react";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";
import PropTypes from "prop-types";

export const HeaderCardProducts = ({ product }) => {
  const { price, listPrice } = product;

  const discount = Math.floor(((listPrice - price) / listPrice) * 100);
  const windowWidth = useResponsiveLayout();

  return (
    <>
      <Card.Header
        css={{
          padding: "0",
          width: "fit-content",
          margin: "0 0 0 auto",
          backgroundColor: "#F8475F",
          minHeight: "0.9rem",
        }}
      >
        {(discount > 0 && (
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
        )) ||
          null}
      </Card.Header>
    </>
  );
};

HeaderCardProducts.propTypes = {
  product: PropTypes.object.isRequired,
};
