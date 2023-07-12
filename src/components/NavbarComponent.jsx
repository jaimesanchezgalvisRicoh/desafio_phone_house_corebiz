import { Navbar, Link, Badge, Avatar } from "@nextui-org/react";
import { SearchComponent } from "./SearchComponent";
import { LogoCorebiz } from "./LogoCorebiz";
import cart from "../assets/icons/cart.png";
import "../styles/components/navbarComponent.css";

export const NavbarComponent = () => {
  const collapseItems = [
    "Mas vendidos",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar
      isBordered
      variant="sticky"
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
          <Badge color="error" content={5} shape="rectangle" size="sm">
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
          padding: "0.3rem 0",
        }}
      >
        <SearchComponent />
      </Navbar.Content>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
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
