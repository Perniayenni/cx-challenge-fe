import React from 'react'
import { useItems } from '@/hooks/useItems'
import { Item } from '@/components/item/item'
import { Layout } from '@/components/layouts'
import { Paper } from '@mui/material'

import itemsStyle from 'styles/items.module.scss'
import { useFetchResults } from '@/hooks/useFetchResults'
        
const ItemsPages = () => {
  const {products:items} = useItems()
  useFetchResults()
  
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