import { Context } from "@/context/product";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const useFilterByPrice = () => {
    const {state} = useContext(Context);
    const router = useRouter()
    const { search, sort, price } = router.query;
    const [max, setMax] = useState()
    const [min, setMin] = useState()

    const searching = (idPrice:string) => {
        if(typeof search === 'string' && typeof idPrice === 'string'){
            if(sort && typeof sort === 'string' ){
                router.push(`/items?search=${encodeURIComponent(search)}&sort=${encodeURIComponent(sort)}&price=${encodeURIComponent(idPrice)}`);
            }else {
                router.push(`/items?search=${encodeURIComponent(search)}&price=${encodeURIComponent(idPrice)}`);
            }
            
        }
    }

    const searchPrice = () => {
        if(min && max){
           const newValue = `${min}-${max}`
           searching(newValue)
        }
     }
    
    return {
        filterByPrices: state.filterByPrices,
        searching,
        max,
        min,
        setMin,
        setMax,
        searchPrice
    };
};