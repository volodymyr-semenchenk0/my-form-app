import React from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import InputController from "components/FormControllers/InputController";
import SelectController from "components/FormControllers/SelectController";
import FormWrapper from "components/FormWrapper";
import Button from "components/Button";
import TickIcon from "components/SvgIcons/TickIcon";
import { useCountriesApi } from "hooks/useCountriesApi";
import { useProfileContext } from "contexts/ProfileContext";

interface DeliveryAddressFormValues {
  address: string;
  city: string;
  country: string;
  zipCode: string;
  optional: string;
}

const DeliveryAddressStep: React.FC = () => {
  const { formData, updateFormData } = useProfileContext();

  const form = useForm<DeliveryAddressFormValues>({
    defaultValues: {
      address: formData.address,
      city: formData.city,
      country: formData.country,
      zipCode: formData.zipCode,
      optional: formData.optional
    }
  });

  const country = useWatch({
    control: form.control,
    name: "country",
  });

  const { countryOptions, cityOptions } = useCountriesApi(country);

  const handleSave = () => {
    const deliveryData = form.getValues();

    updateFormData(deliveryData);

    console.log('Complete user profile data:', {
      ...formData,
      ...deliveryData
    });
  };

  return (
      <FormProvider {...form}>
        <FormWrapper>
          <div>
            <h3 className="text-[20px] text-[#242731] font-semibold">
              Delivery address
            </h3>
            <p className="text-xs text-[#575F6E] font-light">
              Used for shipping orders
            </p>
          </div>
          <InputController name="address" label="Address" />
          <SelectController
              name="city"
              label="City"
              placeholder="New York"
              options={cityOptions}
          />
          <div className="flex flex-row gap-8">
            <SelectController
                name="country"
                label="Country"
                options={countryOptions}
            />
            <InputController name="zipCode" label="Zip code" />
          </div>
          <InputController name="optional" label="Optional" />
        </FormWrapper>
        <Button
            variant="contained"
            className="pl-6"
            startAdornment={<TickIcon className="h-6 w-6" fill="white" />}
            onClick={handleSave}
        >
          Save
        </Button>
      </FormProvider>
  );
};

export default DeliveryAddressStep;