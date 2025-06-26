import { useReducer } from "react";
import { AppAction, AppActionType } from "./model/AppAction";
import { AppState } from "./model/AppState";


const initialAppState: AppState = {
  notification: undefined,
  loading: false,
  confirmationDialog: undefined,
  drawer: undefined,
};

const reducer = (state: AppState, action: AppAction): AppState => {
  const {type, payload} = action;
  switch (type) {
    case AppActionType.SHOW_NOTIFICATION:
      return {
        ...state,
        notification:{
          message: payload.message,
          severity: payload.severity
        }
      }
    case AppActionType.CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: undefined
      }
    case AppActionType.SHOW_LOADING:
      return {
        ...state,
        loading: true
      }
    case AppActionType.HIDE_LOADING:
      return {
        ...state,
        loading: false
      }
    case AppActionType.SHOW_CONFIRMATION_DIALOG:
      return {
        ...state,
        confirmationDialog: {
          isOpen: true,
          message: payload.message,
          onConfirm: payload.onConfirm,
          onCancel: payload.onCancel
        }
      }
    case AppActionType.CLOSE_CONFIRMATION_DIALOG:
      return {
        ...state,
        confirmationDialog: undefined
      }
    case AppActionType.OPEN_DRAWER:
      const {children,actions,context, onClose, size} = payload;
      return {
        ...state,
        drawer: {
          open: true,
          children: children,
          actions: actions,
          context: context,
          onClose: onClose,
          size: size
        }
      }
    case AppActionType.CLOSE_DRAWER:
      return {
        ...state,
        drawer: undefined
      }
    default:
      return state;
  }
}


export const useAppReducer = () => {
  return useReducer(reducer, initialAppState);
}