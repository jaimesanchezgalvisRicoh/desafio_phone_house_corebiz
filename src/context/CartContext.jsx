import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getItemsFromLocalStorage = () => {
    const items = localStorage.getItem("cartItems");
    return items ? JSON.parse(items) : [];
  };

  const [cartItems, setCartItems] = useState(getItemsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log("cartItems", cartItems);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (cartItem) => cartItem.productId === item.productId
      );
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.productId === itemId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
    }
  };

  const addToCartQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems];
      const itemIndex = updatedCartItems.findIndex(
        (item) => item.productId === itemId
      );
      if (itemIndex !== -1) {
        updatedCartItems[itemIndex] = {
          ...updatedCartItems[itemIndex],
          quantity: updatedCartItems[itemIndex].quantity + 1,
        };
      }
      return updatedCartItems;
    });
  };

  const removeFromCartQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems];
      const itemIndex = updatedCartItems.findIndex(
        (item) => item.productId === itemId
      );
      if (itemIndex !== -1) {
        updatedCartItems[itemIndex] = {
          ...updatedCartItems[itemIndex],
          quantity: updatedCartItems[itemIndex].quantity - 1,
        };
        if (updatedCartItems[itemIndex].quantity <= 0) {
          updatedCartItems.splice(itemIndex, 1);
        }
      }
      return updatedCartItems;
    });
  };

  const getProductQuantity = (itemId) => {
    const item = cartItems.find((item) => item.productId === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        addToCartQuantity,
        removeFromCartQuantity,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
