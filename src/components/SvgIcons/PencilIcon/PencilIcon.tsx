import { SvgIconProps } from "utils/types";

const PencilIcon = ({ fill, className }: SvgIconProps) => {
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
        d="M3 17.25V21H6.75L17.81 9.94003L14.06 6.19003L3 17.25ZM21.41 6.34003L17.66 2.59003L15.13 5.13003L18.88 8.88003L21.41 6.34003Z"
        fill={fill || "#007AFF"}
      />
    </svg>
  );
};

export default PencilIcon;
