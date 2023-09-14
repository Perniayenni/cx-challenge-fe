import { Product } from "@/interfaces/product";
import { FC, useReducer, PropsWithChildren } from 'react';
import { Context, Reducer } from "./";
import { AvailableSort } from "@/interfaces/availableSort";
import { FilterByPrice } from "@/interfaces/filterByPrice";

export interface State {
    products: Array<Product>;
    loading: boolean,
    availableSorts: Array<AvailableSort>;
    filterByPrices: Array<FilterByPrice>;
}

export const INITIAL_STATE: State = {
    products: [] as Product[],
    loading: false,
    availableSorts: [] as AvailableSort[],
    filterByPrices: [] as FilterByPrice[]
}

export const Provider:FC <PropsWithChildren>= ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
  
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
