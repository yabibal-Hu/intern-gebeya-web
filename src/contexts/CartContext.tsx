"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextProps {
  cartItems: { [key: number]: number };
  addItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  minusQuantity: (productId: number) => void;
  clearCart: () => void; // Remove 'productId' argument here
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

  // Function to add an item to the cart
  const addItem = (productId: number) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  //Function to remove one quantity of an item
  const minusQuantity = (productId: number) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1; // Reduce quantity by 1
      } else {
        delete updatedCart[productId]; // Remove product entirely if the quantity is 0
      }
      return updatedCart;
    });
  };

  // Function to remove one quantity of an item
  // Function to remove the entire item, regardless of quantity
  const removeItem = (productId: number) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId]; // Remove the item by its ID
      return updatedCart;
    });
  };
  // Function to clear the cart
  const clearCart = () => {
    setCartItems({});
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clearCart, minusQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
