import { Context } from "@/context/product";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const useAvailableSort = () => {
    const {state} = useContext(Context);
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const { search , price } = router.query;
    

    const searching =  (idSort: string) => {

        if(typeof search === 'string' && typeof idSort === 'string'){
            if(price && typeof price === 'string' ){
                router.push(`/items?search=${encodeURIComponent(search)}&sort=${encodeURIComponent(idSort)}&price=${encodeURIComponent(price)}`);
            }else {
                router.push(`/items?search=${encodeURIComponent(search)}&sort=${encodeURIComponent(idSort)}`);
            }
            
        }
        setOpen(false)
    }


    return {
        availableSorts: state.availableSorts,
        open,
        setOpen,
        searching
    }
};
