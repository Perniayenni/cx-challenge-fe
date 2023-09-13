import { State } from "./provider";

export const actions = {
    isPendingFetchProducts: "isPendingFetchProducts",
    isReadyFetchProducts: "isReadyFetchProducts"
};

export type ActionType = 
|  { type: 'isPendingFetchProducts' }
|  { type: 'isReadyFetchProducts', payload: any }
|  { type: 'setAvailableSort', payload: any}

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
        default:
            return state;
    }
}