import { Checkbox } from "@headlessui/react";
import TickIcon from "components/SvgIcons/TickIcon";
import { useController } from "react-hook-form";
import { FC } from "react";
import { CheckboxControllerProps } from "components/FormControllers/CheckboxController/types";

const CheckboxController: FC<CheckboxControllerProps> = ({ name }) => {
  const { field } = useController({ name });

  return (
    <Checkbox
      checked={field.value}
      onChange={field.onChange}
      className="group flex items-center justify-center size-6 rounded cursor-pointer border border-[#242426] data-[checked]:bg-[#007AFF] data-[checked]:border-[#007AFF]"
    >
      <TickIcon
        fill="#fff"
        className="size-6 hidden  fill-black group-data-[checked]:block"
      />
    </Checkbox>
  );
};

export default CheckboxController;
