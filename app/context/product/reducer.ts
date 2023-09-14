import { State } from "./provider";

export const actions = {
    isPendingFetchProducts: "isPendingFetchProducts",
    isReadyFetchProducts: "isReadyFetchProducts",
    setAvailableSort: "setAvailableSort",
    setFilterByprice: "setFilterByprice"
};

export type ActionType = 
|  { type: 'isPendingFetchProducts' }
|  { type: 'isReadyFetchProducts', payload: any }
|  { type: 'setAvailableSort', payload: any}
|  { type: 'setFilterByprice', payload: any}

export const Reducer = (state: State, action:ActionType ): State => {
    switch (action.type) {
        case 'isPendingFetchProducts':
            return {
                ...state,
                loading: true
            }
        case 'isReadyFetchProducts':
            const {
               products
            } = action.payload;
            return {
                ...state,
                loading: false,
                products
            }
        case 'setAvailableSort':
            const {
                availableSorts
            } = action.payload;
            return {
                ...state,
                availableSorts
            }
        case 'setFilterByprice':
            const {
                filterByPrices
            } = action.payload;
            return {
                ...state,
                filterByPrices
            }
        default:
            return state;
    }
}