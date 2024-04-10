import { type CSSProperties } from 'react';
export interface CopyTextProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    value?: string;
    className?: string;
    style?: CSSProperties | undefined;
}
export default function CopyText({ children, value, className, style }: CopyTextProps): import("react/jsx-runtime").JSX.Element;
