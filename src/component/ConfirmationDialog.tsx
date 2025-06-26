import React from "react";
import {Button, Dialog, DialogActions, DialogContent, styled, Typography } from '@mui/material';

import { useAppContext } from '../context/AppContext';
import { AppActionType } from "../reducer/model/AppAction";


const ConfirmationDialog = () => {
    const { state, dispatch } = useAppContext();
    return (
        <Dialog
            open={state.confirmationDialog?.isOpen ?? false}
        >
            <DialogContent>
                {state.confirmationDialog?.message}
            </DialogContent>
            <DialogActions>
                <Button
                    data-testid="confirmation-dialog-yes"
                    size="small"
                    onClick={() => {
                        state.confirmationDialog?.onConfirm();
                        dispatch({ type: AppActionType.CLOSE_CONFIRMATION_DIALOG });
                    }}
                >
                    Yes
                </Button>
                <Button
                    data-testid="confirmation-dialog-no"
                    size="small"
                    onClick={() => {
                        state.confirmationDialog?.onCancel?.();
                        dispatch({ type: AppActionType.CLOSE_CONFIRMATION_DIALOG });
                    }}
                >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
}


export default ConfirmationDialog;

// <Dialog
// open={state.confirmationDialog?.isOpen ?? false}
// >
// <DialogContent>
//     {state.confirmationDialog?.message}
// </DialogContent>
// <DialogActions>
//     <Button
//         size="small"
//         onClick={() => {
//             state.confirmationDialog?.onConfirm();
//             dispatch({ type: AppActionType.CLOSE_CONFIRMATION_DIALOG });
//         }}
//     >
//         Yes
//     </Button>
//     <Button
//         size="small"
//         onClick={() => {
//             state.confirmationDialog?.onCancel?.();
//             dispatch({ type: AppActionType.CLOSE_CONFIRMATION_DIALOG });
//         }}
//     >
//         No
//     </Button>
// </DialogActions>
// </Dialog>