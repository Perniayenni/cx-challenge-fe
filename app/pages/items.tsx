import React from 'react'

import { Item } from '@/components/item/item';
import { Layout } from '@/components/layouts'
import { Product } from '@/interfaces/product'
import { Paper } from '@mui/material'

import itemsStyle from 'styles/items.module.scss';
import { useItems } from '@/hooks/useItems';


const ItemsPages = () => {
  const {products:items} = useItems()
  
  return (
    <Layout>
        <div className={itemsStyle.items}>
            <Paper elevation={1}>
              {items.map((item) => (
                <Item key={item.id} item={item}/>
              ))}
            </Paper>
        </div>  
    </Layout>  
  )
}

export default ItemsPages