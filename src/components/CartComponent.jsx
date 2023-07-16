import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Badge,
  Avatar,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import cart from "../assets/icons/cart.png";
import CartContext from "../context/CartContext";

import "../styles/components/cart.css";

export const CartComponent = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalCartItems = cartItems?.length;

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <Button
        auto
        onPress={handler}
        margin={0}
        padding={0}
        // color={totalCartItems > 0 ? "secondary" : "default"}
        color={"white"}
        css={{
          borderRadius: "0",
          backgroundColor: "transparent",
          overflow: "visible",
        }}
        icon={
          <Badge
            color="error"
            content={totalCartItems}
            shape="rectangle"
            size="sm"
          >
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
          </Badge>
        }
      />
      <Modal
        className="cart-modal"
        animated:true
        scrollable
        // width="90%"
        closeButton
        aria-labelledby="cart-modal"
        open={visible}
        onClose={closeHandler}
        css={
          {
            //   margin: "0 0 auto auto",
            //   verticalAlign: "top",
          }
        }
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Resumen de tu compra
          </Text>
        </Modal.Header>
        {/* <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            //   contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            //   contentLeft={<Password fill="currentColor" />}
          />
        </Modal.Body> */}
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
    </>
  );
};
