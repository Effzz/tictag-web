import { ReactNode } from 'react';

export interface IModal {
    title?: string;
    open: boolean;
    toggle: (v: boolean) => void;
    children?: ReactNode;
}
