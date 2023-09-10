import React, { FC } from 'react';
import {CircularProgress} from '@mui/material';
import circularStyle from 'styles/circular_indeterminate.module.scss';

export const CircularIndeterminate:FC = () => {
  return (
    <div className={circularStyle.circular_indeterminate}>
      <CircularProgress />
    </div>
  );
};
