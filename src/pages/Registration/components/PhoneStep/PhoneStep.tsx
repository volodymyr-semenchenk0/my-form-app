import LockIcon from "assets/lock.svg";
import CloseIcon from "components/SvgIcons/CloseIcon";
import FormWrapper from "components/FormWrapper";
import SelectController from "components/FormControllers/SelectController";
import InputController from "components/FormControllers/InputController";
import Button from "components/Button";
import { FC } from "react";
import {
  RegistrationFormType,
  RegistrationStepsEnum,
  StepProps,
} from "pages/Registration/types";
import { useFormContext, useWatch } from "react-hook-form";

const PhoneStep: FC<StepProps> = ({ handleChangeStep }) => {
  const { control } = useFormContext<RegistrationFormType>();
  const phoneNumber = useWatch({ control, name: "phoneNumber" });

  return (
    <>
      <div className="rounded-lg p-4 bg-[#F0F2F4]">
        <div className="flex gap-4">
          <img src={LockIcon} alt="LockIcon" />
          <p className="text-[13px] text-[#242426]">
            We take privacy issues seriously. You can be sure that your personal
            data is securely protected.
          </p>
          <CloseIcon fill="#79808F" className="text-2xl h-6 cursor-pointer" />
        </div>
      </div>
      <FormWrapper>
        <p className="text-[#242426] text-[14px]">Enter your phone number</p>
        <div className="flex flex-row gap-4">
          <SelectController
            fullWidth={false}
            name="phoneFormat"
            options={[{ label: "+1", value: "+1" }]}
          />
          <InputController name="phoneNumber" />
        </div>
      </FormWrapper>
      <Button
        disabled={(phoneNumber?.length || 0) < 8}
        onClick={handleChangeStep(RegistrationStepsEnum.CODE)}
      >
        Send code
      </Button>
    </>
  );
};

export default PhoneStep;
