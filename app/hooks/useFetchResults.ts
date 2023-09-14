import { SearchResults } from "@/api/searchResults";
import { Context } from "@/context/product";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export const useFetchResults = () => {
    const { dispatch } = useContext(Context);
    const router = useRouter()
    const { search, sort, price } = router.query;

    useEffect(() => {
        if(search ){
            fetchResults()
        }
      
    }, [router]);

    const fetchResults = async () => {
        const searchToSend = typeof search === 'string' ? search : ''
        const sortToSend = typeof sort === 'string' ? sort : ''
        const priceToSend = typeof price === 'string' ? price : ''
        
        const searchResult = new SearchResults(searchToSend, sortToSend, priceToSend);
        dispatch({ type: 'isPendingFetchProducts' });
        await searchResult.fetchResults();
        dispatch({ type: 'isReadyFetchProducts', payload: { products: searchResult.getProducts() } });
        dispatch({ type: 'setAvailableSort', payload: { availableSorts: searchResult.getAvailableSorts() } });
        dispatch({ type: 'setFilterByprice', payload: { filterByPrices: searchResult.getFilterByPrice()}})
    };
    
  };