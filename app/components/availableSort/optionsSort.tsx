import { AvailableSort } from '@/interfaces/availableSort'
import React, { FC, useState } from 'react'
import optionsSortStyle from 'styles/options_sort.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface Props {
    onChange: (id: string) => void;
    optionsSort: AvailableSort[],
    open: boolean,
    setOpen: (open:boolean) => void
}

export const OptionsSort: FC<Props> = ({optionsSort, onChange, open, setOpen}) => {
    const optionSelected = optionsSort.find(option=>option.active === true) || ''

    return (
    <>
        <div onClick={()=>setOpen(!open)} className={`${optionsSortStyle.options_sort__initial_value}` } >
            {optionSelected && optionSelected.name} <FontAwesomeIcon className={optionsSortStyle.options_sort__icon} icon={open ?  faChevronUp : faChevronDown} />
        </div>
        {open && <div className={optionsSortStyle.options_sort}>
            {optionsSort.map(optionsSort => (
                <div key={optionsSort.id} onClick={()=> onChange(optionsSort.id) } 
                className={`${optionsSortStyle.options_sort__option} ${optionsSort.active ? optionsSortStyle.active : ''}`}>{optionsSort.name}
                </div>
            ))}
        </div> }
    </>
    )
}
