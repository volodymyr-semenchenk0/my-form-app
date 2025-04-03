import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  variant?: "outlined" | "text" | "contained";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
};
