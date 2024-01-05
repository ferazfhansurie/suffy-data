import React from "react";
export type ActionType = {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: "normal" | "danger";
    disabled?: boolean;
    icon?: React.ReactNode;
};
type ActionablesProps = {
    actions?: ActionType[];
    customTrigger?: React.ReactNode;
    forceDropdown?: boolean;
};
declare const Actionables: React.FC<ActionablesProps>;
export default Actionables;
