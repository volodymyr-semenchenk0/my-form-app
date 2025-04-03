import { FC } from "react";
import { DescriptionProps } from "components/Description/types";

const Description: FC<DescriptionProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="mb-4 font-bold text-3xl text-[#242731]">{title}</h2>
      <p className="roboto font-light text-base text-[#575F6E] max-w-105">
        {subtitle}
      </p>
    </div>
  );
};

export default Description;
