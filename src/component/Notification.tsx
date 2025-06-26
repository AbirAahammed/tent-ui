import React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { AppActionType } from '../reducer/model/AppAction';
const Notification: React.FC = () => {
    const { state, dispatch } = useAppContext();


    const [open, setOpen] = React.useState(false);
    

    React.useEffect(() => {
        if (state.notification) {
            setOpen(true);
        }
    }, [state.notification]);
  
    const handleClose = (
      event: React.SyntheticEvent | Event,
      reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch({type: AppActionType.CLEAR_NOTIFICATION});
      setOpen(false);
    };
    return (
        <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
            <Alert
                severity={state.notification?.severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {state.notification?.message}
            </Alert>
        </Snackbar>
    )
}


export default Notification;