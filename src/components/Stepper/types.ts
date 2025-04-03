import { RegistrationStepsEnum } from "pages/Registration/types";
import { ProfileStepsEnum } from "pages/Profile/types";

export type Props = {
  steps: number[];
  activeStep: RegistrationStepsEnum | ProfileStepsEnum;
};
