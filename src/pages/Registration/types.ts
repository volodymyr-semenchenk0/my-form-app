import { Noop } from "utils/noop";

export enum RegistrationStepsEnum {
  PHONE,
  CODE,
  CREDENTIALS,
}

export type HandleChangeRegistrationStep = (
  step: RegistrationStepsEnum,
) => Noop;

export type RegistrationFormType = {
  phoneFormat: string;
  phoneNumber?: string;
};

export type StepProps = {
  handleChangeStep: HandleChangeRegistrationStep;
};
