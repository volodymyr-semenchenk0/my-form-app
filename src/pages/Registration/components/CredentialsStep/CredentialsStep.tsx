import FormWrapper from "components/FormWrapper";
import { RegistrationFormType } from "pages/Registration/types";
import { useFormContext, useWatch } from "react-hook-form";
import TickIcon from "components/SvgIcons/TickIcon";
import InputController from "components/FormControllers/InputController";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";

const CredentialsStep = () => {
  const navigate = useNavigate();
  const { control } = useFormContext<RegistrationFormType>();

  const [phoneNumber, phoneFormat] = useWatch({
    control,
    name: ["phoneNumber", "phoneFormat"],
  });

  const handleRegister = () => {
    navigate("/profile");
  };

  return (
    <>
      <FormWrapper size="small">
        <p className="roboto text-lg text-[#242426] mb-0.5">{`${phoneFormat} ${phoneNumber}`}</p>
        <p className="text-[13px] text-[#575F6E]">
          <TickIcon className="inline-block mr-1" />
          Number confirmed
        </p>
      </FormWrapper>
      <FormWrapper>
        <InputController label="Enter your email" name="email" />
        <InputController
          label="Set a password"
          name="password"
          type="password"
        />
      </FormWrapper>
      <Button variant="contained" onClick={handleRegister}>
        Register Now
      </Button>
    </>
  );
};

export default CredentialsStep;
