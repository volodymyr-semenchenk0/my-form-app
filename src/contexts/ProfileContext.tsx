import React, {createContext, ReactNode, useContext, useState} from "react";

export interface ProfileFormData {
    agree: boolean;
    firstName: string;
    secondName: string;
    dateOfBirth: string;
    personalCountry: string;
    personalCity: string;

    email: string;
    phone: string;
    firstSocial: string;
    firstProfile: string;
    secondSocial: string;
    secondProfile: string;

    address: string;
    city: string;
    country: string;
    zipCode: string;
    optional: string;
}

interface ProfileContextType {
    formData: ProfileFormData;
    updateFormData: (newData: Partial<ProfileFormData>) => void;
}

const initialFormState: ProfileFormData = {
    agree: false,
    firstName: "",
    secondName: "",
    dateOfBirth: "",
    personalCountry: "",
    personalCity: "",

    email: "",
    phone: "",
    firstSocial: "skype",
    firstProfile: "",
    secondSocial: "facebook",
    secondProfile: "",

    address: "",
    city: "",
    country: "",
    zipCode: "",
    optional: ""
};

const ProfileContext = createContext<ProfileContextType | null>(null);

interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({children}) => {
    const [formData, setFormData] = useState<ProfileFormData>(initialFormState);

    const updateFormData = (newData: Partial<ProfileFormData>) => {
        setFormData(prevData => ({
            ...prevData,
            ...newData
        }));
    };

    return (
        <ProfileContext.Provider value={{formData, updateFormData}}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfileContext = (): ProfileContextType => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error("useProfileContext must be used within ProfileProvider");
    }
    return context;
};