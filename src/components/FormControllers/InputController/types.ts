import { HTMLInputTypeAttribute } from "react";
import { SvgIconProps } from "utils/types";

export type InputControllerProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  StartAdornment?: ({ fill, onClick, className }: SvgIconProps) => JSX.Element;
};
