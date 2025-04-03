import { Noop } from "utils/noop";

export enum ProfileStepsEnum {
  PERSONAL_DATA,
  CONTACTS,
  DELIVERY_ADDRESS,
}

export type HandleChangeProfileStep = (step: ProfileStepsEnum) => Noop;

export type ProfileStepProps = {
  handleChangeStep: HandleChangeProfileStep;
};
