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
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.productId === itemId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
    }
  };
  

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
