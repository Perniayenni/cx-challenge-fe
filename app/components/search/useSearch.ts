import { useEffect, useRef, useState } from "react";
import { useFetchResults } from "@/hooks/useFetchResults";
import { useRouter } from "next/router";

export const useSearch = () => {
    const router = useRouter()
    const { search = '', sort= '' } = router.query;
    const [query, setQuery] = useState<string>(typeof search === 'string' ? search : '')
    const {fetchResults} = useFetchResults();

    useEffect(() => {
        if (search && typeof search === 'string') {
            setQuery(search);
            fetchResults(search, sort)
        }
    }, [search]);

    const searching = (fromUrl:boolean=true) => {
        if(sort && typeof sort === 'string' && fromUrl){
            router.push(`/items?search=${encodeURIComponent(query)}&sort=${encodeURIComponent(sort)}`);
        }else {
            router.push(`/items?search=${encodeURIComponent(query)}`);
        }
    }

    const enterPressed = (e:any) =>{
        var code = e.keyCode || e.which;
        if (code === 13) {
        searching(false);
        }
    }

    return {
        query,
        setQuery,
        searching,
        enterPressed
    };
};
