import React, { FC } from 'react';
import Head from 'next/head';
import layouts from 'styles/layouts.module.scss';
import Navbar from '../navbar/Navbar';
import { useLayout } from './useLayout';
import { CircularIndeterminate } from '../circularIndeterminate';
import { AvailableSort } from '../availableSort/AvailableSort';
import { FilterByPrice } from '../filterByPrice/FilterByPrice';

interface Props {
    title?: string;
    children: React.ReactNode
}

export const Layout:FC<Props> = ({ title= 'meli', children }) => {
    const { loading } = useLayout();
    
    return (
        <div className={layouts.layout}>
            <Head>
                <title>{ title }</title>
            </Head>
            <Navbar />
            <AvailableSort/>
            {!loading ? 
                <div className={layouts.layout__content}>
                    <div className={layouts.layout__filters}><FilterByPrice /></div>
                    <div className={layouts.layout__children}>{children}</div>
                </div> 
                : <CircularIndeterminate />}
        </div>
    )
};