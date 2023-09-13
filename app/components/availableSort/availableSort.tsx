import React, { FC } from 'react'
import { OptionsSort } from './optionsSort'
import availableSortStyle from 'styles/available_sort.module.scss';
import { useAvailableSort } from './useAvailableSort';

export const AvailableSort: FC = () => {
  const { availableSorts, open, setOpen, searching } = useAvailableSort()

  
  if (availableSorts.length == 0) return (<></>)

  return (
      <div className={availableSortStyle.available_sort}>
          <div className={availableSortStyle.available_sort__label}><label>Ordenar por 
            </label> <OptionsSort open={open} setOpen={setOpen} onChange={searching} optionsSort={availableSorts}/></div>
      </div>
  )
}
