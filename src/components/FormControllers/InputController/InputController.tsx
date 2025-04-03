import { Field, Input, Label } from "@headlessui/react";
import { useController } from "react-hook-form";
import { FC, useState } from "react";
import { InputControllerProps } from "./types";
import EyeIcon from "components/SvgIcons/EyeIcon";
import TickIcon from "components/SvgIcons/TickIcon";
import { clsx } from "clsx";

const InputController: FC<InputControllerProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  StartAdornment,
}) => {
  const isPassword = type === "password";
  const { field } = useController({ name });
  const [isPassVisible, setIsPassVisible] = useState(false);

  const handleTogglePassVisible = () => {
    setIsPassVisible((prev) => !prev);
  };

  return (
    <Field className="flex-1">
      {label && (
        <Label className="text-[14px] text-[#242426] text">{label}</Label>
      )}
      <div className="relative">
        {StartAdornment && (
          <StartAdornment className="absolute bottom-2.75 left-0" />
        )}
        <Input
          type={isPassword && isPassVisible ? "text" : type}
          name={name}
          ref={field.ref}
          value={field.value || ""}
          placeholder={placeholder}
          onChange={field.onChange}
          className={clsx(
            "w-full focus-visible:outline-0 roboto text-lg py-2 max-h-11 px-4 border-b border-[#BBBFC1]",
            StartAdornment && "pl-8",
          )}
        />
        {isPassword && (
          <EyeIcon
            onClick={handleTogglePassVisible}
            className="absolute right-0 bottom-2.75 cursor-pointer"
            {...(isPassVisible && { fill: "#242731" })}
          />
        )}
      </div>
      {isPassword && field?.value?.length >= 7 && (
        <p className="mt-2 text-xs text-[#34C759]">
          <TickIcon className="inline-block mr-1" fill="#34C759" />
          Good password
        </p>
      )}
    </Field>
  );
};

export default InputController;
