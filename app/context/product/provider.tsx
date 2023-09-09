import { Product } from "@/interfaces/product";
import { FC, useReducer, PropsWithChildren } from 'react';
import { Context, Reducer } from "./";

export interface State {
    products: Array<Product>;
    loading: boolean
}

export const INITIAL_STATE: State = {
    products: [] as Product[],
    loading: false
}

export const Provider:FC <PropsWithChildren>= ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
  
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
