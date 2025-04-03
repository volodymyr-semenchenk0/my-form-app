import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FC, useMemo, useRef, useState } from "react";
import ChevronDownIcon from "components/SvgIcons/ChevronDownIcon";
import { SelectControllerProps } from "components/FormControllers/SelectController/types";
import { useController } from "react-hook-form";
import { clsx } from "clsx";

const SelectController: FC<SelectControllerProps> = ({
  name,
  label,
  options,
  fullWidth = true,
  placeholder,
  listBoxButtonClasses,
}) => {
  const { field } = useController({ name });
  const [_, setKey] = useState(Math.random());
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const onButtonClick = () => {
    setKey(Math.random());
  };

  const selectedOption = useMemo(
    () => options.find(({ value }) => value === field.value),
    [field.value],
  );

  return (
    <Field className={clsx(fullWidth && "flex-1")}>
      {label && <Label className="text-[14px] text-[#242426]">{label}</Label>}
      <Listbox
        as="div"
        name={name}
        ref={field.ref}
        value={field.value}
        onChange={field.onChange}
      >
        <ListboxButton
          ref={buttonRef}
          onClick={onButtonClick}
          className={clsx(
            "flex justify-between min-h-11 min-w-20 items-center roboto text-lg py-2 border-b border-[#BBBFC1] cursor-pointer",
            fullWidth && "w-full",
            !selectedOption?.icon && "pl-4",
            listBoxButtonClasses,
          )}
        >
          {selectedOption?.icon && <selectedOption.icon className="mr-4" />}
          {placeholder && !selectedOption?.label ? (
            <p className="roboto text-lg text-[#9A9EA5]">{placeholder}</p>
          ) : (
            selectedOption?.label
          )}
          <ChevronDownIcon aria-hidden="true" className="ml-auto size-3" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="bg-white border min-w-20 max-h-20 my-2"
          style={{ width: buttonRef.current?.clientWidth }}
        >
          {options.map(({ label, icon: Icon, value }) => (
            <ListboxOption
              key={value}
              value={value}
              className="flex flex-row p-2 data-[focus]:bg-blue-100 cursor-pointer"
            >
              {Icon && <Icon className="mr-4" />}
              {label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
};

export default SelectController;
