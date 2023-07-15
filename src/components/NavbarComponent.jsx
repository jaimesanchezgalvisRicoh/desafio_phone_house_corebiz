import { Navbar, Link, Badge, Avatar } from "@nextui-org/react";
import { SearchComponent } from "./SearchComponent";
import { LogoCorebiz } from "./LogoCorebiz";
import cart from "../assets/icons/cart.png";
import "../styles/components/navbarComponent.css";
import CartContext from "../context/CartContext";
import { useContext } from "react";

export const NavbarComponent = () => {
  const collapseItems = ["Shoes", "Boots", "Sneakers", "Bags", "Belts"];

  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalCartItems = cartItems?.length;

  return (
    <Navbar
      isBordered
      variant="sticky"
      color="white"
      disableBlur={true}
      
      css={{
        width: "100%",
      }}
    >
      <Navbar.Content
        css={{
          padding: "0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "64rem",
          margin: "0 auto",
        }}
      >
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "25%",
            },
            margin: "0 auto",
          }}
        >
          <LogoCorebiz />
        </Navbar.Brand>
        <Navbar.Content
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
          css={{
            width: "100%",
            maxWidth: "50rem",
          }}
        >
          <SearchComponent />
        </Navbar.Content>
        <Navbar.Link>
          <Badge
            color="error"
            content={totalCartItems}
            shape="rectangle"
            size="sm"
          >
            <Avatar squared size="sm" src={cart} />
          </Badge>
        </Navbar.Link>
      </Navbar.Content>

      <Navbar.Content
        showIn="xs"
        css={{
          width: "100%",
          maxWidth: "20rem",
          margin: "0 auto",
          padding: "0",
        }}
      >
        <SearchComponent />
      </Navbar.Content>

      <Navbar.Collapse>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item} activeColor="secondary">
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
