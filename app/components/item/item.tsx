import { Product } from '@/interfaces/product'
import React, { FC } from 'react'
import itemStyle from 'styles/item.module.scss';

interface Props {
    item: Product
}

export const Item:FC<Props> = ({item}) => {
  return (
        <div className={itemStyle.item__item}>
            <div
                className={`${itemStyle.item__content_picture} pointer`}
            >
                <img
                className={itemStyle.item__picture}
                alt='imagen'
                 src={item.picture}
                />
            </div>

            <div className={itemStyle.item__content_description}>
                <label className={itemStyle.item__price}>
                <span className={itemStyle.item_symbol}>$</span>
                 {item.price.amount}
                </label>
                <p
                className={`${itemStyle.item__title} pointer`}
                >
                    {item.title}
                </p>
                <label
                className={`${itemStyle.item__condition} pointer`}
                >
                {item.condition === 'new' ? 'Nuevo' : 'Usado'}
                </label>
            </div>
            <div className={itemStyle.item__content_address}>
                <label>{item.address.state_name}</label>
            </div>
        </div>
  )
}
