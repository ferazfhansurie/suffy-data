import React from "react";
import { SpinnerProps } from "../../atoms/spinner";
export type ButtonProps = {
    variant: "primary" | "secondary" | "ghost" | "danger" | "nuclear";
    size?: "small" | "medium" | "large";
    loading?: boolean;
    spanClassName?: string;
    spinnerConfig?: SpinnerProps;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: React.ForwardRefExoticComponent<{
    variant: "primary" | "secondary" | "ghost" | "danger" | "nuclear";
    size?: "small" | "medium" | "large";
    loading?: boolean;
    spanClassName?: string;
    spinnerConfig?: SpinnerProps;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
