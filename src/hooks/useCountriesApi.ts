import { useEffect, useMemo, useState } from "react";
import { CountryType, SelectItem } from "utils/types";

export const useCountriesApi = (selectedCountry?: string) => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries",
      );

      const data = await response.json();

      setCountries(data.data);
    })();
  }, []);

  const countryOptions = useMemo<SelectItem[]>(() => {
    return countries.map(({ iso3, country }) => ({
      label: country,
      value: iso3,
    }));
  }, [countries]);

  const cityOptions = useMemo<SelectItem[]>(() => {
    return (
      countries
        .find(({ iso3 }) => iso3 === selectedCountry)
        ?.cities.splice(0, 500)
        .map((city) => ({
          label: city,
          value: city,
        })) || []
    );
  }, [countries, selectedCountry]);

  return {
    countryOptions,
    cityOptions,
  };
};
