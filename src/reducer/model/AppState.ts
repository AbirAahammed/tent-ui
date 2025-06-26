import { Notification } from './Notification';
import { ConfirmationDialog } from './ConfirmationDialog';
import { AppDrawer } from './AppDrawer';
export type AppState = {

    notification? : Notification;
    loading?: boolean;
    confirmationDialog?: ConfirmationDialog;
    drawer?: AppDrawer
}