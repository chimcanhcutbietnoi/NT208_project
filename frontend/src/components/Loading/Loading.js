import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import classes from './loading.module.css';

export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return;

  return (
    <div className={classes.container}>
      <div className={classes.items}>
        {/* can't change the src of img */}
        <img src="/loading.svg" alt="Loading!" /> 
        <h1>Chờ xíu...</h1>
      </div>
    </div>
  );
}
