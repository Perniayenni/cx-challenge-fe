import { SearchResults } from "@/api/searchResults";
import { Context } from "@/context/product";
import { useContext } from "react";

export const useFetchResults = () => {
    const { dispatch } = useContext(Context);

    const fetchResults = async (query:any, sort:any) => {
        
        if (query.trim() !== '') {
            const search = new SearchResults(query, sort);
            dispatch({ type: 'isPendingFetchProducts' });
            await search.fetchResults();
            dispatch({ type: 'isReadyFetchProducts', payload: { products: search.getProducts() } });
            dispatch({ type: 'setAvailableSort', payload: { availableSorts: search.getAvailableSorts() } });
        }
    };
    
    return {fetchResults};
  };