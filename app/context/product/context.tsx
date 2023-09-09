import React, { createContext } from 'react';
import { ActionType } from './reducer';
import { State } from './provider';

interface ContextProps {
    state: State, 
    dispatch: React.Dispatch<ActionType>;
}


export const Context = createContext<ContextProps>({} as ContextProps)
