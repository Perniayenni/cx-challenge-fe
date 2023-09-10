import { Context } from "@/context/product";
import { useContext } from "react";

export const useLayout = () => {
    const {state} = useContext(Context);
  

    return {
        loading: state.loading
    };
};