import React, { FC } from 'react'
import filterPriceStyle from 'styles/filter_price.module.scss'
import { useFilterByPrice } from './useFilterByPrice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const FilterByPrice:FC = () => {
  const { filterByPrices, searching, max, setMax, min, setMin, searchPrice } =  useFilterByPrice()

  return (
    <div className={filterPriceStyle.filter_price}>
        <label>Precio</label>
        <div className={filterPriceStyle.filter_price__content_name}>
            {filterByPrices.map(price=>(
                <div key={price.id} onClick={()=>searching(price.id)} className={filterPriceStyle.filter_price__name}>{price.name} <div className={filterPriceStyle.filter_price__results}>({price.results})</div></div>
            ))}
        </div>
        <div className={filterPriceStyle.filter_price__content_inputs}>
            <div className={filterPriceStyle.filter_price__inputs}>
                <input value={min} onChange={(e:any) => setMin(e.target.value)} type="number" min="0" className={filterPriceStyle.filter_price__input} placeholder='Mínimo' name="Mínimo" />-
                <input value={max} onChange={(e:any) => setMax(e.target.value)} type="number" className={filterPriceStyle.filter_price__input} placeholder="Máximo" name="Máximo" />
            </div>
            <FontAwesomeIcon onClick={searchPrice} className={filterPriceStyle.filter_price__icon} icon={faChevronRight} />
        </div>
        
    </div>
  )
}
