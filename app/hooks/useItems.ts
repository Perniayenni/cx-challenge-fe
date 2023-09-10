import { Context } from "@/context/product";
import { useContext } from "react";

export const useItems = () => {
    const {state} = useContext(Context);
  

    return {
        products: state.products
    };
};