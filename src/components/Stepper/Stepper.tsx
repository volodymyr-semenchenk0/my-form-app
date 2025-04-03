import { FC } from "react";
import { Props } from "components/Stepper/types";
import { clsx } from "clsx";

const Stepper: FC<Props> = ({ steps, activeStep }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <div key={step} className="w-auto inline-flex items-center">
          <div
            className={clsx(
              "w-3 h-3 rounded-full border border-[#B9B9C3]",
              (activeStep === step || step < activeStep) &&
                "bg-[#007AFF] border-[#007AFF]!",
            )}
          />
          {index !== steps.length - 1 && (
            <div
              className={clsx(
                "w-10 h-[1px] mx-2 bg-[#B9B9C3]",
                step < activeStep && "bg-[#007AFF]!",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
