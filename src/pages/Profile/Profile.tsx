import React, { useState } from "react";
import Stepper from "components/Stepper";
import Description from "components/Description";
import { ProfileStepsEnum } from "pages/Profile/types";
import { profileSteps } from "pages/Profile/utils";
import PersonalDataStep from "./components/PersonalDataStep";
import ContactStep from "./components/ContactsStep";
import DeliveryAddressStep from "./components/DeliveryAddressStep";
import { ProfileProvider } from "contexts/ProfileContext";

export type HandleChangeProfileStep = (step: ProfileStepsEnum) => () => void;

const Profile: React.FC = () => {
  const [step, setStep] = useState<ProfileStepsEnum>(
    ProfileStepsEnum.PERSONAL_DATA,
  );

  const handleChangeStep: HandleChangeProfileStep = (nextStep) => () =>
    setStep(nextStep);

  return (
    <ProfileProvider>
      <div className="flex flex-col justify-center max-w-[456px] mx-auto mb-24 pt-14">
        <Stepper steps={profileSteps} activeStep={step} />
        <div className="mt-20 flex flex-col gap-8">
          <Description
            title="Profile info"
            subtitle="Fill in the data for profile. It will take a couple of minutes. You only need a passport"
          />
          {step === ProfileStepsEnum.PERSONAL_DATA && (
            <PersonalDataStep handleChangeStep={handleChangeStep} />
          )}
          {step === ProfileStepsEnum.CONTACTS && (
            <ContactStep handleChangeStep={handleChangeStep} />
          )}
          {step === ProfileStepsEnum.DELIVERY_ADDRESS && (
            <DeliveryAddressStep />
          )}
        </div>
      </div>
    </ProfileProvider>
  );
};

export default Profile;
