import { FC, PropsWithChildren } from "react";
import { FormWrapperProps } from "./types";
import { clsx } from "clsx";

const FormWrapper: FC<PropsWithChildren<FormWrapperProps>> = ({
  children,
  className,
  size = "medium",
}) => {
  return (
    <div
      className={clsx(
        "relative border rounded-lg border-[#E2E4E5]",
        size === "small" && "p-4",
        size === "medium" && "flex flex-col gap-8 p-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default FormWrapper;
