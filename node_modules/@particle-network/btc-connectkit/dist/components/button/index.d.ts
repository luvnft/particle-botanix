import { type CSSProperties, type ReactNode } from 'react';
declare const Button: ({ children, isLoading, isDisabled, onClick, className, style, }: {
    children: ReactNode;
    isLoading?: boolean | undefined;
    isDisabled?: boolean | undefined;
    onClick?: (() => void) | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default Button;
