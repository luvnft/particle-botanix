import { type CSSProperties, type ReactNode } from 'react';
interface ModalProp {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    isDismissable?: boolean;
    contentStyle?: CSSProperties | undefined;
    contentClassName?: string;
}
declare const Modal: ({ open, onClose, children, isDismissable, contentStyle, contentClassName }: ModalProp) => import("react/jsx-runtime").JSX.Element;
export default Modal;
