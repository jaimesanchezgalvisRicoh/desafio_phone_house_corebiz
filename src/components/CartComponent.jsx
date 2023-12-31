import { Modal, Button, Text, Badge, Avatar, Card } from "@nextui-org/react";
import { useContext, useState } from "react";
import { ProductCardCart } from "./ProductCardCart";
import cart from "../assets/icons/cart.png";
import CartContext from "../context/CartContext";

import "../styles/components/cart.css";

export const CartComponent = () => {
  const [visible, setVisible] = useState(false);
  const { cartItems } = useContext(CartContext);

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const totalQuantity = getTotalQuantity();

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div>
      <Badge color="error" content={totalQuantity} shape="rectangle" size="sm">
        <Button
          auto
          onPress={handler}
          css={{
            backgroundColor: "transparent",
            borderRadius: "0",
          }}
          icon={
            <Avatar
              squared
              size="sm"
              src={cart}
              pointer
              css={{
                width: "2rem",
                height: "2rem",
              }}
            />
          }
        />
      </Badge>

      <Modal
        className="cart-modal"
        animated={true}
        closeButton
        aria-labelledby="cart-modal"
        open={visible}
        onClose={closeHandler}
        css={{
          position: "fixed",
        }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Resumen de tu compra
          </Text>
        </Modal.Header>
        <Card.Divider
          css={{
            margin: "0 auto",
            width: "70%",
          }}
        />
        <Modal.Body
          css={{
            maxHeight: "60vh",
          }}
        >
          {cartItems.map((product) => (
            <ProductCardCart key={product.productId} product={product} />
          ))}
        </Modal.Body>
        <Modal.Footer
          css={{
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
