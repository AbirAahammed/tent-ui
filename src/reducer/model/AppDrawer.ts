import React from "react";

export type AppDrawer = {
    children?: React.ReactNode;
    actions?: React.ReactNode[];
    context? : any;
    open: boolean;
    onClose: () => void;
    size?: 'sm' | 'md' | 'lg';
}

