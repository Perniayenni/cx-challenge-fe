import { SearchResults } from "@/api/searchResults";
import { Context } from "@/context/product";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

export const useSearch = () => {
    const {dispatch} = useContext(Context);
    const newQuery = useRef('')
    const router = useRouter()
    const { search = '' } = router.query;
    const [query, setQuery] = useState<string>(typeof search === 'string' ? search : '')

    useEffect(() => {
        if (search && typeof search === 'string') {
            setQuery(search);
            newQuery.current = search
            searcResult()
        }
    }, [search]);

    const searching = () => {
      router.push(`/items?search=${encodeURIComponent(query)}`);
    }

    const searcResult = () => {
        const queryTosend = newQuery.current == query ? query : newQuery.current
        if (queryTosend.trim() !== '') {
            const search = new SearchResults(queryTosend);
            dispatch({ type: 'isPendingFetchProducts' })
            search.fetchResults().then(() => {
                dispatch({ type: 'isReadyFetchProducts', payload: { products: search.getResults() }})
            });
           
        }
    }

    const enterPressed = (e:any) =>{
        var code = e.keyCode || e.which;
        if (code === 13) {
        searching();
        }
    }

    return {
        query,
        setQuery,
        searching,
        enterPressed
    };
};
