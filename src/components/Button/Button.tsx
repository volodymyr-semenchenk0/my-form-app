import { Button as HUIButton } from "@headlessui/react";
import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
  disabled,
  className,
  endAdornment,
  startAdornment,
  variant = "outlined",
}) => {
  return (
    <HUIButton
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        className,
        "roboto font-medium w-fit max-h-12 px-6 py-3 rounded cursor-pointer text-base text-[#242731]",
        variant === "outlined" && "border-1 border-[#BBBFC1]",
        variant === "contained" &&
          "px-8 bg-[#007AFF] text-white border-0! popins",
        variant === "text" && "border-0 pl-0 pr-4 py-1",
        disabled && "opacity-50 cursor-default!",
      )}
    >
      <div className="flex flex-row gap-2">
        {startAdornment && startAdornment}
        {children}
        {endAdornment && endAdornment}
      </div>
    </HUIButton>
  );
};

export default Button;
