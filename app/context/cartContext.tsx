"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: number;
  img: string;
  stock: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem | null }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "UPDATE_ITEM_SIZE"; payload: { id: number; newSize: number } };

const initialCartState: CartState = {
  items: [],
};

type CartContextType = {
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload && action.payload !== null) {
        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload!.id
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity = action.payload.quantity;
          return { ...state, items: updatedItems };
        } else {
          return { ...state, items: [...state.items, action.payload] };
        }
      } else {
        // Handle the case where action.payload is null
        return state;
      }

    case "REMOVE_FROM_CART":
      // Remove the item from the cart based on its ID
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, items: updatedItems };

    case "UPDATE_ITEM_SIZE":
      const { id, newSize } = action.payload;
      const updatedItemWithSize = state.items.map((item) =>
        item.id === id ? { ...item, size: newSize } : item
      );
      return { ...state, items: updatedItemWithSize };
    default:
      return state;
  }
};

// Create a CartProvider component to wrap your app with the cart context
type CartProviderProps = { children: ReactNode };

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to easily access the cart context
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
