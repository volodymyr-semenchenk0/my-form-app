import { SvgIconProps } from "utils/types";

const PhoneIcon = ({ fill, className }: SvgIconProps) => {
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
        d="M21 15.46L15.73 14.85L13.21 17.37C10.38 15.93 8.06002 13.62 6.62002 10.78L9.15002 8.25L8.54002 3H3.03002C2.45002 13.18 10.82 21.55 21 20.97V15.46Z"
        fill={fill || "#D5D5D5"}
      />
    </svg>
  );
};

export default PhoneIcon;
