import { Backdrop, CircularProgress, LinearProgress } from '@mui/material';
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Loading : React.FC = () => {
    const {state : {loading}} = useAppContext();
    return (
    <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={!!loading}
      >
        
      <LinearProgress sx={(theme) => ({color: 'primary', width: '80%'})} />
      </Backdrop>
    )
}

export default Loading;