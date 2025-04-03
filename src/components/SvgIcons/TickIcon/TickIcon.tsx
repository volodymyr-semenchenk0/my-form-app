import { SvgIconProps } from "utils/types";

const TickIcon = ({ fill, className }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path
        d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"
        fill={fill || "#9A9EA5"}
      />
    </svg>
  );
};

export default TickIcon;
