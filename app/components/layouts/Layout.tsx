import React, { FC, useContext } from 'react';
import Head from 'next/head';
import layouts from 'styles/layouts.module.scss';
import Navbar from '../navbar/Navbar';
import { Context } from '@/context/product';
import { useLayout } from './useLayout';
import { CircularIndeterminate } from '../circularIndeterminate';
import { AvailableSort } from '../availableSort/availableSort';


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
            {!loading ? children : <CircularIndeterminate />}
        </div>
    )
};