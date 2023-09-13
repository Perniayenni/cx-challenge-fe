import { SearchResults } from "@/api/searchResults";
import { Context } from "@/context/product";
import { useFetchResults } from "@/hooks/useFetchResults";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const useAvailableSort = () => {
    const {state} = useContext(Context);
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const { search = '', sort = '' } = router.query;
    const {fetchResults} = useFetchResults();

    useEffect(() => {
        console.log('estoy aqui')
        if(typeof search === 'string' && typeof sort === 'string'){
            fetchResults(search, sort)
            setOpen(false)
        }
    }, [sort]);

    const searching = (idSort:string) => {
        if(typeof search === 'string' && typeof idSort === 'string'){
            router.push(`/items?search=${encodeURIComponent(search)}&sort=${encodeURIComponent(idSort)}`);
        }
    }

    return {
        availableSorts: state.availableSorts,
        open,
        setOpen,
        searching
    };
};