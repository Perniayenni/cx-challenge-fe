import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useSearch = () => {
    const router = useRouter()
    const { search = '', sort= '', price } = router.query;
    const [query, setQuery] = useState<string>(typeof search === 'string' ? search : '')


    useEffect(() => {
        if (search && typeof search === 'string') {
            setQuery(search);
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
    }
};
