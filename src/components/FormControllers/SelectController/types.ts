import { SelectItem } from "utils/types";

export type SelectControllerProps = {
  name: string;
  label?: string;
  options: SelectItem[];
  fullWidth?: boolean;
  listBoxButtonClasses?: string;
  listBoxOptionsClasses?: string;
  placeholder?: string;
};
