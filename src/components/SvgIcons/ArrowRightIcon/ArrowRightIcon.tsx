import { SvgIconProps } from "utils/types";

const ArrowRightIcon = ({ fill, className }: SvgIconProps) => {
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
        d="M14.0096 11H5.99963V13H14.0096V16L17.9996 12L14.0096 8V11Z"
        fill={fill || "#242731"}
      />
    </svg>
  );
};

export default ArrowRightIcon;
