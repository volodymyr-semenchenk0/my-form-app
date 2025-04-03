import React from "react";
import { ProfileStepsEnum } from "pages/Profile/types";
import FormWrapper from "components/FormWrapper";
import { FormProvider, useForm } from "react-hook-form";
import InputController from "components/FormControllers/InputController";
import EmailIcon from "components/SvgIcons/EmailIcon";
import PhoneIcon from "components/SvgIcons/PhoneIcon";
import SelectController from "components/FormControllers/SelectController";
import { socialSelectItems } from "./utils";
import Button from "components/Button";
import PlusIcon from "components/SvgIcons/PlusIcon";
import ArrowRightIcon from "components/SvgIcons/ArrowRightIcon";
import { useProfileContext } from "contexts/ProfileContext";
import { HandleChangeProfileStep } from "pages/Profile/Profile";

interface ContactsStepProps {
  handleChangeStep: HandleChangeProfileStep;
}

interface ContactsFormValues {
  email: string;
  phone: string;
  firstSocial: string;
  firstProfile: string;
  secondSocial: string;
  secondProfile: string;
}

const ContactsStep: React.FC<ContactsStepProps> = ({ handleChangeStep }) => {
  const { formData, updateFormData } = useProfileContext();

  const form = useForm<ContactsFormValues>({
    defaultValues: {
      email: formData.email,
      phone: formData.phone,
      firstSocial: formData.firstSocial,
      firstProfile: formData.firstProfile,
      secondSocial: formData.secondSocial,
      secondProfile: formData.secondProfile
    }
  });

  const goToNextStep = () => {
    const stepData = form.getValues();
    updateFormData(stepData);

    handleChangeStep(ProfileStepsEnum.DELIVERY_ADDRESS)();
  };

  return (
      <FormProvider {...form}>
        <FormWrapper>
          <div>
            <h3 className="text-[20px] text-[#242731] font-semibold">Contacts</h3>
            <p className="text-xs text-[#575F6E] font-light">
              These contacts are used to inform about orders
            </p>
          </div>
          <InputController StartAdornment={EmailIcon} name="email" />
          <InputController StartAdornment={PhoneIcon} name="phone" />
          <div>
            <h3 className="text-[20px] text-[#242731] font-semibold">
              Social network
            </h3>
            <p className="text-xs text-[#575F6E] font-light">
              Indicate the desired communication method
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <SelectController name="firstSocial" options={socialSelectItems} />
            <InputController name="firstProfile" placeholder="@profile" />
          </div>
          <div className="flex flex-row gap-2">
            <SelectController name="secondSocial" options={socialSelectItems} />
            <InputController name="secondProfile" placeholder="@profile" />
          </div>
          <Button
              variant="text"
              startAdornment={<PlusIcon />}
              className="text-[#007AFF]!"
          >
            Add more
          </Button>
        </FormWrapper>
        <Button
            endAdornment={<ArrowRightIcon />}
            onClick={goToNextStep}
        >
          Go Next
        </Button>
      </FormProvider>
  );
};

export default ContactsStep;