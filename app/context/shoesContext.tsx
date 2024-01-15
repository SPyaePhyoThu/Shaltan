"use client";
import React, { createContext, useReducer, useContext, ReactNode } from "react";

interface Shoe {
  id: number;
  name: string;
  brand: string;
  type: string;
  price: number;
  image: string;
}

interface State {
  shoes: Shoe[];
  filteredShoes: Shoe[];
}

type Action =
  | { type: "SET_SHOES"; payload: Shoe[] }
  | { type: "FILTER_SHOES_BRAND"; payload: string }
  | { type: "FILTER_SHOES_PRICE"; payload: string }
  | { type: "FILTER_SHOES_TYPE"; payload: string }
  | { type: "ALL_SHOES" };

interface ShoeContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const ShoeContext = createContext<ShoeContextProps | undefined>(undefined);

const initalState: State = {
  shoes: [],
  filteredShoes: [],
};

const reducer = (state: State = initalState, action: Action): State => {
  switch (action.type) {
    case "SET_SHOES":
      return { ...state, shoes: action.payload, filteredShoes: action.payload };
    case "FILTER_SHOES_BRAND":
      const filteredShoesBrand = state.shoes.filter(
        (shoe) => shoe.brand === action.payload
      );
      return { ...state, filteredShoes: filteredShoesBrand };
    case "FILTER_SHOES_PRICE":
      let filteredShoesPrice = state.shoes;

      if (action.payload === "0-100$") {
        filteredShoesPrice = state.shoes.filter(
          (shoe) => shoe.price >= 0 && shoe.price <= 100
        );
      } else if (action.payload === "100-200$") {
        filteredShoesPrice = state.shoes.filter(
          (shoe) => shoe.price > 100 && shoe.price <= 200
        );
      } else if (action.payload === "200-300$") {
        filteredShoesPrice = state.shoes.filter(
          (shoe) => shoe.price > 200 && shoe.price <= 300
        );
      }
      return { ...state, filteredShoes: filteredShoesPrice };
    case "FILTER_SHOES_TYPE":
      const filteredShoesType = state.shoes.filter(
        (shoe) => shoe.type === action.payload
      );
      return { ...state, filteredShoes: filteredShoesType };
    case "ALL_SHOES":
      return { ...state, filteredShoes: state.shoes };
    default:
      return state;
  }
};

interface ShoeProviderProps {
  children: ReactNode;
}

const ShoeProvider: React.FC<ShoeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <ShoeContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoeContext.Provider>
  );
};

const useShoeContext = (): ShoeContextProps | undefined => {
  const context = useContext(ShoeContext);
  if (!context) {
    throw new Error("useShoeContext must be used within a ShoeProvider");
  }
  return context;
};

export { ShoeProvider, useShoeContext };
