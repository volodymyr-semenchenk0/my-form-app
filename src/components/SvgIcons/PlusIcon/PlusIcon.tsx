import { SvgIconProps } from "utils/types";

const PlusIcon = ({ fill, className }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
        fill={fill || "#007AFF"}
      />
    </svg>
  );
};

export default PlusIcon;
