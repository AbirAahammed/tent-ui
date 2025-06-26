export type ConfirmationDialog = {
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}